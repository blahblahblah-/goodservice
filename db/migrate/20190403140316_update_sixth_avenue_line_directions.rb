class UpdateSixthAvenueLineDirections < ActiveRecord::Migration[5.2]
  def change
    sixth_av_local_downtown = LocalLineDirection.joins(:line).where(lines: {name: "6 Avenue"}, direction: LineDirection::SOUTH).first
    sixth_av_local_downtown.first_stop = 'D18S'
    sixth_av_local_downtown.save!
    sixth_av_local_uptown = LocalLineDirection.joins(:line).where(lines: {name: "6 Avenue"}, direction: LineDirection::NORTH).first
    sixth_av_local_uptown.last_stop = 'D18N'
    sixth_av_local_uptown.save!
  end
end
