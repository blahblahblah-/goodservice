class FixABunchOfLineDirectionStops < ActiveRecord::Migration[5.2]
  def change
    manhbrn = ExpressLineDirection.joins(:line).find_by!(lines: {name: "Manhattan Bridge/Montague Street (Broadway)"}, direction: 1)
    # Canal St
    manhbrn.last_branch_stop = "R23N"
    manhbrn.last_alternate_branch_stop = "Q01N"
    manhbrn.save!

    manhbrs = ExpressLineDirection.joins(:line).find_by!(lines: {name: "Manhattan Bridge/Montague Street (Broadway)"}, direction: 3)
    manhbrs.first_branch_stop = "R23S"
    manhbrs.first_alternate_branch_stop = "Q01S"
    manhbrs.save!

    sevbwayn = LineDirection.joins(:line).find_by!(lines: {name: "Broadway–7 Avenue"}, direction: 1)
    # 96 St
    sevbwayn.first_branch_stop = "120N"
    sevbwayn.first_alternate_branch_stop = "120N"
    sevbwayn.save!

    sevbways = LineDirection.joins(:line).find_by!(lines: {name: "Broadway–7 Avenue"}, direction: 3)
    sevbways.last_branch_stop = "120S"
    sevbways.last_alternate_branch_stop = "120S"
    sevbways.save!

    cpwn = ExpressLineDirection.joins(:line).find_by!(lines: {name: "Central Park West"}, direction: 1)
    # 168 St
    cpwn.last_branch_stop = "A09N"
    # 145 St
    cpwn.last_alternate_branch_stop = "D13N"
    cpwn.save!

    cpws = ExpressLineDirection.joins(:line).find_by!(lines: {name: "Central Park West"}, direction: 3)
    cpws.first_branch_stop = "A09S"
    cpws.first_alternate_branch_stop = "D13S"
    cpws.save!

    washn = LineDirection.joins(:line).find_by!(lines: {name: "Washington Heights (8 Avenue)"}, direction: 1)
    # 168 St
    washn.first_branch_stop = "A09N"
    washn.first_alternate_branch_stop = "A09N"
    washn.save!

    washs = LineDirection.joins(:line).find_by!(lines: {name: "Washington Heights (8 Avenue)"}, direction: 3)
    washs.last_branch_stop = "A09S"
    washs.last_alternate_branch_stop = "A09S"
    washs.save!

    leffertsn = LineDirection.joins(:line).find_by!(lines: {name: "Fulton Street (Lefferts Boulevard Branch)"}, direction: 1)
    # Euclid Av
    leffertsn.last_branch_stop = "A55N"
    leffertsn.last_alternate_branch_stop = "A55N"
    leffertsn.save!

    leffertss = LineDirection.joins(:line).find_by!(lines: {name: "Fulton Street (Lefferts Boulevard Branch)"}, direction: 3)
    leffertss.first_branch_stop = "A55S"
    leffertss.first_alternate_branch_stop = "A55S"
    leffertss.save!

    farrockn = LineDirection.joins(:line).find_by!(lines: {name: "Rockaway (Far Rockaway Branch)"}, direction: 1)
    # Euclid Av
    farrockn.last_branch_stop = "A55N"
    farrockn.last_alternate_branch_stop = "A55N"
    farrockn.save!

    farrocks = LineDirection.joins(:line).find_by!(lines: {name: "Rockaway (Far Rockaway Branch)"}, direction: 3)
    farrocks.first_branch_stop = "A55S"
    farrocks.first_alternate_branch_stop = "A55S"
    farrocks.save!

    westendn = LineDirection.joins(:line).find_by!(lines: {name: "West End"}, direction: 1)
    # Coney Island
    westendn.first_branch_stop = "D43N"
    westendn.first_alternate_branch_stop = "D43N"
    westendn.save!

    westends = LineDirection.joins(:line).find_by!(lines: {name: "West End"}, direction: 3)
    westends.last_branch_stop = "D43S"
    westends.last_alternate_branch_stop = "D43S"
    westends.save!

    culverkingsn = LineDirection.joins(:line).find_by!(lines: {name: "Culver (Kings Highway—Coney Island)"}, direction: 1)
    # Coney Island
    culverkingsn.first_branch_stop = "D43N"
    culverkingsn.first_alternate_branch_stop = "D43N"
    # Kings Hwy
    culverkingsn.last_branch_stop = "F35N"
    culverkingsn.last_alternate_branch_stop = "F35N"
    culverkingsn.save!

    culverkingss = LineDirection.joins(:line).find_by!(lines: {name: "Culver (Kings Highway—Coney Island)"}, direction: 3)
    culverkingss.last_branch_stop = "D43S"
    culverkingss.last_alternate_branch_stop = "D43S"
    culverkingss.first_branch_stop = "F35S"
    culverkingss.first_alternate_branch_stop = "F35S"
    culverkingss.save!

    secavn = LineDirection.joins(:line).find_by!(lines: {name: "2 Avenue"}, direction: 1)
    # Lex-63
    secavn.first_branch_stop = "B08N"
    secavn.first_alternate_branch_stop = "B08N"
    secavn.save!

    secavs = LineDirection.joins(:line).find_by!(lines: {name: "2 Avenue"}, direction: 3)
    secavs.last_branch_stop = "B08S"
    secavs.last_alternate_branch_stop = "B08S"
    secavs.save!

    myrtlen = LineDirection.joins(:line).find_by!(lines: {name: "Myrtle Avenue"}, direction: 1)
    # Myrtle Av
    myrtlen.last_branch_stop = "M11N"
    myrtlen.last_alternate_branch_stop = "M11N"
    myrtlen.save!

    myrtles = LineDirection.joins(:line).find_by!(lines: {name: "Myrtle Avenue"}, direction: 3)
    myrtles.first_branch_stop = "M11S"
    myrtles.first_alternate_branch_stop = "M11S"
    myrtles.save!

    seabeachn = LineDirection.joins(:line).find_by!(lines: {name: "Sea Beach"}, direction: 1)
    # Coney Island
    seabeachn.first_branch_stop = "D43N"
    seabeachn.first_alternate_branch_stop = "D43N"
    seabeachn.save!

    seabeachs = LineDirection.joins(:line).find_by!(lines: {name: "Sea Beach"}, direction: 3)
    seabeachs.last_branch_stop = "D43S"
    seabeachs.last_alternate_branch_stop = "D43S"
    seabeachs.save!

    franklinn = LineDirection.joins(:line).find_by!(lines: {name: "Franklin Avenue"}, direction: 1)
    # Prospect Park
    franklinn.first_branch_stop = "D26N"
    franklinn.first_alternate_branch_stop = "D26N"
    franklinn.save!

    franklins = LineDirection.joins(:line).find_by!(lines: {name: "Franklin Avenue"}, direction: 3)
    franklins.last_branch_stop = "D26S"
    franklins.last_alternate_branch_stop = "D26S"
    franklins.save!

    lenoxn = LineDirection.joins(:line).find_by!(lines: {name: "Lenox Avenue"}, direction: 1)
    # 96 St
    lenoxn.first_branch_stop = "120N"
    lenoxn.first_alternate_branch_stop = "120N"
    # Harlem—148 St
    lenoxn.last_branch_stop = "301N"
    # 149 St–Grand Concourse
    lenoxn.last_alternate_branch_stop = "222N"
    lenoxn.save!

    lenoxs = LineDirection.joins(:line).find_by!(lines: {name: "Lenox Avenue"}, direction: 3)
    lenoxs.last_branch_stop = "120S"
    lenoxs.last_alternate_branch_stop = "120S"
    lenoxs.first_branch_stop = "301S"
    lenoxs.first_alternate_branch_stop = "222S"
    lenoxs.save!

    whiteplainsn = ExpressLineDirection.joins(:line).find_by!(lines: {name: "White Plains Road"}, direction: 1)
    # Nereid Av
    whiteplainsn.last_branch_stop = "204N"
    # E 180 St
    whiteplainsn.last_alternate_branch_stop = "213N"
    whiteplainsn.save!

    whiteplainss = ExpressLineDirection.joins(:line).find_by!(lines: {name: "White Plains Road"}, direction: 3)
    whiteplainss.first_branch_stop = "204S"
    whiteplainss.first_alternate_branch_stop = "213S"
    whiteplainss.save!

    dyren = LineDirection.joins(:line).find_by!(lines: {name: "Dyre Avenue"}, direction: 1)
    # E 180 St
    dyren.first_branch_stop = "213N"
    dyren.first_alternate_branch_stop = "213N"
    dyren.save!

    dyres = LineDirection.joins(:line).find_by!(lines: {name: "Dyre Avenue"}, direction: 3)
    dyres.last_branch_stop = "213S"
    dyres.last_alternate_branch_stop = "213S"
    dyres.save!

    newlotsn = LineDirection.joins(:line).find_by!(lines: {name: "New Lots"}, direction: 1)
    # Crown Hts—Utica Av
    newlotsn.last_branch_stop = "250N"
    newlotsn.last_alternate_branch_stop = "250N"
    newlotsn.save!

    newlotss = LineDirection.joins(:line).find_by!(lines: {name: "New Lots"}, direction: 3)
    newlotss.first_branch_stop = "250S"
    newlotss.first_alternate_branch_stop = "250S"
    newlotss.save!

    astorian = LineDirection.joins(:line).find_by!(lines: {name: "Astoria"}, direction: 1)
    # Queensboro Plz
    astorian.first_branch_stop = "R09N"
    astorian.first_alternate_branch_stop = "R09N"
    astorian.save!

    astorias = LineDirection.joins(:line).find_by!(lines: {name: "Astoria"}, direction: 3)
    astorias.last_branch_stop = "R09S"
    astorias.last_alternate_branch_stop = "R09S"
    astorias.save!
  end
end
