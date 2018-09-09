class AddPenultimateStopToLineDirections < ActiveRecord::Migration[5.2]
  def change
    add_column :line_directions, :penultimate_stop, :string
    add_foreign_key :line_directions, :stops, column: :penultimate_stop, primary_key: :internal_id

    lexexn = ExpressLineDirection.find_by!(last_stop: "621N")
    lexexn.penultimate_stop = "626N"
    lexexn.save!
    lexexs = ExpressLineDirection.find_by!(last_stop: "423S")
    lexexs.penultimate_stop = "635S"
    lexexs.save!
    sixexn = ExpressLineDirection.find_by!(last_stop: "D15N")
    sixexn.penultimate_stop = "D20N"
    sixexn.save!
    sixexs = ExpressLineDirection.find_by!(last_stop: "D20S")
    sixexs.penultimate_stop = "D17S"
    sixexs.save!
    bwayexn = ExpressLineDirection.find_by!(last_stop: "R14N")
    bwayexn.penultimate_stop = "R20N"
    bwayexn.save!
    bwayexs = ExpressLineDirection.find_by!(last_stop: "R20S")
    bwayexs.penultimate_stop = "R17S"
    bwayexs.save!
    sevexn = ExpressLineDirection.find_by!(last_stop: "120N")
    sevexn.penultimate_stop = "123N"
    sevexn.save!
    sevexs = ExpressLineDirection.find_by!(last_stop: "137S")
    sevexs.penultimate_stop = "132S"
    sevexs.save!
    eigexn = ExpressLineDirection.find_by!(last_stop: "A27N")
    eigexn.penultimate_stop = "A31N"
    eigexn.save!
    eigexs = ExpressLineDirection.find_by!(last_stop: "A32S")
    eigexs.penultimate_stop = "A28S"
    eigexs.save!
    flushingexn = ExpressLineDirection.find_by!(last_stop: "701N")
    flushingexn.penultimate_stop = "707N"
    flushingexn.save!
    flushingexs = ExpressLineDirection.find_by!(last_stop: "726S")
    flushingexs.penultimate_stop = "712S"
    flushingexs.save!
    queensexn = ExpressLineDirection.find_by!(last_stop: "F06N")
    queensexn.penultimate_stop = "G14N"
    queensexn.save!
    queensexs = ExpressLineDirection.find_by!(last_stop: "G14S")
    queensexs.penultimate_stop = "G08S"
    queensexs.save!
    fourthexn = ExpressLineDirection.find_by!(last_stop: "R31N")
    fourthexn.penultimate_stop = "R36N"
    fourthexn.save!
    fourthexs = ExpressLineDirection.find_by!(last_stop: "R36S")
    fourthexs.penultimate_stop = "R31S"
    fourthexs.save!
    brightonexn = ExpressLineDirection.find_by!(last_stop: "D24N")
    brightonexn.penultimate_stop = "D28N"
    brightonexn.save!
    brightonexs = ExpressLineDirection.find_by!(last_stop: "D40S")
    brightonexs.penultimate_stop = "D35S"
    brightonexs.save!
    bwaybkexn = ExpressLineDirection.find_by!(last_stop: "M11N")
    bwaybkexn.penultimate_stop = "M16N"
    bwaybkexn.save!
    bwaybkexs = ExpressLineDirection.find_by!(last_stop: "M16S")
    bwaybkexs.penultimate_stop = "M11S"
    bwaybkexs.save!
    fultonexn = ExpressLineDirection.find_by!(last_stop: "A46N")
    fultonexn.penultimate_stop = "A48N"
    fultonexn.save!
    fultonexs = ExpressLineDirection.find_by!(last_stop: "A55S")
    fultonexs.penultimate_stop = "A51S"
    fultonexs.save!
    concourseexn = ExpressLineDirection.find_by!(last_stop: "D01N")
    concourseexn.penultimate_stop = "D07N"
    concourseexn.save!
    concourseexs = ExpressLineDirection.find_by!(last_stop: "D13S")
    concourseexs.penultimate_stop = "D07S"
    concourseexs.save!
    epkwyexn = ExpressLineDirection.find_by!(last_stop: "234N")
    epkwyexn.penultimate_stop = "239N"
    epkwyexn.save!
    epkwyexs = ExpressLineDirection.find_by!(last_stop: "239S")
    epkwyexs.penultimate_stop = "235S"
    epkwyexs.save!
    pelhamexn = ExpressLineDirection.find_by!(last_stop: "601N")
    pelhamexn.penultimate_stop = "613N"
    pelhamexn.save!
    pelhamexs = ExpressLineDirection.find_by!(last_stop: "619S")
    pelhamexs.penultimate_stop = "613S"
    pelhamexs.save!
    whiteplainsexn = ExpressLineDirection.find_by!(last_stop: "213N")
    whiteplainsexn.penultimate_stop = "221N"
    whiteplainsexn.save!
    whiteplainsexs = ExpressLineDirection.find_by!(last_stop: "222S")
    whiteplainsexs.penultimate_stop = "213S"
    whiteplainsexs.save!
    cpwexn = ExpressLineDirection.find_by!(last_stop: "A15N")
    cpwexn.penultimate_stop = "A24N"
    cpwexn.save!
    cpwexs = ExpressLineDirection.find_by!(last_stop: "A24S")
    cpwexs.penultimate_stop = "A15S"
    cpwexs.save!
  end
end
