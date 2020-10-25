require 'net/http'
require 'uri'
require 'digest/md5'
require 'json'

class AccessibilityProcessor
  include Singleton
  BASE_URI = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/"
  ADA_OVERRIDES = ENV['ADA_OVERRIDES']&.split(',') || []

  attr_accessor :list, :statuses, :ada_stations, :elevator_map, :outages

  def initialize
    perform
  end

  def perform
    retrieve_list
    retrieve_statuses

    process_list
    process_statuses
  end

  def self.accessibility_info(force_refresh: false)
    return Rails.cache.read("accessibility-info") if !force_refresh && Rails.cache.read("accessibility-info")

    processor = self.instance
    processor.perform
    outages = processor.outages.dup
    outages.default_proc = nil

    data = {
      accessible_stations: {
        north: (processor.ada_stations.to_a.map{ |s| "#{s}N"} - ADA_OVERRIDES).sort,
        south: (processor.ada_stations.to_a.map{ |s| "#{s}S"} - ADA_OVERRIDES).sort,
      },
      outages: outages,
    }

    Rails.cache.write("accessibility-info", data, expires_in: 1.day)

    data
  end

  private

  def retrieve_list
    self.list = Rails.cache.fetch("elevator-list", expires_in: 10.minutes) do
      puts "Retrieving elevator list"

      uri = URI.parse("#{BASE_URI}nyct%2Fnyct_ene_equipments.json")
      Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
        request = Net::HTTP::Get.new uri
        request["x-api-key"] = ENV["MTA_KEY"]

        response = http.request request
        JSON.parse(response.body).select { |h| h['equipmenttype'] == 'EL' && h['ADA'] == 'Y' }
      end
    end
  end

  def retrieve_statuses
    self.statuses = Rails.cache.fetch("elevator-statuses", expires_in: 10.minutes) do
      puts "Retrieving elevator statuses"

      uri = URI.parse("#{BASE_URI}nyct%2Fnyct_ene.json")
      Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
        request = Net::HTTP::Get.new uri
        request["x-api-key"] = ENV["MTA_KEY"]

        response = http.request request
        JSON.parse(response.body).select{ |s| s['equipmenttype'] == 'EL' && s['ADA'] == 'Y' }
      end
    end
  end

  def process_list
    self.ada_stations = Set.new
    self.elevator_map = {}

    self.list.each do |elevator|
      stations = elevator['elevatorsgtfsstopid'].split('/')
      stations.each do |s|
        ada_stations << s
      end
      elevator_map[elevator['equipmentno']] = stations
    end
  end

  def process_statuses
    self.outages = Hash.new { |h, k| h[k] = [] }
    self.statuses.each do |status|
      elevator_map[status['equipment']]&.flatten&.each do |station|
        outages[station] << status['serving']
      end
    end
  end
end