class Api::LinesController < ApplicationController

  caches_action :show, expires_in: 30.seconds
  caches_action :archive, expires_in: 1.hour

  def show
    lds = LineDirection.where(line_id: params[:id])
    render json: {
      north: {
        local: travel_time_stats(lds.find {|ld| ld.type != "ExpressLineDirection" && ld.direction == 1 }),
        express: travel_time_stats(lds.find {|ld| ld.type == "ExpressLineDirection" && ld.direction == 1 })
      },
      south: {
        local: travel_time_stats(lds.find {|ld| ld.type != "ExpressLineDirection" && ld.direction == 3 }),
        express: travel_time_stats(lds.find {|ld| ld.type == "ExpressLineDirection" && ld.direction == 3 })
      }
    }
  end

  def archive
    past_days = params[:past_days].to_i
    raise "error" if past_days > 7 || past_days < 1
    lds = LineDirection.where(line_id: params[:line_id])
    from_time = Date.current.beginning_of_day - past_days.days
    to_time = from_time + 1.day
    render json: {
      north: {
        local: travel_time_stats_archive(lds.find {|ld| ld.type != "ExpressLineDirection" && ld.direction == 1 }, from_time, to_time),
        express: travel_time_stats_archive(lds.find {|ld| ld.type == "ExpressLineDirection" && ld.direction == 1 }, from_time, to_time)
      },
      south: {
        local: travel_time_stats_archive(lds.find {|ld| ld.type != "ExpressLineDirection" && ld.direction == 3 }, from_time, to_time),
        express: travel_time_stats_archive(lds.find {|ld| ld.type == "ExpressLineDirection" && ld.direction == 3 }, from_time, to_time)
      }
    }
  end

  private

  def travel_time_stats(line_direction)
    return unless line_direction
    LineDirectionStatus.where("created_at >= ? and line_direction_id = ?", Time.current - 1.day, line_direction.id).order(:created_at).map do |lds|
      {
        x: lds.created_at.strftime("%FT%T"),
        y: lds.travel_time
      }
    end
  end

  def travel_time_stats_archive(line_direction, from_time, to_time)
    return unless line_direction
    LineDirectionStatus.where("created_at >= ? and created_at < ? and line_direction_id = ?", from_time, to_time, line_direction.id).order(:created_at).map do |lds|
      {
        x: lds.created_at.strftime("%FT%T"),
        y: lds.travel_time
      }
    end
  end
end