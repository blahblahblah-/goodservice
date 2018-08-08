class InitializeModels < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :name, null: false
      t.string :alternate_name
      t.string :internal_id, null: false
      t.string :color, null: false
      t.string :text_color
      t.boolean :visible, null: false, default: true
    end

    add_index :routes, :internal_id, unique: true

    create_table :schedules do |t|
      t.string :service_id, null: false
      t.integer :monday, null: false
      t.integer :tuesday, null: false
      t.integer :wednesday, null: false
      t.integer :thursday, null: false
      t.integer :friday, null: false
      t.integer :saturday, null: false
      t.integer :sunday, null: false
    end

    add_index :schedules, :service_id, unique: true

    create_table :calendar_exceptions do |t|
      t.string :schedule_service_id, null: false
      t.date :date, null: false
    end

    add_foreign_key :calendar_exceptions, :schedules, column: :schedule_service_id, primary_key: :service_id

    create_table :stops do |t|
      t.string :internal_id, null: false
      t.string :stop_name, null: false
      t.string :parent_stop_id
    end

    add_foreign_key :stops, :stops, column: :parent_stop_id, primary_key: :internal_id
    add_index :stops, :internal_id, unique: true

    create_table :trips do |t|
      t.string :route_internal_id, null: false
      t.string :schedule_service_id, null: false
      t.string :internal_id, null: false
      t.string :destination, null: false
      t.integer :direction, null: false
    end

    add_foreign_key :trips, :routes, column: :route_internal_id, primary_key: :internal_id
    add_foreign_key :trips, :schedules, column: :schedule_service_id, primary_key: :service_id
    add_index :trips, :internal_id, unique: true

    create_table :stop_times do |t|
      t.string :trip_internal_id, null: false
      t.integer :departure_time, null: false # integer?
      t.string :stop_internal_id, null: false
      t.integer :stop_sequence, null: false
    end

    add_foreign_key :stop_times, :trips, column: :trip_internal_id, primary_key: :internal_id
    add_foreign_key :stop_times, :stops, column: :stop_internal_id, primary_key: :internal_id
    add_index :stop_times, [:stop_internal_id, :departure_time]

    create_table :lines do |t|
      t.string :name, null: false
    end

    create_table :line_directions do |t|
      t.integer :line_id, null: false
      t.text :direction, null: false
    end

    add_foreign_key :line_directions, :lines, column: :line_id
    add_index :line_directions, [:line_id, :direction], unique: true

    create_table :line_direction_stops do |t|
      t.integer :line_direction_id, null: false
      t.string :stop_internal_id, null: false
    end

    add_foreign_key :line_direction_stops, :line_directions, column: :line_direction_id
    add_foreign_key :line_direction_stops, :stops, column: :stop_id, primary_key: :internal_id
    add_index :line_direction_stops, [:line_direction_id, :stop_internal_id], unique: true, name: "idx_line_direction_stops"

    create_table :route_line_directions do |t|
      t.string :route_internal_id, null: false
      t.integer :line_direction_id, null: false
      t.text :direction, null: false
      t.integer :sequence, null: false
    end

    add_foreign_key :route_line_directions, :routes, column: :route_internal_id, primary_key: :internal_id
    add_foreign_key :route_line_directions, :line_directions, column: :line_direction_id
    add_index :route_line_directions, [:route_internal_id, :direction, :sequence], unique: true, name: "idx_route_line_directions"

    create_table :line_boroughs do |t|
      t.integer :line_id, null: false
      t.string :borough, null: false
    end

    create_table :key_stations do |t|
      t.string :stop_internal_id, null: false
      t.integer :line_direction_id, null: false
    end
  end
end
