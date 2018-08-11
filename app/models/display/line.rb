module Display
  class Line
    attr_accessor :line, :stop_headways

    delegate :name, :boroughs, to: :line

    def initialize(line)
      @line = line
      @stop_headways = Set.new
    end

    def add_stop_headway(stop_headway)
      stop_headways << stop_headway
    end

    def max_difference_headway
      @max_difference_headway ||= stop_headways.select { |headway|
        headway.difference.present?
      }.max_by { |headway|
        headway.difference
      }
    end

    def status
      if max_difference_headway.nil?
        "No Service"
      elsif max_difference_headway.difference > 2
        puts "Headway discreprency at #{max_difference_headway.stop.stop_name} (#{max_difference_headway.stop.internal_id}). "\
        "#{max_difference_headway.actual_times.values.flatten.sort.map { |t| t.strftime("%H:%M") }}. "\
        "Expected: #{max_difference_headway.scheduled_headway}, actual: #{max_difference_headway.actual_headway}"
        "Not Good - expected headway: #{max_difference_headway.scheduled_headway.round(1)} mins, "\
        "actual: #{max_difference_headway.actual_headway.round(1)} mins"
      else
        "Good Service"
      end
    end

    def routes
      stop_headways.map(&:routes).flatten.uniq.sort.map { |route| Display::Route.new(::Route.find_by(internal_id: route)) }
    end
  end
end