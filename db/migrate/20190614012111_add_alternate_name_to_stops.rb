class AddAlternateNameToStops < ActiveRecord::Migration[5.2]
  def change
    add_column :stops, :alternate_name, :string
  end
end
