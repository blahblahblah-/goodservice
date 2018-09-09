class RenameLineDirectionExpressIdToExpressLineDirectionIdInLineDirections < ActiveRecord::Migration[5.2]
  def change
    rename_column :line_directions, :line_direction_express_id, :express_line_direction_id
  end
end
