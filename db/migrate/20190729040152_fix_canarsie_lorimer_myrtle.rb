class FixCanarsieLorimerMyrtle < ActiveRecord::Migration[5.2]
  def change
    canarsieln = LineDirection.joins(:line).find_by(lines: {name: "Canarsie (Lorimer Street—Myrtle Avenue)"}, direction: 1)
    canarsieln.first_stop = "L16N" # DeKalb Av
    canarsieln.first_branch_stop = "L17N"
    canarsieln.first_alternate_branch_stop = "L17N" 
    canarsieln.last_stop = "L11N" # Graham Av
    canarsieln.last_branch_stop = "L10N"
    canarsieln.last_alternate_branch_stop = "L10N"
    canarsieln.save!

    canarsiels = LineDirection.joins(:line).find_by(lines: {name: "Canarsie (Lorimer Street—Myrtle Avenue)"}, direction: 3)
    canarsiels.first_stop = "L11S"
    canarsiels.first_branch_stop = "L10S"
    canarsiels.first_alternate_branch_stop = "L10S" 
    canarsiels.last_stop = "L16S"
    canarsiels.last_branch_stop = "L17S"
    canarsiels.last_alternate_branch_stop = "L17S"
    canarsiels.save!
  end
end
