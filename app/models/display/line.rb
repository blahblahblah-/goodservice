module Display
  class Line
    attr_accessor :line, :directions

    delegate :name, :boroughs, :id, to: :line

    def initialize(line, stop_times, timestamp, stops, routes_data)
      @line = line
      @directions = {
        1 => line.line_directions.select { |ld| ld.direction == 1 }.sort_by { |ld| ld.type }.map { |ld|
          Display::LineDirection.new(ld, stop_times, timestamp, stops, routes_data)
        },
        3 => line.line_directions.select { |ld| ld.direction == 3}.sort_by { |ld| ld.type }.map { |ld|
          Display::LineDirection.new(ld, stop_times, timestamp, stops, routes_data)
        },
      }
    end

    def status
      if delay >= 5
        "Delay"
      elsif directions.all? {|_, d| d.none?(&:max_actual_headway) }
        "No Service"
      elsif service_change?
        "Service Change"
      elsif max_headway_discrepancy.nil?
        if directions.any? {|_, d| d.any?(&:max_actual_headway) }
          "Good Service"
        elsif directions.any? {|_, d| d.any?(&:max_scheduled_headway) }
          "No Service"
        else
          "Not Scheduled"
        end
      elsif max_headway_discrepancy > 2 || (max_travel_time >= 0.25 && max_travel_time_discrepancy >= 2)
        "Not Good"
      else
        "Good Service"
      end
    end

    def destinations
      Hash[directions.map do |k, v|
        [k, v.map(&:destinations).flatten.uniq.sort]
      end]
    end

    def routes
      directions.map { |_, v| v.map(&:routes) }.flatten.uniq { |rd| rd.name }.sort
    end

    def service_change?
      directions.any? { |_, array|
        array.any? { |ld|
          ld.max_scheduled_headway && !ld.headway_discrepancy
        }
      }
    end

    def max_travel_time
      @max_travel_time ||= directions.map { |_, array|
        array.map { |ld|
          ld.travel_time
        }
      }.flatten.reject { |travel_time|
        travel_time.nil?
      }.max || 0
    end

    def max_travel_time_discrepancy
      @max_travel_time_discrepancy ||= directions.map { |_, array|
        array.map { |ld|
          ld.travel_time_discrepancy
        }
      }.flatten.reject { |travel_time_discrepancy|
        travel_time_discrepancy.nil?
      }.max
    end

    def max_headway_discrepancy
      @max_headway_discrepancy ||= directions.map { |_, array|
        array.map { |ld|
          ld.headway_discrepancy
        }
      }.flatten.reject { |headway_discrepancy|
        headway_discrepancy.nil?
      }.max
    end

    private

    def delay
      directions.map { |_, array|
        array.map { |ld|
          ld.delay
        }.max
      }.max || 0
    end
  end
end