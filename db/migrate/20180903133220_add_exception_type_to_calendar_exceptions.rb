class AddExceptionTypeToCalendarExceptions < ActiveRecord::Migration[5.2]
  def change
    add_column :calendar_exceptions, :exception_type, :integer, null: false, default: 1
  end
end
