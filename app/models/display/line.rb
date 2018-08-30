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

    def min_actual_headway
      stop_headways.map { |s| s.min_actual_headway }.compact.min
    end

    def max_actual_headway
      stop_headways.map { |s| s.max_actual_headway }.compact.max
    end

    def min_scheduled_headway
      stop_headways.map { |s| s.min_scheduled_headway }.compact.min
    end

    def max_scheduled_headway
      stop_headways.map { |s| s.max_scheduled_headway }.compact.max
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
        "#{max_difference_headway.actual_times.values.flatten.sort.map { |t| t.strftime("%H:%M") }}. "
        "Not Good"
      else
        "Good Service"
      end
    end

    def routes
      stop_headways.map(&:routes).flatten.uniq.sort.map { |route| Display::Route.new(::Route.find_by(internal_id: route)) }
    end
  end
end