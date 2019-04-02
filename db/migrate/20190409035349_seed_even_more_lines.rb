class SeedEvenMoreLines < ActiveRecord::Migration[5.2]
  def change
    fiftyninth = Line.create(name: "59 Street", is_visible: true)
    LineBorough.create(borough: "Manhattan", line: fiftyninth)
    LineBorough.create(borough: "Queens", line: fiftyninth)
    LineDirection.create(
      line: fiftyninth, direction: 1,
      first_stop: "R13N", # 5 Av/59 St
      last_stop: "R11N", # Lex Av/59 St
      first_branch_stop: "R14N", # 57 St/7 Av
      first_alternate_branch_stop: "R14N",
      last_branch_stop: "R09N", # Queensboro Plz
      last_alternate_branch_stop: "G21N", # Queens Plz
      alternate_name: "via 59 St"
    )
    LineDirection.create(
      line: fiftyninth, direction: 3,
      first_stop: "R11S", # Lex Av/59 St
      last_stop: "R13S", # 5 Av/59 St
      first_branch_stop: "R09S", # Queensboro Plz
      first_alternate_branch_stop: "G21S", # Queens Plz
      last_branch_stop: "R14S", # 57 St/7 Av
      last_alternate_branch_stop: "R14S",
      alternate_name: "via 59 St"
    )

    queensblvde = Line.create(name: "Queens Boulevard (Eastern Queens)", is_visible: true)
    LineBorough.create(borough: "Queens", line: queensblvde)
    queensblvden = ExpressLineDirection.create(
      line: queensblvde, direction: 1,
      first_stop: "G08N", # Forest Hills–71 Av
      last_stop: "F06N", # Kew Gdns–Union Tpke
      penultimate_stop: "G08N",
      last_branch_stop: "F01N", # Jamaica–179 St
      last_alternate_branch_stop: "G05N", # Jamaica Ctr
      alternate_name: "Forest Hills—Jamaica Express"
    )
    queensblvdes = ExpressLineDirection.create(
      line: queensblvde, direction: 3,
      first_stop: "F06S", # Kew Gdns–Union Tpke
      last_stop: "G08S", # Forest Hills–71 Av
      penultimate_stop: "F06S",
      first_branch_stop: "F01S", # Jamaica–179 St
      first_alternate_branch_stop: "G05S", # Jamaica Ctr
      alternate_name: "Forest Hills—Jamaica Express"
    )
    LocalLineDirection.create(
      line: queensblvde, direction: 1, first_stop: "F07N", last_stop: "F05N", express_line_direction: queensblvden, alternate_name: "Forest Hills—Jamaica Local"
    )
    LocalLineDirection.create(
      line: queensblvde, direction: 3, first_stop: "F05S", last_stop: "F07S", express_line_direction: queensblvdes, alternate_name: "Forest Hills—Jamaica Local"
    )

    culverm = Line.create(name: "Culver (Church Avenue—Kings Highway)", is_visible: true)
    LineBorough.create(borough: "Brooklyn", line: culverm)
    LineDirection.create(
      line: culverm, direction: 1,
      first_stop: "F35N", # Kings Hwy
      last_stop: "F29N", # Ditmas Av
      last_branch_stop: "F27N", # Church Av
      last_alternate_branch_stop: "F27N",
      alternate_name: "Church Av—Kings Hwy"
    )
    LineDirection.create(
      line: culverm, direction: 3,
      first_stop: "F29S", # Church Av
      last_stop: "F35S", # Kings Hwy
      first_branch_stop: "F27S", # Church Av
      first_alternate_branch_stop: "F27NS",
      alternate_name: "Church Av—Kings Hwy"
    )
  end
end
