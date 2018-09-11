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

ActiveRecord::Schema.define(version: 2018_09_11_062405) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calendar_exceptions", force: :cascade do |t|
    t.string "schedule_service_id", null: false
    t.date "date", null: false
    t.integer "exception_type", default: 1, null: false
  end

  create_table "line_boroughs", force: :cascade do |t|
    t.integer "line_id", null: false
    t.string "borough", null: false
  end

  create_table "line_directions", force: :cascade do |t|
    t.bigint "line_id", null: false
    t.integer "direction", null: false
    t.string "last_stop", null: false
    t.string "type"
    t.integer "express_line_direction_id"
    t.string "first_stop", null: false
    t.string "penultimate_stop"
    t.index ["line_id", "direction", "type"], name: "index_line_directions_on_line_id_and_direction_and_type", unique: true
    t.index ["line_id"], name: "index_line_directions_on_line_id"
  end

  create_table "lines", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "is_visible", default: true, null: false
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

  add_foreign_key "calendar_exceptions", "schedules", column: "schedule_service_id", primary_key: "service_id"
  add_foreign_key "line_directions", "line_directions", column: "express_line_direction_id"
  add_foreign_key "line_directions", "lines"
  add_foreign_key "line_directions", "stops", column: "first_stop", primary_key: "internal_id"
  add_foreign_key "line_directions", "stops", column: "last_stop", primary_key: "internal_id"
  add_foreign_key "line_directions", "stops", column: "penultimate_stop", primary_key: "internal_id"
  add_foreign_key "stop_times", "stops", column: "stop_internal_id", primary_key: "internal_id"
  add_foreign_key "stop_times", "trips", column: "trip_internal_id", primary_key: "internal_id"
  add_foreign_key "trips", "routes", column: "route_internal_id", primary_key: "internal_id"
  add_foreign_key "trips", "schedules", column: "schedule_service_id", primary_key: "service_id"
end
