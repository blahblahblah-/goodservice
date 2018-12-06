class DropTrainArrivals < ActiveRecord::Migration[5.2]
  def change
    drop_table :train_arrivals
  end
end
