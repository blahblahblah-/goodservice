class SeedMoreLStations < ActiveRecord::Migration[5.2]
  def change
    wcanarsie = LineDirection.joins(:line).find_by!(direction: "West", lines: {name: "14 Street–Canarsie"})
    ecanarsie = LineDirection.joins(:line).find_by!(direction: "East", lines: {name: "14 Street–Canarsie"})
    KeyStation.create(line_direction: wcanarsie, stop_internal_id: "L02S") # 6 Av
    KeyStation.create(line_direction: ecanarsie, stop_internal_id: "L06N") # 1 Av
    KeyStation.create(line_direction: wcanarsie, stop_internal_id: "L24S") # Atlantic Av
    KeyStation.create(line_direction: ecanarsie, stop_internal_id: "L28N") # E 105 St
  end
end
