class RemoveNassauLineFromBkQns < ActiveRecord::Migration[5.2]
  def change
    LineBorough.joins(:line).find_by!(borough: "Brooklyn", lines: {name: "Nassau Street"}).destroy
    LineBorough.joins(:line).find_by!(borough: "Queens", lines: {name: "Nassau Street"}).destroy
  end
end
