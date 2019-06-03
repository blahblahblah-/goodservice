const sampleData = {
   "routes": [{
      "id": "1",
      "name": "1",
      "color": "#db2828",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 5,
      "destinations": {
         "north": ["Van Cortlandt Park - 242 St"],
         "south": ["South Ferry"]
      },
      "scheduled_destinations": {
         "north": ["Van Cortlandt Park - 242 St"],
         "south": ["South Ferry"]
      },
      "north": [{
         "name": "7 Avenue Local",
         "parent_name": "7 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 6,
         "max_scheduled_headway": 5,
         "delay": 1,
         "travel_time": 0.03541666666666672,
         "first_stops": ["137N"],
         "last_stops": ["120N"]
      }, {
         "name": "Broadway–7 Avenue",
         "parent_name": "Broadway–7 Avenue",
         "boroughs": ["The Bronx", "Manhattan"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 6,
         "delay": 2,
         "travel_time": 0.13817204301075262,
         "first_stops": ["119N"],
         "last_stops": ["101N"]
      }],
      "south": [{
         "name": "Broadway–7 Avenue",
         "parent_name": "Broadway–7 Avenue",
         "boroughs": ["The Bronx", "Manhattan"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 6,
         "delay": 0,
         "travel_time": 0.11394557823129249,
         "first_stops": ["101S"],
         "last_stops": ["119S"]
      }, {
         "name": "7 Avenue Local",
         "parent_name": "7 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 6,
         "delay": 0,
         "travel_time": 0.03784722222222222,
         "first_stops": ["120S"],
         "last_stops": ["137S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "2",
      "name": "2",
      "color": "#db2828",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 7,
      "destinations": {
         "north": ["Wakefield - 241 St"],
         "south": ["Flatbush Av - Brooklyn College"]
      },
      "scheduled_destinations": {
         "north": ["Wakefield - 241 St"],
         "south": ["Flatbush Av - Brooklyn College"]
      },
      "north": [{
         "name": "Nostrand Avenue",
         "parent_name": "Nostrand Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": 4.60087416609427e-05,
         "first_stops": ["247N"],
         "last_stops": ["241N"]
      }, {
         "name": "Eastern Parkway Local",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.023230231925884116,
         "first_stops": ["250N", "241N", "239N"],
         "last_stops": ["137N", "640N", "234N"]
      }, {
         "name": "7 Avenue Express",
         "parent_name": "7 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 12,
         "delay": 0,
         "travel_time": -0.0070707070707071214,
         "first_stops": ["137N"],
         "last_stops": ["120N"]
      }, {
         "name": "Lenox Avenue",
         "parent_name": "Lenox Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 12,
         "delay": 0,
         "travel_time": 0.12263374485596702,
         "first_stops": ["227N"],
         "last_stops": ["224N"]
      }, {
         "name": "White Plains Road Local",
         "parent_name": "White Plains Road",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": -0.11741324921135643,
         "first_stops": ["222N"],
         "last_stops": ["213N"]
      }],
      "south": [{
         "name": "White Plains Road Local",
         "parent_name": "White Plains Road",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": -0.03318950017979149,
         "first_stops": ["213S"],
         "last_stops": ["222S"]
      }, {
         "name": "Lenox Avenue",
         "parent_name": "Lenox Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": -0.30972222222222223,
         "first_stops": ["224S"],
         "last_stops": ["227S"]
      }, {
         "name": "7 Avenue Express",
         "parent_name": "7 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": 0.07051618547681539,
         "first_stops": ["120S"],
         "last_stops": ["137S"]
      }, {
         "name": "Eastern Parkway Local",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.018011661034916863,
         "first_stops": ["137S", "640S", "234S"],
         "last_stops": ["250S", "241S", "239S"]
      }, {
         "name": "Nostrand Avenue",
         "parent_name": "Nostrand Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 8,
         "delay": 2,
         "travel_time": 0.09083333333333334,
         "first_stops": ["241S"],
         "last_stops": ["247S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "3",
      "name": "3",
      "color": "#db2828",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 10,
      "destinations": {
         "north": ["Harlem - 148 St"],
         "south": ["New Lots Av"]
      },
      "scheduled_destinations": {
         "north": ["Harlem - 148 St"],
         "south": ["New Lots Av"]
      },
      "north": [{
         "name": "New Lots",
         "parent_name": "New Lots",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": 0.20493827160493827,
         "first_stops": ["257N"],
         "last_stops": ["251N"]
      }, {
         "name": "Eastern Parkway Local",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": -0.023230231925884116,
         "first_stops": ["250N", "241N", "239N"],
         "last_stops": ["137N", "640N", "234N"]
      }, {
         "name": "7 Avenue Express",
         "parent_name": "7 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": -0.0070707070707071214,
         "first_stops": ["137N"],
         "last_stops": ["120N"]
      }, {
         "name": "Lenox Avenue",
         "parent_name": "Lenox Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 12,
         "delay": 2,
         "travel_time": 0.12263374485596702,
         "first_stops": ["227N"],
         "last_stops": ["224N"]
      }],
      "south": [{
         "name": "Lenox Avenue",
         "parent_name": "Lenox Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.30972222222222223,
         "first_stops": ["224S"],
         "last_stops": ["227S"]
      }, {
         "name": "7 Avenue Express",
         "parent_name": "7 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": 0.07051618547681539,
         "first_stops": ["120S"],
         "last_stops": ["137S"]
      }, {
         "name": "Eastern Parkway Local",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": -0.018011661034916863,
         "first_stops": ["137S", "640S", "234S"],
         "last_stops": ["250S", "241S", "239S"]
      }, {
         "name": "New Lots",
         "parent_name": "New Lots",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 18,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": 0.12163742690058478,
         "first_stops": ["251S"],
         "last_stops": ["257S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "4",
      "name": "4",
      "color": "#21ba45",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 4,
      "destinations": {
         "north": ["Woodlawn", "Burnside Av"],
         "south": ["Crown Hts - Utica Av"]
      },
      "scheduled_destinations": {
         "north": ["Burnside Av", "Woodlawn"],
         "south": ["Crown Hts - Utica Av"]
      },
      "north": [{
         "name": "Eastern Parkway Express",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.0837773807160346,
         "first_stops": ["250N", "241N", "239N"],
         "last_stops": ["137N", "640N", "234N"]
      }, {
         "name": "Lexington Avenue Express",
         "parent_name": "Lexington Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.06621168582375479,
         "first_stops": ["640N"],
         "last_stops": ["621N"]
      }, {
         "name": "Jerome Avenue",
         "parent_name": "Jerome Avenue",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.16333333333333336,
         "first_stops": ["415N"],
         "last_stops": ["401N"]
      }],
      "south": [{
         "name": "Jerome Avenue",
         "parent_name": "Jerome Avenue",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.01628787878787875,
         "first_stops": ["401S"],
         "last_stops": ["415S"]
      }, {
         "name": "Lexington Avenue Express",
         "parent_name": "Lexington Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": -0.03544715447154471,
         "first_stops": ["621S"],
         "last_stops": ["640S"]
      }, {
         "name": "Eastern Parkway Express",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": -0.004805575935436571,
         "first_stops": ["137S", "640S", "234S"],
         "last_stops": ["250S", "241S", "239S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "5",
      "name": "5",
      "color": "#21ba45",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 9,
      "destinations": {
         "north": ["Eastchester - Dyre Av", "E 180 St"],
         "south": ["Flatbush Av - Brooklyn College"]
      },
      "scheduled_destinations": {
         "north": ["E 180 St", "Eastchester - Dyre Av"],
         "south": ["Flatbush Av - Brooklyn College"]
      },
      "north": [{
         "name": "Nostrand Avenue",
         "parent_name": "Nostrand Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": 4.60087416609427e-05,
         "first_stops": ["247N"],
         "last_stops": ["241N"]
      }, {
         "name": "Eastern Parkway Express",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.0837773807160346,
         "first_stops": ["250N", "241N", "239N"],
         "last_stops": ["137N", "640N", "234N"]
      }, {
         "name": "Lexington Avenue Express",
         "parent_name": "Lexington Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 9,
         "delay": 0,
         "travel_time": -0.06621168582375479,
         "first_stops": ["640N"],
         "last_stops": ["621N"]
      }, {
         "name": "White Plains Road Local",
         "parent_name": "White Plains Road",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.11741324921135643,
         "first_stops": ["222N"],
         "last_stops": ["213N"]
      }, {
         "name": "White Plains Road Express",
         "parent_name": "White Plains Road",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 35,
         "max_scheduled_headway": 34,
         "delay": 0,
         "travel_time": -0.009722222222222262,
         "first_stops": ["222N"],
         "last_stops": ["213N"]
      }, {
         "name": "Dyre Avenue",
         "parent_name": "Dyre Avenue",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 9,
         "delay": 1,
         "travel_time": -0.2618556701030928,
         "first_stops": ["505N"],
         "last_stops": ["501N"]
      }],
      "south": [{
         "name": "Dyre Avenue",
         "parent_name": "Dyre Avenue",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.09541666666666668,
         "first_stops": ["501S"],
         "last_stops": ["505S"]
      }, {
         "name": "White Plains Road Local",
         "parent_name": "White Plains Road",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.03318950017979149,
         "first_stops": ["213S"],
         "last_stops": ["222S"]
      }, {
         "name": "Lexington Avenue Express",
         "parent_name": "Lexington Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.03544715447154471,
         "first_stops": ["621S"],
         "last_stops": ["640S"]
      }, {
         "name": "Eastern Parkway Express",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.004805575935436571,
         "first_stops": ["137S", "640S", "234S"],
         "last_stops": ["250S", "241S", "239S"]
      }, {
         "name": "Nostrand Avenue",
         "parent_name": "Nostrand Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 8,
         "delay": 2,
         "travel_time": 0.09083333333333334,
         "first_stops": ["241S"],
         "last_stops": ["247S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "6",
      "name": "6",
      "color": "#21ba45",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 7,
      "destinations": {
         "north": ["Pelham Bay Park", "Parkchester"],
         "south": ["Brooklyn Bridge - City Hall"]
      },
      "scheduled_destinations": {
         "north": ["Parkchester", "Pelham Bay Park"],
         "south": ["Brooklyn Bridge - City Hall"]
      },
      "north": [{
         "name": "Lexington Avenue Local",
         "parent_name": "Lexington Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 5,
         "max_scheduled_headway": 4,
         "delay": 0,
         "travel_time": 0.026136363636363687,
         "first_stops": ["640N"],
         "last_stops": ["621N"]
      }, {
         "name": "Pelham Local",
         "parent_name": "Pelham",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 4,
         "delay": 0,
         "travel_time": 0.06635071090047401,
         "first_stops": ["621N", "621N", "619N"],
         "last_stops": ["601N"]
      }],
      "south": [{
         "name": "Pelham Local",
         "parent_name": "Pelham",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": null,
         "first_stops": ["601S"],
         "last_stops": ["621S", "621S", "619S"]
      }, {
         "name": "Lexington Avenue Local",
         "parent_name": "Lexington Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": 0.026074700493305104,
         "first_stops": ["621S"],
         "last_stops": ["640S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "6X",
      "name": "6X",
      "color": "#21ba45",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "max_headway_discrepancy": 0,
      "destinations": {
         "north": [],
         "south": ["Brooklyn Bridge - City Hall"]
      },
      "scheduled_destinations": {
         "north": [],
         "south": ["Brooklyn Bridge - City Hall"]
      },
      "north": [],
      "south": [{
         "name": "Pelham Express",
         "parent_name": "Pelham",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": 0.019999999999999993,
         "first_stops": ["601S"],
         "last_stops": ["621S", "621S", "619S"]
      }, {
         "name": "Lexington Avenue Local",
         "parent_name": "Lexington Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": 0.026074700493305104,
         "first_stops": ["621S"],
         "last_stops": ["640S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": false
   }, {
      "id": "7",
      "name": "7",
      "color": "#a333c8",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 4,
      "destinations": {
         "north": ["Mets - Willets Point", "Flushing - Main St"],
         "south": ["34 St - Hudson Yards"]
      },
      "scheduled_destinations": {
         "north": ["Flushing - Main St"],
         "south": ["34 St - Hudson Yards"]
      },
      "north": [{
         "name": "34 St–Hudson Yds—Queensboro Plz",
         "parent_name": "Flushing (34 Street–Hudson Yards—Queensboro Plaza)",
         "boroughs": ["Queens", "Manhattan"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 5,
         "delay": 0,
         "travel_time": 0.051111111111111135,
         "first_stops": ["726N"],
         "last_stops": ["718N", "718N", "719N"]
      }, {
         "name": "Flushing Local",
         "parent_name": "Flushing",
         "boroughs": ["Queens"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 5,
         "delay": 2,
         "travel_time": 0.10556510015408316,
         "first_stops": ["718N", "718N", "712N"],
         "last_stops": ["701N", "702N", "701N"]
      }],
      "south": [{
         "name": "Flushing Local",
         "parent_name": "Flushing",
         "boroughs": ["Queens"],
         "max_actual_headway": 5,
         "max_scheduled_headway": 5,
         "delay": 1,
         "travel_time": -0.01872613202400438,
         "first_stops": ["701S", "702S", "701S"],
         "last_stops": ["718S", "718S", "712S"]
      }, {
         "name": "34 St–Hudson Yds—Queensboro Plz",
         "parent_name": "Flushing (34 Street–Hudson Yards—Queensboro Plaza)",
         "boroughs": ["Queens", "Manhattan"],
         "max_actual_headway": 7,
         "max_scheduled_headway": 5,
         "delay": 1,
         "travel_time": 0.004687500000000039,
         "first_stops": ["718S", "718S", "719S"],
         "last_stops": ["726S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "7X",
      "name": "7X",
      "color": "#a333c8",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Scheduled",
      "max_headway_discrepancy": null,
      "destinations": {
         "north": [],
         "south": []
      },
      "scheduled_destinations": {
         "north": [],
         "south": []
      },
      "north": [],
      "south": [],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": false,
      "visible": false
   }, {
      "id": "A",
      "name": "A",
      "color": "#2185d0",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 9,
      "destinations": {
         "north": ["Inwood - 207 St"],
         "south": ["Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
      },
      "scheduled_destinations": {
         "north": ["Inwood - 207 St"],
         "south": ["Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
      },
      "north": [{
         "name": "Lefferts Blvd Branch",
         "parent_name": "Fulton Street (Lefferts Boulevard Branch)",
         "boroughs": ["Queens"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 20,
         "delay": 0,
         "travel_time": -0.23333333333333334,
         "first_stops": ["A65N"],
         "last_stops": ["A63N"]
      }, {
         "name": "Rockaway (Far Rockaway Branch)",
         "parent_name": "Rockaway (Far Rockaway Branch)",
         "boroughs": ["Queens"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 20,
         "delay": 0,
         "travel_time": null,
         "first_stops": ["H11N"],
         "last_stops": ["A61N", "A61N", "H06N"]
      }, {
         "name": "Fulton Street Express",
         "parent_name": "Fulton Street",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 3,
         "travel_time": 0.031400966183574845,
         "first_stops": ["A55N"],
         "last_stops": ["A41N", "A41N", "A46N"]
      }, {
         "name": "via Chambers St",
         "parent_name": "Cranberry Street (8 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 3,
         "travel_time": 0.3535536970662418,
         "first_stops": ["A41N", "A41N", "A40N"],
         "last_stops": ["A33N", "A32N", "A36N"]
      }, {
         "name": "8 Avenue Express",
         "parent_name": "8 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 9,
         "delay": 3,
         "travel_time": -0.022222222222222227,
         "first_stops": ["A32N"],
         "last_stops": ["A24N", "D14N", "A24N"]
      }, {
         "name": "Central Park West Express",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 9,
         "delay": 3,
         "travel_time": -0.054947916666666666,
         "first_stops": ["A24N"],
         "last_stops": ["A15N"]
      }, {
         "name": "Washington Heights (8 Avenue)",
         "parent_name": "Washington Heights (8 Avenue)",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 18,
         "max_scheduled_headway": 9,
         "delay": 1,
         "travel_time": -0.24074074074074078,
         "first_stops": ["A07N"],
         "last_stops": ["A02N"]
      }],
      "south": [{
         "name": "Washington Heights (8 Avenue)",
         "parent_name": "Washington Heights (8 Avenue)",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.05952380952380953,
         "first_stops": ["A02S"],
         "last_stops": ["A07S"]
      }, {
         "name": "Central Park West Express",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.06631944444444444,
         "first_stops": ["A15S"],
         "last_stops": ["A24S"]
      }, {
         "name": "8 Avenue Express",
         "parent_name": "8 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.0215962441314554,
         "first_stops": ["A24S", "D14S", "A24S"],
         "last_stops": ["A32S"]
      }, {
         "name": "via Chambers St",
         "parent_name": "Cranberry Street (8 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.14442290552584672,
         "first_stops": ["A33S", "A32S", "A36S"],
         "last_stops": ["A41S", "A41S", "A40S"]
      }, {
         "name": "Fulton Street Express",
         "parent_name": "Fulton Street",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 1,
         "travel_time": 0.09629629629629628,
         "first_stops": ["A41S", "A41S", "A42S"],
         "last_stops": ["A55S"]
      }, {
         "name": "Lefferts Blvd Branch",
         "parent_name": "Fulton Street (Lefferts Boulevard Branch)",
         "boroughs": ["Queens"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 17,
         "delay": 1,
         "travel_time": -0.0488888888888889,
         "first_stops": ["A63S"],
         "last_stops": ["A65S"]
      }, {
         "name": "Rockaway (Far Rockaway Branch)",
         "parent_name": "Rockaway (Far Rockaway Branch)",
         "boroughs": ["Queens"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 17,
         "delay": 1,
         "travel_time": -0.1258064516129032,
         "first_stops": ["A61S", "A61S", "H06S"],
         "last_stops": ["H11S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "B",
      "name": "B",
      "color": "#f2711c",
      "text_color": null,
      "alternate_name": null,
      "status": "Delay",
      "max_headway_discrepancy": 4,
      "destinations": {
         "north": ["145 St"],
         "south": ["Brighton Beach"]
      },
      "scheduled_destinations": {
         "north": ["145 St"],
         "south": ["Brighton Beach"]
      },
      "north": [{
         "name": "Brighton Express",
         "parent_name": "Brighton",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 4,
         "travel_time": -0.16891025641025645,
         "first_stops": ["D43N", "D40N", "D40N"],
         "last_stops": ["D24N"]
      }, {
         "name": "via Manhattan Bridge (North Side)",
         "parent_name": "Manhattan Bridge (6 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 10,
         "delay": 4,
         "travel_time": 0.19746588693957115,
         "first_stops": ["R31N", "D24N", "D22N"],
         "last_stops": ["D22N"]
      }, {
         "name": "6 Avenue Express",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 10,
         "delay": 5,
         "travel_time": 0.18854166666666664,
         "first_stops": ["D21N"],
         "last_stops": ["D15N"]
      }, {
         "name": "Central Park West Local",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 10,
         "delay": 5,
         "travel_time": 0.0961352657004831,
         "first_stops": ["A24N"],
         "last_stops": ["A15N"]
      }],
      "south": [{
         "name": "Central Park West Local",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.09542857142857149,
         "first_stops": ["A15S"],
         "last_stops": ["A24S"]
      }, {
         "name": "6 Avenue Express",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.09958333333333333,
         "first_stops": ["D15S"],
         "last_stops": ["D21S"]
      }, {
         "name": "via Manhattan Bridge (North Side)",
         "parent_name": "Manhattan Bridge (6 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.09143589743589745,
         "first_stops": ["D22S"],
         "last_stops": ["R31S", "D24S", "D22S"]
      }, {
         "name": "Brighton Express",
         "parent_name": "Brighton",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 3,
         "travel_time": 0.06923076923076926,
         "first_stops": ["D24S"],
         "last_stops": ["D43S", "D40S", "D40S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "C",
      "name": "C",
      "color": "#2185d0",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 1,
      "destinations": {
         "north": ["168 St"],
         "south": ["Euclid Av"]
      },
      "scheduled_destinations": {
         "north": ["168 St"],
         "south": ["Euclid Av"]
      },
      "north": [{
         "name": "Fulton Street Local",
         "parent_name": "Fulton Street",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 1,
         "travel_time": 0.06433823529411759,
         "first_stops": ["A55N"],
         "last_stops": ["A41N", "A41N", "A46N"]
      }, {
         "name": "via Chambers St",
         "parent_name": "Cranberry Street (8 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 1,
         "travel_time": 0.3535536970662418,
         "first_stops": ["A41N", "A41N", "A40N"],
         "last_stops": ["A33N", "A32N", "A36N"]
      }, {
         "name": "8 Avenue Local",
         "parent_name": "8 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 11,
         "delay": 2,
         "travel_time": -0.02080139841333869,
         "first_stops": ["A32N"],
         "last_stops": ["A24N", "D14N", "A24N"]
      }, {
         "name": "Central Park West Local",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 11,
         "delay": 2,
         "travel_time": 0.0961352657004831,
         "first_stops": ["A24N"],
         "last_stops": ["A15N"]
      }],
      "south": [{
         "name": "Central Park West Local",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": 0.09542857142857149,
         "first_stops": ["A15S"],
         "last_stops": ["A24S"]
      }, {
         "name": "8 Avenue Local",
         "parent_name": "8 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": 0.01874999999999998,
         "first_stops": ["A24S", "D14S", "A24S"],
         "last_stops": ["A32S"]
      }, {
         "name": "via Chambers St",
         "parent_name": "Cranberry Street (8 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 12,
         "delay": 2,
         "travel_time": 0.14442290552584672,
         "first_stops": ["A33S", "A32S", "A36S"],
         "last_stops": ["A41S", "A41S", "A40S"]
      }, {
         "name": "Fulton Street Local",
         "parent_name": "Fulton Street",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 11,
         "delay": 1,
         "travel_time": 0.11428571428571431,
         "first_stops": ["A41S", "A41S", "A42S"],
         "last_stops": ["A55S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "D",
      "name": "D",
      "color": "#f2711c",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 2,
      "destinations": {
         "north": ["Norwood - 205 St"],
         "south": ["Coney Island - Stillwell Av", "Bedford Park Blvd"]
      },
      "scheduled_destinations": {
         "north": ["Norwood - 205 St"],
         "south": ["Coney Island - Stillwell Av"]
      },
      "north": [{
         "name": "West End",
         "parent_name": "West End",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 1,
         "travel_time": 0.02631578947368421,
         "first_stops": ["B23N"],
         "last_stops": ["B12N"]
      }, {
         "name": "4 Avenue Express",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 1,
         "travel_time": -0.03013468013468015,
         "first_stops": ["R41N", "R36N", "R36N"],
         "last_stops": ["R31N"]
      }, {
         "name": "via Manhattan Bridge (North Side)",
         "parent_name": "Manhattan Bridge (6 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 1,
         "travel_time": 0.19746588693957115,
         "first_stops": ["R31N", "D24N", "D22N"],
         "last_stops": ["D22N"]
      }, {
         "name": "6 Avenue Express",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 1,
         "travel_time": 0.18854166666666664,
         "first_stops": ["D21N"],
         "last_stops": ["D15N"]
      }, {
         "name": "Central Park West Express",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 1,
         "travel_time": -0.054947916666666666,
         "first_stops": ["A24N"],
         "last_stops": ["A15N"]
      }, {
         "name": "Concourse Local",
         "parent_name": "Concourse",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": -0.12863247863247865,
         "first_stops": ["D13N"],
         "last_stops": ["D03N"]
      }],
      "south": [{
         "name": "Concourse Local",
         "parent_name": "Concourse",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.04074074074074079,
         "first_stops": ["D03S"],
         "last_stops": ["D13S"]
      }, {
         "name": "Central Park West Express",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.06631944444444444,
         "first_stops": ["A15S"],
         "last_stops": ["A24S"]
      }, {
         "name": "6 Avenue Express",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.09958333333333333,
         "first_stops": ["D15S"],
         "last_stops": ["D21S"]
      }, {
         "name": "via Manhattan Bridge (North Side)",
         "parent_name": "Manhattan Bridge (6 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.09143589743589745,
         "first_stops": ["D22S"],
         "last_stops": ["R31S", "D24S", "D22S"]
      }, {
         "name": "4 Avenue Express",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 1,
         "travel_time": 0.2628787878787879,
         "first_stops": ["R31S"],
         "last_stops": ["R41S", "R36S", "R36S"]
      }, {
         "name": "West End",
         "parent_name": "West End",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 11,
         "delay": 1,
         "travel_time": -0.17037037037037037,
         "first_stops": ["B12S"],
         "last_stops": ["B23S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "E",
      "name": "E",
      "color": "#2185d0",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 6,
      "destinations": {
         "north": ["Jamaica Center - Parsons/Archer"],
         "south": ["World Trade Center"]
      },
      "scheduled_destinations": {
         "north": ["Jamaica Center - Parsons/Archer"],
         "south": ["World Trade Center"]
      },
      "north": [{
         "name": "8 Avenue Local",
         "parent_name": "8 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 7,
         "max_scheduled_headway": 7,
         "delay": 0,
         "travel_time": -0.02080139841333869,
         "first_stops": ["A32N"],
         "last_stops": ["A24N", "D14N", "A24N"]
      }, {
         "name": "via 53 St",
         "parent_name": "53 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 7,
         "max_scheduled_headway": 7,
         "delay": 0,
         "travel_time": 0.18397551409794358,
         "first_stops": ["D14N", "D15N", "F12N"],
         "last_stops": ["G21N", "G21N", "F09N"]
      }, {
         "name": "Queens Boulevard Express",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 7,
         "delay": 1,
         "travel_time": 0.122959706959707,
         "first_stops": ["B04N", "G21N", "G14N"],
         "last_stops": ["G08N"]
      }, {
         "name": "Forest Hills—Jamaica Express",
         "parent_name": "Queens Boulevard (Eastern Queens)",
         "boroughs": ["Queens"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 7,
         "delay": 1,
         "travel_time": -0.11656184486373165,
         "first_stops": ["G08N"],
         "last_stops": ["F01N", "G05N", "F06N"]
      }],
      "south": [{
         "name": "Forest Hills—Jamaica Express",
         "parent_name": "Queens Boulevard (Eastern Queens)",
         "boroughs": ["Queens"],
         "max_actual_headway": 7,
         "max_scheduled_headway": 7,
         "delay": 0,
         "travel_time": -0.05624999999999995,
         "first_stops": ["F01S", "G05S", "F06S"],
         "last_stops": ["G08S"]
      }, {
         "name": "Queens Boulevard Express",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 7,
         "max_scheduled_headway": 7,
         "delay": 0,
         "travel_time": -0.03901234567901235,
         "first_stops": ["G08S"],
         "last_stops": ["B04S", "G21S", "G14S"]
      }, {
         "name": "via 53 St",
         "parent_name": "53 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 9,
         "delay": 0,
         "travel_time": -0.02539682539682539,
         "first_stops": ["G21S", "G21S", "F09S"],
         "last_stops": ["D14S", "D15S", "F12S"]
      }, {
         "name": "8 Avenue Local",
         "parent_name": "8 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 7,
         "delay": 0,
         "travel_time": 0.01874999999999998,
         "first_stops": ["A24S", "D14S", "A24S"],
         "last_stops": ["A32S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "F",
      "name": "F",
      "color": "#f2711c",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 5,
      "destinations": {
         "north": ["Jamaica - 179 St"],
         "south": ["Coney Island - Stillwell Av"]
      },
      "scheduled_destinations": {
         "north": ["Jamaica - 179 St"],
         "south": ["Coney Island - Stillwell Av"]
      },
      "north": [{
         "name": "Kings Hwy—Coney Island",
         "parent_name": "Culver (Kings Highway—Coney Island)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.36527777777777776,
         "first_stops": ["F39N"],
         "last_stops": ["F36N"]
      }, {
         "name": "Church Av—Kings Hwy",
         "parent_name": "Culver (Church Avenue—Kings Highway)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": 0.29444444444444445,
         "first_stops": ["F35N"],
         "last_stops": ["F27N", "F27N", "F29N"]
      }, {
         "name": "Culver",
         "parent_name": "Culver",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 9,
         "delay": 1,
         "travel_time": -0.010052910052910048,
         "first_stops": ["F27N"],
         "last_stops": ["F20N"]
      }, {
         "name": "via Delancey St",
         "parent_name": "Rutgers Street (6 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 9,
         "delay": 1,
         "travel_time": 0.02148148148148144,
         "first_stops": ["A41N", "A41N", "F18N"],
         "last_stops": ["D21N", "D21N", "F15N"]
      }, {
         "name": "6 Avenue Local",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 9,
         "delay": 1,
         "travel_time": 0.008253968253968291,
         "first_stops": ["D21N"],
         "last_stops": ["D15N"]
      }, {
         "name": "via 63 St",
         "parent_name": "63 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 9,
         "delay": 1,
         "travel_time": -0.0875850340136055,
         "first_stops": ["D15N", "D15N", "B06N"],
         "last_stops": ["B04N", "B04N", "B04N"]
      }, {
         "name": "Queens Boulevard Express",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 9,
         "delay": 0,
         "travel_time": 0.122959706959707,
         "first_stops": ["B04N", "G21N", "G14N"],
         "last_stops": ["G08N"]
      }, {
         "name": "Forest Hills—Jamaica Local",
         "parent_name": "Queens Boulevard (Eastern Queens)",
         "boroughs": ["Queens"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 9,
         "delay": 0,
         "travel_time": -0.08070175438596491,
         "first_stops": ["G08N"],
         "last_stops": ["F01N", "G05N", "F06N"]
      }],
      "south": [{
         "name": "Forest Hills—Jamaica Local",
         "parent_name": "Queens Boulevard (Eastern Queens)",
         "boroughs": ["Queens"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": 0.11933333333333335,
         "first_stops": ["F01S", "G05S", "F06S"],
         "last_stops": ["G08S"]
      }, {
         "name": "Queens Boulevard Express",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.03901234567901235,
         "first_stops": ["G08S"],
         "last_stops": ["B04S", "G21S", "G14S"]
      }, {
         "name": "via 63 St",
         "parent_name": "63 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": 0.13038461538461546,
         "first_stops": ["B04S", "B04S", "B04S"],
         "last_stops": ["D15S", "D15S", "B06S"]
      }, {
         "name": "6 Avenue Local",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 8,
         "delay": 1,
         "travel_time": 0.10685185185185186,
         "first_stops": ["D15S"],
         "last_stops": ["D21S"]
      }, {
         "name": "via Delancey St",
         "parent_name": "Rutgers Street (6 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 7,
         "delay": 1,
         "travel_time": 0.0026041666666667043,
         "first_stops": ["D21S", "D21S", "F15S"],
         "last_stops": ["A41S", "A41S", "F18S"]
      }, {
         "name": "Culver",
         "parent_name": "Culver",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 7,
         "delay": 1,
         "travel_time": 0.08447488584474888,
         "first_stops": ["F20S"],
         "last_stops": ["F27S"]
      }, {
         "name": "Church Av—Kings Hwy",
         "parent_name": "Culver (Church Avenue—Kings Highway)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 7,
         "delay": 1,
         "travel_time": 0.17606837606837616,
         "first_stops": ["F27S", "F27NS", "F29S"],
         "last_stops": ["F35S"]
      }, {
         "name": "Kings Hwy—Coney Island",
         "parent_name": "Culver (Kings Highway—Coney Island)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 7,
         "delay": 1,
         "travel_time": 0.16190476190476188,
         "first_stops": ["F36S"],
         "last_stops": ["F39S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "G",
      "name": "G",
      "color": "#b5cc18",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "max_headway_discrepancy": 2,
      "destinations": {
         "north": ["Court Sq"],
         "south": ["Church Av"]
      },
      "scheduled_destinations": {
         "north": ["Court Sq"],
         "south": ["Church Av"]
      },
      "north": [{
         "name": "Culver",
         "parent_name": "Culver",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": -0.010052910052910048,
         "first_stops": ["F27N"],
         "last_stops": ["F20N"]
      }, {
         "name": "Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts",
         "parent_name": "Crosstown (Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": 0.07045454545454545,
         "first_stops": ["A42N", "A42N", "G36N"],
         "last_stops": ["G33N", "G33N", "G34N"]
      }, {
         "name": "Court Sq—Bedford–Nostrand Avs",
         "parent_name": "Crosstown (Court Sq—Bedford–Nostrand Avs)",
         "boroughs": ["Queens", "Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 11,
         "delay": 1,
         "travel_time": 0.19444444444444436,
         "first_stops": ["G33N", "G33N", "G32N"],
         "last_stops": ["G22N"]
      }],
      "south": [{
         "name": "Court Sq—Bedford–Nostrand Avs",
         "parent_name": "Crosstown (Court Sq—Bedford–Nostrand Avs)",
         "boroughs": ["Queens", "Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": 0.05308641975308643,
         "first_stops": ["G22S"],
         "last_stops": ["G33S", "G33S", "G32S"]
      }, {
         "name": "Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts",
         "parent_name": "Crosstown (Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": -0.06750000000000002,
         "first_stops": ["G33S", "G33S", "G34S"],
         "last_stops": ["A42S", "A42S", "G36S"]
      }, {
         "name": "Culver",
         "parent_name": "Culver",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 12,
         "delay": 0,
         "travel_time": 0.08447488584474888,
         "first_stops": ["F20S"],
         "last_stops": ["F27S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "J",
      "name": "J",
      "color": "#a5673f",
      "text_color": null,
      "alternate_name": null,
      "status": "Service Change",
      "max_headway_discrepancy": 1,
      "destinations": {
         "north": ["Jamaica Center - Parsons/Archer"],
         "south": ["Broad St"]
      },
      "scheduled_destinations": {
         "north": ["Jamaica Center - Parsons/Archer"],
         "south": ["Broad St"]
      },
      "north": [{
         "name": "Nassau Street",
         "parent_name": "Nassau Street",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.05317460317460319,
         "first_stops": ["M23N"],
         "last_stops": ["M19N"]
      }, {
         "name": "via Williamsburg Bridge",
         "parent_name": "Williamsburg Bridge",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.19803675856307434,
         "first_stops": ["D21N", "M19N", "M18N"],
         "last_stops": ["M16N"]
      }, {
         "name": "Broadway (Brooklyn) Local",
         "parent_name": "Broadway (Brooklyn)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.4324093816631131,
         "first_stops": ["M16N"],
         "last_stops": ["M11N"]
      }, {
         "name": "Myrtle Av—Crescent St",
         "parent_name": "Jamaica (Myrtle Avenue—Crescent Street)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.017499999999999998,
         "first_stops": ["M11N", "J27N", "J27N"],
         "last_stops": ["J20N", "J20N", "J24N"]
      }, {
         "name": "Crescent St—Jamaica Ctr",
         "parent_name": "Jamaica (Crescent Street—Jamaica Center)",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": 0.15757575757575767,
         "first_stops": ["J20N", "J20N", "J15N"],
         "last_stops": ["G05N", "G05N", "J15N"]
      }],
      "south": [{
         "name": "Crescent St—Jamaica Ctr",
         "parent_name": "Jamaica (Crescent Street—Jamaica Center)",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.22525252525252515,
         "first_stops": ["G05S", "G05S", "J15S"],
         "last_stops": ["J20S", "J20S", "J15S"]
      }, {
         "name": "Myrtle Av—Crescent St",
         "parent_name": "Jamaica (Myrtle Avenue—Crescent Street)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.040595238095238115,
         "first_stops": ["J20S", "J20S", "J24S"],
         "last_stops": ["M11S", "J27S", "J27S"]
      }, {
         "name": "Broadway (Brooklyn) Local",
         "parent_name": "Broadway (Brooklyn)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": null,
         "delay": 1,
         "travel_time": 0.48999999999999994,
         "first_stops": ["M11S"],
         "last_stops": ["M16S"]
      }, {
         "name": "via Williamsburg Bridge",
         "parent_name": "Williamsburg Bridge",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 1,
         "travel_time": -0.07037037037037037,
         "first_stops": ["M16S"],
         "last_stops": ["M19S", "D21S", "M18S"]
      }, {
         "name": "Nassau Street",
         "parent_name": "Nassau Street",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 1,
         "travel_time": 0.22727272727272727,
         "first_stops": ["M19S"],
         "last_stops": ["M23S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "L",
      "name": "L",
      "color": "#A0A0A0",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 4,
      "destinations": {
         "north": ["8 Av"],
         "south": ["Canarsie - Rockaway Pkwy"]
      },
      "scheduled_destinations": {
         "north": ["8 Av"],
         "south": ["Canarsie - Rockaway Pkwy"]
      },
      "north": [{
         "name": "Broadway Jct—Rockaway Pkwy",
         "parent_name": "Canarsie (Broadway Junction—Rockaway Parkway)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 4,
         "max_scheduled_headway": 5,
         "delay": 0,
         "travel_time": -0.05800865800865799,
         "first_stops": ["L29N"],
         "last_stops": ["L22N", "L22N", "L24N"]
      }, {
         "name": "Myrtle Av—Broadway Jct",
         "parent_name": "Canarsie (Myrtle Avenue—Broadway Junction)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 4,
         "max_scheduled_headway": 5,
         "delay": 0,
         "travel_time": -0.015384615384615389,
         "first_stops": ["L22N", "L22N", "L21N"],
         "last_stops": ["L17N", "L17N", "L19N"]
      }, {
         "name": "Lorimer St—Myrtle Av",
         "parent_name": "Canarsie (Lorimer Street—Myrtle Avenue)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 6,
         "max_scheduled_headway": 5,
         "delay": 0,
         "travel_time": -0.08511904761904757,
         "first_stops": ["L17N"],
         "last_stops": ["L10N"]
      }, {
         "name": "14 Street",
         "parent_name": "14 Street",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 6,
         "max_scheduled_headway": 4,
         "delay": 0,
         "travel_time": 0.2627083333333333,
         "first_stops": ["L10N", "L10N", "L08N"],
         "last_stops": ["L01N"]
      }],
      "south": [{
         "name": "14 Street",
         "parent_name": "14 Street",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 4,
         "max_scheduled_headway": 4,
         "delay": 0,
         "travel_time": 0.09880952380952382,
         "first_stops": ["L01S"],
         "last_stops": ["L10S", "L10S", "L08S"]
      }, {
         "name": "Lorimer St—Myrtle Av",
         "parent_name": "Canarsie (Lorimer Street—Myrtle Avenue)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 5,
         "max_scheduled_headway": 4,
         "delay": 1,
         "travel_time": -0.0285714285714286,
         "first_stops": ["L10S"],
         "last_stops": ["L17S"]
      }, {
         "name": "Myrtle Av—Broadway Jct",
         "parent_name": "Canarsie (Myrtle Avenue—Broadway Junction)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 5,
         "max_scheduled_headway": 4,
         "delay": 1,
         "travel_time": -0.04289617486338799,
         "first_stops": ["L17S", "L17S", "L19S"],
         "last_stops": ["L22S", "L22S", "L21S"]
      }, {
         "name": "Broadway Jct—Rockaway Pkwy",
         "parent_name": "Canarsie (Broadway Junction—Rockaway Parkway)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 4,
         "delay": 1,
         "travel_time": -0.07806267806267805,
         "first_stops": ["L22S", "L22S", "L24S"],
         "last_stops": ["L29S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "M",
      "name": "M",
      "color": "#f2711c",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 9,
      "destinations": {
         "north": ["Forest Hills - 71 Av"],
         "south": ["Middle Village - Metropolitan Av"]
      },
      "scheduled_destinations": {
         "north": ["Forest Hills - 71 Av"],
         "south": ["Middle Village - Metropolitan Av"]
      },
      "north": [{
         "name": "Myrtle Avenue",
         "parent_name": "Myrtle Avenue",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": 0.051666666666666666,
         "first_stops": ["M01N"],
         "last_stops": ["M10N"]
      }, {
         "name": "6 Avenue Local",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 1,
         "travel_time": 0.008253968253968291,
         "first_stops": ["D21N"],
         "last_stops": ["D15N"]
      }, {
         "name": "via 53 St",
         "parent_name": "53 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 1,
         "travel_time": 0.18397551409794358,
         "first_stops": ["D14N", "D15N", "F12N"],
         "last_stops": ["G21N", "G21N", "F09N"]
      }, {
         "name": "via Williamsburg Bridge",
         "parent_name": "Williamsburg Bridge",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 1,
         "travel_time": -0.19803675856307434,
         "first_stops": ["D21N", "M19N", "M18N"],
         "last_stops": ["M16N"]
      }, {
         "name": "Broadway (Brooklyn) Local",
         "parent_name": "Broadway (Brooklyn)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 1,
         "travel_time": 0.4324093816631131,
         "first_stops": ["M16N"],
         "last_stops": ["M11N"]
      }, {
         "name": "Queens Boulevard Local",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 11,
         "delay": 1,
         "travel_time": 0.2697916666666667,
         "first_stops": ["B04N", "G21N", "G14N"],
         "last_stops": ["G08N"]
      }],
      "south": [{
         "name": "Queens Boulevard Local",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.018257261410788407,
         "first_stops": ["G08S"],
         "last_stops": ["B04S", "G21S", "G14S"]
      }, {
         "name": "via 53 St",
         "parent_name": "53 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": -0.02539682539682539,
         "first_stops": ["G21S", "G21S", "F09S"],
         "last_stops": ["D14S", "D15S", "F12S"]
      }, {
         "name": "6 Avenue Local",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": 0.10685185185185186,
         "first_stops": ["D15S"],
         "last_stops": ["D21S"]
      }, {
         "name": "Broadway (Brooklyn) Local",
         "parent_name": "Broadway (Brooklyn)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": 0.48999999999999994,
         "first_stops": ["M11S"],
         "last_stops": ["M16S"]
      }, {
         "name": "via Williamsburg Bridge",
         "parent_name": "Williamsburg Bridge",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": -0.07037037037037037,
         "first_stops": ["M16S"],
         "last_stops": ["M19S", "D21S", "M18S"]
      }, {
         "name": "Myrtle Avenue",
         "parent_name": "Myrtle Avenue",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 13,
         "delay": 1,
         "travel_time": -0.31264367816091954,
         "first_stops": ["M10S"],
         "last_stops": ["M01S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "N",
      "name": "N",
      "color": "#fbbd08",
      "text_color": "#000000",
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 4,
      "destinations": {
         "north": ["Astoria - Ditmars Blvd"],
         "south": ["Coney Island - Stillwell Av"]
      },
      "scheduled_destinations": {
         "north": ["Astoria - Ditmars Blvd"],
         "south": ["Coney Island - Stillwell Av"]
      },
      "north": [{
         "name": "Sea Beach",
         "parent_name": "Sea Beach",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": 0.3090277777777778,
         "first_stops": ["N10N"],
         "last_stops": ["N02N"]
      }, {
         "name": "4 Avenue Express",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": -0.03013468013468015,
         "first_stops": ["R41N", "R36N", "R36N"],
         "last_stops": ["R31N"]
      }, {
         "name": "via Manhattan Bridge (South Side)",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": -0.0035471511556049973,
         "first_stops": ["R31N", "D24N", "Q01N"],
         "last_stops": ["R22N", "R20N", "Q01N"]
      }, {
         "name": "Broadway Express",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": -0.029480519480519503,
         "first_stops": ["R23N", "Q01N", "R20N"],
         "last_stops": ["R15N", "R14N", "R14N"]
      }, {
         "name": "via 59 St",
         "parent_name": "59 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": 0.03063295493636053,
         "first_stops": ["R14N", "R14N", "R13N"],
         "last_stops": ["R09N", "G21N", "R11N"]
      }, {
         "name": "Astoria",
         "parent_name": "Astoria",
         "boroughs": ["Queens"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.5525641025641026,
         "first_stops": ["R06N"],
         "last_stops": ["R01N"]
      }],
      "south": [{
         "name": "Astoria",
         "parent_name": "Astoria",
         "boroughs": ["Queens"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.27435897435897433,
         "first_stops": ["R01S"],
         "last_stops": ["R06S"]
      }, {
         "name": "via 59 St",
         "parent_name": "59 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.023261966285222084,
         "first_stops": ["R09S", "G21S", "R11S"],
         "last_stops": ["R14S", "R14S", "R13S"]
      }, {
         "name": "Broadway Express",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": 0.024115768624439118,
         "first_stops": ["R15S", "R14S", "R14S"],
         "last_stops": ["R23S", "Q01S", "R20S"]
      }, {
         "name": "via Manhattan Bridge (South Side)",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": 0.11248324062187989,
         "first_stops": ["R22S", "R20S", "Q01S"],
         "last_stops": ["R31S", "D24S", "Q01S"]
      }, {
         "name": "4 Avenue Express",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 10,
         "delay": 2,
         "travel_time": 0.2628787878787879,
         "first_stops": ["R31S"],
         "last_stops": ["R41S", "R36S", "R36S"]
      }, {
         "name": "Sea Beach",
         "parent_name": "Sea Beach",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 10,
         "delay": 3,
         "travel_time": -0.2849794238683127,
         "first_stops": ["N02S"],
         "last_stops": ["N10S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "Q",
      "name": "Q",
      "color": "#fbbd08",
      "text_color": "#000000",
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 5,
      "destinations": {
         "north": ["96 St"],
         "south": ["Coney Island - Stillwell Av"]
      },
      "scheduled_destinations": {
         "north": ["96 St"],
         "south": ["Coney Island - Stillwell Av"]
      },
      "north": [{
         "name": "Brighton Local",
         "parent_name": "Brighton",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 9,
         "delay": 0,
         "travel_time": -0.08545688545688546,
         "first_stops": ["D43N", "D40N", "D40N"],
         "last_stops": ["D24N"]
      }, {
         "name": "via Manhattan Bridge (South Side)",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 9,
         "delay": 0,
         "travel_time": -0.0035471511556049973,
         "first_stops": ["R31N", "D24N", "Q01N"],
         "last_stops": ["R22N", "R20N", "Q01N"]
      }, {
         "name": "Broadway Express",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 9,
         "delay": 2,
         "travel_time": -0.029480519480519503,
         "first_stops": ["R23N", "Q01N", "R20N"],
         "last_stops": ["R15N", "R14N", "R14N"]
      }, {
         "name": "2 Avenue",
         "parent_name": "2 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 9,
         "delay": 2,
         "travel_time": -0.26666666666666666,
         "first_stops": ["Q03N"],
         "last_stops": ["Q05N"]
      }],
      "south": [{
         "name": "2 Avenue",
         "parent_name": "2 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "delay": 0,
         "travel_time": -0.17499999999999996,
         "first_stops": ["Q05S"],
         "last_stops": ["Q03S"]
      }, {
         "name": "Broadway Express",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 9,
         "delay": 0,
         "travel_time": 0.024115768624439118,
         "first_stops": ["R15S", "R14S", "R14S"],
         "last_stops": ["R23S", "Q01S", "R20S"]
      }, {
         "name": "via Manhattan Bridge (South Side)",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.11248324062187989,
         "first_stops": ["R22S", "R20S", "Q01S"],
         "last_stops": ["R31S", "D24S", "Q01S"]
      }, {
         "name": "Brighton Local",
         "parent_name": "Brighton",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 11,
         "delay": 1,
         "travel_time": null,
         "first_stops": ["D24S"],
         "last_stops": ["D43S", "D40S", "D40S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "R",
      "name": "R",
      "color": "#fbbd08",
      "text_color": "#000000",
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 4,
      "destinations": {
         "north": ["Forest Hills - 71 Av"],
         "south": ["Bay Ridge - 95 St"]
      },
      "scheduled_destinations": {
         "north": ["Forest Hills - 71 Av"],
         "south": ["Bay Ridge - 95 St"]
      },
      "north": [{
         "name": "4 Avenue Local",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 11,
         "delay": 0,
         "travel_time": 0.05014005602240895,
         "first_stops": ["R41N", "R36N", "R36N"],
         "last_stops": ["R31N"]
      }, {
         "name": "via Whitehall St",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 11,
         "delay": 1,
         "travel_time": 0.04379877369007805,
         "first_stops": ["R31N", "D24N", "Q01N"],
         "last_stops": ["R22N", "R20N", "Q01N"]
      }, {
         "name": "Broadway Local",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 11,
         "delay": 1,
         "travel_time": 0.11169871794871798,
         "first_stops": ["R23N", "Q01N", "R20N"],
         "last_stops": ["R15N", "R14N", "R14N"]
      }, {
         "name": "via 59 St",
         "parent_name": "59 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 10,
         "delay": 3,
         "travel_time": 0.03063295493636053,
         "first_stops": ["R14N", "R14N", "R13N"],
         "last_stops": ["R09N", "G21N", "R11N"]
      }, {
         "name": "Queens Boulevard Local",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 11,
         "delay": 3,
         "travel_time": 0.2697916666666667,
         "first_stops": ["B04N", "G21N", "G14N"],
         "last_stops": ["G08N"]
      }],
      "south": [{
         "name": "Queens Boulevard Local",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.018257261410788407,
         "first_stops": ["G08S"],
         "last_stops": ["B04S", "G21S", "G14S"]
      }, {
         "name": "via 59 St",
         "parent_name": "59 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.023261966285222084,
         "first_stops": ["R09S", "G21S", "R11S"],
         "last_stops": ["R14S", "R14S", "R13S"]
      }, {
         "name": "Broadway Local",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.10525935801456258,
         "first_stops": ["R15S", "R14S", "R14S"],
         "last_stops": ["R23S", "Q01S", "R20S"]
      }, {
         "name": "via Whitehall St",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.019219404087663122,
         "first_stops": ["R22S", "R20S", "Q01S"],
         "last_stops": ["R31S", "D24S", "Q01S"]
      }, {
         "name": "4 Avenue Local",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.1479039891818797,
         "first_stops": ["R31S"],
         "last_stops": ["R41S", "R36S", "R36S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "GS",
      "name": "S",
      "color": "#767676",
      "text_color": null,
      "alternate_name": "42 St Shuttle",
      "status": "Good Service",
      "max_headway_discrepancy": 0,
      "destinations": {
         "north": ["Times Sq - 42 St"],
         "south": ["Grand Central - 42 St"]
      },
      "scheduled_destinations": {
         "north": ["Times Sq - 42 St"],
         "south": ["Grand Central - 42 St"]
      },
      "north": [{
         "name": "42 Street",
         "parent_name": "42 Street",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 5,
         "max_scheduled_headway": 5,
         "delay": 0,
         "travel_time": 0.07407407407407406,
         "first_stops": ["901N"],
         "last_stops": ["902N"]
      }],
      "south": [{
         "name": "42 Street",
         "parent_name": "42 Street",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 5,
         "max_scheduled_headway": 5,
         "delay": 0,
         "travel_time": 0.08333333333333337,
         "first_stops": ["902S"],
         "last_stops": ["901S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "FS",
      "name": "S",
      "color": "#767676",
      "text_color": null,
      "alternate_name": "Franklin Avenue Shuttle",
      "status": "No Service",
      "max_headway_discrepancy": null,
      "destinations": {
         "north": [],
         "south": []
      },
      "scheduled_destinations": {
         "north": ["Franklin Av"],
         "south": ["Prospect Park"]
      },
      "north": [],
      "south": [],
      "lines_not_in_service": {
         "north": [{
            "id": 59,
            "name": "Franklin Avenue",
            "is_visible": true,
            "boroughs": ["Brooklyn"]
         }],
         "south": [{
            "id": 59,
            "name": "Franklin Avenue",
            "is_visible": true,
            "boroughs": ["Brooklyn"]
         }]
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "H",
      "name": "S",
      "color": "#767676",
      "text_color": null,
      "alternate_name": "Rockaway Park Shuttle",
      "status": "Not Good",
      "max_headway_discrepancy": 0,
      "destinations": {
         "north": ["Broad Channel"],
         "south": ["Rockaway Park - Beach 116 St"]
      },
      "scheduled_destinations": {
         "north": ["Broad Channel"],
         "south": ["Rockaway Park - Beach 116 St"]
      },
      "north": [{
         "name": "Rockaway (Rockaway Park Branch)",
         "parent_name": "Rockaway (Rockaway Park Branch)",
         "boroughs": ["Queens"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 16,
         "delay": 0,
         "travel_time": -0.25217391304347825,
         "first_stops": ["H15N"],
         "last_stops": ["H04N", "H04N", "H12N"]
      }],
      "south": [{
         "name": "Rockaway (Rockaway Park Branch)",
         "parent_name": "Rockaway (Rockaway Park Branch)",
         "boroughs": ["Queens"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 16,
         "delay": 0,
         "travel_time": 0.43333333333333335,
         "first_stops": ["H04S", "H04S", "H12S"],
         "last_stops": ["H15S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "SI",
      "name": "SIR",
      "color": "#2185d0",
      "text_color": null,
      "alternate_name": null,
      "status": "Delay",
      "max_headway_discrepancy": 10,
      "destinations": {
         "north": ["St George"],
         "south": ["Tottenville"]
      },
      "scheduled_destinations": {
         "north": ["St George"],
         "south": ["Tottenville"]
      },
      "north": [{
         "name": "Staten Island",
         "parent_name": "Staten Island",
         "boroughs": ["Staten Island"],
         "max_actual_headway": 40,
         "max_scheduled_headway": 30,
         "delay": 26,
         "travel_time": null,
         "first_stops": ["S31N"],
         "last_stops": ["S09N"]
      }],
      "south": [{
         "name": "Staten Island",
         "parent_name": "Staten Island",
         "boroughs": ["Staten Island"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 30,
         "delay": 0,
         "travel_time": null,
         "first_stops": ["S09S"],
         "last_stops": ["S31S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": false
   }, {
      "id": "W",
      "name": "W",
      "color": "#fbbd08",
      "text_color": "#000000",
      "alternate_name": null,
      "status": "Not Good",
      "max_headway_discrepancy": 3,
      "destinations": {
         "north": ["Astoria - Ditmars Blvd"],
         "south": ["Whitehall St"]
      },
      "scheduled_destinations": {
         "north": ["Astoria - Ditmars Blvd"],
         "south": ["Whitehall St"]
      },
      "north": [{
         "name": "via Whitehall St",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.04379877369007805,
         "first_stops": ["R31N", "D24N", "Q01N"],
         "last_stops": ["R22N", "R20N", "Q01N"]
      }, {
         "name": "Broadway Local",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.11169871794871798,
         "first_stops": ["R23N", "Q01N", "R20N"],
         "last_stops": ["R15N", "R14N", "R14N"]
      }, {
         "name": "via 59 St",
         "parent_name": "59 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.03063295493636053,
         "first_stops": ["R14N", "R14N", "R13N"],
         "last_stops": ["R09N", "G21N", "R11N"]
      }, {
         "name": "Astoria",
         "parent_name": "Astoria",
         "boroughs": ["Queens"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.5525641025641026,
         "first_stops": ["R06N"],
         "last_stops": ["R01N"]
      }],
      "south": [{
         "name": "Astoria",
         "parent_name": "Astoria",
         "boroughs": ["Queens"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.27435897435897433,
         "first_stops": ["R01S"],
         "last_stops": ["R06S"]
      }, {
         "name": "via 59 St",
         "parent_name": "59 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": 0.023261966285222084,
         "first_stops": ["R09S", "G21S", "R11S"],
         "last_stops": ["R14S", "R14S", "R13S"]
      }, {
         "name": "Broadway Local",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.10525935801456258,
         "first_stops": ["R15S", "R14S", "R14S"],
         "last_stops": ["R23S", "Q01S", "R20S"]
      }, {
         "name": "via Whitehall St",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 10,
         "delay": 0,
         "travel_time": -0.019219404087663122,
         "first_stops": ["R22S", "R20S", "Q01S"],
         "last_stops": ["R31S", "D24S", "Q01S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "Z",
      "name": "Z",
      "color": "#a5673f",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Scheduled",
      "max_headway_discrepancy": null,
      "destinations": {
         "north": [],
         "south": []
      },
      "scheduled_destinations": {
         "north": [],
         "south": []
      },
      "north": [],
      "south": [],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": false,
      "visible": true
   }],
   "lines": {
      "The Bronx": [{
         "id": "82",
         "name": "Broadway–7 Avenue",
         "routes": [{
            "id": "1",
            "name": "1",
            "color": "#db2828",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.13817204301075262,
         "destinations": {
            "north": ["Van Cortlandt Park - 242 St"],
            "south": ["South Ferry"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 9,
            "max_scheduled_headway": 6,
            "delay": 2,
            "travel_time": 0.13817204301075262,
            "routes": [{
               "id": "1",
               "name": "1",
               "color": "#db2828",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 6,
            "delay": 0,
            "travel_time": 0.11394557823129249,
            "routes": [{
               "id": "1",
               "name": "1",
               "color": "#db2828",
               "text_color": null
            }]
         }]
      }, {
         "id": "72",
         "name": "Concourse",
         "routes": [{
            "id": "D",
            "name": "D",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": -0.04074074074074079,
         "destinations": {
            "north": ["Norwood - 205 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": -0.12863247863247865,
            "routes": [{
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": -0.04074074074074079,
            "routes": [{
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "81",
         "name": "Dyre Avenue",
         "routes": [{
            "id": "5",
            "name": "5",
            "color": "#21ba45",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": -0.09541666666666668,
         "destinations": {
            "north": ["Eastchester - Dyre Av"],
            "south": ["Flatbush Av - Brooklyn College"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 9,
            "delay": 1,
            "travel_time": -0.2618556701030928,
            "routes": [{
               "id": "5",
               "name": "5",
               "color": "#21ba45",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": -0.09541666666666668,
            "routes": [{
               "id": "5",
               "name": "5",
               "color": "#21ba45",
               "text_color": null
            }]
         }]
      }, {
         "id": "78",
         "name": "Jerome Avenue",
         "routes": [{
            "id": "4",
            "name": "4",
            "color": "#21ba45",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": -0.01628787878787875,
         "destinations": {
            "north": ["Burnside Av", "Woodlawn"],
            "south": ["Crown Hts - Utica Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 13,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": -0.16333333333333336,
            "routes": [{
               "id": "4",
               "name": "4",
               "color": "#21ba45",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 10,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": -0.01628787878787875,
            "routes": [{
               "id": "4",
               "name": "4",
               "color": "#21ba45",
               "text_color": null
            }]
         }]
      }, {
         "id": "77",
         "name": "Pelham",
         "routes": [{
            "id": "6",
            "name": "6",
            "color": "#21ba45",
            "text_color": null
         }, {
            "id": "6X",
            "name": "6X",
            "color": "#21ba45",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.06635071090047401,
         "destinations": {
            "north": ["Parkchester", "Pelham Bay Park"],
            "south": ["Brooklyn Bridge - City Hall"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 11,
            "max_scheduled_headway": 4,
            "delay": 0,
            "travel_time": 0.06635071090047401,
            "routes": [{
               "id": "6",
               "name": "6",
               "color": "#21ba45",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": 0.019999999999999993,
            "routes": [{
               "id": "6X",
               "name": "6X",
               "color": "#21ba45",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": null,
            "routes": [{
               "id": "6",
               "name": "6",
               "color": "#21ba45",
               "text_color": null
            }]
         }]
      }, {
         "id": "80",
         "name": "White Plains Road",
         "routes": [{
            "id": "2",
            "name": "2",
            "color": "#db2828",
            "text_color": null
         }, {
            "id": "5",
            "name": "5",
            "color": "#21ba45",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": -0.03318950017979149,
         "destinations": {
            "north": ["E 180 St", "Eastchester - Dyre Av", "Wakefield - 241 St"],
            "south": ["Flatbush Av - Brooklyn College"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 35,
            "max_scheduled_headway": null,
            "delay": 0,
            "travel_time": null,
            "routes": [{
               "id": "5",
               "name": "5",
               "color": "#21ba45",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 7,
            "max_scheduled_headway": 6,
            "delay": 0,
            "travel_time": -0.11741324921135643,
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "5",
               "name": "5",
               "color": "#21ba45",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 6,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": -0.03318950017979149,
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "5",
               "name": "5",
               "color": "#21ba45",
               "text_color": null
            }]
         }]
      }],
      "Brooklyn": [{
         "id": "64",
         "name": "4 Avenue",
         "routes": [{
            "id": "D",
            "name": "D",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "N",
            "name": "N",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "R",
            "name": "R",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.2628787878787879,
         "destinations": {
            "north": ["Astoria - Ditmars Blvd", "Forest Hills - 71 Av", "Norwood - 205 St"],
            "south": ["Bay Ridge - 95 St", "Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": 7,
            "delay": 2,
            "travel_time": -0.03013468013468015,
            "routes": [{
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 14,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.05014005602240895,
            "routes": [{
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": 8,
            "delay": 2,
            "travel_time": 0.2628787878787879,
            "routes": [{
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 12,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": 0.1479039891818797,
            "routes": [{
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }]
      }, {
         "id": "65",
         "name": "Brighton",
         "routes": [{
            "id": "B",
            "name": "B",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "Q",
            "name": "Q",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.06923076923076926,
         "destinations": {
            "north": ["145 St", "96 St"],
            "south": ["Brighton Beach", "Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 4,
            "travel_time": -0.16891025641025645,
            "routes": [{
               "id": "B",
               "name": "B",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 9,
            "max_scheduled_headway": 9,
            "delay": 0,
            "travel_time": -0.08545688545688546,
            "routes": [{
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": 11,
            "delay": 3,
            "travel_time": 0.06923076923076926,
            "routes": [{
               "id": "B",
               "name": "B",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 16,
            "max_scheduled_headway": 11,
            "delay": 1,
            "travel_time": null,
            "routes": [{
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }]
      }, {
         "id": "69",
         "name": "Broadway (Brooklyn)",
         "routes": [{
            "id": "J",
            "name": "J",
            "color": "#a5673f",
            "text_color": null
         }, {
            "id": "M",
            "name": "M",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Service Change",
         "max_travel_time": 0.48999999999999994,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer", "Middle Village - Metropolitan Av"],
            "south": ["Broad St", "Forest Hills - 71 Av"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 7,
            "delay": 0,
            "travel_time": 0.4324093816631131,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": null,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": null,
            "routes": []
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 11,
            "max_scheduled_headway": 11,
            "delay": 1,
            "travel_time": 0.48999999999999994,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "88",
         "name": "Canarsie (Broadway Junction—Rockaway Parkway)",
         "routes": [{
            "id": "L",
            "name": "L",
            "color": "#A0A0A0",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": -0.05800865800865799,
         "destinations": {
            "north": ["8 Av"],
            "south": ["Canarsie - Rockaway Pkwy"]
         },
         "north": [{
            "type": null,
            "name": "Broadway Jct—Rockaway Pkwy",
            "max_actual_headway": 4,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": -0.05800865800865799,
            "routes": [{
               "id": "L",
               "name": "L",
               "color": "#A0A0A0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Broadway Jct—Rockaway Pkwy",
            "max_actual_headway": 8,
            "max_scheduled_headway": 4,
            "delay": 1,
            "travel_time": -0.07806267806267805,
            "routes": [{
               "id": "L",
               "name": "L",
               "color": "#A0A0A0",
               "text_color": null
            }]
         }]
      }, {
         "id": "111",
         "name": "Canarsie (Lorimer Street—Myrtle Avenue)",
         "routes": [{
            "id": "L",
            "name": "L",
            "color": "#A0A0A0",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": -0.0285714285714286,
         "destinations": {
            "north": ["8 Av"],
            "south": ["Canarsie - Rockaway Pkwy"]
         },
         "north": [{
            "type": null,
            "name": "Lorimer St—Myrtle Av",
            "max_actual_headway": 6,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": -0.08511904761904757,
            "routes": [{
               "id": "L",
               "name": "L",
               "color": "#A0A0A0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Lorimer St—Myrtle Av",
            "max_actual_headway": 5,
            "max_scheduled_headway": 4,
            "delay": 1,
            "travel_time": -0.0285714285714286,
            "routes": [{
               "id": "L",
               "name": "L",
               "color": "#A0A0A0",
               "text_color": null
            }]
         }]
      }, {
         "id": "109",
         "name": "Canarsie (Myrtle Avenue—Broadway Junction)",
         "routes": [{
            "id": "L",
            "name": "L",
            "color": "#A0A0A0",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": -0.015384615384615389,
         "destinations": {
            "north": ["8 Av"],
            "south": ["Canarsie - Rockaway Pkwy"]
         },
         "north": [{
            "type": null,
            "name": "Myrtle Av—Broadway Jct",
            "max_actual_headway": 4,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": -0.015384615384615389,
            "routes": [{
               "id": "L",
               "name": "L",
               "color": "#A0A0A0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Myrtle Av—Broadway Jct",
            "max_actual_headway": 5,
            "max_scheduled_headway": 4,
            "delay": 1,
            "travel_time": -0.04289617486338799,
            "routes": [{
               "id": "L",
               "name": "L",
               "color": "#A0A0A0",
               "text_color": null
            }]
         }]
      }, {
         "id": "91",
         "name": "Cranberry Street (8 Avenue)",
         "routes": [{
            "id": "A",
            "name": "A",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "C",
            "name": "C",
            "color": "#2185d0",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.3535536970662418,
         "destinations": {
            "north": ["168 St", "Inwood - 207 St"],
            "south": ["Euclid Av", "Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": null,
            "name": "via Chambers St",
            "max_actual_headway": 7,
            "max_scheduled_headway": 8,
            "delay": 3,
            "travel_time": 0.3535536970662418,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Chambers St",
            "max_actual_headway": 9,
            "max_scheduled_headway": 8,
            "delay": 2,
            "travel_time": 0.14442290552584672,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }]
         }]
      }, {
         "id": "107",
         "name": "Crosstown (Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts)",
         "routes": [{
            "id": "G",
            "name": "G",
            "color": "#b5cc18",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.07045454545454545,
         "destinations": {
            "north": ["Court Sq"],
            "south": ["Church Av"]
         },
         "north": [{
            "type": null,
            "name": "Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts",
            "max_actual_headway": 13,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.07045454545454545,
            "routes": [{
               "id": "G",
               "name": "G",
               "color": "#b5cc18",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts",
            "max_actual_headway": 11,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": -0.06750000000000002,
            "routes": [{
               "id": "G",
               "name": "G",
               "color": "#b5cc18",
               "text_color": null
            }]
         }]
      }, {
         "id": "57",
         "name": "Crosstown (Court Sq—Bedford–Nostrand Avs)",
         "routes": [{
            "id": "G",
            "name": "G",
            "color": "#b5cc18",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.19444444444444436,
         "destinations": {
            "north": ["Court Sq"],
            "south": ["Church Av"]
         },
         "north": [{
            "type": null,
            "name": "Court Sq—Bedford–Nostrand Avs",
            "max_actual_headway": 13,
            "max_scheduled_headway": 11,
            "delay": 1,
            "travel_time": 0.19444444444444436,
            "routes": [{
               "id": "G",
               "name": "G",
               "color": "#b5cc18",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Court Sq—Bedford–Nostrand Avs",
            "max_actual_headway": 11,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.05308641975308643,
            "routes": [{
               "id": "G",
               "name": "G",
               "color": "#b5cc18",
               "text_color": null
            }]
         }]
      }, {
         "id": "73",
         "name": "Culver",
         "routes": [{
            "id": "F",
            "name": "F",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "G",
            "name": "G",
            "color": "#b5cc18",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.08447488584474888,
         "destinations": {
            "north": ["Court Sq", "Jamaica - 179 St"],
            "south": ["Church Av", "Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 9,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": -0.010052910052910048,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "G",
               "name": "G",
               "color": "#b5cc18",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 9,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": 0.08447488584474888,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "G",
               "name": "G",
               "color": "#b5cc18",
               "text_color": null
            }]
         }]
      }, {
         "id": "106",
         "name": "Culver (Church Avenue—Kings Highway)",
         "routes": [{
            "id": "F",
            "name": "F",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.29444444444444445,
         "destinations": {
            "north": ["Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "Church Av—Kings Hwy",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 1,
            "travel_time": 0.29444444444444445,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Church Av—Kings Hwy",
            "max_actual_headway": 11,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": 0.17606837606837616,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "89",
         "name": "Culver (Kings Highway—Coney Island)",
         "routes": [{
            "id": "F",
            "name": "F",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.16190476190476188,
         "destinations": {
            "north": ["Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "Kings Hwy—Coney Island",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": -0.36527777777777776,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Kings Hwy—Coney Island",
            "max_actual_headway": 12,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": 0.16190476190476188,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "74",
         "name": "Eastern Parkway",
         "routes": [{
            "id": "2",
            "name": "2",
            "color": "#db2828",
            "text_color": null
         }, {
            "id": "3",
            "name": "3",
            "color": "#db2828",
            "text_color": null
         }, {
            "id": "4",
            "name": "4",
            "color": "#21ba45",
            "text_color": null
         }, {
            "id": "5",
            "name": "5",
            "color": "#21ba45",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": -0.004805575935436571,
         "destinations": {
            "north": ["Eastchester - Dyre Av", "Harlem - 148 St", "Wakefield - 241 St", "Woodlawn"],
            "south": ["Crown Hts - Utica Av", "Flatbush Av - Brooklyn College", "New Lots Av"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 8,
            "max_scheduled_headway": 4,
            "delay": 0,
            "travel_time": -0.0837773807160346,
            "routes": [{
               "id": "4",
               "name": "4",
               "color": "#21ba45",
               "text_color": null
            }, {
               "id": "5",
               "name": "5",
               "color": "#21ba45",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 5,
            "max_scheduled_headway": 6,
            "delay": 2,
            "travel_time": -0.023230231925884116,
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "3",
               "name": "3",
               "color": "#db2828",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 8,
            "max_scheduled_headway": 4,
            "delay": 1,
            "travel_time": -0.004805575935436571,
            "routes": [{
               "id": "4",
               "name": "4",
               "color": "#21ba45",
               "text_color": null
            }, {
               "id": "5",
               "name": "5",
               "color": "#21ba45",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 8,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": -0.018011661034916863,
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "3",
               "name": "3",
               "color": "#db2828",
               "text_color": null
            }]
         }]
      }, {
         "id": "59",
         "name": "Franklin Avenue",
         "routes": [],
         "status": "No Service",
         "max_travel_time": 0,
         "destinations": {
            "north": [],
            "south": []
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": null,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": null,
            "routes": []
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": null,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": null,
            "routes": []
         }]
      }, {
         "id": "71",
         "name": "Fulton Street",
         "routes": [{
            "id": "A",
            "name": "A",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "C",
            "name": "C",
            "color": "#2185d0",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.11428571428571431,
         "destinations": {
            "north": ["168 St", "Inwood - 207 St"],
            "south": ["Euclid Av", "Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 3,
            "travel_time": 0.031400966183574845,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": 0.06433823529411759,
            "routes": [{
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": 0.09629629629629628,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 11,
            "delay": 1,
            "travel_time": 0.11428571428571431,
            "routes": [{
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }]
         }]
      }, {
         "id": "110",
         "name": "Jamaica (Crescent Street—Jamaica Center)",
         "routes": [{
            "id": "J",
            "name": "J",
            "color": "#a5673f",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.22525252525252515,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer"],
            "south": ["Broad St"]
         },
         "north": [{
            "type": null,
            "name": "Crescent St—Jamaica Ctr",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 2,
            "travel_time": 0.15757575757575767,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Crescent St—Jamaica Ctr",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": 0.22525252525252515,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }]
         }]
      }, {
         "id": "68",
         "name": "Jamaica (Myrtle Avenue—Crescent Street)",
         "routes": [{
            "id": "J",
            "name": "J",
            "color": "#a5673f",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.040595238095238115,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer"],
            "south": ["Broad St"]
         },
         "north": [{
            "type": null,
            "name": "Myrtle Av—Crescent St",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": 0.017499999999999998,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Myrtle Av—Crescent St",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": 0.040595238095238115,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }]
         }]
      }, {
         "id": "97",
         "name": "Manhattan Bridge (6 Avenue)",
         "routes": [{
            "id": "B",
            "name": "B",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "D",
            "name": "D",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.19746588693957115,
         "destinations": {
            "north": ["145 St", "Norwood - 205 St"],
            "south": ["Brighton Beach", "Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via Manhattan Bridge (North Side)",
            "max_actual_headway": 8,
            "max_scheduled_headway": 6,
            "delay": 4,
            "travel_time": 0.19746588693957115,
            "routes": [{
               "id": "B",
               "name": "B",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Manhattan Bridge (North Side)",
            "max_actual_headway": 8,
            "max_scheduled_headway": 6,
            "delay": 0,
            "travel_time": 0.09143589743589745,
            "routes": [{
               "id": "B",
               "name": "B",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "95",
         "name": "Manhattan Bridge/Montague Street (Broadway)",
         "routes": [{
            "id": "N",
            "name": "N",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "Q",
            "name": "Q",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "R",
            "name": "R",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "W",
            "name": "W",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.11248324062187989,
         "destinations": {
            "north": ["96 St", "Astoria - Ditmars Blvd", "Forest Hills - 71 Av"],
            "south": ["Bay Ridge - 95 St", "Coney Island - Stillwell Av", "Whitehall St"]
         },
         "north": [{
            "type": "Express",
            "name": "via Manhattan Bridge (South Side)",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 2,
            "travel_time": -0.0035471511556049973,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "via Whitehall St",
            "max_actual_headway": 8,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": 0.04379877369007805,
            "routes": [{
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "via Manhattan Bridge (South Side)",
            "max_actual_headway": 8,
            "max_scheduled_headway": 6,
            "delay": 2,
            "travel_time": 0.11248324062187989,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "via Whitehall St",
            "max_actual_headway": 8,
            "max_scheduled_headway": 7,
            "delay": 0,
            "travel_time": -0.019219404087663122,
            "routes": [{
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }]
      }, {
         "id": "70",
         "name": "Myrtle Avenue",
         "routes": [{
            "id": "M",
            "name": "M",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.051666666666666666,
         "destinations": {
            "north": ["Forest Hills - 71 Av"],
            "south": ["Middle Village - Metropolitan Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 11,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.051666666666666666,
            "routes": [{
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 11,
            "max_scheduled_headway": 13,
            "delay": 1,
            "travel_time": -0.31264367816091954,
            "routes": [{
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "76",
         "name": "New Lots",
         "routes": [{
            "id": "3",
            "name": "3",
            "color": "#db2828",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.20493827160493827,
         "destinations": {
            "north": ["Harlem - 148 St"],
            "south": ["New Lots Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": 0.20493827160493827,
            "routes": [{
               "id": "3",
               "name": "3",
               "color": "#db2828",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 18,
            "max_scheduled_headway": 8,
            "delay": 1,
            "travel_time": 0.12163742690058478,
            "routes": [{
               "id": "3",
               "name": "3",
               "color": "#db2828",
               "text_color": null
            }]
         }]
      }, {
         "id": "75",
         "name": "Nostrand Avenue",
         "routes": [{
            "id": "2",
            "name": "2",
            "color": "#db2828",
            "text_color": null
         }, {
            "id": "5",
            "name": "5",
            "color": "#21ba45",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.09083333333333334,
         "destinations": {
            "north": ["Eastchester - Dyre Av", "Wakefield - 241 St"],
            "south": ["Flatbush Av - Brooklyn College"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 5,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": 4.60087416609427e-05,
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "5",
               "name": "5",
               "color": "#21ba45",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 10,
            "max_scheduled_headway": 5,
            "delay": 2,
            "travel_time": 0.09083333333333334,
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "5",
               "name": "5",
               "color": "#21ba45",
               "text_color": null
            }]
         }]
      }, {
         "id": "92",
         "name": "Rutgers Street (6 Avenue)",
         "routes": [{
            "id": "F",
            "name": "F",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.02148148148148144,
         "destinations": {
            "north": ["Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via Delancey St",
            "max_actual_headway": 12,
            "max_scheduled_headway": 9,
            "delay": 1,
            "travel_time": 0.02148148148148144,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Delancey St",
            "max_actual_headway": 9,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": 0.0026041666666667043,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "67",
         "name": "Sea Beach",
         "routes": [{
            "id": "N",
            "name": "N",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.3090277777777778,
         "destinations": {
            "north": ["Astoria - Ditmars Blvd"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 2,
            "travel_time": 0.3090277777777778,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 13,
            "max_scheduled_headway": 10,
            "delay": 3,
            "travel_time": -0.2849794238683127,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }]
      }, {
         "id": "66",
         "name": "West End",
         "routes": [{
            "id": "D",
            "name": "D",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.02631578947368421,
         "destinations": {
            "north": ["Norwood - 205 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": 0.02631578947368421,
            "routes": [{
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 13,
            "max_scheduled_headway": 11,
            "delay": 1,
            "travel_time": -0.17037037037037037,
            "routes": [{
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "98",
         "name": "Williamsburg Bridge",
         "routes": [{
            "id": "J",
            "name": "J",
            "color": "#a5673f",
            "text_color": null
         }, {
            "id": "M",
            "name": "M",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": -0.07037037037037037,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer", "Middle Village - Metropolitan Av"],
            "south": ["Broad St", "Forest Hills - 71 Av"]
         },
         "north": [{
            "type": null,
            "name": "via Williamsburg Bridge",
            "max_actual_headway": 10,
            "max_scheduled_headway": 7,
            "delay": 0,
            "travel_time": -0.19803675856307434,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Williamsburg Bridge",
            "max_actual_headway": 10,
            "max_scheduled_headway": 8,
            "delay": 1,
            "travel_time": -0.07037037037037037,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }],
      "Manhattan": [{
         "id": "48",
         "name": "2 Avenue",
         "routes": [{
            "id": "Q",
            "name": "Q",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": -0.17499999999999996,
         "destinations": {
            "north": ["96 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 14,
            "max_scheduled_headway": 9,
            "delay": 2,
            "travel_time": -0.26666666666666666,
            "routes": [{
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": -0.17499999999999996,
            "routes": [{
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }]
      }, {
         "id": "50",
         "name": "6 Avenue",
         "routes": [{
            "id": "B",
            "name": "B",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "D",
            "name": "D",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "F",
            "name": "F",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "M",
            "name": "M",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Delay",
         "max_travel_time": 0.18854166666666664,
         "destinations": {
            "north": ["145 St", "Forest Hills - 71 Av", "Jamaica - 179 St", "Norwood - 205 St"],
            "south": ["Brighton Beach", "Coney Island - Stillwell Av", "Middle Village - Metropolitan Av"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 8,
            "max_scheduled_headway": 6,
            "delay": 5,
            "travel_time": 0.18854166666666664,
            "routes": [{
               "id": "B",
               "name": "B",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": 0.008253968253968291,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": 6,
            "delay": 0,
            "travel_time": 0.09958333333333333,
            "routes": [{
               "id": "B",
               "name": "B",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 6,
            "max_scheduled_headway": 6,
            "delay": 1,
            "travel_time": 0.10685185185185186,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "52",
         "name": "7 Avenue",
         "routes": [{
            "id": "1",
            "name": "1",
            "color": "#db2828",
            "text_color": null
         }, {
            "id": "2",
            "name": "2",
            "color": "#db2828",
            "text_color": null
         }, {
            "id": "3",
            "name": "3",
            "color": "#db2828",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.07051618547681539,
         "destinations": {
            "north": ["Harlem - 148 St", "Van Cortlandt Park - 242 St", "Wakefield - 241 St"],
            "south": ["Flatbush Av - Brooklyn College", "New Lots Av", "South Ferry"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 9,
            "max_scheduled_headway": 6,
            "delay": 2,
            "travel_time": -0.0070707070707071214,
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "3",
               "name": "3",
               "color": "#db2828",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 6,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": 0.03541666666666672,
            "routes": [{
               "id": "1",
               "name": "1",
               "color": "#db2828",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 8,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": 0.07051618547681539,
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "3",
               "name": "3",
               "color": "#db2828",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 11,
            "max_scheduled_headway": 6,
            "delay": 0,
            "travel_time": 0.03784722222222222,
            "routes": [{
               "id": "1",
               "name": "1",
               "color": "#db2828",
               "text_color": null
            }]
         }]
      }, {
         "id": "53",
         "name": "8 Avenue",
         "routes": [{
            "id": "A",
            "name": "A",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "C",
            "name": "C",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "E",
            "name": "E",
            "color": "#2185d0",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.01874999999999998,
         "destinations": {
            "north": ["168 St", "Inwood - 207 St", "Jamaica Center - Parsons/Archer"],
            "south": ["Euclid Av", "Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd", "World Trade Center"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 14,
            "max_scheduled_headway": 9,
            "delay": 3,
            "travel_time": -0.022222222222222227,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 6,
            "max_scheduled_headway": 6,
            "delay": 2,
            "travel_time": -0.02080139841333869,
            "routes": [{
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": -0.0215962441314554,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 7,
            "max_scheduled_headway": 6,
            "delay": 2,
            "travel_time": 0.01874999999999998,
            "routes": [{
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }]
         }]
      }, {
         "id": "54",
         "name": "14 Street",
         "routes": [{
            "id": "L",
            "name": "L",
            "color": "#A0A0A0",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.2627083333333333,
         "destinations": {
            "north": ["8 Av"],
            "south": ["Canarsie - Rockaway Pkwy"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 6,
            "max_scheduled_headway": 4,
            "delay": 0,
            "travel_time": 0.2627083333333333,
            "routes": [{
               "id": "L",
               "name": "L",
               "color": "#A0A0A0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 4,
            "max_scheduled_headway": 4,
            "delay": 0,
            "travel_time": 0.09880952380952382,
            "routes": [{
               "id": "L",
               "name": "L",
               "color": "#A0A0A0",
               "text_color": null
            }]
         }]
      }, {
         "id": "58",
         "name": "42 Street",
         "routes": [{
            "id": "GS",
            "name": "S",
            "color": "#767676",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.08333333333333337,
         "destinations": {
            "north": ["Times Sq - 42 St"],
            "south": ["Grand Central - 42 St"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 5,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": 0.07407407407407406,
            "routes": [{
               "id": "GS",
               "name": "S",
               "color": "#767676",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 5,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": 0.08333333333333337,
            "routes": [{
               "id": "GS",
               "name": "S",
               "color": "#767676",
               "text_color": null
            }]
         }]
      }, {
         "id": "93",
         "name": "53 Street",
         "routes": [{
            "id": "E",
            "name": "E",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "M",
            "name": "M",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.18397551409794358,
         "destinations": {
            "north": ["Forest Hills - 71 Av", "Jamaica Center - Parsons/Archer"],
            "south": ["Middle Village - Metropolitan Av", "World Trade Center"]
         },
         "north": [{
            "type": null,
            "name": "via 53 St",
            "max_actual_headway": 7,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": 0.18397551409794358,
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via 53 St",
            "max_actual_headway": 7,
            "max_scheduled_headway": 7,
            "delay": 0,
            "travel_time": -0.02539682539682539,
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "102",
         "name": "59 Street",
         "routes": [{
            "id": "N",
            "name": "N",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "R",
            "name": "R",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "W",
            "name": "W",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.03063295493636053,
         "destinations": {
            "north": ["Astoria - Ditmars Blvd", "Forest Hills - 71 Av"],
            "south": ["Bay Ridge - 95 St", "Coney Island - Stillwell Av", "Whitehall St"]
         },
         "north": [{
            "type": null,
            "name": "via 59 St",
            "max_actual_headway": 8,
            "max_scheduled_headway": 5,
            "delay": 3,
            "travel_time": 0.03063295493636053,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": null,
            "name": "via 59 St",
            "max_actual_headway": 6,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": 0.023261966285222084,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }]
      }, {
         "id": "94",
         "name": "63 Street",
         "routes": [{
            "id": "F",
            "name": "F",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.13038461538461546,
         "destinations": {
            "north": ["Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via 63 St",
            "max_actual_headway": 13,
            "max_scheduled_headway": 9,
            "delay": 1,
            "travel_time": -0.0875850340136055,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via 63 St",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 1,
            "travel_time": 0.13038461538461546,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "51",
         "name": "Broadway",
         "routes": [{
            "id": "N",
            "name": "N",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "Q",
            "name": "Q",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "R",
            "name": "R",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "W",
            "name": "W",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.11169871794871798,
         "destinations": {
            "north": ["96 St", "Astoria - Ditmars Blvd", "Forest Hills - 71 Av"],
            "south": ["Bay Ridge - 95 St", "Coney Island - Stillwell Av", "Whitehall St"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": 7,
            "delay": 2,
            "travel_time": -0.029480519480519503,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 9,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": 0.11169871794871798,
            "routes": [{
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 2,
            "travel_time": 0.024115768624439118,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": -0.10525935801456258,
            "routes": [{
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }]
      }, {
         "id": "82",
         "name": "Broadway–7 Avenue",
         "routes": [{
            "id": "1",
            "name": "1",
            "color": "#db2828",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.13817204301075262,
         "destinations": {
            "north": ["Van Cortlandt Park - 242 St"],
            "south": ["South Ferry"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 9,
            "max_scheduled_headway": 6,
            "delay": 2,
            "travel_time": 0.13817204301075262,
            "routes": [{
               "id": "1",
               "name": "1",
               "color": "#db2828",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 6,
            "delay": 0,
            "travel_time": 0.11394557823129249,
            "routes": [{
               "id": "1",
               "name": "1",
               "color": "#db2828",
               "text_color": null
            }]
         }]
      }, {
         "id": "83",
         "name": "Central Park West",
         "routes": [{
            "id": "A",
            "name": "A",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "B",
            "name": "B",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "C",
            "name": "C",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "D",
            "name": "D",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Delay",
         "max_travel_time": 0.0961352657004831,
         "destinations": {
            "north": ["145 St", "168 St", "Inwood - 207 St", "Norwood - 205 St"],
            "south": ["Brighton Beach", "Coney Island - Stillwell Av", "Euclid Av", "Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 9,
            "max_scheduled_headway": 9,
            "delay": 3,
            "travel_time": -0.054947916666666666,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 8,
            "max_scheduled_headway": 7,
            "delay": 5,
            "travel_time": 0.0961352657004831,
            "routes": [{
               "id": "B",
               "name": "B",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 6,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": 0.06631944444444444,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 6,
            "max_scheduled_headway": 6,
            "delay": 2,
            "travel_time": 0.09542857142857149,
            "routes": [{
               "id": "B",
               "name": "B",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }]
         }]
      }, {
         "id": "91",
         "name": "Cranberry Street (8 Avenue)",
         "routes": [{
            "id": "A",
            "name": "A",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "C",
            "name": "C",
            "color": "#2185d0",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.3535536970662418,
         "destinations": {
            "north": ["168 St", "Inwood - 207 St"],
            "south": ["Euclid Av", "Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": null,
            "name": "via Chambers St",
            "max_actual_headway": 7,
            "max_scheduled_headway": 8,
            "delay": 3,
            "travel_time": 0.3535536970662418,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Chambers St",
            "max_actual_headway": 9,
            "max_scheduled_headway": 8,
            "delay": 2,
            "travel_time": 0.14442290552584672,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }]
         }]
      }, {
         "id": "108",
         "name": "Flushing (34 Street–Hudson Yards—Queensboro Plaza)",
         "routes": [{
            "id": "7",
            "name": "7",
            "color": "#a333c8",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.051111111111111135,
         "destinations": {
            "north": ["Flushing - Main St"],
            "south": ["34 St - Hudson Yards"]
         },
         "north": [{
            "type": null,
            "name": "34 St–Hudson Yds—Queensboro Plz",
            "max_actual_headway": 9,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": 0.051111111111111135,
            "routes": [{
               "id": "7",
               "name": "7",
               "color": "#a333c8",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "34 St–Hudson Yds—Queensboro Plz",
            "max_actual_headway": 7,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": 0.004687500000000039,
            "routes": [{
               "id": "7",
               "name": "7",
               "color": "#a333c8",
               "text_color": null
            }]
         }]
      }, {
         "id": "79",
         "name": "Lenox Avenue",
         "routes": [{
            "id": "2",
            "name": "2",
            "color": "#db2828",
            "text_color": null
         }, {
            "id": "3",
            "name": "3",
            "color": "#db2828",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.12263374485596702,
         "destinations": {
            "north": ["Harlem - 148 St", "Wakefield - 241 St"],
            "south": ["Flatbush Av - Brooklyn College", "New Lots Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 9,
            "max_scheduled_headway": 7,
            "delay": 2,
            "travel_time": 0.12263374485596702,
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "3",
               "name": "3",
               "color": "#db2828",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": -0.30972222222222223,
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "3",
               "name": "3",
               "color": "#db2828",
               "text_color": null
            }]
         }]
      }, {
         "id": "49",
         "name": "Lexington Avenue",
         "routes": [{
            "id": "4",
            "name": "4",
            "color": "#21ba45",
            "text_color": null
         }, {
            "id": "5",
            "name": "5",
            "color": "#21ba45",
            "text_color": null
         }, {
            "id": "6",
            "name": "6",
            "color": "#21ba45",
            "text_color": null
         }, {
            "id": "6X",
            "name": "6X",
            "color": "#21ba45",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.026136363636363687,
         "destinations": {
            "north": ["Burnside Av", "E 180 St", "Eastchester - Dyre Av", "Parkchester", "Pelham Bay Park", "Woodlawn"],
            "south": ["Brooklyn Bridge - City Hall", "Crown Hts - Utica Av", "Flatbush Av - Brooklyn College"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": -0.06621168582375479,
            "routes": [{
               "id": "4",
               "name": "4",
               "color": "#21ba45",
               "text_color": null
            }, {
               "id": "5",
               "name": "5",
               "color": "#21ba45",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 5,
            "max_scheduled_headway": 4,
            "delay": 0,
            "travel_time": 0.026136363636363687,
            "routes": [{
               "id": "6",
               "name": "6",
               "color": "#21ba45",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 8,
            "max_scheduled_headway": 4,
            "delay": 1,
            "travel_time": -0.03544715447154471,
            "routes": [{
               "id": "4",
               "name": "4",
               "color": "#21ba45",
               "text_color": null
            }, {
               "id": "5",
               "name": "5",
               "color": "#21ba45",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 4,
            "max_scheduled_headway": 4,
            "delay": 1,
            "travel_time": 0.026074700493305104,
            "routes": [{
               "id": "6",
               "name": "6",
               "color": "#21ba45",
               "text_color": null
            }, {
               "id": "6X",
               "name": "6X",
               "color": "#21ba45",
               "text_color": null
            }]
         }]
      }, {
         "id": "97",
         "name": "Manhattan Bridge (6 Avenue)",
         "routes": [{
            "id": "B",
            "name": "B",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "D",
            "name": "D",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.19746588693957115,
         "destinations": {
            "north": ["145 St", "Norwood - 205 St"],
            "south": ["Brighton Beach", "Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via Manhattan Bridge (North Side)",
            "max_actual_headway": 8,
            "max_scheduled_headway": 6,
            "delay": 4,
            "travel_time": 0.19746588693957115,
            "routes": [{
               "id": "B",
               "name": "B",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Manhattan Bridge (North Side)",
            "max_actual_headway": 8,
            "max_scheduled_headway": 6,
            "delay": 0,
            "travel_time": 0.09143589743589745,
            "routes": [{
               "id": "B",
               "name": "B",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "95",
         "name": "Manhattan Bridge/Montague Street (Broadway)",
         "routes": [{
            "id": "N",
            "name": "N",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "Q",
            "name": "Q",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "R",
            "name": "R",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "W",
            "name": "W",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.11248324062187989,
         "destinations": {
            "north": ["96 St", "Astoria - Ditmars Blvd", "Forest Hills - 71 Av"],
            "south": ["Bay Ridge - 95 St", "Coney Island - Stillwell Av", "Whitehall St"]
         },
         "north": [{
            "type": "Express",
            "name": "via Manhattan Bridge (South Side)",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 2,
            "travel_time": -0.0035471511556049973,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "via Whitehall St",
            "max_actual_headway": 8,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": 0.04379877369007805,
            "routes": [{
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "via Manhattan Bridge (South Side)",
            "max_actual_headway": 8,
            "max_scheduled_headway": 6,
            "delay": 2,
            "travel_time": 0.11248324062187989,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "via Whitehall St",
            "max_actual_headway": 8,
            "max_scheduled_headway": 7,
            "delay": 0,
            "travel_time": -0.019219404087663122,
            "routes": [{
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }]
      }, {
         "id": "56",
         "name": "Nassau Street",
         "routes": [{
            "id": "J",
            "name": "J",
            "color": "#a5673f",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.22727272727272727,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer"],
            "south": ["Broad St"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": -0.05317460317460319,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": 0.22727272727272727,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }]
         }]
      }, {
         "id": "92",
         "name": "Rutgers Street (6 Avenue)",
         "routes": [{
            "id": "F",
            "name": "F",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.02148148148148144,
         "destinations": {
            "north": ["Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via Delancey St",
            "max_actual_headway": 12,
            "max_scheduled_headway": 9,
            "delay": 1,
            "travel_time": 0.02148148148148144,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Delancey St",
            "max_actual_headway": 9,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": 0.0026041666666667043,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "84",
         "name": "Washington Heights (8 Avenue)",
         "routes": [{
            "id": "A",
            "name": "A",
            "color": "#2185d0",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": -0.05952380952380953,
         "destinations": {
            "north": ["Inwood - 207 St"],
            "south": ["Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 18,
            "max_scheduled_headway": 9,
            "delay": 1,
            "travel_time": -0.24074074074074078,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": -0.05952380952380953,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }]
      }, {
         "id": "98",
         "name": "Williamsburg Bridge",
         "routes": [{
            "id": "J",
            "name": "J",
            "color": "#a5673f",
            "text_color": null
         }, {
            "id": "M",
            "name": "M",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": -0.07037037037037037,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer", "Middle Village - Metropolitan Av"],
            "south": ["Broad St", "Forest Hills - 71 Av"]
         },
         "north": [{
            "type": null,
            "name": "via Williamsburg Bridge",
            "max_actual_headway": 10,
            "max_scheduled_headway": 7,
            "delay": 0,
            "travel_time": -0.19803675856307434,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Williamsburg Bridge",
            "max_actual_headway": 10,
            "max_scheduled_headway": 8,
            "delay": 1,
            "travel_time": -0.07037037037037037,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }],
      "Queens": [{
         "id": "93",
         "name": "53 Street",
         "routes": [{
            "id": "E",
            "name": "E",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "M",
            "name": "M",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.18397551409794358,
         "destinations": {
            "north": ["Forest Hills - 71 Av", "Jamaica Center - Parsons/Archer"],
            "south": ["Middle Village - Metropolitan Av", "World Trade Center"]
         },
         "north": [{
            "type": null,
            "name": "via 53 St",
            "max_actual_headway": 7,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": 0.18397551409794358,
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via 53 St",
            "max_actual_headway": 7,
            "max_scheduled_headway": 7,
            "delay": 0,
            "travel_time": -0.02539682539682539,
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "102",
         "name": "59 Street",
         "routes": [{
            "id": "N",
            "name": "N",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "R",
            "name": "R",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "W",
            "name": "W",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.03063295493636053,
         "destinations": {
            "north": ["Astoria - Ditmars Blvd", "Forest Hills - 71 Av"],
            "south": ["Bay Ridge - 95 St", "Coney Island - Stillwell Av", "Whitehall St"]
         },
         "north": [{
            "type": null,
            "name": "via 59 St",
            "max_actual_headway": 8,
            "max_scheduled_headway": 5,
            "delay": 3,
            "travel_time": 0.03063295493636053,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": null,
            "name": "via 59 St",
            "max_actual_headway": 6,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": 0.023261966285222084,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }]
      }, {
         "id": "94",
         "name": "63 Street",
         "routes": [{
            "id": "F",
            "name": "F",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.13038461538461546,
         "destinations": {
            "north": ["Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via 63 St",
            "max_actual_headway": 13,
            "max_scheduled_headway": 9,
            "delay": 1,
            "travel_time": -0.0875850340136055,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via 63 St",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 1,
            "travel_time": 0.13038461538461546,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "62",
         "name": "Astoria",
         "routes": [{
            "id": "N",
            "name": "N",
            "color": "#fbbd08",
            "text_color": "#000000"
         }, {
            "id": "W",
            "name": "W",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.5525641025641026,
         "destinations": {
            "north": ["Astoria - Ditmars Blvd"],
            "south": ["Coney Island - Stillwell Av", "Whitehall St"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 7,
            "delay": 0,
            "travel_time": 0.5525641025641026,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 5,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": -0.27435897435897433,
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }, {
               "id": "W",
               "name": "W",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }]
      }, {
         "id": "57",
         "name": "Crosstown (Court Sq—Bedford–Nostrand Avs)",
         "routes": [{
            "id": "G",
            "name": "G",
            "color": "#b5cc18",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.19444444444444436,
         "destinations": {
            "north": ["Court Sq"],
            "south": ["Church Av"]
         },
         "north": [{
            "type": null,
            "name": "Court Sq—Bedford–Nostrand Avs",
            "max_actual_headway": 13,
            "max_scheduled_headway": 11,
            "delay": 1,
            "travel_time": 0.19444444444444436,
            "routes": [{
               "id": "G",
               "name": "G",
               "color": "#b5cc18",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Court Sq—Bedford–Nostrand Avs",
            "max_actual_headway": 11,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.05308641975308643,
            "routes": [{
               "id": "G",
               "name": "G",
               "color": "#b5cc18",
               "text_color": null
            }]
         }]
      }, {
         "id": "55",
         "name": "Flushing",
         "routes": [{
            "id": "7",
            "name": "7",
            "color": "#a333c8",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.10556510015408316,
         "destinations": {
            "north": ["Flushing - Main St"],
            "south": ["34 St - Hudson Yards"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 9,
            "max_scheduled_headway": 5,
            "delay": 2,
            "travel_time": 0.10556510015408316,
            "routes": [{
               "id": "7",
               "name": "7",
               "color": "#a333c8",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 5,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": -0.01872613202400438,
            "routes": [{
               "id": "7",
               "name": "7",
               "color": "#a333c8",
               "text_color": null
            }]
         }]
      }, {
         "id": "108",
         "name": "Flushing (34 Street–Hudson Yards—Queensboro Plaza)",
         "routes": [{
            "id": "7",
            "name": "7",
            "color": "#a333c8",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.051111111111111135,
         "destinations": {
            "north": ["Flushing - Main St"],
            "south": ["34 St - Hudson Yards"]
         },
         "north": [{
            "type": null,
            "name": "34 St–Hudson Yds—Queensboro Plz",
            "max_actual_headway": 9,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": 0.051111111111111135,
            "routes": [{
               "id": "7",
               "name": "7",
               "color": "#a333c8",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "34 St–Hudson Yds—Queensboro Plz",
            "max_actual_headway": 7,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": 0.004687500000000039,
            "routes": [{
               "id": "7",
               "name": "7",
               "color": "#a333c8",
               "text_color": null
            }]
         }]
      }, {
         "id": "71",
         "name": "Fulton Street",
         "routes": [{
            "id": "A",
            "name": "A",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "C",
            "name": "C",
            "color": "#2185d0",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.11428571428571431,
         "destinations": {
            "north": ["168 St", "Inwood - 207 St"],
            "south": ["Euclid Av", "Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 3,
            "travel_time": 0.031400966183574845,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": 0.06433823529411759,
            "routes": [{
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": 0.09629629629629628,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 11,
            "delay": 1,
            "travel_time": 0.11428571428571431,
            "routes": [{
               "id": "C",
               "name": "C",
               "color": "#2185d0",
               "text_color": null
            }]
         }]
      }, {
         "id": "90",
         "name": "Fulton Street (Lefferts Boulevard Branch)",
         "routes": [{
            "id": "A",
            "name": "A",
            "color": "#2185d0",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": -0.0488888888888889,
         "destinations": {
            "north": ["Inwood - 207 St"],
            "south": ["Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": null,
            "name": "Lefferts Blvd Branch",
            "max_actual_headway": 20,
            "max_scheduled_headway": 20,
            "delay": 0,
            "travel_time": -0.23333333333333334,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Lefferts Blvd Branch",
            "max_actual_headway": 15,
            "max_scheduled_headway": 17,
            "delay": 1,
            "travel_time": -0.0488888888888889,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }]
      }, {
         "id": "110",
         "name": "Jamaica (Crescent Street—Jamaica Center)",
         "routes": [{
            "id": "J",
            "name": "J",
            "color": "#a5673f",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.22525252525252515,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer"],
            "south": ["Broad St"]
         },
         "north": [{
            "type": null,
            "name": "Crescent St—Jamaica Ctr",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 2,
            "travel_time": 0.15757575757575767,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "Crescent St—Jamaica Ctr",
            "max_actual_headway": 11,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": 0.22525252525252515,
            "routes": [{
               "id": "J",
               "name": "J",
               "color": "#a5673f",
               "text_color": null
            }]
         }]
      }, {
         "id": "70",
         "name": "Myrtle Avenue",
         "routes": [{
            "id": "M",
            "name": "M",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": 0.051666666666666666,
         "destinations": {
            "north": ["Forest Hills - 71 Av"],
            "south": ["Middle Village - Metropolitan Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 11,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.051666666666666666,
            "routes": [{
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 11,
            "max_scheduled_headway": 13,
            "delay": 1,
            "travel_time": -0.31264367816091954,
            "routes": [{
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "63",
         "name": "Queens Boulevard",
         "routes": [{
            "id": "E",
            "name": "E",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "F",
            "name": "F",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "M",
            "name": "M",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "R",
            "name": "R",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.2697916666666667,
         "destinations": {
            "north": ["Forest Hills - 71 Av", "Jamaica - 179 St", "Jamaica Center - Parsons/Archer"],
            "south": ["Bay Ridge - 95 St", "Coney Island - Stillwell Av", "Middle Village - Metropolitan Av", "World Trade Center"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": 5,
            "delay": 1,
            "travel_time": 0.122959706959707,
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 14,
            "max_scheduled_headway": 8,
            "delay": 3,
            "travel_time": 0.2697916666666667,
            "routes": [{
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 4,
            "max_scheduled_headway": 4,
            "delay": 0,
            "travel_time": -0.03901234567901235,
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }, {
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 8,
            "max_scheduled_headway": 5,
            "delay": 0,
            "travel_time": -0.018257261410788407,
            "routes": [{
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }]
      }, {
         "id": "105",
         "name": "Queens Boulevard (Eastern Queens)",
         "routes": [{
            "id": "E",
            "name": "E",
            "color": "#2185d0",
            "text_color": null
         }, {
            "id": "F",
            "name": "F",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.11933333333333335,
         "destinations": {
            "north": ["Jamaica - 179 St", "Jamaica Center - Parsons/Archer"],
            "south": ["Coney Island - Stillwell Av", "World Trade Center"]
         },
         "north": [{
            "type": "Express",
            "name": "Forest Hills—Jamaica Express",
            "max_actual_headway": 13,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": -0.11656184486373165,
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Forest Hills—Jamaica Local",
            "max_actual_headway": 13,
            "max_scheduled_headway": 9,
            "delay": 0,
            "travel_time": -0.08070175438596491,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Forest Hills—Jamaica Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": 7,
            "delay": 0,
            "travel_time": -0.05624999999999995,
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Forest Hills—Jamaica Local",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": 0.11933333333333335,
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }]
      }, {
         "id": "61",
         "name": "Rockaway (Far Rockaway Branch)",
         "routes": [{
            "id": "A",
            "name": "A",
            "color": "#2185d0",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": -0.1258064516129032,
         "destinations": {
            "north": ["Inwood - 207 St"],
            "south": ["Far Rockaway - Mott Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 20,
            "max_scheduled_headway": 20,
            "delay": 0,
            "travel_time": null,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 20,
            "max_scheduled_headway": 17,
            "delay": 1,
            "travel_time": -0.1258064516129032,
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }]
      }, {
         "id": "60",
         "name": "Rockaway (Rockaway Park Branch)",
         "routes": [{
            "id": "H",
            "name": "S",
            "color": "#767676",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.43333333333333335,
         "destinations": {
            "north": ["Broad Channel"],
            "south": ["Rockaway Park - Beach 116 St"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 16,
            "max_scheduled_headway": 16,
            "delay": 0,
            "travel_time": -0.25217391304347825,
            "routes": [{
               "id": "H",
               "name": "S",
               "color": "#767676",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 16,
            "max_scheduled_headway": 16,
            "delay": 0,
            "travel_time": 0.43333333333333335,
            "routes": [{
               "id": "H",
               "name": "S",
               "color": "#767676",
               "text_color": null
            }]
         }]
      }],
      "Staten Island": [{
         "id": "85",
         "name": "Staten Island",
         "routes": [{
            "id": "SI",
            "name": "SIR",
            "color": "#2185d0",
            "text_color": null
         }],
         "status": "Delay",
         "max_travel_time": 0,
         "destinations": {
            "north": ["St George"],
            "south": ["Tottenville"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 40,
            "max_scheduled_headway": 30,
            "delay": 26,
            "travel_time": null,
            "routes": [{
               "id": "SI",
               "name": "SIR",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 20,
            "max_scheduled_headway": 30,
            "delay": 0,
            "travel_time": null,
            "routes": [{
               "id": "SI",
               "name": "SIR",
               "color": "#2185d0",
               "text_color": null
            }]
         }]
      }]
   },
   "timestamp": "2019-05-30T10:59:56-04:00",
   "blog_post": {
      "title": "How to get ahead of train traffic",
      "link": "https://medium.com/good-service/get-ahead-of-train-traffic-with-goodservice-io-a4a800ac0882?source=rss----adc4a7ae40a7---4"
   }
};

export default sampleData;