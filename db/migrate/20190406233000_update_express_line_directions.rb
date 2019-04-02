class UpdateExpressLineDirections < ActiveRecord::Migration[5.2]
  def change
    lexexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Lexington Avenue"}, direction: 1)
    lexexn.first_stop = '640N'
    lexexn.save!

    lexexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "Lexington Avenue"}, direction: 3)
    lexexs.last_stop = '640S'
    lexexs.save!

    sixexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "6 Avenue"}, direction: 1)
    sixexn.first_stop = 'D21N'
    sixexn.save!

    sixexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "6 Avenue"}, direction: 3)
    sixexs.last_stop = 'D15S'
    sixexs.save!

    eigexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "8 Avenue"}, direction: 1)
    eigexn.last_stop = 'A24N'
    eigexn.save!

    eigexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "8 Avenue"}, direction: 3)
    eigexs.first_stop = 'A24S'
    eigexs.save!

    queensexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Queens Boulevard"}, direction: 1)
    queensexn.last_stop = 'G08N'
    queensexn.penultimate_stop = 'G14N'
    queensexn.save!

    queensexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "Queens Boulevard"}, direction: 3)
    queensexs.first_stop = 'G08S'
    queensexs.penultimate_stop = 'G08S'
    queensexs.save!

    fultonexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Fulton Street"}, direction: 1)
    fultonexn.last_stop = 'A42N'
    fultonexn.penultimate_stop = 'A46N'
    fultonexn.save!

    fultonexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "Fulton Street"}, direction: 3)
    fultonexs.first_stop = 'A42S'
    fultonexs.save!

    pelhamexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Pelham"}, direction: 1)
    pelhamexn.first_stop = '621N'
    pelhamexn.save!

    pelhamexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "Pelham"}, direction: 3)
    pelhamexs.last_stop = '621S'
    pelhamexs.save!
  end
end
