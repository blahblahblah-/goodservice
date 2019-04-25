class AddStartDateAndEndDateToSchedules < ActiveRecord::Migration[5.2]
  def change
    add_column :schedules, :start_date, :date
    add_column :schedules, :end_date, :date

    Schedule.update_all(start_date: '2018-11-04')
    Schedule.update_all(end_date: '2019-04-27')
  end
end
