# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_08_191130) do

  create_table "calendar_exceptions", force: :cascade do |t|
    t.string "schedule_service_id", null: false
    t.date "date", null: false
  end

  create_table "key_stations", force: :cascade do |t|
    t.string "stop_internal_id", null: false
    t.integer "line_direction_id", null: false
  end

  create_table "line_boroughs", force: :cascade do |t|
    t.integer "line_id", null: false
    t.string "borough", null: false
  end

  create_table "line_direction_stops", force: :cascade do |t|
    t.integer "line_direction_id", null: false
    t.string "stop_internal_id", null: false
    t.index ["line_direction_id", "stop_internal_id"], name: "idx_line_direction_stops", unique: true
  end

  create_table "line_directions", force: :cascade do |t|
    t.integer "line_id", null: false
    t.text "direction", null: false
    t.index ["line_id", "direction"], name: "index_line_directions_on_line_id_and_direction", unique: true
  end

  create_table "lines", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "route_line_directions", force: :cascade do |t|
    t.string "route_internal_id", null: false
    t.integer "line_direction_id", null: false
    t.text "direction", null: false
    t.integer "sequence", null: false
    t.index ["route_internal_id", "direction", "sequence"], name: "idx_route_line_directions", unique: true
  end

  create_table "routes", force: :cascade do |t|
    t.string "name", null: false
    t.string "alternate_name"
    t.string "internal_id", null: false
    t.string "color", null: false
    t.string "text_color"
    t.boolean "visible", default: true, null: false
    t.index ["internal_id"], name: "index_routes_on_internal_id", unique: true
  end

  create_table "schedules", force: :cascade do |t|
    t.string "service_id", null: false
    t.integer "monday", null: false
    t.integer "tuesday", null: false
    t.integer "wednesday", null: false
    t.integer "thursday", null: false
    t.integer "friday", null: false
    t.integer "saturday", null: false
    t.integer "sunday", null: false
    t.index ["service_id"], name: "index_schedules_on_service_id", unique: true
  end

  create_table "stop_times", force: :cascade do |t|
    t.string "trip_internal_id", null: false
    t.integer "departure_time", null: false
    t.string "stop_internal_id", null: false
    t.integer "stop_sequence", null: false
    t.index ["stop_internal_id", "departure_time"], name: "index_stop_times_on_stop_internal_id_and_departure_time"
  end

  create_table "stops", force: :cascade do |t|
    t.string "internal_id", null: false
    t.string "stop_name", null: false
    t.string "parent_stop_id"
    t.index ["internal_id"], name: "index_stops_on_internal_id", unique: true
  end

  create_table "trips", force: :cascade do |t|
    t.string "route_internal_id", null: false
    t.string "schedule_service_id", null: false
    t.string "internal_id", null: false
    t.string "destination", null: false
    t.integer "direction", null: false
    t.index ["internal_id"], name: "index_trips_on_internal_id", unique: true
  end

end
