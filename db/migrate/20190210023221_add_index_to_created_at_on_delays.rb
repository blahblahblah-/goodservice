class AddIndexToCreatedAtOnDelays < ActiveRecord::Migration[5.2]
  def change
    add_index :delays, :created_at
  end
end
