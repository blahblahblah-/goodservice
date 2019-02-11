module Display
  class Line
    attr_accessor :line, :directions

    delegate :name, :boroughs, :id, to: :line

    def initialize(line, stop_times, timestamp, stops)
      @line = line
      @directions = {
        1 => line.line_directions.select { |ld| ld.direction == 1 }.sort_by { |ld| ld.type }.map { |ld|
          Display::LineDirection.new(ld, stop_times, timestamp, stops)
        },
        3 => line.line_directions.select { |ld| ld.direction == 3}.sort_by { |ld| ld.type }.map { |ld|
          Display::LineDirection.new(ld, stop_times, timestamp, stops)
        },
      }
    end

    def status
      if delay >= 5
        "Delay"
      elsif max_headway_discrepancy.nil?
        if directions.any? {|_, d| d.any?(&:max_actual_headway) }
          "Good Service"
        else
          "No Service"
        end
      elsif max_headway_discrepancy > 2
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

    private

    def delay
      directions.map { |_, array|
        array.map { |ld|
          ld.delay
        }.max
      }.max || 0
    end

    def max_headway_discrepancy
      directions.map { |_, array|
        array.map { |ld|
          ld.headway_discrepancy
        }
      }.flatten.reject { |headway_discrepancy|
        headway_discrepancy.nil?
      }.max
    end
  end
end