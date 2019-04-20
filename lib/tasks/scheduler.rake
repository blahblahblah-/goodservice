desc "This task is called by the Heroku scheduler add-on"
task :update_line_status_summaries, [:days_past] => :environment do |_, args|
  start_time = Time.current
  days_past = (args[:days_past] || 1).to_i
  if days_past < 1
    fail("days_past argument must be at least 1")
  end
  from_time = Date.current.beginning_of_day - days_past.days
  to_time = from_time + 1.day
  date = from_time.to_date

  puts "Populating all LineStatusSummary for #{date}"

  lines = Line.all.includes(:line_directions)
  line_ids = lines.map(&:id)
  filled_summary_ids = LineStatusSummary.where(date: date).pluck(:line_id)

  lines.each do |line|
    next if filled_summary_ids.include?(line.id)

    data = {
      north: {
        local: Api::LinesController.travel_time_stats_archive(line.line_directions.find {|ld| ld.type != "ExpressLineDirection" && ld.direction == 1 }, from_time, to_time),
        express: Api::LinesController.travel_time_stats_archive(line.line_directions.find {|ld| ld.type == "ExpressLineDirection" && ld.direction == 1 }, from_time, to_time)
      },
      south: {
        local: Api::LinesController.travel_time_stats_archive(line.line_directions.find {|ld| ld.type != "ExpressLineDirection" && ld.direction == 3 }, from_time, to_time),
        express: Api::LinesController.travel_time_stats_archive(line.line_directions.find {|ld| ld.type == "ExpressLineDirection" && ld.direction == 3 }, from_time, to_time)
      }
    }
    LineStatusSummary.create(line: line, date: date, summary: data)
    puts "LineStatusSummary created for #{line.id} - #{line.name}"
  end

  LineDirectionStatus.where("created_at >= ? and created_at < ?", from_time, to_time).delete_all

  end_time = Time.current
  puts "LineStatusSummary populated for #{date} in #{end_time - start_time} seconds"
end
