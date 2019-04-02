class UpdateEightAvenueLineDirections < ActiveRecord::Migration[5.2]
  def change
    eighth_av_local_downtown = LocalLineDirection.joins(:line).where(lines: {name: "8 Avenue"}, direction: LineDirection::SOUTH).first
    eighth_av_local_downtown.first_stop = 'A25S'
    eighth_av_local_downtown.save!
    eighth_av_local_uptown = LocalLineDirection.joins(:line).where(lines: {name: "8 Avenue"}, direction: LineDirection::NORTH).first
    eighth_av_local_uptown.last_stop = 'A25N'
    eighth_av_local_uptown.save!
  end
end
