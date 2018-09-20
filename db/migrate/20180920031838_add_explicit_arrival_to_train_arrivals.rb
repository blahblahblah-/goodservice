class AddExplicitArrivalToTrainArrivals < ActiveRecord::Migration[5.2]
  def change
    add_column :train_arrivals, :explicit_arrival, :boolean, null: false, default: false
    add_column :train_arrivals, :explicit_five_minute, :boolean, null: false, default: false
    add_column :train_arrivals, :five_minute_implicit_timestamp, :integer
  end
end
