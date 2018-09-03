require "csv"

class ReseedCalendarExceptions < ActiveRecord::Migration[5.2]
  def up
    CalendarException.delete_all
    csv_text = File.read(Rails.root.join('import', 'calendar_dates.txt'))
    csv = CSV.parse(csv_text, headers: true)
    csv.each do |row|
      c = CalendarException.new
      c.schedule_service_id = row['service_id']
      c.date = row['date']
      c.exception_type = row['exception_type']
      c.save!
      puts "#{c.date} saved"
    end
  end

  def down
    # no op
  end
end
