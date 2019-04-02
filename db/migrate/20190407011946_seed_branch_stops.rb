class SeedBranchStops < ActiveRecord::Migration[5.2]
  def change
    bwayexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Broadway"}, direction: 1)
    bwayexn.first_branch_stop = 'R23N' # Canal St
    bwayexn.first_alternate_branch_stop = 'Q01N' # Canal St
    bwayexn.last_branch_stop = 'R15N' # 49 St
    bwayexn.last_alternate_branch_stop = 'R14N' # 57 St–7 Av
    bwayexn.save!

    bwayexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "Broadway"}, direction: 3)
    bwayexs.first_branch_stop = 'R15S' # 49 St
    bwayexs.first_alternate_branch_stop = 'R14S' # 57 St–7 Av
    bwayexs.last_branch_stop = 'R23S' # Canal St
    bwayexs.last_alternate_branch_stop = 'Q01S' # Canal St
    bwayexs.save!

    eigexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "8 Avenue"}, direction: 1)
    eigexn.last_branch_stop = "A24N" # 50 St-Columbus Cir
    eigexn.last_alternate_branch_stop = "D14N" # 7 Av/53 St
    eigexn.save!

    eigexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "8 Avenue"}, direction: 3)
    eigexs.first_branch_stop = "A24S"
    eigexs.first_alternate_branch_stop = "D14S"
    eigexs.save!

    queensexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Queens Boulevard"}, direction: 1)
    queensexn.first_branch_stop = "B04N" # 21 St-Queensbridge
    queensexn.first_alternate_branch_stop = "G21N" # Queens Plaza
    queensexn.save!

    queensexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "Queens Boulevard"}, direction: 3)
    queensexs.last_branch_stop = "B04S" # 21 St-Queensbridge
    queensexs.last_alternate_branch_stop = "G21S" # Queens Plaza
    queensexs.save!

    fourthexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "4 Avenue"}, direction: 1)
    fourthexn.first_branch_stop = 'R41N' # 59 St
    fourthexn.first_alternate_branch_stop = 'R36N' # 36 St
    fourthexn.save!

    fourthexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "4 Avenue"}, direction: 3)
    fourthexs.last_branch_stop = 'R41S' # 59 St
    fourthexs.last_alternate_branch_stop = 'R36S' # 36 St
    fourthexs.save!

    epkwyexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Eastern Parkway"}, direction: 1)
    epkwyexn.first_branch_stop = '250N' # Crown Hts-Utica Av
    epkwyexn.first_alternate_branch_stop = '241N' # President St
    epkwyexn.last_branch_stop = '232N' # Borough Hall
    epkwyexn.last_alternate_branch_stop = '423N' # Borough Hall
    epkwyexn.save!

    epkwyexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "Eastern Parkway"}, direction: 3)
    epkwyexs.first_branch_stop = '232S' # Borough Hall
    epkwyexs.first_alternate_branch_stop = '423S' # Borough Hall
    epkwyexs.last_branch_stop = '250S' # Crown Hts-Utica Av
    epkwyexs.last_alternate_branch_stop = '241S' # President St
    epkwyexs.save!
  end
end
