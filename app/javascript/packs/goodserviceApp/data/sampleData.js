const sampleData = {
   "routes": [{
      "id": "1",
      "name": "1",
      "color": "#db2828",
      "text_color": null,
      "alternate_name": null,
      "status": "Service Change",
      "max_headway_discrepancy": 7,
      "max_travel_time_discrepancy": 2.2666666666666693,
      "destinations": {
         "north": ["Harlem - 148 St", "Van Cortlandt Park - 242 St"],
         "south": ["South Ferry", "Dyckman St"]
      },
      "scheduled_destinations": {
         "north": ["Van Cortlandt Park - 242 St"],
         "south": ["South Ferry"]
      },
      "north": [{
         "name": "7 Avenue Local",
         "parent_name": "7 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": -1.3520833333333333,
         "delay": 1,
         "travel_time": -0.05633680555555555,
         "scheduled_runtimes": [{
            "id": "137N-120N",
            "time": 24.0
         }],
         "actual_runtimes": [{
            "id": "137N-120N",
            "description": "Chambers St to 96 St via 7 Avenue Local",
            "time": 22.647916666666667
         }],
         "first_stops": ["137N"],
         "last_stops": ["120N"]
      }, {
         "name": "Broadway–7 Avenue",
         "parent_name": "Broadway–7 Avenue",
         "boroughs": ["The Bronx", "Manhattan"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": null,
         "delay": 0,
         "travel_time": null,
         "scheduled_runtimes": [{
            "id": "120N-101N",
            "time": 30.166666666666668
         }],
         "actual_runtimes": [],
         "first_stops": ["120N", "120N", "119N"],
         "last_stops": ["101N"]
      }, {
         "name": "Lenox Avenue",
         "parent_name": "Lenox Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 13,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": -0.9619047619047618,
         "delay": 1,
         "travel_time": -0.04397532292269134,
         "scheduled_runtimes": [{
            "id": "120N-222N",
            "time": 13.0
         }, {
            "id": "120N-301N",
            "time": 19.0
         }],
         "actual_runtimes": [{
            "id": "120N-301N",
            "description": "96 St to Harlem - 148 St via Lenox Avenue",
            "time": 16.8375
         }],
         "first_stops": ["120N", "120N", "227N"],
         "last_stops": ["301N", "222N", "224N"]
      }],
      "south": [{
         "name": "Lenox Avenue",
         "parent_name": "Lenox Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 15,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": 0.8214285714285712,
         "delay": 0,
         "travel_time": 0.0701366459627329,
         "scheduled_runtimes": [{
            "id": "222S-120S",
            "time": 11.5
         }, {
            "id": "301S-120S",
            "time": 12.5
         }],
         "actual_runtimes": [{
            "id": "301S-120S",
            "description": "Harlem - 148 St to 96 St via Lenox Avenue",
            "time": 12.76
         }],
         "first_stops": ["301S", "222S", "224S"],
         "last_stops": ["120S", "120S", "227S"]
      }, {
         "name": "Broadway–7 Avenue",
         "parent_name": "Broadway–7 Avenue",
         "boroughs": ["The Bronx", "Manhattan"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": null,
         "delay": 0,
         "travel_time": null,
         "scheduled_runtimes": [{
            "id": "101S-120S",
            "time": 26.5
         }],
         "actual_runtimes": [],
         "first_stops": ["101S"],
         "last_stops": ["120S", "120S", "119S"]
      }, {
         "name": "7 Avenue Local",
         "parent_name": "7 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": 2.2666666666666693,
         "delay": 0,
         "travel_time": 0.091275167785235,
         "scheduled_runtimes": [{
            "id": "120S-137S",
            "time": 24.833333333333332
         }],
         "actual_runtimes": [{
            "id": "120S-137S",
            "description": "96 St to Chambers St via 7 Avenue Local",
            "time": 27.1
         }],
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
      "status": "Service Change",
      "max_headway_discrepancy": 10,
      "max_travel_time_discrepancy": 2.2666666666666693,
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
         "max_actual_headway": 16,
         "max_scheduled_headway": 16,
         "travel_time_discrepancy": -0.5124999999999997,
         "delay": 0,
         "travel_time": -0.053947368421052605,
         "scheduled_runtimes": [{
            "id": "247N-241N",
            "time": 9.5
         }],
         "actual_runtimes": [{
            "id": "247N-241N",
            "description": "Flatbush Av - Brooklyn College to President St via Nostrand Avenue",
            "time": 8.9875
         }],
         "first_stops": ["247N"],
         "last_stops": ["241N"]
      }, {
         "name": "Eastern Parkway Local",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 16,
         "travel_time_discrepancy": -0.36000000000000015,
         "delay": 0,
         "travel_time": -0.013395061728395066,
         "scheduled_runtimes": [{
            "id": "241N-137N",
            "time": 24.0
         }, {
            "id": "250N-137N",
            "time": 27.0
         }],
         "actual_runtimes": [{
            "id": "241N-137N",
            "description": "President St to Chambers St via Eastern Parkway Local",
            "time": 23.977777777777778
         }],
         "first_stops": ["250N", "241N", "239N"],
         "last_stops": ["137N", "640N", "234N"]
      }, {
         "name": "7 Avenue Local",
         "parent_name": "7 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 12,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": -1.3520833333333333,
         "delay": 0,
         "travel_time": -0.05633680555555555,
         "scheduled_runtimes": [{
            "id": "137N-120N",
            "time": 24.0
         }],
         "actual_runtimes": [{
            "id": "137N-120N",
            "description": "Chambers St to 96 St via 7 Avenue Local",
            "time": 22.647916666666667
         }],
         "first_stops": ["137N"],
         "last_stops": ["120N"]
      }, {
         "name": "Lenox Avenue",
         "parent_name": "Lenox Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": -0.9619047619047618,
         "delay": 1,
         "travel_time": -0.04397532292269134,
         "scheduled_runtimes": [{
            "id": "120N-222N",
            "time": 13.0
         }, {
            "id": "120N-301N",
            "time": 19.0
         }],
         "actual_runtimes": [{
            "id": "120N-222N",
            "description": "96 St to 149 St - Grand Concourse via Lenox Avenue",
            "time": 13.638888888888888
         }],
         "first_stops": ["120N", "120N", "227N"],
         "last_stops": ["301N", "222N", "224N"]
      }, {
         "name": "White Plains Road Local",
         "parent_name": "White Plains Road",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 0.6500000000000008,
         "delay": 1,
         "travel_time": 0.015514592933947795,
         "scheduled_runtimes": [{
            "id": "222N-204N",
            "time": 31.5
         }, {
            "id": "222N-213N",
            "time": 15.5
         }],
         "actual_runtimes": [{
            "id": "222N-204N",
            "description": "149 St - Grand Concourse to Nereid Av via White Plains Road Local",
            "time": 32.790000000000006
         }, {
            "id": "222N-213N",
            "description": "149 St - Grand Concourse to E 180 St via White Plains Road Local",
            "time": 15.083333333333334
         }],
         "first_stops": ["222N"],
         "last_stops": ["204N", "213N", "213N"]
      }],
      "south": [{
         "name": "White Plains Road Local",
         "parent_name": "White Plains Road",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": -0.19166666666666687,
         "delay": 3,
         "travel_time": -0.008072916666666687,
         "scheduled_runtimes": [{
            "id": "204S-222S",
            "time": 31.0
         }, {
            "id": "213S-222S",
            "time": 16.0
         }],
         "actual_runtimes": [{
            "id": "204S-222S",
            "description": "Nereid Av to 149 St - Grand Concourse via White Plains Road Local",
            "time": 30.741666666666667
         }, {
            "id": "213S-222S",
            "description": "E 180 St to 149 St - Grand Concourse via White Plains Road Local",
            "time": 15.875
         }],
         "first_stops": ["204S", "213S", "213S"],
         "last_stops": ["222S"]
      }, {
         "name": "Lenox Avenue",
         "parent_name": "Lenox Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": 0.8214285714285712,
         "delay": 3,
         "travel_time": 0.0701366459627329,
         "scheduled_runtimes": [{
            "id": "222S-120S",
            "time": 11.5
         }, {
            "id": "301S-120S",
            "time": 12.5
         }],
         "actual_runtimes": [{
            "id": "222S-120S",
            "description": "149 St - Grand Concourse to 96 St via Lenox Avenue",
            "time": 13.725
         }],
         "first_stops": ["301S", "222S", "224S"],
         "last_stops": ["120S", "120S", "227S"]
      }, {
         "name": "7 Avenue Express",
         "parent_name": "7 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": 0.9166666666666672,
         "delay": 3,
         "travel_time": 0.0591397849462366,
         "scheduled_runtimes": [{
            "id": "120S-137S",
            "time": 15.5
         }],
         "actual_runtimes": [{
            "id": "120S-137S",
            "description": "96 St to Chambers St via 7 Avenue Express",
            "time": 16.416666666666664
         }],
         "first_stops": ["120S"],
         "last_stops": ["137S"]
      }, {
         "name": "Eastern Parkway Express",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": null,
         "delay": 0,
         "travel_time": null,
         "scheduled_runtimes": [],
         "actual_runtimes": [{
            "id": "137S-241S",
            "description": "Chambers St to President St via Eastern Parkway Express",
            "time": 23.822222222222223
         }],
         "first_stops": ["137S", "640S", "234S"],
         "last_stops": ["250S", "241S", "239S"]
      }, {
         "name": "Nostrand Avenue",
         "parent_name": "Nostrand Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 26,
         "max_scheduled_headway": 16,
         "travel_time_discrepancy": -1.2208333333333332,
         "delay": 0,
         "travel_time": -0.11626984126984125,
         "scheduled_runtimes": [{
            "id": "241S-247S",
            "time": 10.5
         }],
         "actual_runtimes": [{
            "id": "241S-247S",
            "description": "President St to Flatbush Av - Brooklyn College via Nostrand Avenue",
            "time": 9.279166666666667
         }],
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
      "status": "Service Change",
      "max_headway_discrepancy": 3,
      "max_travel_time_discrepancy": 0.8214285714285712,
      "destinations": {
         "north": ["Harlem - 148 St"],
         "south": ["New Lots Av", "Times Sq - 42 St"]
      },
      "scheduled_destinations": {
         "north": ["Harlem - 148 St"],
         "south": ["New Lots Av", "Times Sq - 42 St"]
      },
      "north": [{
         "name": "New Lots",
         "parent_name": "New Lots",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 1,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": 0.6499999999999998,
         "delay": 0,
         "travel_time": 0.05777777777777776,
         "scheduled_runtimes": [{
            "id": "257N-250N",
            "time": 11.25
         }],
         "actual_runtimes": [],
         "first_stops": ["257N"],
         "last_stops": ["250N", "250N", "251N"]
      }, {
         "name": "Eastern Parkway Local",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": -0.36000000000000015,
         "delay": 0,
         "travel_time": -0.013395061728395066,
         "scheduled_runtimes": [{
            "id": "241N-137N",
            "time": 24.0
         }, {
            "id": "250N-137N",
            "time": 27.0
         }],
         "actual_runtimes": [{
            "id": "250N-137N",
            "description": "Crown Hts - Utica Av to Chambers St via Eastern Parkway Local",
            "time": 26.133333333333333
         }],
         "first_stops": ["250N", "241N", "239N"],
         "last_stops": ["137N", "640N", "234N"]
      }, {
         "name": "7 Avenue Local",
         "parent_name": "7 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 15,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": -1.3520833333333333,
         "delay": 0,
         "travel_time": -0.05633680555555555,
         "scheduled_runtimes": [{
            "id": "137N-120N",
            "time": 24.0
         }],
         "actual_runtimes": [{
            "id": "137N-120N",
            "description": "Chambers St to 96 St via 7 Avenue Local",
            "time": 22.647916666666667
         }],
         "first_stops": ["137N"],
         "last_stops": ["120N"]
      }, {
         "name": "Lenox Avenue",
         "parent_name": "Lenox Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": -0.9619047619047618,
         "delay": 0,
         "travel_time": -0.04397532292269134,
         "scheduled_runtimes": [{
            "id": "120N-222N",
            "time": 13.0
         }, {
            "id": "120N-301N",
            "time": 19.0
         }],
         "actual_runtimes": [{
            "id": "120N-301N",
            "description": "96 St to Harlem - 148 St via Lenox Avenue",
            "time": 16.8375
         }],
         "first_stops": ["120N", "120N", "227N"],
         "last_stops": ["301N", "222N", "224N"]
      }],
      "south": [{
         "name": "Eastern Parkway Express",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 9,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": null,
         "delay": 0,
         "travel_time": null,
         "scheduled_runtimes": [],
         "actual_runtimes": [],
         "first_stops": ["137S", "640S", "234S"],
         "last_stops": ["250S", "241S", "239S"]
      }, {
         "name": "Lenox Avenue",
         "parent_name": "Lenox Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 23,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": 0.8214285714285712,
         "delay": 0,
         "travel_time": 0.0701366459627329,
         "scheduled_runtimes": [{
            "id": "222S-120S",
            "time": 11.5
         }, {
            "id": "301S-120S",
            "time": 12.5
         }],
         "actual_runtimes": [{
            "id": "301S-120S",
            "description": "Harlem - 148 St to 96 St via Lenox Avenue",
            "time": 12.76
         }],
         "first_stops": ["301S", "222S", "224S"],
         "last_stops": ["120S", "120S", "227S"]
      }, {
         "name": "New Lots",
         "parent_name": "New Lots",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": -1.2166666666666668,
         "delay": 0,
         "travel_time": -0.11060606060606062,
         "scheduled_runtimes": [{
            "id": "250S-257S",
            "time": 11.0
         }],
         "actual_runtimes": [{
            "id": "250S-257S",
            "description": "Crown Hts - Utica Av to New Lots Av via New Lots",
            "time": 9.783333333333333
         }],
         "first_stops": ["250S", "250S", "251S"],
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
      "status": "Service Change",
      "max_headway_discrepancy": 36,
      "max_travel_time_discrepancy": 5.905555555555558,
      "destinations": {
         "north": ["Woodlawn", "3 Av - 138 St"],
         "south": ["125 St", "New Lots Av"]
      },
      "scheduled_destinations": {
         "north": ["Woodlawn"],
         "south": ["New Lots Av"]
      },
      "north": [{
         "name": "New Lots",
         "parent_name": "New Lots",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 17,
         "travel_time_discrepancy": 0.6499999999999998,
         "delay": 0,
         "travel_time": 0.05777777777777776,
         "scheduled_runtimes": [{
            "id": "257N-250N",
            "time": 11.25
         }],
         "actual_runtimes": [{
            "id": "257N-250N",
            "description": "New Lots Av to Crown Hts - Utica Av via New Lots",
            "time": 11.899999999999999
         }],
         "first_stops": ["257N"],
         "last_stops": ["250N", "250N", "251N"]
      }, {
         "name": "Eastern Parkway Express",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 0.9333333333333336,
         "delay": 0,
         "travel_time": 0.04444444444444445,
         "scheduled_runtimes": [{
            "id": "250N-640N",
            "time": 21.0
         }],
         "actual_runtimes": [{
            "id": "250N-640N",
            "description": "Crown Hts - Utica Av to Brooklyn Bridge - City Hall via Eastern Parkway Express",
            "time": 21.933333333333334
         }],
         "first_stops": ["250N", "241N", "239N"],
         "last_stops": ["137N", "640N", "234N"]
      }, {
         "name": "Eastern Parkway Local",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 45,
         "max_scheduled_headway": 9,
         "travel_time_discrepancy": -0.36000000000000015,
         "delay": 0,
         "travel_time": -0.013395061728395066,
         "scheduled_runtimes": [{
            "id": "241N-137N",
            "time": 24.0
         }, {
            "id": "250N-137N",
            "time": 27.0
         }],
         "actual_runtimes": [],
         "first_stops": ["250N", "241N", "239N"],
         "last_stops": ["137N", "640N", "234N"]
      }, {
         "name": "Jerome Avenue",
         "parent_name": "Jerome Avenue",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": -1.0000000000000018,
         "delay": 1,
         "travel_time": -0.04724409448818906,
         "scheduled_runtimes": [{
            "id": "415N-401N",
            "time": 21.166666666666668
         }],
         "actual_runtimes": [{
            "id": "415N-401N",
            "description": "149 St - Grand Concourse to Woodlawn via Jerome Avenue",
            "time": 20.166666666666664
         }],
         "first_stops": ["415N"],
         "last_stops": ["401N"]
      }, {
         "name": "Lexington Avenue Local",
         "parent_name": "Lexington Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 16,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": 5.905555555555558,
         "delay": 1,
         "travel_time": 0.20363984674329508,
         "scheduled_runtimes": [{
            "id": "640N-621N",
            "time": 29.0
         }],
         "actual_runtimes": [{
            "id": "640N-621N",
            "description": "Brooklyn Bridge - City Hall to 125 St (Lexington Av) via Lexington Avenue Local",
            "time": 34.90555555555556
         }],
         "first_stops": ["640N"],
         "last_stops": ["621N"]
      }],
      "south": [{
         "name": "Lexington Avenue Local",
         "parent_name": "Lexington Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 17,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": 1.5904761904761908,
         "delay": 0,
         "travel_time": 0.05484400656814451,
         "scheduled_runtimes": [{
            "id": "621S-640S",
            "time": 29.0
         }],
         "actual_runtimes": [{
            "id": "621S-640S",
            "description": "125 St (Lexington Av) to Brooklyn Bridge - City Hall via Lexington Avenue Local",
            "time": 30.59047619047619
         }],
         "first_stops": ["621S"],
         "last_stops": ["640S"]
      }, {
         "name": "Eastern Parkway Express",
         "parent_name": "Eastern Parkway",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 17,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": null,
         "delay": 1,
         "travel_time": null,
         "scheduled_runtimes": [],
         "actual_runtimes": [{
            "id": "640S-250S",
            "description": "Brooklyn Bridge - City Hall to Crown Hts - Utica Av via Eastern Parkway Express",
            "time": 25.566666666666666
         }],
         "first_stops": ["137S", "640S", "234S"],
         "last_stops": ["250S", "241S", "239S"]
      }, {
         "name": "Jerome Avenue",
         "parent_name": "Jerome Avenue",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 18,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": -0.34999999999999964,
         "delay": 0,
         "travel_time": -0.01749999999999998,
         "scheduled_runtimes": [{
            "id": "401S-415S",
            "time": 20.0
         }],
         "actual_runtimes": [{
            "id": "401S-415S",
            "description": "Woodlawn to 149 St - Grand Concourse via Jerome Avenue",
            "time": 19.65
         }],
         "first_stops": ["401S"],
         "last_stops": ["415S"]
      }, {
         "name": "New Lots",
         "parent_name": "New Lots",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 19,
         "max_scheduled_headway": 16,
         "travel_time_discrepancy": -1.2166666666666668,
         "delay": 1,
         "travel_time": -0.11060606060606062,
         "scheduled_runtimes": [{
            "id": "250S-257S",
            "time": 11.0
         }],
         "actual_runtimes": [{
            "id": "250S-257S",
            "description": "Crown Hts - Utica Av to New Lots Av via New Lots",
            "time": 9.783333333333333
         }],
         "first_stops": ["250S", "250S", "251S"],
         "last_stops": ["257S"]
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
      "max_travel_time_discrepancy": 1.0333333333333332,
      "destinations": {
         "north": ["Eastchester - Dyre Av"],
         "south": ["E 180 St"]
      },
      "scheduled_destinations": {
         "north": ["Eastchester - Dyre Av"],
         "south": ["E 180 St"]
      },
      "north": [{
         "name": "Dyre Avenue",
         "parent_name": "Dyre Avenue",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 21,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": -0.5,
         "delay": 0,
         "travel_time": -0.04166666666666667,
         "scheduled_runtimes": [{
            "id": "213N-501N",
            "time": 12.0
         }],
         "actual_runtimes": [{
            "id": "213N-501N",
            "description": "E 180 St to Eastchester - Dyre Av via Dyre Avenue",
            "time": 11.5
         }],
         "first_stops": ["213N", "213N", "505N"],
         "last_stops": ["501N"]
      }],
      "south": [{
         "name": "Dyre Avenue",
         "parent_name": "Dyre Avenue",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": 1.0333333333333332,
         "delay": 0,
         "travel_time": 0.09393939393939393,
         "scheduled_runtimes": [{
            "id": "501S-213S",
            "time": 11.0
         }],
         "actual_runtimes": [{
            "id": "501S-213S",
            "description": "Eastchester - Dyre Av to E 180 St via Dyre Avenue",
            "time": 12.033333333333333
         }],
         "first_stops": ["501S"],
         "last_stops": ["213S", "213S", "505S"]
      }],
      "lines_not_in_service": {
         "north": [{
            "id": 80,
            "name": "White Plains Road",
            "is_visible": true,
            "boroughs": ["The Bronx"]
         }],
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
      "max_headway_discrepancy": 6,
      "max_travel_time_discrepancy": 5.905555555555558,
      "destinations": {
         "north": ["Pelham Bay Park"],
         "south": ["Brooklyn Bridge - City Hall"]
      },
      "scheduled_destinations": {
         "north": ["Pelham Bay Park"],
         "south": ["Brooklyn Bridge - City Hall"]
      },
      "north": [{
         "name": "Lexington Avenue Local",
         "parent_name": "Lexington Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": 5.905555555555558,
         "delay": 1,
         "travel_time": 0.20363984674329508,
         "scheduled_runtimes": [{
            "id": "640N-621N",
            "time": 29.0
         }],
         "actual_runtimes": [{
            "id": "640N-621N",
            "description": "Brooklyn Bridge - City Hall to 125 St (Lexington Av) via Lexington Avenue Local",
            "time": 34.90555555555556
         }],
         "first_stops": ["640N"],
         "last_stops": ["621N"]
      }, {
         "name": "Pelham Local",
         "parent_name": "Pelham",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": -0.7016666666666665,
         "delay": 1,
         "travel_time": -0.023886524822695033,
         "scheduled_runtimes": [{
            "id": "621N-601N",
            "time": 29.375
         }],
         "actual_runtimes": [{
            "id": "621N-601N",
            "description": "125 St (Lexington Av) to Pelham Bay Park via Pelham Local",
            "time": 28.67333333333333
         }],
         "first_stops": ["621N", "621N", "619N"],
         "last_stops": ["601N"]
      }],
      "south": [{
         "name": "Pelham Local",
         "parent_name": "Pelham",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": -1.7611111111111117,
         "delay": 1,
         "travel_time": -0.059363295880149825,
         "scheduled_runtimes": [{
            "id": "601S-621S",
            "time": 29.666666666666668
         }],
         "actual_runtimes": [{
            "id": "601S-621S",
            "description": "Pelham Bay Park to 125 St (Lexington Av) via Pelham Local",
            "time": 27.905555555555555
         }],
         "first_stops": ["601S"],
         "last_stops": ["621S", "621S", "619S"]
      }, {
         "name": "Lexington Avenue Local",
         "parent_name": "Lexington Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": 1.5904761904761908,
         "delay": 1,
         "travel_time": 0.05484400656814451,
         "scheduled_runtimes": [{
            "id": "621S-640S",
            "time": 29.0
         }],
         "actual_runtimes": [{
            "id": "621S-640S",
            "description": "125 St (Lexington Av) to Brooklyn Bridge - City Hall via Lexington Avenue Local",
            "time": 30.59047619047619
         }],
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
      "status": "Not Scheduled",
      "max_headway_discrepancy": null,
      "max_travel_time_discrepancy": null,
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
      "id": "7",
      "name": "7",
      "color": "#a333c8",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "max_headway_discrepancy": 1,
      "max_travel_time_discrepancy": 2.866666666666667,
      "destinations": {
         "north": ["Flushing - Main St"],
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
         "max_actual_headway": 8,
         "max_scheduled_headway": 8,
         "travel_time_discrepancy": -0.028571428571428723,
         "delay": 0,
         "travel_time": -0.001904761904761915,
         "scheduled_runtimes": [{
            "id": "726N-718N",
            "time": 15.0
         }],
         "actual_runtimes": [{
            "id": "726N-718N",
            "description": "34 St - Hudson Yards to Queensboro Plaza via Flushing",
            "time": 14.97142857142857
         }],
         "first_stops": ["726N"],
         "last_stops": ["718N", "718N", "719N"]
      }, {
         "name": "Flushing Local",
         "parent_name": "Flushing",
         "boroughs": ["Queens"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 7,
         "travel_time_discrepancy": 2.866666666666667,
         "delay": 1,
         "travel_time": 0.1441607800982801,
         "scheduled_runtimes": [{
            "id": "718N-701N",
            "time": 22.0
         }, {
            "id": "718N-702N",
            "time": 18.5
         }],
         "actual_runtimes": [{
            "id": "718N-701N",
            "description": "Queensboro Plaza to Flushing - Main St via Flushing Local",
            "time": 24.86904761904762
         }, {
            "id": "718N-702N",
            "description": "Queensboro Plaza to Mets - Willets Point via Flushing Local",
            "time": 21.364814814814814
         }],
         "first_stops": ["718N", "718N", "712N"],
         "last_stops": ["701N", "702N", "701N"]
      }],
      "south": [{
         "name": "Flushing Local",
         "parent_name": "Flushing",
         "boroughs": ["Queens"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 0.7238095238095238,
         "delay": 1,
         "travel_time": 0.03671937243365815,
         "scheduled_runtimes": [{
            "id": "701S-718S",
            "time": 21.0
         }, {
            "id": "702S-718S",
            "time": 18.5
         }],
         "actual_runtimes": [{
            "id": "701S-718S",
            "description": "Flushing - Main St to Queensboro Plaza via Flushing Local",
            "time": 21.747619047619047
         }, {
            "id": "702S-718S",
            "description": "Mets - Willets Point to Queensboro Plaza via Flushing Local",
            "time": 19.2
         }],
         "first_stops": ["701S", "702S", "701S"],
         "last_stops": ["718S", "718S", "712S"]
      }, {
         "name": "34 St–Hudson Yds—Queensboro Plz",
         "parent_name": "Flushing (34 Street–Hudson Yards—Queensboro Plaza)",
         "boroughs": ["Queens", "Manhattan"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": 0.7166666666666665,
         "delay": 1,
         "travel_time": 0.04623655913978494,
         "scheduled_runtimes": [{
            "id": "718S-726S",
            "time": 15.5
         }],
         "actual_runtimes": [{
            "id": "718S-726S",
            "description": "Queensboro Plaza to 34 St - Hudson Yards via Flushing",
            "time": 16.216666666666665
         }],
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
      "max_travel_time_discrepancy": null,
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
      "status": "Service Change",
      "max_headway_discrepancy": 3,
      "max_travel_time_discrepancy": 3.9833333333333334,
      "destinations": {
         "north": ["Inwood - 207 St", "Euclid Av"],
         "south": ["Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
      },
      "scheduled_destinations": {
         "north": ["Euclid Av", "Inwood - 207 St"],
         "south": ["Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
      },
      "north": [{
         "name": "Rockaway (Far Rockaway Branch)",
         "parent_name": "Rockaway (Far Rockaway Branch)",
         "boroughs": ["Queens"],
         "max_actual_headway": 30,
         "max_scheduled_headway": 30,
         "travel_time_discrepancy": 1.8999999999999986,
         "delay": 0,
         "travel_time": 0.06129032258064512,
         "scheduled_runtimes": [{
            "id": "H11N-A55N",
            "time": 31.0
         }],
         "actual_runtimes": [{
            "id": "H11N-A55N",
            "description": "Far Rockaway - Mott Av to Euclid Av via Rockaway (Far Rockaway Branch)",
            "time": 32.9
         }],
         "first_stops": ["H11N"],
         "last_stops": ["A55N", "A55N", "H06N"]
      }, {
         "name": "Fulton Street Local",
         "parent_name": "Fulton Street",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 3.2222222222222228,
         "delay": 0,
         "travel_time": 0.15343915343915346,
         "scheduled_runtimes": [{
            "id": "A55N-A41N",
            "time": 21.0
         }],
         "actual_runtimes": [{
            "id": "A55N-A41N",
            "description": "Euclid Av to Jay St - MetroTech via Fulton Street Local",
            "time": 24.222222222222225
         }],
         "first_stops": ["A55N"],
         "last_stops": ["A41N", "A41N", "A46N"]
      }, {
         "name": "via Chambers St",
         "parent_name": "Cranberry Street (8 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 0.7895833333333335,
         "delay": 1,
         "travel_time": 0.07260416666666669,
         "scheduled_runtimes": [{
            "id": "A41N-A32N",
            "time": 12.0
         }, {
            "id": "A41N-A33N",
            "time": 10.0
         }],
         "actual_runtimes": [{
            "id": "A41N-A33N",
            "description": "Jay St - MetroTech to Spring St via Cranberry Street (8 Avenue)",
            "time": 10.816666666666666
         }, {
            "id": "A41N-A32N",
            "description": "Jay St - MetroTech to W 4 St via Cranberry Street (8 Avenue)",
            "time": 12.7625
         }],
         "first_stops": ["A41N", "A41N", "A40N"],
         "last_stops": ["A33N", "A32N", "A36N"]
      }, {
         "name": "8 Avenue Local",
         "parent_name": "8 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": -0.046666666666666856,
         "delay": 1,
         "travel_time": -0.002483870967741947,
         "scheduled_runtimes": [{
            "id": "A32N-A24N",
            "time": 10.0
         }, {
            "id": "A32N-D14N",
            "time": 10.333333333333334
         }],
         "actual_runtimes": [{
            "id": "A32N-A24N",
            "description": "W 4 St to 59 St - Columbus Circle via 8 Avenue Local",
            "time": 11.049999999999999
         }],
         "first_stops": ["A32N"],
         "last_stops": ["A24N", "D14N", "A24N"]
      }, {
         "name": "Central Park West Local",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": 0.1999999999999993,
         "delay": 1,
         "travel_time": 0.009302325581395314,
         "scheduled_runtimes": [{
            "id": "A24N-A09N",
            "time": 21.5
         }],
         "actual_runtimes": [{
            "id": "A24N-A09N",
            "description": "59 St - Columbus Circle to 168 St via Central Park West Local",
            "time": 21.7
         }],
         "first_stops": ["A24N"],
         "last_stops": ["A09N", "D13N", "A15N"]
      }, {
         "name": "Lefferts Blvd Branch",
         "parent_name": "Fulton Street (Lefferts Boulevard Branch)",
         "boroughs": ["Queens"],
         "max_actual_headway": 30,
         "max_scheduled_headway": 30,
         "travel_time_discrepancy": 0.9000000000000004,
         "delay": 0,
         "travel_time": 0.09000000000000004,
         "scheduled_runtimes": [{
            "id": "A65N-A55N",
            "time": 10.0
         }],
         "actual_runtimes": [{
            "id": "A65N-A55N",
            "description": "Ozone Park - Lefferts Blvd to Euclid Av via Fulton Street (Lefferts Boulevard Branch)",
            "time": 10.9
         }],
         "first_stops": ["A65N"],
         "last_stops": ["A55N", "A55N", "A63N"]
      }, {
         "name": "Washington Heights (8 Avenue)",
         "parent_name": "Washington Heights (8 Avenue)",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": -0.23888888888888835,
         "delay": 1,
         "travel_time": -0.026060606060606003,
         "scheduled_runtimes": [{
            "id": "A09N-A02N",
            "time": 9.166666666666666
         }],
         "actual_runtimes": [{
            "id": "A09N-A02N",
            "description": "168 St to Inwood - 207 St via Washington Heights (8 Avenue)",
            "time": 8.927777777777777
         }],
         "first_stops": ["A09N", "A09N", "A07N"],
         "last_stops": ["A02N"]
      }],
      "south": [{
         "name": "Washington Heights (8 Avenue)",
         "parent_name": "Washington Heights (8 Avenue)",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 1.5888888888888886,
         "delay": 0,
         "travel_time": 0.18692810457516337,
         "scheduled_runtimes": [{
            "id": "A02S-A09S",
            "time": 8.5
         }],
         "actual_runtimes": [{
            "id": "A02S-A09S",
            "description": "Inwood - 207 St to 168 St via Washington Heights (8 Avenue)",
            "time": 10.088888888888889
         }],
         "first_stops": ["A02S"],
         "last_stops": ["A09S", "A09S", "A07S"]
      }, {
         "name": "Central Park West Local",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 3.099999999999999,
         "delay": 1,
         "travel_time": 0.15762711864406775,
         "scheduled_runtimes": [{
            "id": "A09S-A24S",
            "time": 19.666666666666668
         }],
         "actual_runtimes": [{
            "id": "A09S-A24S",
            "description": "168 St to 59 St - Columbus Circle via Central Park West Local",
            "time": 22.766666666666666
         }],
         "first_stops": ["A09S", "D13S", "A15S"],
         "last_stops": ["A24S"]
      }, {
         "name": "8 Avenue Express",
         "parent_name": "8 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 13,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": null,
         "delay": 1,
         "travel_time": null,
         "scheduled_runtimes": [],
         "actual_runtimes": [{
            "id": "A24S-A32S",
            "description": "59 St - Columbus Circle to W 4 St via 8 Avenue Express",
            "time": 11.238888888888889
         }],
         "first_stops": ["A24S", "D14S", "A24S"],
         "last_stops": ["A32S"]
      }, {
         "name": "via Chambers St",
         "parent_name": "Cranberry Street (8 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 2.1083333333333334,
         "delay": 1,
         "travel_time": 0.17569444444444443,
         "scheduled_runtimes": [{
            "id": "A32S-A41S",
            "time": 12.0
         }, {
            "id": "A33S-A41S",
            "time": 10.5
         }],
         "actual_runtimes": [{
            "id": "A32S-A41S",
            "description": "W 4 St to Jay St - MetroTech via Cranberry Street (8 Avenue)",
            "time": 14.108333333333334
         }],
         "first_stops": ["A33S", "A32S", "A36S"],
         "last_stops": ["A41S", "A41S", "A40S"]
      }, {
         "name": "Fulton Street Express",
         "parent_name": "Fulton Street",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 19,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": 3.9833333333333334,
         "delay": 0,
         "travel_time": 0.26555555555555554,
         "scheduled_runtimes": [{
            "id": "A41S-A55S",
            "time": 15.0
         }],
         "actual_runtimes": [{
            "id": "A41S-A55S",
            "description": "Jay St - MetroTech to Euclid Av via Fulton Street Express",
            "time": 18.983333333333334
         }],
         "first_stops": ["A41S", "A41S", "A42S"],
         "last_stops": ["A55S"]
      }, {
         "name": "Lefferts Blvd Branch",
         "parent_name": "Fulton Street (Lefferts Boulevard Branch)",
         "boroughs": ["Queens"],
         "max_actual_headway": 19,
         "max_scheduled_headway": 19,
         "travel_time_discrepancy": -2.666666666666666,
         "delay": 0,
         "travel_time": -0.2051282051282051,
         "scheduled_runtimes": [{
            "id": "A55S-A65S",
            "time": 13.0
         }],
         "actual_runtimes": [{
            "id": "A55S-A65S",
            "description": "Euclid Av to Ozone Park - Lefferts Blvd via Fulton Street (Lefferts Boulevard Branch)",
            "time": 10.333333333333334
         }],
         "first_stops": ["A55S", "A55S", "A63S"],
         "last_stops": ["A65S"]
      }, {
         "name": "Rockaway (Far Rockaway Branch)",
         "parent_name": "Rockaway (Far Rockaway Branch)",
         "boroughs": ["Queens"],
         "max_actual_headway": 32,
         "max_scheduled_headway": 32,
         "travel_time_discrepancy": -1.75,
         "delay": 0,
         "travel_time": -0.05303030303030303,
         "scheduled_runtimes": [{
            "id": "A55S-H11S",
            "time": 33.0
         }],
         "actual_runtimes": [{
            "id": "A55S-H11S",
            "description": "Euclid Av to Far Rockaway - Mott Av via Rockaway (Far Rockaway Branch)",
            "time": 31.25
         }],
         "first_stops": ["A55S", "A55S", "H06S"],
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
      "status": "Not Scheduled",
      "max_headway_discrepancy": null,
      "max_travel_time_discrepancy": null,
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
   }, {
      "id": "C",
      "name": "C",
      "color": "#2185d0",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Scheduled",
      "max_headway_discrepancy": null,
      "max_travel_time_discrepancy": null,
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
   }, {
      "id": "D",
      "name": "D",
      "color": "#f2711c",
      "text_color": null,
      "alternate_name": null,
      "status": "Service Change",
      "max_headway_discrepancy": 4,
      "max_travel_time_discrepancy": 3.1888888888888878,
      "destinations": {
         "north": ["Bedford Park Blvd"],
         "south": ["Coney Island - Stillwell Av"]
      },
      "scheduled_destinations": {
         "north": ["Norwood - 205 St"],
         "south": ["Coney Island - Stillwell Av"]
      },
      "north": [{
         "name": "West End",
         "parent_name": "West End",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": -0.5666666666666664,
         "delay": 0,
         "travel_time": -0.02575757575757575,
         "scheduled_runtimes": [{
            "id": "D43N-B12N",
            "time": 22.0
         }],
         "actual_runtimes": [{
            "id": "D43N-B12N",
            "description": "Coney Island - Stillwell Av to 9 Av via West End",
            "time": 21.433333333333334
         }],
         "first_stops": ["D43N", "D43N", "B23N"],
         "last_stops": ["B12N"]
      }, {
         "name": "4 Avenue Local",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": -0.3270833333333333,
         "delay": 0,
         "travel_time": -0.03202906162464986,
         "scheduled_runtimes": [{
            "id": "R36N-R31N",
            "time": 8.5
         }, {
            "id": "R41N-R31N",
            "time": 14.0
         }],
         "actual_runtimes": [{
            "id": "R36N-R31N",
            "description": "36 St to Atlantic Av - Barclays Ctr (4 Avenue) via 4 Avenue Local",
            "time": 8.166666666666666
         }],
         "first_stops": ["R41N", "R36N", "R36N"],
         "last_stops": ["R31N"]
      }, {
         "name": "via Manhattan Bridge (North Side)",
         "parent_name": "Manhattan Bridge (6 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 1.0083333333333337,
         "delay": 1,
         "travel_time": 0.0916666666666667,
         "scheduled_runtimes": [{
            "id": "R31N-D22N",
            "time": 11.0
         }],
         "actual_runtimes": [{
            "id": "R31N-D22N",
            "description": "Atlantic Av - Barclays Ctr (4 Avenue) to Grand St via Manhattan Bridge (6 Avenue)",
            "time": 12.008333333333333
         }],
         "first_stops": ["R31N", "D24N", "D22N"],
         "last_stops": ["D22N"]
      }, {
         "name": "6 Avenue Express",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 2.125,
         "delay": 1,
         "travel_time": 0.2361111111111111,
         "scheduled_runtimes": [{
            "id": "D21N-D15N",
            "time": 9.0
         }],
         "actual_runtimes": [{
            "id": "D21N-D15N",
            "description": "Broadway-Lafayette St to 47-50 Sts - Rockefeller Ctr via 6 Avenue Express",
            "time": 11.125
         }],
         "first_stops": ["D21N"],
         "last_stops": ["D15N"]
      }, {
         "name": "Central Park West Express",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": 1.229166666666666,
         "delay": 1,
         "travel_time": 0.09028326745718047,
         "scheduled_runtimes": [{
            "id": "A24N-A09N",
            "time": 13.75
         }, {
            "id": "A24N-D13N",
            "time": 11.5
         }],
         "actual_runtimes": [{
            "id": "A24N-D13N",
            "description": "59 St - Columbus Circle to 145 St (Lower Level) via Central Park West Express",
            "time": 11.625
         }],
         "first_stops": ["A24N"],
         "last_stops": ["A09N", "D13N", "A15N"]
      }, {
         "name": "Concourse Local",
         "parent_name": "Concourse",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 3.1888888888888878,
         "delay": 1,
         "travel_time": 0.1594444444444444,
         "scheduled_runtimes": [{
            "id": "D13N-D03N",
            "time": 20.0
         }],
         "actual_runtimes": [{
            "id": "D13N-D03N",
            "description": "145 St (Lower Level) to Bedford Park Blvd via Concourse Local",
            "time": 23.188888888888886
         }],
         "first_stops": ["D13N"],
         "last_stops": ["D03N"]
      }],
      "south": [{
         "name": "Concourse Local",
         "parent_name": "Concourse",
         "boroughs": ["The Bronx"],
         "max_actual_headway": 18,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 2.4555555555555557,
         "delay": 0,
         "travel_time": 0.13641975308641976,
         "scheduled_runtimes": [{
            "id": "D03S-D13S",
            "time": 18.0
         }],
         "actual_runtimes": [{
            "id": "D03S-D13S",
            "description": "Bedford Park Blvd to 145 St (Lower Level) via Concourse Local",
            "time": 20.455555555555556
         }],
         "first_stops": ["D03S"],
         "last_stops": ["D13S"]
      }, {
         "name": "Central Park West Express",
         "parent_name": "Central Park West",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 19,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 0.7083333333333339,
         "delay": 0,
         "travel_time": 0.061594202898550776,
         "scheduled_runtimes": [{
            "id": "D13S-A24S",
            "time": 11.5
         }],
         "actual_runtimes": [{
            "id": "D13S-A24S",
            "description": "145 St (Lower Level) to 59 St - Columbus Circle via Central Park West Express",
            "time": 12.208333333333334
         }],
         "first_stops": ["A09S", "D13S", "A15S"],
         "last_stops": ["A24S"]
      }, {
         "name": "6 Avenue Local",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 19,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": 2.663333333333333,
         "delay": 0,
         "travel_time": 0.2663333333333333,
         "scheduled_runtimes": [{
            "id": "D15S-D21S",
            "time": 10.0
         }],
         "actual_runtimes": [{
            "id": "D15S-D21S",
            "description": "47-50 Sts - Rockefeller Ctr to Broadway-Lafayette St via 6 Avenue Local",
            "time": 12.663333333333332
         }],
         "first_stops": ["D15S"],
         "last_stops": ["D21S"]
      }, {
         "name": "via Manhattan Bridge (North Side)",
         "parent_name": "Manhattan Bridge (6 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 19,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": -0.41666666666666696,
         "delay": 0,
         "travel_time": -0.03787878787878791,
         "scheduled_runtimes": [{
            "id": "D22S-R31S",
            "time": 11.0
         }],
         "actual_runtimes": [{
            "id": "D22S-R31S",
            "description": "Grand St to Atlantic Av - Barclays Ctr (4 Avenue) via Manhattan Bridge (6 Avenue)",
            "time": 10.583333333333332
         }],
         "first_stops": ["D22S"],
         "last_stops": ["R31S", "D24S", "D22S"]
      }, {
         "name": "4 Avenue Local",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 3.0555555555555554,
         "delay": 0,
         "travel_time": 0.261437908496732,
         "scheduled_runtimes": [{
            "id": "R31S-R36S",
            "time": 8.5
         }, {
            "id": "R31S-R41S",
            "time": 13.5
         }],
         "actual_runtimes": [{
            "id": "R31S-R36S",
            "description": "Atlantic Av - Barclays Ctr (4 Avenue) to 36 St via 4 Avenue Local",
            "time": 9.95
         }],
         "first_stops": ["R31S"],
         "last_stops": ["R41S", "R36S", "R36S"]
      }, {
         "name": "West End",
         "parent_name": "West End",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": -4.858333333333334,
         "delay": 1,
         "travel_time": -0.18161993769470408,
         "scheduled_runtimes": [{
            "id": "B12S-D43S",
            "time": 26.75
         }],
         "actual_runtimes": [{
            "id": "B12S-D43S",
            "description": "9 Av to Coney Island - Stillwell Av via West End",
            "time": 21.891666666666666
         }],
         "first_stops": ["B12S"],
         "last_stops": ["D43S", "D43S", "B23S"]
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
      "max_headway_discrepancy": 9,
      "max_travel_time_discrepancy": 4.826666666666666,
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
         "max_actual_headway": 21,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": -0.046666666666666856,
         "delay": 0,
         "travel_time": -0.002483870967741947,
         "scheduled_runtimes": [{
            "id": "A32N-A24N",
            "time": 10.0
         }, {
            "id": "A32N-D14N",
            "time": 10.333333333333334
         }],
         "actual_runtimes": [{
            "id": "A32N-D14N",
            "description": "W 4 St to 7 Av via 8 Avenue Local",
            "time": 8.641666666666666
         }],
         "first_stops": ["A32N"],
         "last_stops": ["A24N", "D14N", "A24N"]
      }, {
         "name": "via 53 St",
         "parent_name": "53 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 21,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 1.0277777777777775,
         "delay": 0,
         "travel_time": 0.14341085271317824,
         "scheduled_runtimes": [{
            "id": "D14N-G21N",
            "time": 7.166666666666667
         }],
         "actual_runtimes": [{
            "id": "D14N-G21N",
            "description": "7 Av to Queens Plaza via 53 Street",
            "time": 8.194444444444445
         }],
         "first_stops": ["D14N", "D15N", "F12N"],
         "last_stops": ["G21N", "G21N", "F09N"]
      }, {
         "name": "Queens Boulevard Express",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": 4.826666666666666,
         "delay": 1,
         "travel_time": 0.38137435897435895,
         "scheduled_runtimes": [{
            "id": "G21N-G08N",
            "time": 12.5
         }, {
            "id": "B04N-G08N",
            "time": 13.0
         }],
         "actual_runtimes": [{
            "id": "G21N-G08N",
            "description": "Queens Plaza to Forest Hills - 71 Av via Queens Boulevard Express",
            "time": 17.96666666666667
         }],
         "first_stops": ["B04N", "G21N", "G14N"],
         "last_stops": ["G08N"]
      }, {
         "name": "Queens Boulevard Local",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 58,
         "max_scheduled_headway": 57,
         "travel_time_discrepancy": 1.0333333333333325,
         "delay": 0,
         "travel_time": 0.04696969696969693,
         "scheduled_runtimes": [{
            "id": "G21N-G08N",
            "time": 22.0
         }],
         "actual_runtimes": [{
            "id": "G21N-G08N",
            "description": "Queens Plaza to Forest Hills - 71 Av via Queens Boulevard Local",
            "time": 23.03333333333333
         }],
         "first_stops": ["B04N", "G21N", "G14N"],
         "last_stops": ["G08N"]
      }, {
         "name": "Forest Hills—Jamaica Local",
         "parent_name": "Queens Boulevard (Eastern Queens)",
         "boroughs": ["Queens"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": 2.3166666666666664,
         "delay": 2,
         "travel_time": 0.13786435786435786,
         "scheduled_runtimes": [{
            "id": "G08N-G05N",
            "time": 17.5
         }, {
            "id": "G08N-F01N",
            "time": 16.5
         }],
         "actual_runtimes": [{
            "id": "G08N-G05N",
            "description": "Forest Hills - 71 Av to Jamaica Center - Parsons/Archer via Forest Hills—Jamaica Local",
            "time": 18.96666666666667
         }],
         "first_stops": ["G08N"],
         "last_stops": ["F01N", "G05N", "F06N"]
      }],
      "south": [{
         "name": "Forest Hills—Jamaica Local",
         "parent_name": "Queens Boulevard (Eastern Queens)",
         "boroughs": ["Queens"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 2.452777777777778,
         "delay": 0,
         "travel_time": 0.22151259866423803,
         "scheduled_runtimes": [{
            "id": "G05S-G08S",
            "time": 10.166666666666666
         }, {
            "id": "F01S-G08S",
            "time": 12.0
         }],
         "actual_runtimes": [{
            "id": "G05S-G08S",
            "description": "Jamaica Center - Parsons/Archer to Forest Hills - 71 Av via Forest Hills—Jamaica Local",
            "time": 11.875
         }],
         "first_stops": ["F01S", "G05S", "F06S"],
         "last_stops": ["G08S"]
      }, {
         "name": "Queens Boulevard Local",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 2.049999999999999,
         "delay": 1,
         "travel_time": 0.10512820512820507,
         "scheduled_runtimes": [{
            "id": "G08S-G21S",
            "time": 19.5
         }],
         "actual_runtimes": [{
            "id": "G08S-G21S",
            "description": "Forest Hills - 71 Av to Queens Plaza via Queens Boulevard Local",
            "time": 21.549999999999997
         }],
         "first_stops": ["G08S"],
         "last_stops": ["B04S", "G21S", "G14S"]
      }, {
         "name": "via 53 St",
         "parent_name": "53 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": 0.7791666666666666,
         "delay": 1,
         "travel_time": 0.10388888888888888,
         "scheduled_runtimes": [{
            "id": "G21S-D14S",
            "time": 7.5
         }],
         "actual_runtimes": [{
            "id": "G21S-D14S",
            "description": "Queens Plaza to 7 Av via 53 Street",
            "time": 8.279166666666667
         }],
         "first_stops": ["G21S", "G21S", "F09S"],
         "last_stops": ["D14S", "D15S", "F12S"]
      }, {
         "name": "8 Avenue Local",
         "parent_name": "8 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": -2.5,
         "delay": 1,
         "travel_time": -0.2,
         "scheduled_runtimes": [{
            "id": "A24S-A32S",
            "time": 9.5
         }, {
            "id": "D14S-A32S",
            "time": 12.5
         }],
         "actual_runtimes": [{
            "id": "D14S-A32S",
            "description": "7 Av to W 4 St via 8 Avenue Local",
            "time": 10.0
         }],
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
      "max_headway_discrepancy": 7,
      "max_travel_time_discrepancy": 4.953333333333333,
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
         "max_actual_headway": 16,
         "max_scheduled_headway": 16,
         "travel_time_discrepancy": -0.4416666666666669,
         "delay": 0,
         "travel_time": -0.0504761904761905,
         "scheduled_runtimes": [{
            "id": "D43N-F35N",
            "time": 8.75
         }],
         "actual_runtimes": [{
            "id": "D43N-F35N",
            "description": "Coney Island - Stillwell Av to Kings Hwy via Culver",
            "time": 8.308333333333334
         }],
         "first_stops": ["D43N", "D43N", "F39N"],
         "last_stops": ["F35N", "F35N", "F38N"]
      }, {
         "name": "Church Av—Kings Hwy",
         "parent_name": "Culver (Church Avenue—Kings Highway)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 1.416666666666667,
         "delay": 0,
         "travel_time": 0.1416666666666667,
         "scheduled_runtimes": [{
            "id": "F35N-F27N",
            "time": 10.0
         }],
         "actual_runtimes": [{
            "id": "F35N-F27N",
            "description": "Kings Hwy to Church Av via Culver",
            "time": 11.416666666666668
         }],
         "first_stops": ["F35N"],
         "last_stops": ["F27N", "F27N", "F29N"]
      }, {
         "name": "Culver",
         "parent_name": "Culver",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": 0.7625000000000002,
         "delay": 0,
         "travel_time": 0.056481481481481494,
         "scheduled_runtimes": [{
            "id": "F27N-F20N",
            "time": 13.5
         }],
         "actual_runtimes": [{
            "id": "F27N-F20N",
            "description": "Church Av to Bergen St via Culver",
            "time": 14.2625
         }],
         "first_stops": ["F27N"],
         "last_stops": ["F20N"]
      }, {
         "name": "via Delancey St",
         "parent_name": "Rutgers Street (6 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": -0.5,
         "delay": 1,
         "travel_time": -0.05555555555555555,
         "scheduled_runtimes": [{
            "id": "A41N-D21N",
            "time": 9.0
         }],
         "actual_runtimes": [{
            "id": "A41N-D21N",
            "description": "Jay St - MetroTech to Broadway-Lafayette St via Rutgers Street (6 Avenue)",
            "time": 8.5
         }],
         "first_stops": ["A41N", "A41N", "F18N"],
         "last_stops": ["D21N", "D21N", "F15N"]
      }, {
         "name": "6 Avenue Local",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": 0.5833333333333334,
         "delay": 1,
         "travel_time": 0.054263565891472874,
         "scheduled_runtimes": [{
            "id": "D21N-D15N",
            "time": 10.75
         }],
         "actual_runtimes": [{
            "id": "D21N-D15N",
            "description": "Broadway-Lafayette St to 47-50 Sts - Rockefeller Ctr via 6 Avenue Local",
            "time": 11.333333333333334
         }],
         "first_stops": ["D21N"],
         "last_stops": ["D15N"]
      }, {
         "name": "via 63 St",
         "parent_name": "63 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": -0.4249999999999994,
         "delay": 1,
         "travel_time": -0.041803278688524535,
         "scheduled_runtimes": [{
            "id": "D15N-B04N",
            "time": 10.166666666666666
         }],
         "actual_runtimes": [{
            "id": "D15N-B04N",
            "description": "47-50 Sts - Rockefeller Ctr to 21 St - Queensbridge via 63 Street",
            "time": 9.741666666666667
         }],
         "first_stops": ["D15N", "D15N", "B06N"],
         "last_stops": ["B04N", "B04N", "B04N"]
      }, {
         "name": "Queens Boulevard Express",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 18,
         "max_scheduled_headway": 11,
         "travel_time_discrepancy": 4.826666666666666,
         "delay": 1,
         "travel_time": 0.38137435897435895,
         "scheduled_runtimes": [{
            "id": "G21N-G08N",
            "time": 12.5
         }, {
            "id": "B04N-G08N",
            "time": 13.0
         }],
         "actual_runtimes": [{
            "id": "B04N-G08N",
            "description": "21 St - Queensbridge to Forest Hills - 71 Av via Queens Boulevard Express",
            "time": 16.866666666666667
         }],
         "first_stops": ["B04N", "G21N", "G14N"],
         "last_stops": ["G08N"]
      }, {
         "name": "Queens Boulevard Local",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 17,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": 1.0333333333333325,
         "delay": 1,
         "travel_time": 0.04696969696969693,
         "scheduled_runtimes": [{
            "id": "G21N-G08N",
            "time": 22.0
         }],
         "actual_runtimes": [],
         "first_stops": ["B04N", "G21N", "G14N"],
         "last_stops": ["G08N"]
      }, {
         "name": "Forest Hills—Jamaica Local",
         "parent_name": "Queens Boulevard (Eastern Queens)",
         "boroughs": ["Queens"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 11,
         "travel_time_discrepancy": 2.3166666666666664,
         "delay": 4,
         "travel_time": 0.13786435786435786,
         "scheduled_runtimes": [{
            "id": "G08N-G05N",
            "time": 17.5
         }, {
            "id": "G08N-F01N",
            "time": 16.5
         }],
         "actual_runtimes": [{
            "id": "G08N-F01N",
            "description": "Forest Hills - 71 Av to Jamaica - 179 St via Forest Hills—Jamaica Local",
            "time": 19.666666666666664
         }],
         "first_stops": ["G08N"],
         "last_stops": ["F01N", "G05N", "F06N"]
      }],
      "south": [{
         "name": "Forest Hills—Jamaica Local",
         "parent_name": "Queens Boulevard (Eastern Queens)",
         "boroughs": ["Queens"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": 2.452777777777778,
         "delay": 0,
         "travel_time": 0.22151259866423803,
         "scheduled_runtimes": [{
            "id": "G05S-G08S",
            "time": 10.166666666666666
         }, {
            "id": "F01S-G08S",
            "time": 12.0
         }],
         "actual_runtimes": [{
            "id": "F01S-G08S",
            "description": "Jamaica - 179 St to Forest Hills - 71 Av via Forest Hills—Jamaica Local",
            "time": 15.941666666666666
         }],
         "first_stops": ["F01S", "G05S", "F06S"],
         "last_stops": ["G08S"]
      }, {
         "name": "Queens Boulevard Express",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": 4.953333333333333,
         "delay": 0,
         "travel_time": 0.36691358024691356,
         "scheduled_runtimes": [{
            "id": "G08S-G21S",
            "time": 13.0
         }, {
            "id": "G08S-B04S",
            "time": 13.5
         }],
         "actual_runtimes": [{
            "id": "G08S-B04S",
            "description": "Forest Hills - 71 Av to 21 St - Queensbridge via Queens Boulevard Express",
            "time": 19.691666666666666
         }],
         "first_stops": ["G08S"],
         "last_stops": ["B04S", "G21S", "G14S"]
      }, {
         "name": "Queens Boulevard Local",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 14,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": 2.049999999999999,
         "delay": 0,
         "travel_time": 0.10512820512820507,
         "scheduled_runtimes": [{
            "id": "G08S-G21S",
            "time": 19.5
         }],
         "actual_runtimes": [],
         "first_stops": ["G08S"],
         "last_stops": ["B04S", "G21S", "G14S"]
      }, {
         "name": "via 63 St",
         "parent_name": "63 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": -3.5888888888888886,
         "delay": 1,
         "travel_time": -0.4222222222222222,
         "scheduled_runtimes": [{
            "id": "B04S-D15S",
            "time": 8.5
         }],
         "actual_runtimes": [{
            "id": "B04S-D15S",
            "description": "21 St - Queensbridge to 47-50 Sts - Rockefeller Ctr via 63 Street",
            "time": 4.911111111111111
         }],
         "first_stops": ["B04S", "B04S", "B04S"],
         "last_stops": ["D15S", "D15S", "B06S"]
      }, {
         "name": "6 Avenue Local",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 2.663333333333333,
         "delay": 1,
         "travel_time": 0.2663333333333333,
         "scheduled_runtimes": [{
            "id": "D15S-D21S",
            "time": 10.0
         }],
         "actual_runtimes": [{
            "id": "D15S-D21S",
            "description": "47-50 Sts - Rockefeller Ctr to Broadway-Lafayette St via 6 Avenue Local",
            "time": 12.663333333333332
         }],
         "first_stops": ["D15S"],
         "last_stops": ["D21S"]
      }, {
         "name": "via Delancey St",
         "parent_name": "Rutgers Street (6 Avenue)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 3.3333333333333326,
         "delay": 1,
         "travel_time": 0.37735849056603765,
         "scheduled_runtimes": [{
            "id": "D21S-A41S",
            "time": 8.833333333333334
         }],
         "actual_runtimes": [{
            "id": "D21S-A41S",
            "description": "Broadway-Lafayette St to Jay St - MetroTech via Rutgers Street (6 Avenue)",
            "time": 12.166666666666666
         }],
         "first_stops": ["D21S", "D21S", "F15S"],
         "last_stops": ["A41S", "A41S", "F18S"]
      }, {
         "name": "Culver",
         "parent_name": "Culver",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 0.8952380952380956,
         "delay": 1,
         "travel_time": 0.07161904761904767,
         "scheduled_runtimes": [{
            "id": "F20S-F27S",
            "time": 12.5
         }],
         "actual_runtimes": [{
            "id": "F20S-F27S",
            "description": "Bergen St to Church Av via Culver",
            "time": 13.395238095238096
         }],
         "first_stops": ["F20S"],
         "last_stops": ["F27S"]
      }, {
         "name": "Church Av—Kings Hwy",
         "parent_name": "Culver (Church Avenue—Kings Highway)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": -2.272222222222222,
         "delay": 1,
         "travel_time": -0.1683127572016461,
         "scheduled_runtimes": [{
            "id": "F27S-F35S",
            "time": 13.5
         }],
         "actual_runtimes": [{
            "id": "F27S-F35S",
            "description": "Church Av to Kings Hwy via Culver",
            "time": 11.227777777777776
         }],
         "first_stops": ["F27S", "F27S", "F29S"],
         "last_stops": ["F35S"]
      }, {
         "name": "Kings Hwy—Coney Island",
         "parent_name": "Culver (Kings Highway—Coney Island)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": -2.8388888888888886,
         "delay": 0,
         "travel_time": -0.24685990338164251,
         "scheduled_runtimes": [{
            "id": "F35S-D43S",
            "time": 11.5
         }],
         "actual_runtimes": [{
            "id": "F35S-D43S",
            "description": "Kings Hwy to Coney Island - Stillwell Av via Culver",
            "time": 8.661111111111111
         }],
         "first_stops": ["F35S", "F35S", "F38S"],
         "last_stops": ["D43S", "D43S", "F39S"]
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
      "max_headway_discrepancy": 0,
      "max_travel_time_discrepancy": 2.5500000000000003,
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
         "max_actual_headway": 19,
         "max_scheduled_headway": 19,
         "travel_time_discrepancy": 0.7625000000000002,
         "delay": 0,
         "travel_time": 0.056481481481481494,
         "scheduled_runtimes": [{
            "id": "F27N-F20N",
            "time": 13.5
         }],
         "actual_runtimes": [{
            "id": "F27N-F20N",
            "description": "Church Av to Bergen St via Culver",
            "time": 14.2625
         }],
         "first_stops": ["F27N"],
         "last_stops": ["F20N"]
      }, {
         "name": "Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts",
         "parent_name": "Crosstown (Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 19,
         "max_scheduled_headway": 19,
         "travel_time_discrepancy": 0.541666666666667,
         "delay": 0,
         "travel_time": 0.09285714285714292,
         "scheduled_runtimes": [{
            "id": "A42N-G33N",
            "time": 5.833333333333333
         }],
         "actual_runtimes": [{
            "id": "A42N-G33N",
            "description": "Hoyt - Schermerhorn Sts to Bedford - Nostrand Avs via Crosstown",
            "time": 6.375
         }],
         "first_stops": ["A42N", "A42N", "G36N"],
         "last_stops": ["G33N", "G33N", "G34N"]
      }, {
         "name": "Court Sq—Bedford–Nostrand Avs",
         "parent_name": "Crosstown (Court Sq—Bedford–Nostrand Avs)",
         "boroughs": ["Queens", "Brooklyn"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 11,
         "travel_time_discrepancy": 0.7749999999999999,
         "delay": 0,
         "travel_time": 0.06138613861386138,
         "scheduled_runtimes": [{
            "id": "G33N-G22N",
            "time": 12.625
         }],
         "actual_runtimes": [{
            "id": "G33N-G22N",
            "description": "Bedford - Nostrand Avs to Court Sq via Crosstown",
            "time": 13.4
         }],
         "first_stops": ["G33N", "G33N", "G32N"],
         "last_stops": ["G22N"]
      }],
      "south": [{
         "name": "Court Sq—Bedford–Nostrand Avs",
         "parent_name": "Crosstown (Court Sq—Bedford–Nostrand Avs)",
         "boroughs": ["Queens", "Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 11,
         "travel_time_discrepancy": 2.5500000000000003,
         "delay": 0,
         "travel_time": 0.20400000000000004,
         "scheduled_runtimes": [{
            "id": "G22S-G33S",
            "time": 12.5
         }],
         "actual_runtimes": [{
            "id": "G22S-G33S",
            "description": "Court Sq to Bedford - Nostrand Avs via Crosstown",
            "time": 15.049999999999999
         }],
         "first_stops": ["G22S"],
         "last_stops": ["G33S", "G33S", "G32S"]
      }, {
         "name": "Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts",
         "parent_name": "Crosstown (Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 11,
         "travel_time_discrepancy": 0.5555555555555559,
         "delay": 0,
         "travel_time": 0.0952380952380953,
         "scheduled_runtimes": [{
            "id": "G33S-A42S",
            "time": 5.833333333333333
         }],
         "actual_runtimes": [{
            "id": "G33S-A42S",
            "description": "Bedford - Nostrand Avs to Hoyt - Schermerhorn Sts via Crosstown",
            "time": 6.388888888888889
         }],
         "first_stops": ["G33S", "G33S", "G34S"],
         "last_stops": ["A42S", "A42S", "G36S"]
      }, {
         "name": "Culver",
         "parent_name": "Culver",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 11,
         "travel_time_discrepancy": 0.8952380952380956,
         "delay": 0,
         "travel_time": 0.07161904761904767,
         "scheduled_runtimes": [{
            "id": "F20S-F27S",
            "time": 12.5
         }],
         "actual_runtimes": [{
            "id": "F20S-F27S",
            "description": "Bergen St to Church Av via Culver",
            "time": 13.395238095238096
         }],
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
      "status": "Not Good",
      "max_headway_discrepancy": 2,
      "max_travel_time_discrepancy": 2.5,
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
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 0.38333333333333347,
         "delay": 0,
         "travel_time": 0.05476190476190477,
         "scheduled_runtimes": [{
            "id": "M23N-M19N",
            "time": 7.0
         }],
         "actual_runtimes": [{
            "id": "M23N-M19N",
            "description": "Broad St to Bowery via Nassau Street",
            "time": 7.383333333333333
         }],
         "first_stops": ["M23N"],
         "last_stops": ["M19N"]
      }, {
         "name": "via Williamsburg Bridge",
         "parent_name": "Williamsburg Bridge",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": -1.8125,
         "delay": 0,
         "travel_time": -0.1723901098901099,
         "scheduled_runtimes": [{
            "id": "M19N-M16N",
            "time": 9.0
         }, {
            "id": "D21N-M16N",
            "time": 11.375
         }],
         "actual_runtimes": [{
            "id": "M19N-M16N",
            "description": "Bowery to Marcy Av via Williamsburg Bridge",
            "time": 7.875
         }],
         "first_stops": ["D21N", "M19N", "M18N"],
         "last_stops": ["M16N"]
      }, {
         "name": "Broadway (Brooklyn) Local",
         "parent_name": "Broadway (Brooklyn)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 1.35,
         "delay": 0,
         "travel_time": 0.26999999999999996,
         "scheduled_runtimes": [{
            "id": "M16N-M11N",
            "time": 5.0
         }],
         "actual_runtimes": [{
            "id": "M16N-M11N",
            "description": "Marcy Av to Myrtle Av via Broadway (Brooklyn) Local",
            "time": 6.35
         }],
         "first_stops": ["M16N"],
         "last_stops": ["M11N"]
      }, {
         "name": "Myrtle Av—Crescent St",
         "parent_name": "Jamaica (Myrtle Avenue—Crescent Street)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 0.6541666666666668,
         "delay": 0,
         "travel_time": 0.053545026881720435,
         "scheduled_runtimes": [{
            "id": "J27N-J20N",
            "time": 8.0
         }, {
            "id": "M11N-J20N",
            "time": 15.5
         }],
         "actual_runtimes": [{
            "id": "M11N-J20N",
            "description": "Myrtle Av to Crescent St via Jamaica",
            "time": 16.433333333333334
         }, {
            "id": "J27N-J20N",
            "description": "Broadway Jct to Crescent St via Jamaica",
            "time": 8.375
         }],
         "first_stops": ["M11N", "J27N", "J27N"],
         "last_stops": ["J20N", "J20N", "J24N"]
      }, {
         "name": "Crescent St—Jamaica Ctr",
         "parent_name": "Jamaica (Crescent Street—Jamaica Center)",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": 0.9833333333333325,
         "delay": 0,
         "travel_time": 0.06145833333333328,
         "scheduled_runtimes": [{
            "id": "J20N-G05N",
            "time": 16.0
         }],
         "actual_runtimes": [{
            "id": "J20N-G05N",
            "description": "Crescent St to Jamaica Center - Parsons/Archer via Jamaica",
            "time": 16.983333333333334
         }],
         "first_stops": ["J20N", "J20N", "J15N"],
         "last_stops": ["G05N", "G05N", "J15N"]
      }],
      "south": [{
         "name": "Crescent St—Jamaica Ctr",
         "parent_name": "Jamaica (Crescent Street—Jamaica Center)",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 18,
         "max_scheduled_headway": 18,
         "travel_time_discrepancy": null,
         "delay": 0,
         "travel_time": null,
         "scheduled_runtimes": [{
            "id": "G05S-J20S",
            "time": 16.0
         }],
         "actual_runtimes": [],
         "first_stops": ["G05S", "G05S", "J15S"],
         "last_stops": ["J20S", "J20S", "J15S"]
      }, {
         "name": "Myrtle Av—Crescent St",
         "parent_name": "Jamaica (Myrtle Avenue—Crescent Street)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 17,
         "travel_time_discrepancy": 2.5,
         "delay": 0,
         "travel_time": 0.16129032258064516,
         "scheduled_runtimes": [{
            "id": "J20S-J27S",
            "time": 8.0
         }, {
            "id": "J20S-M11S",
            "time": 15.5
         }],
         "actual_runtimes": [{
            "id": "J20S-M11S",
            "description": "Crescent St to Myrtle Av via Jamaica",
            "time": 18.0
         }],
         "first_stops": ["J20S", "J20S", "J24S"],
         "last_stops": ["M11S", "J27S", "J27S"]
      }, {
         "name": "Broadway (Brooklyn) Local",
         "parent_name": "Broadway (Brooklyn)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 17,
         "travel_time_discrepancy": 2.45,
         "delay": 0,
         "travel_time": 0.49000000000000005,
         "scheduled_runtimes": [{
            "id": "M11S-M16S",
            "time": 5.0
         }],
         "actual_runtimes": [{
            "id": "M11S-M16S",
            "description": "Myrtle Av to Marcy Av via Broadway (Brooklyn) Local",
            "time": 7.45
         }],
         "first_stops": ["M11S"],
         "last_stops": ["M16S"]
      }, {
         "name": "via Williamsburg Bridge",
         "parent_name": "Williamsburg Bridge",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": -0.6375000000000002,
         "delay": 0,
         "travel_time": -0.0648809523809524,
         "scheduled_runtimes": [{
            "id": "M16S-M19S",
            "time": 9.0
         }, {
            "id": "M16S-D21S",
            "time": 10.5
         }],
         "actual_runtimes": [{
            "id": "M16S-M19S",
            "description": "Marcy Av to Bowery via Williamsburg Bridge",
            "time": 8.475
         }],
         "first_stops": ["M16S"],
         "last_stops": ["M19S", "D21S", "M18S"]
      }, {
         "name": "Nassau Street",
         "parent_name": "Nassau Street",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 0.7166666666666668,
         "delay": 0,
         "travel_time": 0.13030303030303034,
         "scheduled_runtimes": [{
            "id": "M19S-M23S",
            "time": 5.5
         }],
         "actual_runtimes": [{
            "id": "M19S-M23S",
            "description": "Bowery to Broad St via Nassau Street",
            "time": 6.216666666666667
         }],
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
      "max_headway_discrepancy": 10,
      "max_travel_time_discrepancy": 3.0166666666666657,
      "destinations": {
         "north": ["8 Av", "Lorimer St"],
         "south": ["Canarsie - Rockaway Pkwy"]
      },
      "scheduled_destinations": {
         "north": ["8 Av", "Lorimer St"],
         "south": ["Canarsie - Rockaway Pkwy"]
      },
      "north": [{
         "name": "Broadway Jct—Rockaway Pkwy",
         "parent_name": "Canarsie (Broadway Junction—Rockaway Parkway)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": 0.6722222222222219,
         "delay": 0,
         "travel_time": 0.058454106280193215,
         "scheduled_runtimes": [{
            "id": "L29N-L22N",
            "time": 11.5
         }],
         "actual_runtimes": [{
            "id": "L29N-L22N",
            "description": "Canarsie - Rockaway Pkwy to Broadway Jct via Canarsie",
            "time": 12.172222222222222
         }],
         "first_stops": ["L29N"],
         "last_stops": ["L22N", "L22N", "L24N"]
      }, {
         "name": "Myrtle Av—Broadway Jct",
         "parent_name": "Canarsie (Myrtle Avenue—Broadway Junction)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": -1.6500000000000001,
         "delay": 0,
         "travel_time": -0.23571428571428574,
         "scheduled_runtimes": [{
            "id": "L22N-L17N",
            "time": 7.0
         }],
         "actual_runtimes": [{
            "id": "L22N-L17N",
            "description": "Broadway Jct to Myrtle - Wyckoff Avs via Canarsie",
            "time": 5.3500000000000005
         }],
         "first_stops": ["L22N", "L22N", "L21N"],
         "last_stops": ["L17N", "L17N", "L19N"]
      }, {
         "name": "Lorimer St—Myrtle Av",
         "parent_name": "Canarsie (Lorimer Street—Myrtle Avenue)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": -0.33333333333333304,
         "delay": 0,
         "travel_time": -0.02898550724637678,
         "scheduled_runtimes": [{
            "id": "L17N-L10N",
            "time": 11.5
         }],
         "actual_runtimes": [{
            "id": "L17N-L10N",
            "description": "Myrtle - Wyckoff Avs to Lorimer St via Canarsie",
            "time": 11.166666666666668
         }],
         "first_stops": ["L17N"],
         "last_stops": ["L10N"]
      }, {
         "name": "14 Street",
         "parent_name": "14 Street",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 21,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": 3.0166666666666657,
         "delay": 0,
         "travel_time": 0.2080459770114942,
         "scheduled_runtimes": [{
            "id": "L10N-L01N",
            "time": 14.5
         }],
         "actual_runtimes": [{
            "id": "L10N-L01N",
            "description": "Lorimer St to 8 Av via 14 Street",
            "time": 17.516666666666666
         }],
         "first_stops": ["L10N", "L10N", "L08N"],
         "last_stops": ["L01N"]
      }],
      "south": [{
         "name": "14 Street",
         "parent_name": "14 Street",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": 1.4833333333333343,
         "delay": 0,
         "travel_time": 0.08018018018018024,
         "scheduled_runtimes": [{
            "id": "L01S-L10S",
            "time": 18.5
         }],
         "actual_runtimes": [{
            "id": "L01S-L10S",
            "description": "8 Av to Lorimer St via 14 Street",
            "time": 19.983333333333334
         }],
         "first_stops": ["L01S"],
         "last_stops": ["L10S", "L10S", "L08S"]
      }, {
         "name": "Lorimer St—Myrtle Av",
         "parent_name": "Canarsie (Lorimer Street—Myrtle Avenue)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": -2.122222222222222,
         "delay": 0,
         "travel_time": -0.19292929292929287,
         "scheduled_runtimes": [{
            "id": "L10S-L17S",
            "time": 11.0
         }],
         "actual_runtimes": [{
            "id": "L10S-L17S",
            "description": "Lorimer St to Myrtle - Wyckoff Avs via Canarsie",
            "time": 8.877777777777778
         }],
         "first_stops": ["L10S"],
         "last_stops": ["L17S"]
      }, {
         "name": "Myrtle Av—Broadway Jct",
         "parent_name": "Canarsie (Myrtle Avenue—Broadway Junction)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": -0.7444444444444445,
         "delay": 0,
         "travel_time": -0.08758169934640524,
         "scheduled_runtimes": [{
            "id": "L17S-L22S",
            "time": 8.5
         }],
         "actual_runtimes": [{
            "id": "L17S-L22S",
            "description": "Myrtle - Wyckoff Avs to Broadway Jct via Canarsie",
            "time": 7.7555555555555555
         }],
         "first_stops": ["L17S", "L17S", "L19S"],
         "last_stops": ["L22S", "L22S", "L21S"]
      }, {
         "name": "Broadway Jct—Rockaway Pkwy",
         "parent_name": "Canarsie (Broadway Junction—Rockaway Parkway)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": -1.611111111111111,
         "delay": 0,
         "travel_time": -0.1895424836601307,
         "scheduled_runtimes": [{
            "id": "L22S-L29S",
            "time": 8.5
         }],
         "actual_runtimes": [{
            "id": "L22S-L29S",
            "description": "Broadway Jct to Canarsie - Rockaway Pkwy via Canarsie",
            "time": 6.888888888888889
         }],
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
      "max_headway_discrepancy": 6,
      "max_travel_time_discrepancy": 2.663333333333333,
      "destinations": {
         "north": ["96 St", "Myrtle Av"],
         "south": ["Middle Village - Metropolitan Av"]
      },
      "scheduled_destinations": {
         "north": ["96 St", "Myrtle Av"],
         "south": ["Middle Village - Metropolitan Av"]
      },
      "north": [{
         "name": "6 Avenue Local",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 19,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": 0.5833333333333334,
         "delay": 1,
         "travel_time": 0.054263565891472874,
         "scheduled_runtimes": [{
            "id": "D21N-D15N",
            "time": 10.75
         }],
         "actual_runtimes": [{
            "id": "D21N-D15N",
            "description": "Broadway-Lafayette St to 47-50 Sts - Rockefeller Ctr via 6 Avenue Local",
            "time": 11.333333333333334
         }],
         "first_stops": ["D21N"],
         "last_stops": ["D15N"]
      }, {
         "name": "Myrtle Avenue",
         "parent_name": "Myrtle Avenue",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 19,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": null,
         "delay": 0,
         "travel_time": null,
         "scheduled_runtimes": [{
            "id": "M01N-M11N",
            "time": 12.0
         }],
         "actual_runtimes": [],
         "first_stops": ["M01N"],
         "last_stops": ["M11N", "M11N", "M10N"]
      }, {
         "name": "via Williamsburg Bridge",
         "parent_name": "Williamsburg Bridge",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 19,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": -1.8125,
         "delay": 1,
         "travel_time": -0.1723901098901099,
         "scheduled_runtimes": [{
            "id": "M19N-M16N",
            "time": 9.0
         }, {
            "id": "D21N-M16N",
            "time": 11.375
         }],
         "actual_runtimes": [{
            "id": "D21N-M16N",
            "description": "Broadway-Lafayette St to Marcy Av via Williamsburg Bridge",
            "time": 8.875
         }],
         "first_stops": ["D21N", "M19N", "M18N"],
         "last_stops": ["M16N"]
      }, {
         "name": "Broadway (Brooklyn) Local",
         "parent_name": "Broadway (Brooklyn)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 19,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": 1.35,
         "delay": 1,
         "travel_time": 0.26999999999999996,
         "scheduled_runtimes": [{
            "id": "M16N-M11N",
            "time": 5.0
         }],
         "actual_runtimes": [{
            "id": "M16N-M11N",
            "description": "Marcy Av to Myrtle Av via Broadway (Brooklyn) Local",
            "time": 6.35
         }],
         "first_stops": ["M16N"],
         "last_stops": ["M11N"]
      }, {
         "name": "2 Avenue",
         "parent_name": "2 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 0.32619047619047603,
         "delay": 1,
         "travel_time": 0.050183150183150164,
         "scheduled_runtimes": [{
            "id": "B08N-Q05N",
            "time": 6.5
         }],
         "actual_runtimes": [{
            "id": "B08N-Q05N",
            "description": "Lexington Av/63 St to 96 St via 2 Avenue",
            "time": 6.826190476190476
         }],
         "first_stops": ["B08N", "B08N", "Q03N"],
         "last_stops": ["Q05N"]
      }],
      "south": [{
         "name": "2 Avenue",
         "parent_name": "2 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": -1.2999999999999998,
         "delay": 0,
         "travel_time": -0.21666666666666662,
         "scheduled_runtimes": [{
            "id": "Q05S-B08S",
            "time": 6.0
         }],
         "actual_runtimes": [{
            "id": "Q05S-B08S",
            "description": "96 St to Lexington Av/63 St via 2 Avenue",
            "time": 4.7
         }],
         "first_stops": ["Q05S"],
         "last_stops": ["B08S", "B08S", "Q03S"]
      }, {
         "name": "6 Avenue Local",
         "parent_name": "6 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": 2.663333333333333,
         "delay": 0,
         "travel_time": 0.2663333333333333,
         "scheduled_runtimes": [{
            "id": "D15S-D21S",
            "time": 10.0
         }],
         "actual_runtimes": [{
            "id": "D15S-D21S",
            "description": "47-50 Sts - Rockefeller Ctr to Broadway-Lafayette St via 6 Avenue Local",
            "time": 12.663333333333332
         }],
         "first_stops": ["D15S"],
         "last_stops": ["D21S"]
      }, {
         "name": "Broadway (Brooklyn) Local",
         "parent_name": "Broadway (Brooklyn)",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 2.45,
         "delay": 0,
         "travel_time": 0.49000000000000005,
         "scheduled_runtimes": [{
            "id": "M11S-M16S",
            "time": 5.0
         }],
         "actual_runtimes": [{
            "id": "M11S-M16S",
            "description": "Myrtle Av to Marcy Av via Broadway (Brooklyn) Local",
            "time": 7.45
         }],
         "first_stops": ["M11S"],
         "last_stops": ["M16S"]
      }, {
         "name": "via Williamsburg Bridge",
         "parent_name": "Williamsburg Bridge",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": -0.6375000000000002,
         "delay": 0,
         "travel_time": -0.0648809523809524,
         "scheduled_runtimes": [{
            "id": "M16S-M19S",
            "time": 9.0
         }, {
            "id": "M16S-D21S",
            "time": 10.5
         }],
         "actual_runtimes": [{
            "id": "M16S-D21S",
            "description": "Marcy Av to Broadway-Lafayette St via Williamsburg Bridge",
            "time": 9.75
         }],
         "first_stops": ["M16S"],
         "last_stops": ["M19S", "D21S", "M18S"]
      }, {
         "name": "Myrtle Avenue",
         "parent_name": "Myrtle Avenue",
         "boroughs": ["Brooklyn", "Queens"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 11,
         "travel_time_discrepancy": null,
         "delay": 0,
         "travel_time": null,
         "scheduled_runtimes": [{
            "id": "M11S-M01S",
            "time": 13.0
         }],
         "actual_runtimes": [],
         "first_stops": ["M11S", "M11S", "M10S"],
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
      "max_headway_discrepancy": 2,
      "max_travel_time_discrepancy": 3.4833333333333334,
      "destinations": {
         "north": ["Astoria - Ditmars Blvd", "Times Sq - 42 St"],
         "south": ["Coney Island - Stillwell Av", "Queensboro Plaza"]
      },
      "scheduled_destinations": {
         "north": ["Astoria - Ditmars Blvd"],
         "south": ["Coney Island - Stillwell Av"]
      },
      "north": [{
         "name": "Sea Beach",
         "parent_name": "Sea Beach",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": 3.291666666666666,
         "delay": 0,
         "travel_time": 0.20572916666666663,
         "scheduled_runtimes": [{
            "id": "D43N-N02N",
            "time": 16.0
         }],
         "actual_runtimes": [{
            "id": "D43N-N02N",
            "description": "Coney Island - Stillwell Av to 8 Av via Sea Beach",
            "time": 19.291666666666664
         }],
         "first_stops": ["D43N", "D43N", "N10N"],
         "last_stops": ["N02N"]
      }, {
         "name": "4 Avenue Local",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": -0.3270833333333333,
         "delay": 0,
         "travel_time": -0.03202906162464986,
         "scheduled_runtimes": [{
            "id": "R36N-R31N",
            "time": 8.5
         }, {
            "id": "R41N-R31N",
            "time": 14.0
         }],
         "actual_runtimes": [{
            "id": "R41N-R31N",
            "description": "59 St to Atlantic Av - Barclays Ctr (4 Avenue) via 4 Avenue Local",
            "time": 13.68095238095238
         }, {
            "id": "R36N-R31N",
            "description": "36 St to Atlantic Av - Barclays Ctr (4 Avenue) via 4 Avenue Local",
            "time": 8.166666666666666
         }],
         "first_stops": ["R41N", "R36N", "R36N"],
         "last_stops": ["R31N"]
      }, {
         "name": "via 59 St",
         "parent_name": "59 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": -0.9285714285714286,
         "delay": 1,
         "travel_time": -0.08919022154316271,
         "scheduled_runtimes": [{
            "id": "R14N-R09N",
            "time": 8.5
         }, {
            "id": "R14N-G21N",
            "time": 11.0
         }],
         "actual_runtimes": [{
            "id": "R14N-R09N",
            "description": "57 St - 7 Av to Queensboro Plaza via 59 Street",
            "time": 8.1875
         }],
         "first_stops": ["R14N", "R14N", "R13N"],
         "last_stops": ["R09N", "G21N", "R11N"]
      }, {
         "name": "via Whitehall St",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 2.833333333333332,
         "delay": 1,
         "travel_time": 0.16504854368932032,
         "scheduled_runtimes": [{
            "id": "R31N-R23N",
            "time": 17.166666666666668
         }],
         "actual_runtimes": [{
            "id": "R31N-R23N",
            "description": "Atlantic Av - Barclays Ctr (4 Avenue) to Canal St (Upper Level) via via Whitehall St",
            "time": 20.0
         }],
         "first_stops": ["R31N", "D24N", "Q01N"],
         "last_stops": ["R23N", "Q01N", "Q01N"]
      }, {
         "name": "Astoria",
         "parent_name": "Astoria",
         "boroughs": ["Queens"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 16,
         "travel_time_discrepancy": 3.4833333333333334,
         "delay": 1,
         "travel_time": 0.34833333333333333,
         "scheduled_runtimes": [{
            "id": "R09N-R01N",
            "time": 10.0
         }],
         "actual_runtimes": [{
            "id": "R09N-R01N",
            "description": "Queensboro Plaza to Astoria - Ditmars Blvd via Astoria",
            "time": 13.483333333333334
         }],
         "first_stops": ["R09N", "R09N", "R06N"],
         "last_stops": ["R01N"]
      }, {
         "name": "Broadway Local",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": -1.0416666666666665,
         "delay": 1,
         "travel_time": -0.07238400488400487,
         "scheduled_runtimes": [{
            "id": "R23N-R14N",
            "time": 15.0
         }, {
            "id": "Q01N-R14N",
            "time": 16.0
         }, {
            "id": "R23N-R15N",
            "time": 13.0
         }, {
            "id": "Q01N-R15N",
            "time": 14.0
         }],
         "actual_runtimes": [{
            "id": "R23N-R15N",
            "description": "Canal St (Upper Level) to 49 St via Broadway Local",
            "time": 12.3125
         }, {
            "id": "R23N-R14N",
            "description": "Canal St (Upper Level) to 57 St - 7 Av via Broadway Local",
            "time": 14.083333333333334
         }],
         "first_stops": ["R23N", "Q01N", "R20N"],
         "last_stops": ["R15N", "R14N", "R14N"]
      }],
      "south": [{
         "name": "via 59 St",
         "parent_name": "59 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 18,
         "travel_time_discrepancy": -1.7166666666666668,
         "delay": 0,
         "travel_time": -0.18070175438596492,
         "scheduled_runtimes": [{
            "id": "R09S-R14S",
            "time": 8.5
         }, {
            "id": "G21S-R14S",
            "time": 9.5
         }],
         "actual_runtimes": [],
         "first_stops": ["R09S", "G21S", "R11S"],
         "last_stops": ["R14S", "R14S", "R13S"]
      }, {
         "name": "Broadway Local",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 18,
         "travel_time_discrepancy": 0.07222222222222197,
         "delay": 0,
         "travel_time": 0.004607652883514932,
         "scheduled_runtimes": [{
            "id": "R14S-R23S",
            "time": 14.5
         }, {
            "id": "R15S-R23S",
            "time": 12.833333333333334
         }],
         "actual_runtimes": [{
            "id": "R15S-R23S",
            "description": "49 St to Canal St (Upper Level) via Broadway Local",
            "time": 12.75
         }, {
            "id": "R14S-R23S",
            "description": "57 St - 7 Av to Canal St (Upper Level) via Broadway Local",
            "time": 14.72777777777778
         }],
         "first_stops": ["R15S", "R14S", "R14S"],
         "last_stops": ["R23S", "Q01S", "R20S"]
      }, {
         "name": "via Whitehall St",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 18,
         "travel_time_discrepancy": 0.16111111111111262,
         "delay": 0,
         "travel_time": 0.008554572271386507,
         "scheduled_runtimes": [{
            "id": "R23S-R31S",
            "time": 18.833333333333332
         }],
         "actual_runtimes": [{
            "id": "R23S-R31S",
            "description": "Canal St (Upper Level) to Atlantic Av - Barclays Ctr (4 Avenue) via via Whitehall St",
            "time": 18.994444444444444
         }],
         "first_stops": ["R23S", "Q01S", "Q01S"],
         "last_stops": ["R31S", "D24S", "Q01S"]
      }, {
         "name": "4 Avenue Express",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 4,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": 1.35,
         "delay": 0,
         "travel_time": 0.1025974025974026,
         "scheduled_runtimes": [{
            "id": "R31S-R36S",
            "time": 5.5
         }, {
            "id": "R31S-R41S",
            "time": 10.5
         }],
         "actual_runtimes": [{
            "id": "R31S-R41S",
            "description": "Atlantic Av - Barclays Ctr (4 Avenue) to 59 St via 4 Avenue Express",
            "time": 13.25
         }, {
            "id": "R31S-R36S",
            "description": "Atlantic Av - Barclays Ctr (4 Avenue) to 36 St via 4 Avenue Express",
            "time": 4.75
         }],
         "first_stops": ["R31S"],
         "last_stops": ["R41S", "R36S", "R36S"]
      }, {
         "name": "4 Avenue Local",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 13,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": 3.0555555555555554,
         "delay": 0,
         "travel_time": 0.261437908496732,
         "scheduled_runtimes": [{
            "id": "R31S-R36S",
            "time": 8.5
         }, {
            "id": "R31S-R41S",
            "time": 13.5
         }],
         "actual_runtimes": [{
            "id": "R31S-R41S",
            "description": "Atlantic Av - Barclays Ctr (4 Avenue) to 59 St via 4 Avenue Local",
            "time": 18.5625
         }, {
            "id": "R31S-R36S",
            "description": "Atlantic Av - Barclays Ctr (4 Avenue) to 36 St via 4 Avenue Local",
            "time": 9.95
         }],
         "first_stops": ["R31S"],
         "last_stops": ["R41S", "R36S", "R36S"]
      }, {
         "name": "Astoria",
         "parent_name": "Astoria",
         "boroughs": ["Queens"],
         "max_actual_headway": 18,
         "max_scheduled_headway": 18,
         "travel_time_discrepancy": null,
         "delay": 0,
         "travel_time": null,
         "scheduled_runtimes": [{
            "id": "R01S-R09S",
            "time": 9.166666666666666
         }],
         "actual_runtimes": [],
         "first_stops": ["R01S"],
         "last_stops": ["R09S", "R09S", "R06S"]
      }, {
         "name": "Sea Beach",
         "parent_name": "Sea Beach",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 18,
         "travel_time_discrepancy": -2.494444444444446,
         "delay": 0,
         "travel_time": -0.12069892473118286,
         "scheduled_runtimes": [{
            "id": "N02S-D43S",
            "time": 20.666666666666668
         }],
         "actual_runtimes": [{
            "id": "N02S-D43S",
            "description": "8 Av to Coney Island - Stillwell Av via Sea Beach",
            "time": 18.17222222222222
         }],
         "first_stops": ["N02S"],
         "last_stops": ["D43S", "D43S", "N10S"]
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
      "max_headway_discrepancy": 3,
      "max_travel_time_discrepancy": 1.5888888888888886,
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
         "max_actual_headway": 20,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": 0.8666666666666671,
         "delay": 0,
         "travel_time": 0.03280831458266368,
         "scheduled_runtimes": [{
            "id": "D40N-D24N",
            "time": 25.5
         }, {
            "id": "D43N-D24N",
            "time": 30.5
         }],
         "actual_runtimes": [{
            "id": "D43N-D24N",
            "description": "Coney Island - Stillwell Av to Atlantic Av - Barclays Ctr (Brighton) via Brighton Local",
            "time": 30.866666666666667
         }, {
            "id": "D40N-D24N",
            "description": "Brighton Beach to Atlantic Av - Barclays Ctr (Brighton) via Brighton Local",
            "time": 26.866666666666667
         }],
         "first_stops": ["D43N", "D40N", "D40N"],
         "last_stops": ["D24N"]
      }, {
         "name": "via Manhattan Bridge (South Side)",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": 1.5888888888888886,
         "delay": 0,
         "travel_time": 0.16158192090395476,
         "scheduled_runtimes": [{
            "id": "D24N-Q01N",
            "time": 9.833333333333334
         }],
         "actual_runtimes": [{
            "id": "D24N-Q01N",
            "description": "Atlantic Av - Barclays Ctr (Brighton) to Canal St (Lower Level) via via Manhattan Bridge (South Side)",
            "time": 11.422222222222222
         }],
         "first_stops": ["R31N", "D24N", "Q01N"],
         "last_stops": ["R23N", "Q01N", "Q01N"]
      }, {
         "name": "Broadway Express",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 9,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": 0.625,
         "delay": 0,
         "travel_time": 0.05612244897959184,
         "scheduled_runtimes": [{
            "id": "Q01N-R14N",
            "time": 12.25
         }, {
            "id": "Q01N-R15N",
            "time": 10.5
         }],
         "actual_runtimes": [],
         "first_stops": ["R23N", "Q01N", "R20N"],
         "last_stops": ["R15N", "R14N", "R14N"]
      }, {
         "name": "Broadway Local",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": -1.0416666666666665,
         "delay": 0,
         "travel_time": -0.07238400488400487,
         "scheduled_runtimes": [{
            "id": "R23N-R14N",
            "time": 15.0
         }, {
            "id": "Q01N-R14N",
            "time": 16.0
         }, {
            "id": "R23N-R15N",
            "time": 13.0
         }, {
            "id": "Q01N-R15N",
            "time": 14.0
         }],
         "actual_runtimes": [{
            "id": "Q01N-R15N",
            "description": "Canal St (Lower Level) to 49 St via Broadway Local",
            "time": 12.0
         }, {
            "id": "Q01N-R14N",
            "description": "Canal St (Lower Level) to 57 St - 7 Av via Broadway Local",
            "time": 14.0
         }],
         "first_stops": ["R23N", "Q01N", "R20N"],
         "last_stops": ["R15N", "R14N", "R14N"]
      }, {
         "name": "2 Avenue",
         "parent_name": "2 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 17,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": 0.32619047619047603,
         "delay": 1,
         "travel_time": 0.050183150183150164,
         "scheduled_runtimes": [{
            "id": "B08N-Q05N",
            "time": 6.5
         }],
         "actual_runtimes": [{
            "id": "B08N-Q05N",
            "description": "Lexington Av/63 St to 96 St via 2 Avenue",
            "time": 6.826190476190476
         }],
         "first_stops": ["B08N", "B08N", "Q03N"],
         "last_stops": ["Q05N"]
      }],
      "south": [{
         "name": "2 Avenue",
         "parent_name": "2 Avenue",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 15,
         "travel_time_discrepancy": -1.2999999999999998,
         "delay": 0,
         "travel_time": -0.21666666666666662,
         "scheduled_runtimes": [{
            "id": "Q05S-B08S",
            "time": 6.0
         }],
         "actual_runtimes": [{
            "id": "Q05S-B08S",
            "description": "96 St to Lexington Av/63 St via 2 Avenue",
            "time": 4.7
         }],
         "first_stops": ["Q05S"],
         "last_stops": ["B08S", "B08S", "Q03S"]
      }, {
         "name": "Broadway Local",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 0.07222222222222197,
         "delay": 0,
         "travel_time": 0.004607652883514932,
         "scheduled_runtimes": [{
            "id": "R14S-R23S",
            "time": 14.5
         }, {
            "id": "R15S-R23S",
            "time": 12.833333333333334
         }],
         "actual_runtimes": [],
         "first_stops": ["R15S", "R14S", "R14S"],
         "last_stops": ["R23S", "Q01S", "R20S"]
      }, {
         "name": "via Manhattan Bridge (South Side)",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 12,
         "max_scheduled_headway": 12,
         "travel_time_discrepancy": 0.093333333333333,
         "delay": 0,
         "travel_time": 0.012245762711864372,
         "scheduled_runtimes": [{
            "id": "Q01S-R31S",
            "time": 12.0
         }, {
            "id": "Q01S-D24S",
            "time": 9.833333333333334
         }],
         "actual_runtimes": [{
            "id": "Q01S-D24S",
            "description": "Canal St (Lower Level) to Atlantic Av - Barclays Ctr (Brighton) via via Manhattan Bridge (South Side)",
            "time": 10.441666666666666
         }],
         "first_stops": ["R23S", "Q01S", "Q01S"],
         "last_stops": ["R31S", "D24S", "Q01S"]
      }, {
         "name": "Brighton Local",
         "parent_name": "Brighton",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 16,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": -0.877777777777777,
         "delay": 1,
         "travel_time": -0.02740941405802085,
         "scheduled_runtimes": [{
            "id": "D24S-D40S",
            "time": 28.5
         }, {
            "id": "D24S-D43S",
            "time": 34.0
         }],
         "actual_runtimes": [{
            "id": "D24S-D43S",
            "description": "Atlantic Av - Barclays Ctr (Brighton) to Coney Island - Stillwell Av via Brighton Local",
            "time": 32.80555555555555
         }, {
            "id": "D24S-D40S",
            "description": "Atlantic Av - Barclays Ctr (Brighton) to Brighton Beach via Brighton Local",
            "time": 27.938888888888886
         }],
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
      "status": "Service Change",
      "max_headway_discrepancy": 6,
      "max_travel_time_discrepancy": 3.0555555555555554,
      "destinations": {
         "north": ["Forest Hills - 71 Av", "Whitehall St"],
         "south": ["Bay Ridge - 95 St"]
      },
      "scheduled_destinations": {
         "north": ["Forest Hills - 71 Av", "Whitehall St"],
         "south": ["Bay Ridge - 95 St"]
      },
      "north": [{
         "name": "via Whitehall St",
         "parent_name": "Manhattan Bridge/Montague Street (Broadway)",
         "boroughs": ["Manhattan", "Brooklyn"],
         "max_actual_headway": 8,
         "max_scheduled_headway": 3,
         "travel_time_discrepancy": 2.833333333333332,
         "delay": 3,
         "travel_time": 0.16504854368932032,
         "scheduled_runtimes": [{
            "id": "R31N-R23N",
            "time": 17.166666666666668
         }],
         "actual_runtimes": [],
         "first_stops": ["R31N", "D24N", "Q01N"],
         "last_stops": ["R23N", "Q01N", "Q01N"]
      }, {
         "name": "Broadway Local",
         "parent_name": "Broadway",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 14,
         "max_scheduled_headway": 10,
         "travel_time_discrepancy": -1.0416666666666665,
         "delay": 3,
         "travel_time": -0.07238400488400487,
         "scheduled_runtimes": [{
            "id": "R23N-R14N",
            "time": 15.0
         }, {
            "id": "Q01N-R14N",
            "time": 16.0
         }, {
            "id": "R23N-R15N",
            "time": 13.0
         }, {
            "id": "Q01N-R15N",
            "time": 14.0
         }],
         "actual_runtimes": [{
            "id": "R23N-R15N",
            "description": "Canal St (Upper Level) to 49 St via Broadway Local",
            "time": 12.3125
         }, {
            "id": "R23N-R14N",
            "description": "Canal St (Upper Level) to 57 St - 7 Av via Broadway Local",
            "time": 14.083333333333334
         }],
         "first_stops": ["R23N", "Q01N", "R20N"],
         "last_stops": ["R15N", "R14N", "R14N"]
      }, {
         "name": "via 59 St",
         "parent_name": "59 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 10,
         "max_scheduled_headway": 11,
         "travel_time_discrepancy": -0.9285714285714286,
         "delay": 0,
         "travel_time": -0.08919022154316271,
         "scheduled_runtimes": [{
            "id": "R14N-R09N",
            "time": 8.5
         }, {
            "id": "R14N-G21N",
            "time": 11.0
         }],
         "actual_runtimes": [{
            "id": "R14N-G21N",
            "description": "57 St - 7 Av to Queens Plaza via 59 Street",
            "time": 9.25
         }],
         "first_stops": ["R14N", "R14N", "R13N"],
         "last_stops": ["R09N", "G21N", "R11N"]
      }, {
         "name": "via 63 St",
         "parent_name": "63 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 30,
         "max_scheduled_headway": null,
         "travel_time_discrepancy": -0.4249999999999994,
         "delay": 3,
         "travel_time": -0.041803278688524535,
         "scheduled_runtimes": [{
            "id": "D15N-B04N",
            "time": 10.166666666666666
         }],
         "actual_runtimes": [],
         "first_stops": ["D15N", "D15N", "B06N"],
         "last_stops": ["B04N", "B04N", "B04N"]
      }, {
         "name": "4 Avenue Local",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 22,
         "max_scheduled_headway": 22,
         "travel_time_discrepancy": -0.3270833333333333,
         "delay": 0,
         "travel_time": -0.03202906162464986,
         "scheduled_runtimes": [{
            "id": "R36N-R31N",
            "time": 8.5
         }, {
            "id": "R41N-R31N",
            "time": 14.0
         }],
         "actual_runtimes": [{
            "id": "R41N-R31N",
            "description": "59 St to Atlantic Av - Barclays Ctr (4 Avenue) via 4 Avenue Local",
            "time": 13.68095238095238
         }, {
            "id": "R36N-R31N",
            "description": "36 St to Atlantic Av - Barclays Ctr (4 Avenue) via 4 Avenue Local",
            "time": 8.166666666666666
         }],
         "first_stops": ["R41N", "R36N", "R36N"],
         "last_stops": ["R31N"]
      }, {
         "name": "Queens Boulevard Local",
         "parent_name": "Queens Boulevard",
         "boroughs": ["Queens"],
         "max_actual_headway": 19,
         "max_scheduled_headway": 13,
         "travel_time_discrepancy": 1.0333333333333325,
         "delay": 3,
         "travel_time": 0.04696969696969693,
         "scheduled_runtimes": [{
            "id": "G21N-G08N",
            "time": 22.0
         }],
         "actual_runtimes": [{
            "id": "G21N-G08N",
            "description": "Queens Plaza to Forest Hills - 71 Av via Queens Boulevard Local",
            "time": 23.03333333333333
         }],
         "first_stops": ["B04N", "G21N", "G14N"],
         "last_stops": ["G08N"]
      }],
      "south": [{
         "name": "4 Avenue Local",
         "parent_name": "4 Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": 3.0555555555555554,
         "delay": 2,
         "travel_time": 0.261437908496732,
         "scheduled_runtimes": [{
            "id": "R31S-R36S",
            "time": 8.5
         }, {
            "id": "R31S-R41S",
            "time": 13.5
         }],
         "actual_runtimes": [{
            "id": "R31S-R41S",
            "description": "Atlantic Av - Barclays Ctr (4 Avenue) to 59 St via 4 Avenue Local",
            "time": 18.5625
         }, {
            "id": "R31S-R36S",
            "description": "Atlantic Av - Barclays Ctr (4 Avenue) to 36 St via 4 Avenue Local",
            "time": 9.95
         }],
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
      "max_travel_time_discrepancy": 0.5833333333333333,
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
         "travel_time_discrepancy": 0.1833333333333333,
         "delay": 0,
         "travel_time": 0.1222222222222222,
         "scheduled_runtimes": [{
            "id": "901N-902N",
            "time": 1.5
         }],
         "actual_runtimes": [{
            "id": "901N-902N",
            "description": "Grand Central - 42 St to Times Sq - 42 St via 42 Street",
            "time": 1.6833333333333331
         }],
         "first_stops": ["901N"],
         "last_stops": ["902N"]
      }],
      "south": [{
         "name": "42 Street",
         "parent_name": "42 Street",
         "boroughs": ["Manhattan"],
         "max_actual_headway": 5,
         "max_scheduled_headway": 5,
         "travel_time_discrepancy": 0.5833333333333333,
         "delay": 1,
         "travel_time": 0.3888888888888889,
         "scheduled_runtimes": [{
            "id": "902S-901S",
            "time": 1.5
         }],
         "actual_runtimes": [{
            "id": "902S-901S",
            "description": "Times Sq - 42 St to Grand Central - 42 St via 42 Street",
            "time": 2.083333333333333
         }],
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
      "status": "Good Service",
      "max_headway_discrepancy": 2,
      "max_travel_time_discrepancy": -0.7250000000000001,
      "destinations": {
         "north": ["Franklin Av"],
         "south": ["Prospect Park"]
      },
      "scheduled_destinations": {
         "north": ["Franklin Av"],
         "south": ["Prospect Park"]
      },
      "north": [{
         "name": "Franklin Avenue",
         "parent_name": "Franklin Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 22,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": -2.283333333333333,
         "delay": 0,
         "travel_time": -0.3261904761904762,
         "scheduled_runtimes": [{
            "id": "D26N-S01N",
            "time": 7.0
         }],
         "actual_runtimes": [{
            "id": "D26N-S01N",
            "description": "Prospect Park to Franklin Av via Franklin Avenue",
            "time": 4.716666666666667
         }],
         "first_stops": ["D26N", "D26N", "S04N"],
         "last_stops": ["S01N"]
      }],
      "south": [{
         "name": "Franklin Avenue",
         "parent_name": "Franklin Avenue",
         "boroughs": ["Brooklyn"],
         "max_actual_headway": 20,
         "max_scheduled_headway": 20,
         "travel_time_discrepancy": -0.7250000000000001,
         "delay": 0,
         "travel_time": -0.11153846153846156,
         "scheduled_runtimes": [{
            "id": "S01S-D26S",
            "time": 6.5
         }],
         "actual_runtimes": [{
            "id": "S01S-D26S",
            "description": "Franklin Av to Prospect Park via Franklin Avenue",
            "time": 5.775
         }],
         "first_stops": ["S01S"],
         "last_stops": ["D26S", "D26S", "S04S"]
      }],
      "lines_not_in_service": {
         "north": [],
         "south": []
      },
      "scheduled": true,
      "visible": true
   }, {
      "id": "H",
      "name": "S",
      "color": "#767676",
      "text_color": null,
      "alternate_name": "Rockaway Park Shuttle",
      "status": "Good Service",
      "max_headway_discrepancy": 0,
      "max_travel_time_discrepancy": 1.091666666666666,
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
         "max_actual_headway": 28,
         "max_scheduled_headway": 28,
         "travel_time_discrepancy": 1.091666666666666,
         "delay": 0,
         "travel_time": 0.09492753623188399,
         "scheduled_runtimes": [{
            "id": "H15N-H04N",
            "time": 11.5
         }],
         "actual_runtimes": [{
            "id": "H15N-H04N",
            "description": "Rockaway Park - Beach 116 St to Broad Channel via Rockaway (Rockaway Park Branch)",
            "time": 12.591666666666665
         }],
         "first_stops": ["H15N"],
         "last_stops": ["H04N", "H04N", "H12N"]
      }],
      "south": [{
         "name": "Rockaway (Rockaway Park Branch)",
         "parent_name": "Rockaway (Rockaway Park Branch)",
         "boroughs": ["Queens"],
         "max_actual_headway": 23,
         "max_scheduled_headway": 23,
         "travel_time_discrepancy": 0.0,
         "delay": 0,
         "travel_time": 0.0,
         "scheduled_runtimes": [{
            "id": "H04S-H15S",
            "time": 8.0
         }],
         "actual_runtimes": [{
            "id": "H04S-H15S",
            "description": "Broad Channel to Rockaway Park - Beach 116 St via Rockaway (Rockaway Park Branch)",
            "time": 8.0
         }],
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
      "status": "Good Service",
      "max_headway_discrepancy": -18,
      "max_travel_time_discrepancy": null,
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
         "max_actual_headway": 12,
         "max_scheduled_headway": 30,
         "travel_time_discrepancy": null,
         "delay": 1,
         "travel_time": null,
         "scheduled_runtimes": [],
         "actual_runtimes": [],
         "first_stops": ["S31N"],
         "last_stops": ["S09N"]
      }],
      "south": [{
         "name": "Staten Island",
         "parent_name": "Staten Island",
         "boroughs": ["Staten Island"],
         "max_actual_headway": 11,
         "max_scheduled_headway": 30,
         "travel_time_discrepancy": null,
         "delay": 0,
         "travel_time": null,
         "scheduled_runtimes": [],
         "actual_runtimes": [],
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
      "max_headway_discrepancy": 1,
      "max_travel_time_discrepancy": 3.4833333333333334,
      "destinations": {
         "north": ["Astoria Blvd", "Astoria - Ditmars Blvd"],
         "south": []
      },
      "scheduled_destinations": {
         "north": ["Astoria - Ditmars Blvd"],
         "south": []
      },
      "north": [{
         "name": "via 59 St",
         "parent_name": "59 Street",
         "boroughs": ["Manhattan", "Queens"],
         "max_actual_headway": 0,
         "max_scheduled_headway": 0,
         "travel_time_discrepancy": -0.9285714285714286,
         "delay": 0,
         "travel_time": -0.08919022154316271,
         "scheduled_runtimes": [{
            "id": "R14N-R09N",
            "time": 8.5
         }, {
            "id": "R14N-G21N",
            "time": 11.0
         }],
         "actual_runtimes": [],
         "first_stops": ["R14N", "R14N", "R13N"],
         "last_stops": ["R09N", "G21N", "R11N"]
      }, {
         "name": "Astoria",
         "parent_name": "Astoria",
         "boroughs": ["Queens"],
         "max_actual_headway": 15,
         "max_scheduled_headway": 14,
         "travel_time_discrepancy": 3.4833333333333334,
         "delay": 0,
         "travel_time": 0.34833333333333333,
         "scheduled_runtimes": [{
            "id": "R09N-R01N",
            "time": 10.0
         }],
         "actual_runtimes": [{
            "id": "R09N-R01N",
            "description": "Queensboro Plaza to Astoria - Ditmars Blvd via Astoria",
            "time": 13.483333333333334
         }],
         "first_stops": ["R09N", "R09N", "R06N"],
         "last_stops": ["R01N"]
      }],
      "south": [],
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
      "max_travel_time_discrepancy": null,
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
         "status": "Good Service",
         "max_travel_time": 0,
         "max_travel_time_discrepancy": null,
         "destinations": {
            "north": ["Van Cortlandt Park - 242 St"],
            "south": ["Dyckman St"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "120N-101N",
               "time": 30.1
            }],
            "actual_runtimes": [],
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
            "max_actual_headway": 12,
            "max_scheduled_headway": 14,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "101S-120S",
               "time": 26.5
            }],
            "actual_runtimes": [],
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
         "status": "Not Good",
         "max_travel_time": 0.1594444444444444,
         "max_travel_time_discrepancy": 3.1888888888888878,
         "destinations": {
            "north": ["Bedford Park Blvd"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 16,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": 0.1594444444444444,
            "travel_time_discrepancy": 3.1888888888888878,
            "scheduled_runtimes": [{
               "id": "D13N-D03N",
               "time": 20.0
            }],
            "actual_runtimes": [{
               "id": "D13N-D03N",
               "description": "145 St (Lower Level) to Bedford Park Blvd via Local",
               "time": 23.188888888888886,
               "routes": [{
                  "id": "D",
                  "name": "D",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 18,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": 0.13641975308641976,
            "travel_time_discrepancy": 2.4555555555555557,
            "scheduled_runtimes": [{
               "id": "D03S-D13S",
               "time": 18.0
            }],
            "actual_runtimes": [{
               "id": "D03S-D13S",
               "description": "Bedford Park Blvd to 145 St (Lower Level) via Local",
               "time": 20.455555555555556,
               "routes": [{
                  "id": "D",
                  "name": "D",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
         "max_travel_time": 0.09393939393939393,
         "max_travel_time_discrepancy": 1.0333333333333332,
         "destinations": {
            "north": ["Eastchester - Dyre Av"],
            "south": ["E 180 St"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 21,
            "max_scheduled_headway": 12,
            "delay": 0,
            "travel_time": -0.04166666666666667,
            "travel_time_discrepancy": -0.5,
            "scheduled_runtimes": [{
               "id": "213N-501N",
               "time": 12.0
            }],
            "actual_runtimes": [{
               "id": "213N-501N",
               "description": "E 180 St to Eastchester - Dyre Av",
               "time": 11.5,
               "routes": [{
                  "id": "5",
                  "name": "5",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 20,
            "max_scheduled_headway": 20,
            "delay": 0,
            "travel_time": 0.09393939393939393,
            "travel_time_discrepancy": 1.0333333333333332,
            "scheduled_runtimes": [{
               "id": "501S-213S",
               "time": 11.0
            }],
            "actual_runtimes": [{
               "id": "501S-213S",
               "description": "Eastchester - Dyre Av to E 180 St",
               "time": 12.033333333333333,
               "routes": [{
                  "id": "5",
                  "name": "5",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }],
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
         "max_travel_time": -0.01749999999999998,
         "max_travel_time_discrepancy": -0.34999999999999964,
         "destinations": {
            "north": ["Woodlawn"],
            "south": ["125 St", "New Lots Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 16,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": -0.04724409448818906,
            "travel_time_discrepancy": -1.0000000000000018,
            "scheduled_runtimes": [{
               "id": "415N-401N",
               "time": 21.166666666666668
            }],
            "actual_runtimes": [{
               "id": "415N-401N",
               "description": "149 St - Grand Concourse to Woodlawn",
               "time": 20.166666666666664,
               "routes": [{
                  "id": "4",
                  "name": "4",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 18,
            "max_scheduled_headway": 20,
            "delay": 0,
            "travel_time": -0.01749999999999998,
            "travel_time_discrepancy": -0.34999999999999964,
            "scheduled_runtimes": [{
               "id": "401S-415S",
               "time": 20.0
            }],
            "actual_runtimes": [{
               "id": "401S-415S",
               "description": "Woodlawn to 149 St - Grand Concourse",
               "time": 19.65,
               "routes": [{
                  "id": "4",
                  "name": "4",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }],
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
         }],
         "status": "Not Good",
         "max_travel_time": -0.023886524822695033,
         "max_travel_time_discrepancy": -0.7016666666666665,
         "destinations": {
            "north": ["Pelham Bay Park"],
            "south": ["Brooklyn Bridge - City Hall"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 16,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": -0.023886524822695033,
            "travel_time_discrepancy": -0.7016666666666665,
            "scheduled_runtimes": [{
               "id": "621N-601N",
               "time": 29.375
            }],
            "actual_runtimes": [{
               "id": "621N-601N",
               "description": "125 St (Lexington Av) to Pelham Bay Park via Local",
               "time": 28.67333333333333,
               "routes": [{
                  "id": "6",
                  "name": "6",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "6",
               "name": "6",
               "color": "#21ba45",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 11,
            "max_scheduled_headway": 14,
            "delay": 1,
            "travel_time": -0.059363295880149825,
            "travel_time_discrepancy": -1.7611111111111117,
            "scheduled_runtimes": [{
               "id": "601S-621S",
               "time": 29.666666666666668
            }],
            "actual_runtimes": [{
               "id": "601S-621S",
               "description": "Pelham Bay Park to 125 St (Lexington Av) via Local",
               "time": 27.905555555555555,
               "routes": [{
                  "id": "6",
                  "name": "6",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }],
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
         }],
         "status": "Good Service",
         "max_travel_time": 0.015514592933947795,
         "max_travel_time_discrepancy": 0.6500000000000008,
         "destinations": {
            "north": ["Wakefield - 241 St"],
            "south": ["Flatbush Av - Brooklyn College"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 14,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": 0.015514592933947795,
            "travel_time_discrepancy": 0.6500000000000008,
            "scheduled_runtimes": [{
               "id": "222N-204N",
               "time": 31.5
            }, {
               "id": "222N-213N",
               "time": 15.5
            }],
            "actual_runtimes": [{
               "id": "222N-204N",
               "description": "149 St - Grand Concourse to Nereid Av via Local",
               "time": 32.790000000000006,
               "routes": [{
                  "id": "2",
                  "name": "2",
                  "color": "#db2828",
                  "text_color": null
               }]
            }, {
               "id": "222N-213N",
               "description": "149 St - Grand Concourse to E 180 St via Local",
               "time": 15.083333333333334,
               "routes": [{
                  "id": "2",
                  "name": "2",
                  "color": "#db2828",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 20,
            "max_scheduled_headway": 20,
            "delay": 3,
            "travel_time": -0.008072916666666687,
            "travel_time_discrepancy": -0.19166666666666687,
            "scheduled_runtimes": [{
               "id": "204S-222S",
               "time": 31.0
            }, {
               "id": "213S-222S",
               "time": 16.0
            }],
            "actual_runtimes": [{
               "id": "204S-222S",
               "description": "Nereid Av to 149 St - Grand Concourse via Local",
               "time": 30.741666666666667,
               "routes": [{
                  "id": "2",
                  "name": "2",
                  "color": "#db2828",
                  "text_color": null
               }]
            }, {
               "id": "213S-222S",
               "description": "E 180 St to 149 St - Grand Concourse via Local",
               "time": 15.875,
               "routes": [{
                  "id": "2",
                  "name": "2",
                  "color": "#db2828",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
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
         "max_travel_time": 0.261437908496732,
         "max_travel_time_discrepancy": 3.0555555555555554,
         "destinations": {
            "north": ["Bedford Park Blvd", "Times Sq - 42 St", "Whitehall St"],
            "south": ["Bay Ridge - 95 St", "Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 12,
            "max_scheduled_headway": 12,
            "delay": 0,
            "travel_time": -0.03202906162464986,
            "travel_time_discrepancy": -0.3270833333333333,
            "scheduled_runtimes": [{
               "id": "R36N-R31N",
               "time": 8.5
            }, {
               "id": "R41N-R31N",
               "time": 14.0
            }],
            "actual_runtimes": [{
               "id": "R41N-R31N",
               "description": "59 St to Atlantic Av - Barclays Ctr (4 Avenue) via Local",
               "time": 13.68095238095238,
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
               }]
            }, {
               "id": "R36N-R31N",
               "description": "36 St to Atlantic Av - Barclays Ctr (4 Avenue) via Local",
               "time": 8.166666666666666,
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
               }]
            }],
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
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 4,
            "max_scheduled_headway": null,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "R31S-R36S",
               "time": 5.5
            }, {
               "id": "R31S-R41S",
               "time": 10.5
            }],
            "actual_runtimes": [{
               "id": "R31S-R41S",
               "description": "Atlantic Av - Barclays Ctr (4 Avenue) to 59 St via Express",
               "time": 13.25,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }, {
               "id": "R31S-R36S",
               "description": "Atlantic Av - Barclays Ctr (4 Avenue) to 36 St via Express",
               "time": 4.75,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
            "routes": [{
               "id": "N",
               "name": "N",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 9,
            "max_scheduled_headway": 9,
            "delay": 2,
            "travel_time": 0.261437908496732,
            "travel_time_discrepancy": 3.0555555555555554,
            "scheduled_runtimes": [{
               "id": "R31S-R36S",
               "time": 8.5
            }, {
               "id": "R31S-R41S",
               "time": 13.5
            }],
            "actual_runtimes": [{
               "id": "R31S-R41S",
               "description": "Atlantic Av - Barclays Ctr (4 Avenue) to 59 St via Local",
               "time": 18.5625,
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
               }]
            }, {
               "id": "R31S-R36S",
               "description": "Atlantic Av - Barclays Ctr (4 Avenue) to 36 St via Local",
               "time": 9.95,
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
               }]
            }],
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
            }]
         }]
      }, {
         "id": "65",
         "name": "Brighton",
         "routes": [{
            "id": "Q",
            "name": "Q",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.03280831458266368,
         "max_travel_time_discrepancy": 0.8666666666666671,
         "destinations": {
            "north": ["96 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 20,
            "max_scheduled_headway": 20,
            "delay": 0,
            "travel_time": 0.03280831458266368,
            "travel_time_discrepancy": 0.8666666666666671,
            "scheduled_runtimes": [{
               "id": "D40N-D24N",
               "time": 25.5
            }, {
               "id": "D43N-D24N",
               "time": 30.5
            }],
            "actual_runtimes": [{
               "id": "D43N-D24N",
               "description": "Coney Island - Stillwell Av to Atlantic Av - Barclays Ctr (Brighton) via Local",
               "time": 30.866666666666667,
               "routes": [{
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }, {
               "id": "D40N-D24N",
               "description": "Brighton Beach to Atlantic Av - Barclays Ctr (Brighton) via Local",
               "time": 26.866666666666667,
               "routes": [{
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
            "routes": [{
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 16,
            "max_scheduled_headway": 13,
            "delay": 1,
            "travel_time": -0.02740941405802085,
            "travel_time_discrepancy": -0.877777777777777,
            "scheduled_runtimes": [{
               "id": "D24S-D40S",
               "time": 28.5
            }, {
               "id": "D24S-D43S",
               "time": 34.0
            }],
            "actual_runtimes": [{
               "id": "D24S-D43S",
               "description": "Atlantic Av - Barclays Ctr (Brighton) to Coney Island - Stillwell Av via Local",
               "time": 32.80555555555555,
               "routes": [{
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }, {
               "id": "D24S-D40S",
               "description": "Atlantic Av - Barclays Ctr (Brighton) to Brighton Beach via Local",
               "time": 27.938888888888886,
               "routes": [{
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
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
         "status": "Not Good",
         "max_travel_time": 0.49000000000000005,
         "max_travel_time_discrepancy": 2.45,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer", "Middle Village - Metropolitan Av"],
            "south": ["96 St", "Broad St"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 13,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.26999999999999996,
            "travel_time_discrepancy": 1.35,
            "scheduled_runtimes": [{
               "id": "M16N-M11N",
               "time": 5.0
            }],
            "actual_runtimes": [{
               "id": "M16N-M11N",
               "description": "Marcy Av to Myrtle Av via Local",
               "time": 6.35,
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
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 14,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": 0.49000000000000005,
            "travel_time_discrepancy": 2.45,
            "scheduled_runtimes": [{
               "id": "M11S-M16S",
               "time": 5.0
            }],
            "actual_runtimes": [{
               "id": "M11S-M16S",
               "description": "Myrtle Av to Marcy Av via Local",
               "time": 7.45,
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
         "status": "Good Service",
         "max_travel_time": 0.058454106280193215,
         "max_travel_time_discrepancy": 0.6722222222222219,
         "destinations": {
            "north": ["8 Av", "Lorimer St"],
            "south": ["Canarsie - Rockaway Pkwy"]
         },
         "north": [{
            "type": null,
            "name": "Broadway Jct—Rockaway Pkwy",
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": 0.058454106280193215,
            "travel_time_discrepancy": 0.6722222222222219,
            "scheduled_runtimes": [{
               "id": "L29N-L22N",
               "time": 11.5
            }],
            "actual_runtimes": [{
               "id": "L29N-L22N",
               "description": "Canarsie - Rockaway Pkwy to Broadway Jct",
               "time": 12.172222222222222,
               "routes": [{
                  "id": "L",
                  "name": "L",
                  "color": "#A0A0A0",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 12,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": -0.1895424836601307,
            "travel_time_discrepancy": -1.611111111111111,
            "scheduled_runtimes": [{
               "id": "L22S-L29S",
               "time": 8.5
            }],
            "actual_runtimes": [{
               "id": "L22S-L29S",
               "description": "Broadway Jct to Canarsie - Rockaway Pkwy",
               "time": 6.888888888888889,
               "routes": [{
                  "id": "L",
                  "name": "L",
                  "color": "#A0A0A0",
                  "text_color": null
               }]
            }],
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
         "status": "Not Good",
         "max_travel_time": -0.06944444444444442,
         "max_travel_time_discrepancy": -0.833333333333333,
         "destinations": {
            "north": ["8 Av", "Lorimer St"],
            "south": ["Canarsie - Rockaway Pkwy"]
         },
         "north": [{
            "type": null,
            "name": "Lorimer St—Myrtle Av",
            "max_actual_headway": 16,
            "max_scheduled_headway": 13,
            "delay": 0,
            "travel_time": -0.06944444444444442,
            "travel_time_discrepancy": -0.833333333333333,
            "scheduled_runtimes": [{
               "id": "L17N-L10N",
               "time": 12.0
            }],
            "actual_runtimes": [{
               "id": "L17N-L10N",
               "description": "Myrtle - Wyckoff Avs to Lorimer St",
               "time": 11.166666666666668,
               "routes": [{
                  "id": "L",
                  "name": "L",
                  "color": "#A0A0A0",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 20,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": -0.19292929292929287,
            "travel_time_discrepancy": -2.122222222222222,
            "scheduled_runtimes": [{
               "id": "L10S-L17S",
               "time": 11.0
            }],
            "actual_runtimes": [{
               "id": "L10S-L17S",
               "description": "Lorimer St to Myrtle - Wyckoff Avs",
               "time": 8.877777777777778,
               "routes": [{
                  "id": "L",
                  "name": "L",
                  "color": "#A0A0A0",
                  "text_color": null
               }]
            }],
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
         "status": "Not Good",
         "max_travel_time": -0.08758169934640524,
         "max_travel_time_discrepancy": -0.7444444444444445,
         "destinations": {
            "north": ["8 Av", "Lorimer St"],
            "south": ["Canarsie - Rockaway Pkwy"]
         },
         "north": [{
            "type": null,
            "name": "Myrtle Av—Broadway Jct",
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": -0.23571428571428574,
            "travel_time_discrepancy": -1.6500000000000001,
            "scheduled_runtimes": [{
               "id": "L22N-L17N",
               "time": 7.0
            }],
            "actual_runtimes": [{
               "id": "L22N-L17N",
               "description": "Broadway Jct to Myrtle - Wyckoff Avs",
               "time": 5.3500000000000005,
               "routes": [{
                  "id": "L",
                  "name": "L",
                  "color": "#A0A0A0",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 20,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": -0.08758169934640524,
            "travel_time_discrepancy": -0.7444444444444445,
            "scheduled_runtimes": [{
               "id": "L17S-L22S",
               "time": 8.5
            }],
            "actual_runtimes": [{
               "id": "L17S-L22S",
               "description": "Myrtle - Wyckoff Avs to Broadway Jct",
               "time": 7.7555555555555555,
               "routes": [{
                  "id": "L",
                  "name": "L",
                  "color": "#A0A0A0",
                  "text_color": null
               }]
            }],
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
         }],
         "status": "Good Service",
         "max_travel_time": 0.17569444444444443,
         "max_travel_time_discrepancy": 2.1083333333333334,
         "destinations": {
            "north": ["Inwood - 207 St"],
            "south": ["Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": null,
            "name": "via Chambers St",
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 1,
            "travel_time": 0.07260416666666669,
            "travel_time_discrepancy": 0.7895833333333335,
            "scheduled_runtimes": [{
               "id": "A41N-A32N",
               "time": 12.0
            }, {
               "id": "A41N-A33N",
               "time": 10.0
            }],
            "actual_runtimes": [{
               "id": "A41N-A33N",
               "description": "Jay St - MetroTech to Spring St",
               "time": 10.816666666666666,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }, {
               "id": "A41N-A32N",
               "description": "Jay St - MetroTech to W 4 St",
               "time": 12.7625,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Chambers St",
            "max_actual_headway": 13,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": 0.17569444444444443,
            "travel_time_discrepancy": 2.1083333333333334,
            "scheduled_runtimes": [{
               "id": "A32S-A41S",
               "time": 12.0
            }, {
               "id": "A33S-A41S",
               "time": 10.5
            }],
            "actual_runtimes": [{
               "id": "A32S-A41S",
               "description": "W 4 St to Jay St - MetroTech",
               "time": 14.108333333333334,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
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
         "max_travel_time": 0.10869565217391305,
         "max_travel_time_discrepancy": 0.625,
         "destinations": {
            "north": ["Court Sq"],
            "south": ["Church Av"]
         },
         "north": [{
            "type": null,
            "name": "Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts",
            "max_actual_headway": 19,
            "max_scheduled_headway": 19,
            "delay": 0,
            "travel_time": 0.10869565217391305,
            "travel_time_discrepancy": 0.625,
            "scheduled_runtimes": [{
               "id": "A42N-G33N",
               "time": 5.75
            }],
            "actual_runtimes": [{
               "id": "A42N-G33N",
               "description": "Hoyt - Schermerhorn Sts to Bedford - Nostrand Avs",
               "time": 6.375,
               "routes": [{
                  "id": "G",
                  "name": "G",
                  "color": "#b5cc18",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 10,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.0952380952380953,
            "travel_time_discrepancy": 0.5555555555555559,
            "scheduled_runtimes": [{
               "id": "G33S-A42S",
               "time": 5.833333333333333
            }],
            "actual_runtimes": [{
               "id": "G33S-A42S",
               "description": "Bedford - Nostrand Avs to Hoyt - Schermerhorn Sts",
               "time": 6.388888888888889,
               "routes": [{
                  "id": "G",
                  "name": "G",
                  "color": "#b5cc18",
                  "text_color": null
               }]
            }],
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
         "max_travel_time": 0.20400000000000004,
         "max_travel_time_discrepancy": 2.5500000000000003,
         "destinations": {
            "north": ["Court Sq"],
            "south": ["Church Av"]
         },
         "north": [{
            "type": null,
            "name": "Court Sq—Bedford–Nostrand Avs",
            "max_actual_headway": 11,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.06138613861386138,
            "travel_time_discrepancy": 0.7749999999999999,
            "scheduled_runtimes": [{
               "id": "G33N-G22N",
               "time": 12.625
            }],
            "actual_runtimes": [{
               "id": "G33N-G22N",
               "description": "Bedford - Nostrand Avs to Court Sq",
               "time": 13.4,
               "routes": [{
                  "id": "G",
                  "name": "G",
                  "color": "#b5cc18",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 10,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.20400000000000004,
            "travel_time_discrepancy": 2.5500000000000003,
            "scheduled_runtimes": [{
               "id": "G22S-G33S",
               "time": 12.5
            }],
            "actual_runtimes": [{
               "id": "G22S-G33S",
               "description": "Court Sq to Bedford - Nostrand Avs",
               "time": 15.049999999999999,
               "routes": [{
                  "id": "G",
                  "name": "G",
                  "color": "#b5cc18",
                  "text_color": null
               }]
            }],
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
         "max_travel_time": 0.07161904761904767,
         "max_travel_time_discrepancy": 0.8952380952380956,
         "destinations": {
            "north": ["Court Sq", "Jamaica - 179 St"],
            "south": ["Church Av", "Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 10,
            "max_scheduled_headway": 9,
            "delay": 0,
            "travel_time": 0.056481481481481494,
            "travel_time_discrepancy": 0.7625000000000002,
            "scheduled_runtimes": [{
               "id": "F27N-F20N",
               "time": 13.5
            }],
            "actual_runtimes": [{
               "id": "F27N-F20N",
               "description": "Church Av to Bergen St",
               "time": 14.2625,
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
            "max_scheduled_headway": 8,
            "delay": 1,
            "travel_time": 0.07161904761904767,
            "travel_time_discrepancy": 0.8952380952380956,
            "scheduled_runtimes": [{
               "id": "F20S-F27S",
               "time": 12.5
            }],
            "actual_runtimes": [{
               "id": "F20S-F27S",
               "description": "Bergen St to Church Av",
               "time": 13.395238095238096,
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
         "status": "Good Service",
         "max_travel_time": 0.1416666666666667,
         "max_travel_time_discrepancy": 1.416666666666667,
         "destinations": {
            "north": ["Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "Church Av—Kings Hwy",
            "max_actual_headway": 12,
            "max_scheduled_headway": 12,
            "delay": 0,
            "travel_time": 0.1416666666666667,
            "travel_time_discrepancy": 1.416666666666667,
            "scheduled_runtimes": [{
               "id": "F35N-F27N",
               "time": 10.0
            }],
            "actual_runtimes": [{
               "id": "F35N-F27N",
               "description": "Kings Hwy to Church Av",
               "time": 11.416666666666668,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": -0.1683127572016461,
            "travel_time_discrepancy": -2.272222222222222,
            "scheduled_runtimes": [{
               "id": "F27S-F35S",
               "time": 13.5
            }],
            "actual_runtimes": [{
               "id": "F27S-F35S",
               "description": "Church Av to Kings Hwy",
               "time": 11.227777777777776,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
         "status": "Good Service",
         "max_travel_time": -0.0504761904761905,
         "max_travel_time_discrepancy": -0.4416666666666669,
         "destinations": {
            "north": ["Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "Kings Hwy—Coney Island",
            "max_actual_headway": 16,
            "max_scheduled_headway": 16,
            "delay": 0,
            "travel_time": -0.0504761904761905,
            "travel_time_discrepancy": -0.4416666666666669,
            "scheduled_runtimes": [{
               "id": "D43N-F35N",
               "time": 8.75
            }],
            "actual_runtimes": [{
               "id": "D43N-F35N",
               "description": "Coney Island - Stillwell Av to Kings Hwy",
               "time": 8.308333333333334,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": -0.24685990338164251,
            "travel_time_discrepancy": -2.8388888888888886,
            "scheduled_runtimes": [{
               "id": "F35S-D43S",
               "time": 11.5
            }],
            "actual_runtimes": [{
               "id": "F35S-D43S",
               "description": "Kings Hwy to Coney Island - Stillwell Av",
               "time": 8.661111111111111,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
         }],
         "status": "Service Change",
         "max_travel_time": 0.04444444444444445,
         "max_travel_time_discrepancy": 0.9333333333333336,
         "destinations": {
            "north": ["3 Av - 138 St", "Harlem - 148 St", "Wakefield - 241 St"],
            "south": ["Flatbush Av - Brooklyn College", "New Lots Av"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 16,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": 0.04444444444444445,
            "travel_time_discrepancy": 0.9333333333333336,
            "scheduled_runtimes": [{
               "id": "250N-640N",
               "time": 21.0
            }],
            "actual_runtimes": [{
               "id": "250N-640N",
               "description": "Crown Hts - Utica Av to Brooklyn Bridge - City Hall via Express",
               "time": 21.933333333333334,
               "routes": [{
                  "id": "4",
                  "name": "4",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "4",
               "name": "4",
               "color": "#21ba45",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 14,
            "max_scheduled_headway": 13,
            "delay": 0,
            "travel_time": -0.013395061728395066,
            "travel_time_discrepancy": -0.36000000000000015,
            "scheduled_runtimes": [{
               "id": "241N-137N",
               "time": 24.0
            }, {
               "id": "250N-137N",
               "time": 27.0
            }],
            "actual_runtimes": [{
               "id": "241N-137N",
               "description": "President St to Chambers St via Local",
               "time": 23.977777777777778,
               "routes": [{
                  "id": "2",
                  "name": "2",
                  "color": "#db2828",
                  "text_color": null
               }]
            }, {
               "id": "250N-137N",
               "description": "Crown Hts - Utica Av to Chambers St via Local",
               "time": 26.133333333333333,
               "routes": [{
                  "id": "3",
                  "name": "3",
                  "color": "#db2828",
                  "text_color": null
               }]
            }],
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
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": null,
            "delay": 1,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [],
            "actual_runtimes": [{
               "id": "640S-250S",
               "description": "Brooklyn Bridge - City Hall to Crown Hts - Utica Av via Express",
               "time": 25.566666666666666,
               "routes": [{
                  "id": "4",
                  "name": "4",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }, {
               "id": "137S-250S",
               "description": "Chambers St to Crown Hts - Utica Av via Express",
               "time": 30.891666666666666,
               "routes": []
            }, {
               "id": "137S-241S",
               "description": "Chambers St to President St via Express",
               "time": 23.822222222222223,
               "routes": [{
                  "id": "2",
                  "name": "2",
                  "color": "#db2828",
                  "text_color": null
               }]
            }],
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
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": null,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "137S-241S",
               "time": 23.75
            }, {
               "id": "137S-250S",
               "time": 26.5
            }, {
               "id": "640S-250S",
               "time": 24.5
            }],
            "actual_runtimes": [],
            "routes": []
         }]
      }, {
         "id": "59",
         "name": "Franklin Avenue",
         "routes": [{
            "id": "FS",
            "name": "S",
            "color": "#767676",
            "text_color": null
         }],
         "status": "Good Service",
         "max_travel_time": -0.11153846153846156,
         "max_travel_time_discrepancy": -0.7250000000000001,
         "destinations": {
            "north": ["Franklin Av"],
            "south": ["Prospect Park"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 22,
            "max_scheduled_headway": 20,
            "delay": 0,
            "travel_time": -0.3261904761904762,
            "travel_time_discrepancy": -2.283333333333333,
            "scheduled_runtimes": [{
               "id": "D26N-S01N",
               "time": 7.0
            }],
            "actual_runtimes": [{
               "id": "D26N-S01N",
               "description": "Prospect Park to Franklin Av",
               "time": 4.716666666666667,
               "routes": [{
                  "id": "FS",
                  "name": "S",
                  "color": "#767676",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "FS",
               "name": "S",
               "color": "#767676",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 20,
            "max_scheduled_headway": 20,
            "delay": 0,
            "travel_time": -0.11153846153846156,
            "travel_time_discrepancy": -0.7250000000000001,
            "scheduled_runtimes": [{
               "id": "S01S-D26S",
               "time": 6.5
            }],
            "actual_runtimes": [{
               "id": "S01S-D26S",
               "description": "Franklin Av to Prospect Park",
               "time": 5.775,
               "routes": [{
                  "id": "FS",
                  "name": "S",
                  "color": "#767676",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "FS",
               "name": "S",
               "color": "#767676",
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
         }],
         "status": "Service Change",
         "max_travel_time": 0.15343915343915346,
         "max_travel_time_discrepancy": 3.2222222222222228,
         "destinations": {
            "north": ["Inwood - 207 St"],
            "south": ["Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": 0.15343915343915346,
            "travel_time_discrepancy": 3.2222222222222228,
            "scheduled_runtimes": [{
               "id": "A55N-A41N",
               "time": 21.0
            }],
            "actual_runtimes": [{
               "id": "A55N-A41N",
               "description": "Euclid Av to Jay St - MetroTech via Local",
               "time": 24.222222222222225,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 19,
            "max_scheduled_headway": null,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "A41S-A55S",
               "time": 15.0
            }],
            "actual_runtimes": [{
               "id": "A41S-A55S",
               "description": "Jay St - MetroTech to Euclid Av via Express",
               "time": 18.983333333333334,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": null,
            "max_scheduled_headway": 12,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "A41S-A55S",
               "time": 24.0
            }],
            "actual_runtimes": [],
            "routes": []
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
         "max_travel_time": 0.06145833333333328,
         "max_travel_time_discrepancy": 0.9833333333333325,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer"],
            "south": ["Broad St"]
         },
         "north": [{
            "type": null,
            "name": "Crescent St—Jamaica Ctr",
            "max_actual_headway": 14,
            "max_scheduled_headway": 14,
            "delay": 0,
            "travel_time": 0.06145833333333328,
            "travel_time_discrepancy": 0.9833333333333325,
            "scheduled_runtimes": [{
               "id": "J20N-G05N",
               "time": 16.0
            }],
            "actual_runtimes": [{
               "id": "J20N-G05N",
               "description": "Crescent St to Jamaica Center - Parsons/Archer",
               "time": 16.983333333333334,
               "routes": [{
                  "id": "J",
                  "name": "J",
                  "color": "#a5673f",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 18,
            "max_scheduled_headway": 18,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "G05S-J20S",
               "time": 16.0
            }],
            "actual_runtimes": [],
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
         "max_travel_time": 0.16129032258064516,
         "max_travel_time_discrepancy": 2.5,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer"],
            "south": ["Broad St"]
         },
         "north": [{
            "type": null,
            "name": "Myrtle Av—Crescent St",
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": 0.053545026881720435,
            "travel_time_discrepancy": 0.6541666666666668,
            "scheduled_runtimes": [{
               "id": "J27N-J20N",
               "time": 8.0
            }, {
               "id": "M11N-J20N",
               "time": 15.5
            }],
            "actual_runtimes": [{
               "id": "M11N-J20N",
               "description": "Myrtle Av to Crescent St",
               "time": 16.433333333333334,
               "routes": [{
                  "id": "J",
                  "name": "J",
                  "color": "#a5673f",
                  "text_color": null
               }]
            }, {
               "id": "J27N-J20N",
               "description": "Broadway Jct to Crescent St",
               "time": 8.375,
               "routes": [{
                  "id": "J",
                  "name": "J",
                  "color": "#a5673f",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 17,
            "max_scheduled_headway": 17,
            "delay": 0,
            "travel_time": 0.16129032258064516,
            "travel_time_discrepancy": 2.5,
            "scheduled_runtimes": [{
               "id": "J20S-J27S",
               "time": 8.0
            }, {
               "id": "J20S-M11S",
               "time": 15.5
            }],
            "actual_runtimes": [{
               "id": "J20S-M11S",
               "description": "Crescent St to Myrtle Av",
               "time": 18.0,
               "routes": [{
                  "id": "J",
                  "name": "J",
                  "color": "#a5673f",
                  "text_color": null
               }]
            }],
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
            "id": "D",
            "name": "D",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.0916666666666667,
         "max_travel_time_discrepancy": 1.0083333333333337,
         "destinations": {
            "north": ["Bedford Park Blvd"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via Manhattan Bridge (North Side)",
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 1,
            "travel_time": 0.0916666666666667,
            "travel_time_discrepancy": 1.0083333333333337,
            "scheduled_runtimes": [{
               "id": "R31N-D22N",
               "time": 11.0
            }],
            "actual_runtimes": [{
               "id": "R31N-D22N",
               "description": "Atlantic Av - Barclays Ctr (4 Avenue) to Grand St",
               "time": 12.008333333333333,
               "routes": [{
                  "id": "D",
                  "name": "D",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Manhattan Bridge (North Side)",
            "max_actual_headway": 19,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": -0.03787878787878791,
            "travel_time_discrepancy": -0.41666666666666696,
            "scheduled_runtimes": [{
               "id": "D22S-R31S",
               "time": 11.0
            }],
            "actual_runtimes": [{
               "id": "D22S-R31S",
               "description": "Grand St to Atlantic Av - Barclays Ctr (4 Avenue)",
               "time": 10.583333333333332,
               "routes": [{
                  "id": "D",
                  "name": "D",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
            "routes": [{
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
         }],
         "status": "Good Service",
         "max_travel_time": 0.16504854368932032,
         "max_travel_time_discrepancy": 2.833333333333332,
         "destinations": {
            "north": ["96 St", "Astoria - Ditmars Blvd", "Forest Hills - 71 Av", "Times Sq - 42 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": "Express",
            "name": "via Manhattan Bridge (South Side)",
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": 0.16158192090395476,
            "travel_time_discrepancy": 1.5888888888888886,
            "scheduled_runtimes": [{
               "id": "D24N-Q01N",
               "time": 9.833333333333334
            }],
            "actual_runtimes": [{
               "id": "D24N-Q01N",
               "description": "Atlantic Av - Barclays Ctr (Brighton) to Canal St (Lower Level) via  Manhattan Bridge (South Side)",
               "time": 11.422222222222222,
               "routes": [{
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }, {
               "id": "R31N-Q01N",
               "description": "Atlantic Av - Barclays Ctr (4 Avenue) to Canal St (Lower Level) via  Manhattan Bridge (South Side)",
               "time": 13.966666666666667,
               "routes": []
            }],
            "routes": [{
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "via Whitehall St",
            "max_actual_headway": 16,
            "max_scheduled_headway": 15,
            "delay": 3,
            "travel_time": 0.16504854368932032,
            "travel_time_discrepancy": 2.833333333333332,
            "scheduled_runtimes": [{
               "id": "R31N-R23N",
               "time": 17.166666666666668
            }],
            "actual_runtimes": [{
               "id": "R31N-R23N",
               "description": "Atlantic Av - Barclays Ctr (4 Avenue) to Canal St (Upper Level) via  Whitehall St",
               "time": 20.0,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
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
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "via Manhattan Bridge (South Side)",
            "max_actual_headway": 12,
            "max_scheduled_headway": 12,
            "delay": 0,
            "travel_time": 0.012245762711864372,
            "travel_time_discrepancy": 0.093333333333333,
            "scheduled_runtimes": [{
               "id": "Q01S-R31S",
               "time": 12.0
            }, {
               "id": "Q01S-D24S",
               "time": 9.833333333333334
            }],
            "actual_runtimes": [{
               "id": "Q01S-R31S",
               "description": "Canal St (Lower Level) to Atlantic Av - Barclays Ctr (4 Avenue) via  Manhattan Bridge (South Side)",
               "time": 11.75,
               "routes": []
            }, {
               "id": "Q01S-D24S",
               "description": "Canal St (Lower Level) to Atlantic Av - Barclays Ctr (Brighton) via  Manhattan Bridge (South Side)",
               "time": 10.441666666666666,
               "routes": [{
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
            "routes": [{
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "via Whitehall St",
            "max_actual_headway": 14,
            "max_scheduled_headway": 18,
            "delay": 0,
            "travel_time": 0.008554572271386507,
            "travel_time_discrepancy": 0.16111111111111262,
            "scheduled_runtimes": [{
               "id": "R23S-R31S",
               "time": 18.833333333333332
            }],
            "actual_runtimes": [{
               "id": "R23S-R31S",
               "description": "Canal St (Upper Level) to Atlantic Av - Barclays Ctr (4 Avenue) via  Whitehall St",
               "time": 18.994444444444444,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
            "routes": [{
               "id": "N",
               "name": "N",
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
         "status": "Not Good",
         "max_travel_time": 0,
         "max_travel_time_discrepancy": null,
         "destinations": {
            "north": ["96 St"],
            "south": ["Middle Village - Metropolitan Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 19,
            "max_scheduled_headway": 14,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "M01N-M11N",
               "time": 12.0
            }],
            "actual_runtimes": [],
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
            "max_actual_headway": 13,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "M11S-M01S",
               "time": 13.0
            }],
            "actual_runtimes": [],
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
         }, {
            "id": "4",
            "name": "4",
            "color": "#21ba45",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.05777777777777776,
         "max_travel_time_discrepancy": 0.6499999999999998,
         "destinations": {
            "north": ["3 Av - 138 St", "Harlem - 148 St"],
            "south": ["New Lots Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 20,
            "max_scheduled_headway": 17,
            "delay": 0,
            "travel_time": 0.05777777777777776,
            "travel_time_discrepancy": 0.6499999999999998,
            "scheduled_runtimes": [{
               "id": "257N-250N",
               "time": 11.25
            }],
            "actual_runtimes": [{
               "id": "257N-250N",
               "description": "New Lots Av to Crown Hts - Utica Av",
               "time": 11.899999999999999,
               "routes": [{
                  "id": "4",
                  "name": "4",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "3",
               "name": "3",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "4",
               "name": "4",
               "color": "#21ba45",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 11,
            "max_scheduled_headway": 14,
            "delay": 1,
            "travel_time": -0.11060606060606062,
            "travel_time_discrepancy": -1.2166666666666668,
            "scheduled_runtimes": [{
               "id": "250S-257S",
               "time": 11.0
            }],
            "actual_runtimes": [{
               "id": "250S-257S",
               "description": "Crown Hts - Utica Av to New Lots Av",
               "time": 9.783333333333333,
               "routes": [{
                  "id": "3",
                  "name": "3",
                  "color": "#db2828",
                  "text_color": null
               }, {
                  "id": "4",
                  "name": "4",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "3",
               "name": "3",
               "color": "#db2828",
               "text_color": null
            }, {
               "id": "4",
               "name": "4",
               "color": "#21ba45",
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
         }],
         "status": "Not Good",
         "max_travel_time": -0.053947368421052605,
         "max_travel_time_discrepancy": -0.5124999999999997,
         "destinations": {
            "north": ["Wakefield - 241 St"],
            "south": ["Flatbush Av - Brooklyn College"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 16,
            "max_scheduled_headway": 16,
            "delay": 0,
            "travel_time": -0.053947368421052605,
            "travel_time_discrepancy": -0.5124999999999997,
            "scheduled_runtimes": [{
               "id": "247N-241N",
               "time": 9.5
            }],
            "actual_runtimes": [{
               "id": "247N-241N",
               "description": "Flatbush Av - Brooklyn College to President St",
               "time": 8.9875,
               "routes": [{
                  "id": "2",
                  "name": "2",
                  "color": "#db2828",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 26,
            "max_scheduled_headway": 16,
            "delay": 0,
            "travel_time": -0.11626984126984125,
            "travel_time_discrepancy": -1.2208333333333332,
            "scheduled_runtimes": [{
               "id": "241S-247S",
               "time": 10.5
            }],
            "actual_runtimes": [{
               "id": "241S-247S",
               "description": "President St to Flatbush Av - Brooklyn College",
               "time": 9.279166666666667,
               "routes": [{
                  "id": "2",
                  "name": "2",
                  "color": "#db2828",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
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
         "max_travel_time": 0.37735849056603765,
         "max_travel_time_discrepancy": 3.3333333333333326,
         "destinations": {
            "north": ["Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via Delancey St",
            "max_actual_headway": 15,
            "max_scheduled_headway": 13,
            "delay": 1,
            "travel_time": -0.05555555555555555,
            "travel_time_discrepancy": -0.5,
            "scheduled_runtimes": [{
               "id": "A41N-D21N",
               "time": 9.0
            }],
            "actual_runtimes": [{
               "id": "A41N-D21N",
               "description": "Jay St - MetroTech to Broadway-Lafayette St",
               "time": 8.5,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 11,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": 0.37735849056603765,
            "travel_time_discrepancy": 3.3333333333333326,
            "scheduled_runtimes": [{
               "id": "D21S-A41S",
               "time": 8.833333333333334
            }],
            "actual_runtimes": [{
               "id": "D21S-A41S",
               "description": "Broadway-Lafayette St to Jay St - MetroTech",
               "time": 12.166666666666666,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
         "status": "Good Service",
         "max_travel_time": 0.20572916666666663,
         "max_travel_time_discrepancy": 3.291666666666666,
         "destinations": {
            "north": ["Times Sq - 42 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 20,
            "max_scheduled_headway": 20,
            "delay": 0,
            "travel_time": 0.20572916666666663,
            "travel_time_discrepancy": 3.291666666666666,
            "scheduled_runtimes": [{
               "id": "D43N-N02N",
               "time": 16.0
            }],
            "actual_runtimes": [{
               "id": "D43N-N02N",
               "description": "Coney Island - Stillwell Av to 8 Av",
               "time": 19.291666666666664,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
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
            "max_actual_headway": 20,
            "max_scheduled_headway": 18,
            "delay": 0,
            "travel_time": -0.12069892473118286,
            "travel_time_discrepancy": -2.494444444444446,
            "scheduled_runtimes": [{
               "id": "N02S-D43S",
               "time": 20.666666666666668
            }],
            "actual_runtimes": [{
               "id": "N02S-D43S",
               "description": "8 Av to Coney Island - Stillwell Av",
               "time": 18.17222222222222,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
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
         "max_travel_time": -0.02575757575757575,
         "max_travel_time_discrepancy": -0.5666666666666664,
         "destinations": {
            "north": ["Bedford Park Blvd"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": -0.02575757575757575,
            "travel_time_discrepancy": -0.5666666666666664,
            "scheduled_runtimes": [{
               "id": "D43N-B12N",
               "time": 22.0
            }],
            "actual_runtimes": [{
               "id": "D43N-B12N",
               "description": "Coney Island - Stillwell Av to 9 Av",
               "time": 21.433333333333334,
               "routes": [{
                  "id": "D",
                  "name": "D",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 16,
            "max_scheduled_headway": 14,
            "delay": 1,
            "travel_time": -0.18161993769470408,
            "travel_time_discrepancy": -4.858333333333334,
            "scheduled_runtimes": [{
               "id": "B12S-D43S",
               "time": 26.75
            }],
            "actual_runtimes": [{
               "id": "B12S-D43S",
               "description": "9 Av to Coney Island - Stillwell Av",
               "time": 21.891666666666666,
               "routes": [{
                  "id": "D",
                  "name": "D",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
         "status": "Good Service",
         "max_travel_time": -0.0648809523809524,
         "max_travel_time_discrepancy": -0.6375000000000002,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer", "Middle Village - Metropolitan Av"],
            "south": ["96 St", "Broad St"]
         },
         "north": [{
            "type": null,
            "name": "via Williamsburg Bridge",
            "max_actual_headway": 13,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": -0.1723901098901099,
            "travel_time_discrepancy": -1.8125,
            "scheduled_runtimes": [{
               "id": "M19N-M16N",
               "time": 9.0
            }, {
               "id": "D21N-M16N",
               "time": 11.375
            }],
            "actual_runtimes": [{
               "id": "M19N-M16N",
               "description": "Bowery to Marcy Av",
               "time": 7.875,
               "routes": [{
                  "id": "J",
                  "name": "J",
                  "color": "#a5673f",
                  "text_color": null
               }]
            }, {
               "id": "D21N-M16N",
               "description": "Broadway-Lafayette St to Marcy Av",
               "time": 8.875,
               "routes": [{
                  "id": "M",
                  "name": "M",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 14,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": -0.0648809523809524,
            "travel_time_discrepancy": -0.6375000000000002,
            "scheduled_runtimes": [{
               "id": "M16S-M19S",
               "time": 9.0
            }, {
               "id": "M16S-D21S",
               "time": 10.5
            }],
            "actual_runtimes": [{
               "id": "M16S-M19S",
               "description": "Marcy Av to Bowery",
               "time": 8.475,
               "routes": [{
                  "id": "J",
                  "name": "J",
                  "color": "#a5673f",
                  "text_color": null
               }]
            }, {
               "id": "M16S-D21S",
               "description": "Marcy Av to Broadway-Lafayette St",
               "time": 9.75,
               "routes": [{
                  "id": "M",
                  "name": "M",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
            "id": "M",
            "name": "M",
            "color": "#f2711c",
            "text_color": null
         }, {
            "id": "Q",
            "name": "Q",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Good Service",
         "max_travel_time": 0.050183150183150164,
         "max_travel_time_discrepancy": 0.32619047619047603,
         "destinations": {
            "north": ["96 St"],
            "south": ["Coney Island - Stillwell Av", "Middle Village - Metropolitan Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 11,
            "delay": 1,
            "travel_time": 0.050183150183150164,
            "travel_time_discrepancy": 0.32619047619047603,
            "scheduled_runtimes": [{
               "id": "B08N-Q05N",
               "time": 6.5
            }],
            "actual_runtimes": [{
               "id": "B08N-Q05N",
               "description": "Lexington Av/63 St to 96 St",
               "time": 6.826190476190476,
               "routes": [{
                  "id": "M",
                  "name": "M",
                  "color": "#f2711c",
                  "text_color": null
               }, {
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
            "routes": [{
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }, {
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 11,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": -0.21666666666666662,
            "travel_time_discrepancy": -1.2999999999999998,
            "scheduled_runtimes": [{
               "id": "Q05S-B08S",
               "time": 6.0
            }],
            "actual_runtimes": [{
               "id": "Q05S-B08S",
               "description": "96 St to Lexington Av/63 St",
               "time": 4.7,
               "routes": [{
                  "id": "M",
                  "name": "M",
                  "color": "#f2711c",
                  "text_color": null
               }, {
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
            "routes": [{
               "id": "M",
               "name": "M",
               "color": "#f2711c",
               "text_color": null
            }, {
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
         "status": "Service Change",
         "max_travel_time": 0.2663333333333333,
         "max_travel_time_discrepancy": 2.663333333333333,
         "destinations": {
            "north": ["96 St", "Bedford Park Blvd", "Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av", "Middle Village - Metropolitan Av"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 1,
            "travel_time": 0.2361111111111111,
            "travel_time_discrepancy": 2.125,
            "scheduled_runtimes": [{
               "id": "D21N-D15N",
               "time": 9.0
            }],
            "actual_runtimes": [{
               "id": "D21N-D15N",
               "description": "Broadway-Lafayette St to 47-50 Sts - Rockefeller Ctr via Express",
               "time": 11.125,
               "routes": [{
                  "id": "D",
                  "name": "D",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 13,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": 0.054263565891472874,
            "travel_time_discrepancy": 0.5833333333333334,
            "scheduled_runtimes": [{
               "id": "D21N-D15N",
               "time": 10.75
            }],
            "actual_runtimes": [{
               "id": "D21N-D15N",
               "description": "Broadway-Lafayette St to 47-50 Sts - Rockefeller Ctr via Local",
               "time": 11.333333333333334,
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
            "max_actual_headway": null,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "D15S-D21S",
               "time": 8.0
            }],
            "actual_runtimes": [],
            "routes": []
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 8,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": 0.2663333333333333,
            "travel_time_discrepancy": 2.663333333333333,
            "scheduled_runtimes": [{
               "id": "D15S-D21S",
               "time": 10.0
            }],
            "actual_runtimes": [{
               "id": "D15S-D21S",
               "description": "47-50 Sts - Rockefeller Ctr to Broadway-Lafayette St via Local",
               "time": 12.663333333333332,
               "routes": [{
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
               }]
            }],
            "routes": [{
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
         "status": "Service Change",
         "max_travel_time": 0.091275167785235,
         "max_travel_time_discrepancy": 2.2666666666666693,
         "destinations": {
            "north": ["Harlem - 148 St", "Wakefield - 241 St"],
            "south": ["Flatbush Av - Brooklyn College", "South Ferry"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": null,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "137N-120N",
               "time": 16.0
            }],
            "actual_runtimes": [],
            "routes": []
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 7,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": -0.05633680555555555,
            "travel_time_discrepancy": -1.3520833333333333,
            "scheduled_runtimes": [{
               "id": "137N-120N",
               "time": 24.0
            }],
            "actual_runtimes": [{
               "id": "137N-120N",
               "description": "Chambers St to 96 St via Local",
               "time": 22.647916666666667,
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
               }]
            }],
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
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 16,
            "max_scheduled_headway": 13,
            "delay": 3,
            "travel_time": 0.0591397849462366,
            "travel_time_discrepancy": 0.9166666666666672,
            "scheduled_runtimes": [{
               "id": "120S-137S",
               "time": 15.5
            }],
            "actual_runtimes": [{
               "id": "120S-137S",
               "description": "96 St to Chambers St via Express",
               "time": 16.416666666666664,
               "routes": [{
                  "id": "2",
                  "name": "2",
                  "color": "#db2828",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "2",
               "name": "2",
               "color": "#db2828",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 17,
            "max_scheduled_headway": 13,
            "delay": 0,
            "travel_time": 0.091275167785235,
            "travel_time_discrepancy": 2.2666666666666693,
            "scheduled_runtimes": [{
               "id": "120S-137S",
               "time": 24.833333333333332
            }],
            "actual_runtimes": [{
               "id": "120S-137S",
               "description": "96 St to Chambers St via Local",
               "time": 27.1,
               "routes": [{
                  "id": "1",
                  "name": "1",
                  "color": "#db2828",
                  "text_color": null
               }]
            }],
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
            "id": "E",
            "name": "E",
            "color": "#2185d0",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": -0.002483870967741947,
         "max_travel_time_discrepancy": -0.046666666666666856,
         "destinations": {
            "north": ["Inwood - 207 St", "Jamaica Center - Parsons/Archer"],
            "south": ["Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd", "World Trade Center"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 12,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": -0.002483870967741947,
            "travel_time_discrepancy": -0.046666666666666856,
            "scheduled_runtimes": [{
               "id": "A32N-A24N",
               "time": 10.0
            }, {
               "id": "A32N-D14N",
               "time": 10.333333333333334
            }],
            "actual_runtimes": [{
               "id": "A32N-A24N",
               "description": "W 4 St to 59 St - Columbus Circle via Local",
               "time": 11.049999999999999,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }, {
               "id": "A32N-D14N",
               "description": "W 4 St to 7 Av via Local",
               "time": 8.641666666666666,
               "routes": [{
                  "id": "E",
                  "name": "E",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
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
            "max_actual_headway": 13,
            "max_scheduled_headway": null,
            "delay": 1,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [],
            "actual_runtimes": [{
               "id": "A24S-A32S",
               "description": "59 St - Columbus Circle to W 4 St via Express",
               "time": 11.238888888888889,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 16,
            "max_scheduled_headway": 13,
            "delay": 1,
            "travel_time": -0.2,
            "travel_time_discrepancy": -2.5,
            "scheduled_runtimes": [{
               "id": "A24S-A32S",
               "time": 9.5
            }, {
               "id": "D14S-A32S",
               "time": 12.5
            }],
            "actual_runtimes": [{
               "id": "D14S-A32S",
               "description": "7 Av to W 4 St via Local",
               "time": 10.0,
               "routes": [{
                  "id": "E",
                  "name": "E",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
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
         "status": "Good Service",
         "max_travel_time": 0.2080459770114942,
         "max_travel_time_discrepancy": 3.0166666666666657,
         "destinations": {
            "north": ["8 Av"],
            "south": ["Canarsie - Rockaway Pkwy"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 21,
            "max_scheduled_headway": 20,
            "delay": 0,
            "travel_time": 0.2080459770114942,
            "travel_time_discrepancy": 3.0166666666666657,
            "scheduled_runtimes": [{
               "id": "L10N-L01N",
               "time": 14.5
            }],
            "actual_runtimes": [{
               "id": "L10N-L01N",
               "description": "Lorimer St to 8 Av",
               "time": 17.516666666666666,
               "routes": [{
                  "id": "L",
                  "name": "L",
                  "color": "#A0A0A0",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 20,
            "max_scheduled_headway": 20,
            "delay": 0,
            "travel_time": 0.08018018018018024,
            "travel_time_discrepancy": 1.4833333333333343,
            "scheduled_runtimes": [{
               "id": "L01S-L10S",
               "time": 18.5
            }],
            "actual_runtimes": [{
               "id": "L01S-L10S",
               "description": "8 Av to Lorimer St",
               "time": 19.983333333333334,
               "routes": [{
                  "id": "L",
                  "name": "L",
                  "color": "#A0A0A0",
                  "text_color": null
               }]
            }],
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
         "max_travel_time": 0.3888888888888889,
         "max_travel_time_discrepancy": 0.5833333333333333,
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
            "travel_time": 0.1222222222222222,
            "travel_time_discrepancy": 0.1833333333333333,
            "scheduled_runtimes": [{
               "id": "901N-902N",
               "time": 1.5
            }],
            "actual_runtimes": [{
               "id": "901N-902N",
               "description": "Grand Central - 42 St to Times Sq - 42 St",
               "time": 1.6833333333333331,
               "routes": [{
                  "id": "GS",
                  "name": "S",
                  "color": "#767676",
                  "text_color": null
               }]
            }],
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
            "delay": 1,
            "travel_time": 0.3888888888888889,
            "travel_time_discrepancy": 0.5833333333333333,
            "scheduled_runtimes": [{
               "id": "902S-901S",
               "time": 1.5
            }],
            "actual_runtimes": [{
               "id": "902S-901S",
               "description": "Times Sq - 42 St to Grand Central - 42 St",
               "time": 2.083333333333333,
               "routes": [{
                  "id": "GS",
                  "name": "S",
                  "color": "#767676",
                  "text_color": null
               }]
            }],
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
         }],
         "status": "Not Good",
         "max_travel_time": 0.14341085271317824,
         "max_travel_time_discrepancy": 1.0277777777777775,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer"],
            "south": ["World Trade Center"]
         },
         "north": [{
            "type": null,
            "name": "via 53 St",
            "max_actual_headway": 21,
            "max_scheduled_headway": 12,
            "delay": 0,
            "travel_time": 0.14341085271317824,
            "travel_time_discrepancy": 1.0277777777777775,
            "scheduled_runtimes": [{
               "id": "D14N-G21N",
               "time": 7.166666666666667
            }],
            "actual_runtimes": [{
               "id": "D14N-G21N",
               "description": "7 Av to Queens Plaza",
               "time": 8.194444444444445,
               "routes": [{
                  "id": "E",
                  "name": "E",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via 53 St",
            "max_actual_headway": 16,
            "max_scheduled_headway": 14,
            "delay": 1,
            "travel_time": 0.10388888888888888,
            "travel_time_discrepancy": 0.7791666666666666,
            "scheduled_runtimes": [{
               "id": "G21S-D14S",
               "time": 7.5
            }],
            "actual_runtimes": [{
               "id": "G21S-D14S",
               "description": "Queens Plaza to 7 Av",
               "time": 8.279166666666667,
               "routes": [{
                  "id": "E",
                  "name": "E",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
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
         "status": "Good Service",
         "max_travel_time": -0.08919022154316271,
         "max_travel_time_discrepancy": -0.9285714285714286,
         "destinations": {
            "north": ["Astoria - Ditmars Blvd", "Forest Hills - 71 Av"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via 59 St",
            "max_actual_headway": 11,
            "max_scheduled_headway": 14,
            "delay": 1,
            "travel_time": -0.08919022154316271,
            "travel_time_discrepancy": -0.9285714285714286,
            "scheduled_runtimes": [{
               "id": "R14N-R09N",
               "time": 8.5
            }, {
               "id": "R14N-G21N",
               "time": 11.0
            }],
            "actual_runtimes": [{
               "id": "R14N-R09N",
               "description": "57 St - 7 Av to Queensboro Plaza",
               "time": 8.1875,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }, {
               "id": "R14N-G21N",
               "description": "57 St - 7 Av to Queens Plaza",
               "time": 9.25,
               "routes": [{
                  "id": "R",
                  "name": "R",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
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
            "max_actual_headway": 13,
            "max_scheduled_headway": 18,
            "delay": 0,
            "travel_time": -0.18070175438596492,
            "travel_time_discrepancy": -1.7166666666666668,
            "scheduled_runtimes": [{
               "id": "R09S-R14S",
               "time": 8.5
            }, {
               "id": "G21S-R14S",
               "time": 9.5
            }],
            "actual_runtimes": [{
               "id": "G21S-R14S",
               "description": "Queens Plaza to 57 St - 7 Av",
               "time": 7.783333333333333,
               "routes": []
            }],
            "routes": [{
               "id": "N",
               "name": "N",
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
         }, {
            "id": "R",
            "name": "R",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": -0.07222222222222222,
         "max_travel_time_discrepancy": -0.7583333333333333,
         "destinations": {
            "north": ["Forest Hills - 71 Av", "Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via 63 St",
            "max_actual_headway": 17,
            "max_scheduled_headway": 12,
            "delay": 3,
            "travel_time": -0.07222222222222222,
            "travel_time_discrepancy": -0.7583333333333333,
            "scheduled_runtimes": [{
               "id": "D15N-B04N",
               "time": 10.5
            }],
            "actual_runtimes": [{
               "id": "D15N-B04N",
               "description": "47-50 Sts - Rockefeller Ctr to 21 St - Queensbridge",
               "time": 9.741666666666667,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "F",
               "name": "F",
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
            "type": null,
            "name": "via 63 St",
            "max_actual_headway": 14,
            "max_scheduled_headway": 14,
            "delay": 1,
            "travel_time": -0.4222222222222222,
            "travel_time_discrepancy": -3.5888888888888886,
            "scheduled_runtimes": [{
               "id": "B04S-D15S",
               "time": 8.5
            }],
            "actual_runtimes": [{
               "id": "B04S-D15S",
               "description": "21 St - Queensbridge to 47-50 Sts - Rockefeller Ctr",
               "time": 4.911111111111111,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
         }],
         "status": "Good Service",
         "max_travel_time": 0.004607652883514932,
         "max_travel_time_discrepancy": 0.07222222222222197,
         "destinations": {
            "north": ["96 St", "Astoria - Ditmars Blvd", "Forest Hills - 71 Av", "Times Sq - 42 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 9,
            "max_scheduled_headway": null,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "Q01N-R14N",
               "time": 12.25
            }, {
               "id": "Q01N-R15N",
               "time": 10.5
            }],
            "actual_runtimes": [{
               "id": "Q01N-R15N",
               "description": "Canal St (Lower Level) to 49 St via Express",
               "time": 12.0,
               "routes": []
            }, {
               "id": "Q01N-R14N",
               "description": "Canal St (Lower Level) to 57 St - 7 Av via Express",
               "time": 12.583333333333334,
               "routes": []
            }],
            "routes": [{
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 11,
            "max_scheduled_headway": 9,
            "delay": 3,
            "travel_time": -0.07238400488400487,
            "travel_time_discrepancy": -1.0416666666666665,
            "scheduled_runtimes": [{
               "id": "R23N-R14N",
               "time": 15.0
            }, {
               "id": "Q01N-R14N",
               "time": 16.0
            }, {
               "id": "R23N-R15N",
               "time": 13.0
            }, {
               "id": "Q01N-R15N",
               "time": 14.0
            }],
            "actual_runtimes": [{
               "id": "R23N-R15N",
               "description": "Canal St (Upper Level) to 49 St via Local",
               "time": 12.3125,
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
               }]
            }, {
               "id": "Q01N-R15N",
               "description": "Canal St (Lower Level) to 49 St via Local",
               "time": 12.0,
               "routes": [{
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }, {
               "id": "R23N-R14N",
               "description": "Canal St (Upper Level) to 57 St - 7 Av via Local",
               "time": 14.083333333333334,
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
               }]
            }, {
               "id": "Q01N-R14N",
               "description": "Canal St (Lower Level) to 57 St - 7 Av via Local",
               "time": 14.0,
               "routes": [{
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
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
            }]
         }],
         "south": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 12,
            "max_scheduled_headway": 12,
            "delay": 0,
            "travel_time": 0.004607652883514932,
            "travel_time_discrepancy": 0.07222222222222197,
            "scheduled_runtimes": [{
               "id": "R14S-R23S",
               "time": 14.5
            }, {
               "id": "R15S-R23S",
               "time": 12.833333333333334
            }],
            "actual_runtimes": [{
               "id": "R15S-R23S",
               "description": "49 St to Canal St (Upper Level) via Local",
               "time": 12.75,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }, {
               "id": "R14S-R23S",
               "description": "57 St - 7 Av to Canal St (Upper Level) via Local",
               "time": 14.72777777777778,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
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
         "status": "Good Service",
         "max_travel_time": 0,
         "max_travel_time_discrepancy": null,
         "destinations": {
            "north": ["Van Cortlandt Park - 242 St"],
            "south": ["Dyckman St"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 10,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "120N-101N",
               "time": 30.1
            }],
            "actual_runtimes": [],
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
            "max_actual_headway": 12,
            "max_scheduled_headway": 14,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "101S-120S",
               "time": 26.5
            }],
            "actual_runtimes": [],
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
            "id": "D",
            "name": "D",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.15274261603375527,
         "max_travel_time_discrepancy": 3.016666666666667,
         "destinations": {
            "north": ["Bedford Park Blvd", "Inwood - 207 St"],
            "south": ["Coney Island - Stillwell Av", "Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 12,
            "max_scheduled_headway": null,
            "delay": 1,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "A24N-A09N",
               "time": 13.75
            }, {
               "id": "A24N-D13N",
               "time": 11.5
            }],
            "actual_runtimes": [{
               "id": "A24N-A09N",
               "description": "59 St - Columbus Circle to 168 St via Express",
               "time": 16.083333333333332,
               "routes": []
            }, {
               "id": "A24N-D13N",
               "description": "59 St - Columbus Circle to 145 St (Lower Level) via Express",
               "time": 11.625,
               "routes": [{
                  "id": "D",
                  "name": "D",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 15,
            "max_scheduled_headway": 13,
            "delay": 1,
            "travel_time": 0.009302325581395314,
            "travel_time_discrepancy": 0.1999999999999993,
            "scheduled_runtimes": [{
               "id": "A24N-A09N",
               "time": 21.5
            }],
            "actual_runtimes": [{
               "id": "A24N-A09N",
               "description": "59 St - Columbus Circle to 168 St via Local",
               "time": 21.7,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 19,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": 0.061594202898550776,
            "travel_time_discrepancy": 0.7083333333333339,
            "scheduled_runtimes": [{
               "id": "D13S-A24S",
               "time": 11.5
            }],
            "actual_runtimes": [{
               "id": "D13S-A24S",
               "description": "145 St (Lower Level) to 59 St - Columbus Circle via Express",
               "time": 12.208333333333334,
               "routes": [{
                  "id": "D",
                  "name": "D",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 13,
            "max_scheduled_headway": 15,
            "delay": 1,
            "travel_time": 0.15274261603375527,
            "travel_time_discrepancy": 3.016666666666667,
            "scheduled_runtimes": [{
               "id": "A09S-A24S",
               "time": 19.75
            }],
            "actual_runtimes": [{
               "id": "A09S-A24S",
               "description": "168 St to 59 St - Columbus Circle via Local",
               "time": 22.766666666666666,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
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
         }],
         "status": "Good Service",
         "max_travel_time": 0.17569444444444443,
         "max_travel_time_discrepancy": 2.1083333333333334,
         "destinations": {
            "north": ["Inwood - 207 St"],
            "south": ["Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": null,
            "name": "via Chambers St",
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 1,
            "travel_time": 0.07260416666666669,
            "travel_time_discrepancy": 0.7895833333333335,
            "scheduled_runtimes": [{
               "id": "A41N-A32N",
               "time": 12.0
            }, {
               "id": "A41N-A33N",
               "time": 10.0
            }],
            "actual_runtimes": [{
               "id": "A41N-A33N",
               "description": "Jay St - MetroTech to Spring St",
               "time": 10.816666666666666,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }, {
               "id": "A41N-A32N",
               "description": "Jay St - MetroTech to W 4 St",
               "time": 12.7625,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Chambers St",
            "max_actual_headway": 13,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": 0.17569444444444443,
            "travel_time_discrepancy": 2.1083333333333334,
            "scheduled_runtimes": [{
               "id": "A32S-A41S",
               "time": 12.0
            }, {
               "id": "A33S-A41S",
               "time": 10.5
            }],
            "actual_runtimes": [{
               "id": "A32S-A41S",
               "description": "W 4 St to Jay St - MetroTech",
               "time": 14.108333333333334,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
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
         "status": "Good Service",
         "max_travel_time": 0.04623655913978494,
         "max_travel_time_discrepancy": 0.7166666666666665,
         "destinations": {
            "north": ["Flushing - Main St"],
            "south": ["34 St - Hudson Yards"]
         },
         "north": [{
            "type": null,
            "name": "34 St–Hudson Yds—Queensboro Plz",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": -0.001904761904761915,
            "travel_time_discrepancy": -0.028571428571428723,
            "scheduled_runtimes": [{
               "id": "726N-718N",
               "time": 15.0
            }],
            "actual_runtimes": [{
               "id": "726N-718N",
               "description": "34 St - Hudson Yards to Queensboro Plaza",
               "time": 14.97142857142857,
               "routes": [{
                  "id": "7",
                  "name": "7",
                  "color": "#a333c8",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": 0.04623655913978494,
            "travel_time_discrepancy": 0.7166666666666665,
            "scheduled_runtimes": [{
               "id": "718S-726S",
               "time": 15.5
            }],
            "actual_runtimes": [{
               "id": "718S-726S",
               "description": "Queensboro Plaza to 34 St - Hudson Yards",
               "time": 16.216666666666665,
               "routes": [{
                  "id": "7",
                  "name": "7",
                  "color": "#a333c8",
                  "text_color": null
               }]
            }],
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
         "status": "Good Service",
         "max_travel_time": 0.0701366459627329,
         "max_travel_time_discrepancy": 0.8214285714285712,
         "destinations": {
            "north": ["Harlem - 148 St", "Wakefield - 241 St"],
            "south": ["Flatbush Av - Brooklyn College", "South Ferry", "Times Sq - 42 St"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 7,
            "max_scheduled_headway": 6,
            "delay": 1,
            "travel_time": -0.04397532292269134,
            "travel_time_discrepancy": -0.9619047619047618,
            "scheduled_runtimes": [{
               "id": "120N-222N",
               "time": 13.0
            }, {
               "id": "120N-301N",
               "time": 19.0
            }],
            "actual_runtimes": [{
               "id": "120N-301N",
               "description": "96 St to Harlem - 148 St",
               "time": 16.8375,
               "routes": [{
                  "id": "1",
                  "name": "1",
                  "color": "#db2828",
                  "text_color": null
               }, {
                  "id": "3",
                  "name": "3",
                  "color": "#db2828",
                  "text_color": null
               }]
            }, {
               "id": "120N-222N",
               "description": "96 St to 149 St - Grand Concourse",
               "time": 13.638888888888888,
               "routes": [{
                  "id": "2",
                  "name": "2",
                  "color": "#db2828",
                  "text_color": null
               }]
            }],
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
            }]
         }],
         "south": [{
            "type": null,
            "name": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 12,
            "delay": 3,
            "travel_time": 0.0701366459627329,
            "travel_time_discrepancy": 0.8214285714285712,
            "scheduled_runtimes": [{
               "id": "222S-120S",
               "time": 11.5
            }, {
               "id": "301S-120S",
               "time": 12.5
            }],
            "actual_runtimes": [{
               "id": "301S-120S",
               "description": "Harlem - 148 St to 96 St",
               "time": 12.76,
               "routes": [{
                  "id": "1",
                  "name": "1",
                  "color": "#db2828",
                  "text_color": null
               }, {
                  "id": "3",
                  "name": "3",
                  "color": "#db2828",
                  "text_color": null
               }]
            }, {
               "id": "222S-120S",
               "description": "149 St - Grand Concourse to 96 St",
               "time": 13.725,
               "routes": [{
                  "id": "2",
                  "name": "2",
                  "color": "#db2828",
                  "text_color": null
               }]
            }],
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
            "id": "6",
            "name": "6",
            "color": "#21ba45",
            "text_color": null
         }],
         "status": "Service Change",
         "max_travel_time": 0.20363984674329508,
         "max_travel_time_discrepancy": 5.905555555555558,
         "destinations": {
            "north": ["3 Av - 138 St", "Pelham Bay Park", "Woodlawn"],
            "south": ["Brooklyn Bridge - City Hall", "New Lots Av"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": null,
            "max_scheduled_headway": 13,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "640N-621N",
               "time": 18.714285714285715
            }],
            "actual_runtimes": [],
            "routes": []
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": 0.20363984674329508,
            "travel_time_discrepancy": 5.905555555555558,
            "scheduled_runtimes": [{
               "id": "640N-621N",
               "time": 29.0
            }],
            "actual_runtimes": [{
               "id": "640N-621N",
               "description": "Brooklyn Bridge - City Hall to 125 St (Lexington Av) via Local",
               "time": 34.90555555555556,
               "routes": [{
                  "id": "4",
                  "name": "4",
                  "color": "#21ba45",
                  "text_color": null
               }, {
                  "id": "6",
                  "name": "6",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "4",
               "name": "4",
               "color": "#21ba45",
               "text_color": null
            }, {
               "id": "6",
               "name": "6",
               "color": "#21ba45",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": null,
            "max_scheduled_headway": 17,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "621S-640S",
               "time": 19.0
            }],
            "actual_runtimes": [],
            "routes": []
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 12,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": 0.05484400656814451,
            "travel_time_discrepancy": 1.5904761904761908,
            "scheduled_runtimes": [{
               "id": "621S-640S",
               "time": 29.0
            }],
            "actual_runtimes": [{
               "id": "621S-640S",
               "description": "125 St (Lexington Av) to Brooklyn Bridge - City Hall via Local",
               "time": 30.59047619047619,
               "routes": [{
                  "id": "4",
                  "name": "4",
                  "color": "#21ba45",
                  "text_color": null
               }, {
                  "id": "6",
                  "name": "6",
                  "color": "#21ba45",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "4",
               "name": "4",
               "color": "#21ba45",
               "text_color": null
            }, {
               "id": "6",
               "name": "6",
               "color": "#21ba45",
               "text_color": null
            }]
         }]
      }, {
         "id": "97",
         "name": "Manhattan Bridge (6 Avenue)",
         "routes": [{
            "id": "D",
            "name": "D",
            "color": "#f2711c",
            "text_color": null
         }],
         "status": "Not Good",
         "max_travel_time": 0.0916666666666667,
         "max_travel_time_discrepancy": 1.0083333333333337,
         "destinations": {
            "north": ["Bedford Park Blvd"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via Manhattan Bridge (North Side)",
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 1,
            "travel_time": 0.0916666666666667,
            "travel_time_discrepancy": 1.0083333333333337,
            "scheduled_runtimes": [{
               "id": "R31N-D22N",
               "time": 11.0
            }],
            "actual_runtimes": [{
               "id": "R31N-D22N",
               "description": "Atlantic Av - Barclays Ctr (4 Avenue) to Grand St",
               "time": 12.008333333333333,
               "routes": [{
                  "id": "D",
                  "name": "D",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "D",
               "name": "D",
               "color": "#f2711c",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via Manhattan Bridge (North Side)",
            "max_actual_headway": 19,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": -0.03787878787878791,
            "travel_time_discrepancy": -0.41666666666666696,
            "scheduled_runtimes": [{
               "id": "D22S-R31S",
               "time": 11.0
            }],
            "actual_runtimes": [{
               "id": "D22S-R31S",
               "description": "Grand St to Atlantic Av - Barclays Ctr (4 Avenue)",
               "time": 10.583333333333332,
               "routes": [{
                  "id": "D",
                  "name": "D",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
            "routes": [{
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
         }],
         "status": "Good Service",
         "max_travel_time": 0.16504854368932032,
         "max_travel_time_discrepancy": 2.833333333333332,
         "destinations": {
            "north": ["96 St", "Astoria - Ditmars Blvd", "Forest Hills - 71 Av", "Times Sq - 42 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": "Express",
            "name": "via Manhattan Bridge (South Side)",
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": 0.16158192090395476,
            "travel_time_discrepancy": 1.5888888888888886,
            "scheduled_runtimes": [{
               "id": "D24N-Q01N",
               "time": 9.833333333333334
            }],
            "actual_runtimes": [{
               "id": "D24N-Q01N",
               "description": "Atlantic Av - Barclays Ctr (Brighton) to Canal St (Lower Level) via  Manhattan Bridge (South Side)",
               "time": 11.422222222222222,
               "routes": [{
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }, {
               "id": "R31N-Q01N",
               "description": "Atlantic Av - Barclays Ctr (4 Avenue) to Canal St (Lower Level) via  Manhattan Bridge (South Side)",
               "time": 13.966666666666667,
               "routes": []
            }],
            "routes": [{
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "via Whitehall St",
            "max_actual_headway": 16,
            "max_scheduled_headway": 15,
            "delay": 3,
            "travel_time": 0.16504854368932032,
            "travel_time_discrepancy": 2.833333333333332,
            "scheduled_runtimes": [{
               "id": "R31N-R23N",
               "time": 17.166666666666668
            }],
            "actual_runtimes": [{
               "id": "R31N-R23N",
               "description": "Atlantic Av - Barclays Ctr (4 Avenue) to Canal St (Upper Level) via  Whitehall St",
               "time": 20.0,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
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
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "via Manhattan Bridge (South Side)",
            "max_actual_headway": 12,
            "max_scheduled_headway": 12,
            "delay": 0,
            "travel_time": 0.012245762711864372,
            "travel_time_discrepancy": 0.093333333333333,
            "scheduled_runtimes": [{
               "id": "Q01S-R31S",
               "time": 12.0
            }, {
               "id": "Q01S-D24S",
               "time": 9.833333333333334
            }],
            "actual_runtimes": [{
               "id": "Q01S-R31S",
               "description": "Canal St (Lower Level) to Atlantic Av - Barclays Ctr (4 Avenue) via  Manhattan Bridge (South Side)",
               "time": 11.75,
               "routes": []
            }, {
               "id": "Q01S-D24S",
               "description": "Canal St (Lower Level) to Atlantic Av - Barclays Ctr (Brighton) via  Manhattan Bridge (South Side)",
               "time": 10.441666666666666,
               "routes": [{
                  "id": "Q",
                  "name": "Q",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
            "routes": [{
               "id": "Q",
               "name": "Q",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }, {
            "type": "Local",
            "name": "via Whitehall St",
            "max_actual_headway": 14,
            "max_scheduled_headway": 18,
            "delay": 0,
            "travel_time": 0.008554572271386507,
            "travel_time_discrepancy": 0.16111111111111262,
            "scheduled_runtimes": [{
               "id": "R23S-R31S",
               "time": 18.833333333333332
            }],
            "actual_runtimes": [{
               "id": "R23S-R31S",
               "description": "Canal St (Upper Level) to Atlantic Av - Barclays Ctr (4 Avenue) via  Whitehall St",
               "time": 18.994444444444444,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
            "routes": [{
               "id": "N",
               "name": "N",
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
         "max_travel_time": 0.13030303030303034,
         "max_travel_time_discrepancy": 0.7166666666666668,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer"],
            "south": ["Broad St"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": 0.05476190476190477,
            "travel_time_discrepancy": 0.38333333333333347,
            "scheduled_runtimes": [{
               "id": "M23N-M19N",
               "time": 7.0
            }],
            "actual_runtimes": [{
               "id": "M23N-M19N",
               "description": "Broad St to Bowery",
               "time": 7.383333333333333,
               "routes": [{
                  "id": "J",
                  "name": "J",
                  "color": "#a5673f",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 17,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": 0.13030303030303034,
            "travel_time_discrepancy": 0.7166666666666668,
            "scheduled_runtimes": [{
               "id": "M19S-M23S",
               "time": 5.5
            }],
            "actual_runtimes": [{
               "id": "M19S-M23S",
               "description": "Bowery to Broad St",
               "time": 6.216666666666667,
               "routes": [{
                  "id": "J",
                  "name": "J",
                  "color": "#a5673f",
                  "text_color": null
               }]
            }],
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
         "max_travel_time": 0.37735849056603765,
         "max_travel_time_discrepancy": 3.3333333333333326,
         "destinations": {
            "north": ["Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via Delancey St",
            "max_actual_headway": 15,
            "max_scheduled_headway": 13,
            "delay": 1,
            "travel_time": -0.05555555555555555,
            "travel_time_discrepancy": -0.5,
            "scheduled_runtimes": [{
               "id": "A41N-D21N",
               "time": 9.0
            }],
            "actual_runtimes": [{
               "id": "A41N-D21N",
               "description": "Jay St - MetroTech to Broadway-Lafayette St",
               "time": 8.5,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 11,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": 0.37735849056603765,
            "travel_time_discrepancy": 3.3333333333333326,
            "scheduled_runtimes": [{
               "id": "D21S-A41S",
               "time": 8.833333333333334
            }],
            "actual_runtimes": [{
               "id": "D21S-A41S",
               "description": "Broadway-Lafayette St to Jay St - MetroTech",
               "time": 12.166666666666666,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
         "max_travel_time": 0.18692810457516337,
         "max_travel_time_discrepancy": 1.5888888888888886,
         "destinations": {
            "north": ["Inwood - 207 St"],
            "south": ["Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 15,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": -0.026060606060606003,
            "travel_time_discrepancy": -0.23888888888888835,
            "scheduled_runtimes": [{
               "id": "A09N-A02N",
               "time": 9.166666666666666
            }],
            "actual_runtimes": [{
               "id": "A09N-A02N",
               "description": "168 St to Inwood - 207 St",
               "time": 8.927777777777777,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": 0.18692810457516337,
            "travel_time_discrepancy": 1.5888888888888886,
            "scheduled_runtimes": [{
               "id": "A02S-A09S",
               "time": 8.5
            }],
            "actual_runtimes": [{
               "id": "A02S-A09S",
               "description": "Inwood - 207 St to 168 St",
               "time": 10.088888888888889,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
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
         "status": "Good Service",
         "max_travel_time": -0.0648809523809524,
         "max_travel_time_discrepancy": -0.6375000000000002,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer", "Middle Village - Metropolitan Av"],
            "south": ["96 St", "Broad St"]
         },
         "north": [{
            "type": null,
            "name": "via Williamsburg Bridge",
            "max_actual_headway": 13,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": -0.1723901098901099,
            "travel_time_discrepancy": -1.8125,
            "scheduled_runtimes": [{
               "id": "M19N-M16N",
               "time": 9.0
            }, {
               "id": "D21N-M16N",
               "time": 11.375
            }],
            "actual_runtimes": [{
               "id": "M19N-M16N",
               "description": "Bowery to Marcy Av",
               "time": 7.875,
               "routes": [{
                  "id": "J",
                  "name": "J",
                  "color": "#a5673f",
                  "text_color": null
               }]
            }, {
               "id": "D21N-M16N",
               "description": "Broadway-Lafayette St to Marcy Av",
               "time": 8.875,
               "routes": [{
                  "id": "M",
                  "name": "M",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 14,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": -0.0648809523809524,
            "travel_time_discrepancy": -0.6375000000000002,
            "scheduled_runtimes": [{
               "id": "M16S-M19S",
               "time": 9.0
            }, {
               "id": "M16S-D21S",
               "time": 10.5
            }],
            "actual_runtimes": [{
               "id": "M16S-M19S",
               "description": "Marcy Av to Bowery",
               "time": 8.475,
               "routes": [{
                  "id": "J",
                  "name": "J",
                  "color": "#a5673f",
                  "text_color": null
               }]
            }, {
               "id": "M16S-D21S",
               "description": "Marcy Av to Broadway-Lafayette St",
               "time": 9.75,
               "routes": [{
                  "id": "M",
                  "name": "M",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
         }],
         "status": "Not Good",
         "max_travel_time": 0.14341085271317824,
         "max_travel_time_discrepancy": 1.0277777777777775,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer"],
            "south": ["World Trade Center"]
         },
         "north": [{
            "type": null,
            "name": "via 53 St",
            "max_actual_headway": 21,
            "max_scheduled_headway": 12,
            "delay": 0,
            "travel_time": 0.14341085271317824,
            "travel_time_discrepancy": 1.0277777777777775,
            "scheduled_runtimes": [{
               "id": "D14N-G21N",
               "time": 7.166666666666667
            }],
            "actual_runtimes": [{
               "id": "D14N-G21N",
               "description": "7 Av to Queens Plaza",
               "time": 8.194444444444445,
               "routes": [{
                  "id": "E",
                  "name": "E",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": null,
            "name": "via 53 St",
            "max_actual_headway": 16,
            "max_scheduled_headway": 14,
            "delay": 1,
            "travel_time": 0.10388888888888888,
            "travel_time_discrepancy": 0.7791666666666666,
            "scheduled_runtimes": [{
               "id": "G21S-D14S",
               "time": 7.5
            }],
            "actual_runtimes": [{
               "id": "G21S-D14S",
               "description": "Queens Plaza to 7 Av",
               "time": 8.279166666666667,
               "routes": [{
                  "id": "E",
                  "name": "E",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "E",
               "name": "E",
               "color": "#2185d0",
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
         "status": "Good Service",
         "max_travel_time": -0.08919022154316271,
         "max_travel_time_discrepancy": -0.9285714285714286,
         "destinations": {
            "north": ["Astoria - Ditmars Blvd", "Forest Hills - 71 Av"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via 59 St",
            "max_actual_headway": 11,
            "max_scheduled_headway": 14,
            "delay": 1,
            "travel_time": -0.08919022154316271,
            "travel_time_discrepancy": -0.9285714285714286,
            "scheduled_runtimes": [{
               "id": "R14N-R09N",
               "time": 8.5
            }, {
               "id": "R14N-G21N",
               "time": 11.0
            }],
            "actual_runtimes": [{
               "id": "R14N-R09N",
               "description": "57 St - 7 Av to Queensboro Plaza",
               "time": 8.1875,
               "routes": [{
                  "id": "N",
                  "name": "N",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }, {
               "id": "R14N-G21N",
               "description": "57 St - 7 Av to Queens Plaza",
               "time": 9.25,
               "routes": [{
                  "id": "R",
                  "name": "R",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
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
            "max_actual_headway": 13,
            "max_scheduled_headway": 18,
            "delay": 0,
            "travel_time": -0.18070175438596492,
            "travel_time_discrepancy": -1.7166666666666668,
            "scheduled_runtimes": [{
               "id": "R09S-R14S",
               "time": 8.5
            }, {
               "id": "G21S-R14S",
               "time": 9.5
            }],
            "actual_runtimes": [{
               "id": "G21S-R14S",
               "description": "Queens Plaza to 57 St - 7 Av",
               "time": 7.783333333333333,
               "routes": []
            }],
            "routes": [{
               "id": "N",
               "name": "N",
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
         }, {
            "id": "R",
            "name": "R",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": -0.07222222222222222,
         "max_travel_time_discrepancy": -0.7583333333333333,
         "destinations": {
            "north": ["Forest Hills - 71 Av", "Jamaica - 179 St"],
            "south": ["Coney Island - Stillwell Av"]
         },
         "north": [{
            "type": null,
            "name": "via 63 St",
            "max_actual_headway": 17,
            "max_scheduled_headway": 12,
            "delay": 3,
            "travel_time": -0.07222222222222222,
            "travel_time_discrepancy": -0.7583333333333333,
            "scheduled_runtimes": [{
               "id": "D15N-B04N",
               "time": 10.5
            }],
            "actual_runtimes": [{
               "id": "D15N-B04N",
               "description": "47-50 Sts - Rockefeller Ctr to 21 St - Queensbridge",
               "time": 9.741666666666667,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "F",
               "name": "F",
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
            "type": null,
            "name": "via 63 St",
            "max_actual_headway": 14,
            "max_scheduled_headway": 14,
            "delay": 1,
            "travel_time": -0.4222222222222222,
            "travel_time_discrepancy": -3.5888888888888886,
            "scheduled_runtimes": [{
               "id": "B04S-D15S",
               "time": 8.5
            }],
            "actual_runtimes": [{
               "id": "B04S-D15S",
               "description": "21 St - Queensbridge to 47-50 Sts - Rockefeller Ctr",
               "time": 4.911111111111111,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
         "max_travel_time": 0.34833333333333333,
         "max_travel_time_discrepancy": 3.4833333333333334,
         "destinations": {
            "north": ["Astoria - Ditmars Blvd"],
            "south": ["Coney Island - Stillwell Av", "Queensboro Plaza"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 13,
            "delay": 1,
            "travel_time": 0.34833333333333333,
            "travel_time_discrepancy": 3.4833333333333334,
            "scheduled_runtimes": [{
               "id": "R09N-R01N",
               "time": 10.0
            }],
            "actual_runtimes": [{
               "id": "R09N-R01N",
               "description": "Queensboro Plaza to Astoria - Ditmars Blvd",
               "time": 13.483333333333334,
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
            "max_actual_headway": 18,
            "max_scheduled_headway": 18,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "R01S-R09S",
               "time": 9.166666666666666
            }],
            "actual_runtimes": [],
            "routes": [{
               "id": "N",
               "name": "N",
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
         "max_travel_time": 0.20400000000000004,
         "max_travel_time_discrepancy": 2.5500000000000003,
         "destinations": {
            "north": ["Court Sq"],
            "south": ["Church Av"]
         },
         "north": [{
            "type": null,
            "name": "Court Sq—Bedford–Nostrand Avs",
            "max_actual_headway": 11,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.06138613861386138,
            "travel_time_discrepancy": 0.7749999999999999,
            "scheduled_runtimes": [{
               "id": "G33N-G22N",
               "time": 12.625
            }],
            "actual_runtimes": [{
               "id": "G33N-G22N",
               "description": "Bedford - Nostrand Avs to Court Sq",
               "time": 13.4,
               "routes": [{
                  "id": "G",
                  "name": "G",
                  "color": "#b5cc18",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 10,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": 0.20400000000000004,
            "travel_time_discrepancy": 2.5500000000000003,
            "scheduled_runtimes": [{
               "id": "G22S-G33S",
               "time": 12.5
            }],
            "actual_runtimes": [{
               "id": "G22S-G33S",
               "description": "Court Sq to Bedford - Nostrand Avs",
               "time": 15.049999999999999,
               "routes": [{
                  "id": "G",
                  "name": "G",
                  "color": "#b5cc18",
                  "text_color": null
               }]
            }],
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
         "status": "Good Service",
         "max_travel_time": 0.1441607800982801,
         "max_travel_time_discrepancy": 2.866666666666667,
         "destinations": {
            "north": ["Flushing - Main St"],
            "south": ["34 St - Hudson Yards"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 8,
            "max_scheduled_headway": 7,
            "delay": 1,
            "travel_time": 0.1441607800982801,
            "travel_time_discrepancy": 2.866666666666667,
            "scheduled_runtimes": [{
               "id": "718N-701N",
               "time": 22.0
            }, {
               "id": "718N-702N",
               "time": 18.5
            }],
            "actual_runtimes": [{
               "id": "718N-701N",
               "description": "Queensboro Plaza to Flushing - Main St via Local",
               "time": 24.86904761904762,
               "routes": [{
                  "id": "7",
                  "name": "7",
                  "color": "#a333c8",
                  "text_color": null
               }]
            }, {
               "id": "718N-702N",
               "description": "Queensboro Plaza to Mets - Willets Point via Local",
               "time": 21.364814814814814,
               "routes": [{
                  "id": "7",
                  "name": "7",
                  "color": "#a333c8",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 12,
            "max_scheduled_headway": 12,
            "delay": 1,
            "travel_time": 0.03671937243365815,
            "travel_time_discrepancy": 0.7238095238095238,
            "scheduled_runtimes": [{
               "id": "701S-718S",
               "time": 21.0
            }, {
               "id": "702S-718S",
               "time": 18.5
            }],
            "actual_runtimes": [{
               "id": "701S-718S",
               "description": "Flushing - Main St to Queensboro Plaza via Local",
               "time": 21.747619047619047,
               "routes": [{
                  "id": "7",
                  "name": "7",
                  "color": "#a333c8",
                  "text_color": null
               }]
            }, {
               "id": "702S-718S",
               "description": "Mets - Willets Point to Queensboro Plaza via Local",
               "time": 19.2,
               "routes": [{
                  "id": "7",
                  "name": "7",
                  "color": "#a333c8",
                  "text_color": null
               }]
            }],
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
         "status": "Good Service",
         "max_travel_time": 0.04623655913978494,
         "max_travel_time_discrepancy": 0.7166666666666665,
         "destinations": {
            "north": ["Flushing - Main St"],
            "south": ["34 St - Hudson Yards"]
         },
         "north": [{
            "type": null,
            "name": "34 St–Hudson Yds—Queensboro Plz",
            "max_actual_headway": 8,
            "max_scheduled_headway": 8,
            "delay": 0,
            "travel_time": -0.001904761904761915,
            "travel_time_discrepancy": -0.028571428571428723,
            "scheduled_runtimes": [{
               "id": "726N-718N",
               "time": 15.0
            }],
            "actual_runtimes": [{
               "id": "726N-718N",
               "description": "34 St - Hudson Yards to Queensboro Plaza",
               "time": 14.97142857142857,
               "routes": [{
                  "id": "7",
                  "name": "7",
                  "color": "#a333c8",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "delay": 1,
            "travel_time": 0.04623655913978494,
            "travel_time_discrepancy": 0.7166666666666665,
            "scheduled_runtimes": [{
               "id": "718S-726S",
               "time": 15.5
            }],
            "actual_runtimes": [{
               "id": "718S-726S",
               "description": "Queensboro Plaza to 34 St - Hudson Yards",
               "time": 16.216666666666665,
               "routes": [{
                  "id": "7",
                  "name": "7",
                  "color": "#a333c8",
                  "text_color": null
               }]
            }],
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
         }],
         "status": "Service Change",
         "max_travel_time": 0.15343915343915346,
         "max_travel_time_discrepancy": 3.2222222222222228,
         "destinations": {
            "north": ["Inwood - 207 St"],
            "south": ["Far Rockaway - Mott Av", "Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "delay": 0,
            "travel_time": 0.15343915343915346,
            "travel_time_discrepancy": 3.2222222222222228,
            "scheduled_runtimes": [{
               "id": "A55N-A41N",
               "time": 21.0
            }],
            "actual_runtimes": [{
               "id": "A55N-A41N",
               "description": "Euclid Av to Jay St - MetroTech via Local",
               "time": 24.222222222222225,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 19,
            "max_scheduled_headway": null,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "A41S-A55S",
               "time": 15.0
            }],
            "actual_runtimes": [{
               "id": "A41S-A55S",
               "description": "Jay St - MetroTech to Euclid Av via Express",
               "time": 18.983333333333334,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
            "routes": [{
               "id": "A",
               "name": "A",
               "color": "#2185d0",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": null,
            "max_scheduled_headway": 12,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "A41S-A55S",
               "time": 24.0
            }],
            "actual_runtimes": [],
            "routes": []
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
         "max_travel_time": 0.09000000000000004,
         "max_travel_time_discrepancy": 0.9000000000000004,
         "destinations": {
            "north": ["Euclid Av", "Inwood - 207 St"],
            "south": ["Ozone Park - Lefferts Blvd"]
         },
         "north": [{
            "type": null,
            "name": "Lefferts Blvd Branch",
            "max_actual_headway": 30,
            "max_scheduled_headway": 30,
            "delay": 0,
            "travel_time": 0.09000000000000004,
            "travel_time_discrepancy": 0.9000000000000004,
            "scheduled_runtimes": [{
               "id": "A65N-A55N",
               "time": 10.0
            }],
            "actual_runtimes": [{
               "id": "A65N-A55N",
               "description": "Ozone Park - Lefferts Blvd to Euclid Av",
               "time": 10.9,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 19,
            "max_scheduled_headway": 19,
            "delay": 0,
            "travel_time": -0.2051282051282051,
            "travel_time_discrepancy": -2.666666666666666,
            "scheduled_runtimes": [{
               "id": "A55S-A65S",
               "time": 13.0
            }],
            "actual_runtimes": [{
               "id": "A55S-A65S",
               "description": "Euclid Av to Ozone Park - Lefferts Blvd",
               "time": 10.333333333333334,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
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
         "max_travel_time": 0.06145833333333328,
         "max_travel_time_discrepancy": 0.9833333333333325,
         "destinations": {
            "north": ["Jamaica Center - Parsons/Archer"],
            "south": ["Broad St"]
         },
         "north": [{
            "type": null,
            "name": "Crescent St—Jamaica Ctr",
            "max_actual_headway": 14,
            "max_scheduled_headway": 14,
            "delay": 0,
            "travel_time": 0.06145833333333328,
            "travel_time_discrepancy": 0.9833333333333325,
            "scheduled_runtimes": [{
               "id": "J20N-G05N",
               "time": 16.0
            }],
            "actual_runtimes": [{
               "id": "J20N-G05N",
               "description": "Crescent St to Jamaica Center - Parsons/Archer",
               "time": 16.983333333333334,
               "routes": [{
                  "id": "J",
                  "name": "J",
                  "color": "#a5673f",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 18,
            "max_scheduled_headway": 18,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "G05S-J20S",
               "time": 16.0
            }],
            "actual_runtimes": [],
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
         "status": "Not Good",
         "max_travel_time": 0,
         "max_travel_time_discrepancy": null,
         "destinations": {
            "north": ["96 St"],
            "south": ["Middle Village - Metropolitan Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 19,
            "max_scheduled_headway": 14,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "M01N-M11N",
               "time": 12.0
            }],
            "actual_runtimes": [],
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
            "max_actual_headway": 13,
            "max_scheduled_headway": 11,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [{
               "id": "M11S-M01S",
               "time": 13.0
            }],
            "actual_runtimes": [],
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
            "id": "R",
            "name": "R",
            "color": "#fbbd08",
            "text_color": "#000000"
         }],
         "status": "Not Good",
         "max_travel_time": 0.38137435897435895,
         "max_travel_time_discrepancy": 4.953333333333333,
         "destinations": {
            "north": ["Forest Hills - 71 Av", "Jamaica - 179 St", "Jamaica Center - Parsons/Archer"],
            "south": ["Coney Island - Stillwell Av", "World Trade Center"]
         },
         "north": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 9,
            "max_scheduled_headway": 11,
            "delay": 1,
            "travel_time": 0.38137435897435895,
            "travel_time_discrepancy": 4.826666666666666,
            "scheduled_runtimes": [{
               "id": "G21N-G08N",
               "time": 12.5
            }, {
               "id": "B04N-G08N",
               "time": 13.0
            }],
            "actual_runtimes": [{
               "id": "G21N-G08N",
               "description": "Queens Plaza to Forest Hills - 71 Av via Express",
               "time": 17.96666666666667,
               "routes": [{
                  "id": "E",
                  "name": "E",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }, {
               "id": "B04N-G08N",
               "description": "21 St - Queensbridge to Forest Hills - 71 Av via Express",
               "time": 16.866666666666667,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 10,
            "max_scheduled_headway": 13,
            "delay": 3,
            "travel_time": 0.04696969696969693,
            "travel_time_discrepancy": 1.0333333333333325,
            "scheduled_runtimes": [{
               "id": "G21N-G08N",
               "time": 22.0
            }],
            "actual_runtimes": [{
               "id": "G21N-G08N",
               "description": "Queens Plaza to Forest Hills - 71 Av via Local",
               "time": 23.03333333333333,
               "routes": [{
                  "id": "E",
                  "name": "E",
                  "color": "#2185d0",
                  "text_color": null
               }, {
                  "id": "R",
                  "name": "R",
                  "color": "#fbbd08",
                  "text_color": "#000000"
               }]
            }],
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
               "id": "R",
               "name": "R",
               "color": "#fbbd08",
               "text_color": "#000000"
            }]
         }],
         "south": [{
            "type": "Express",
            "name": "Express",
            "max_actual_headway": 8,
            "max_scheduled_headway": 14,
            "delay": 0,
            "travel_time": 0.36691358024691356,
            "travel_time_discrepancy": 4.953333333333333,
            "scheduled_runtimes": [{
               "id": "G08S-G21S",
               "time": 13.0
            }, {
               "id": "G08S-B04S",
               "time": 13.5
            }],
            "actual_runtimes": [{
               "id": "G08S-B04S",
               "description": "Forest Hills - 71 Av to 21 St - Queensbridge via Express",
               "time": 19.691666666666666,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }, {
               "id": "G08S-G21S",
               "description": "Forest Hills - 71 Av to Queens Plaza via Express",
               "time": 13.0,
               "routes": []
            }],
            "routes": [{
               "id": "F",
               "name": "F",
               "color": "#f2711c",
               "text_color": null
            }]
         }, {
            "type": "Local",
            "name": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 15,
            "delay": 1,
            "travel_time": 0.10512820512820507,
            "travel_time_discrepancy": 2.049999999999999,
            "scheduled_runtimes": [{
               "id": "G08S-G21S",
               "time": 19.5
            }],
            "actual_runtimes": [{
               "id": "G08S-G21S",
               "description": "Forest Hills - 71 Av to Queens Plaza via Local",
               "time": 21.549999999999997,
               "routes": [{
                  "id": "E",
                  "name": "E",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
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
         "max_travel_time": 0.22151259866423803,
         "max_travel_time_discrepancy": 2.452777777777778,
         "destinations": {
            "north": ["Jamaica - 179 St", "Jamaica Center - Parsons/Archer"],
            "south": ["Coney Island - Stillwell Av", "World Trade Center"]
         },
         "north": [{
            "type": "Local",
            "name": "Forest Hills—Jamaica Local",
            "max_actual_headway": 17,
            "max_scheduled_headway": 8,
            "delay": 4,
            "travel_time": 0.13786435786435786,
            "travel_time_discrepancy": 2.3166666666666664,
            "scheduled_runtimes": [{
               "id": "G08N-G05N",
               "time": 17.5
            }, {
               "id": "G08N-F01N",
               "time": 16.5
            }],
            "actual_runtimes": [{
               "id": "G08N-F01N",
               "description": "Forest Hills - 71 Av to Jamaica - 179 St via Forest Hills—Jamaica Local",
               "time": 19.666666666666664,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }, {
               "id": "G08N-G05N",
               "description": "Forest Hills - 71 Av to Jamaica Center - Parsons/Archer via Forest Hills—Jamaica Local",
               "time": 18.96666666666667,
               "routes": [{
                  "id": "E",
                  "name": "E",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
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
         }],
         "south": [{
            "type": "Local",
            "name": "Forest Hills—Jamaica Local",
            "max_actual_headway": 8,
            "max_scheduled_headway": 12,
            "delay": 0,
            "travel_time": 0.22151259866423803,
            "travel_time_discrepancy": 2.452777777777778,
            "scheduled_runtimes": [{
               "id": "G05S-G08S",
               "time": 10.166666666666666
            }, {
               "id": "F01S-G08S",
               "time": 12.0
            }],
            "actual_runtimes": [{
               "id": "G05S-G08S",
               "description": "Jamaica Center - Parsons/Archer to Forest Hills - 71 Av via Forest Hills—Jamaica Local",
               "time": 11.875,
               "routes": [{
                  "id": "E",
                  "name": "E",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }, {
               "id": "F01S-G08S",
               "description": "Jamaica - 179 St to Forest Hills - 71 Av via Forest Hills—Jamaica Local",
               "time": 15.941666666666666,
               "routes": [{
                  "id": "F",
                  "name": "F",
                  "color": "#f2711c",
                  "text_color": null
               }]
            }],
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
         "status": "Good Service",
         "max_travel_time": 0.06129032258064512,
         "max_travel_time_discrepancy": 1.8999999999999986,
         "destinations": {
            "north": ["Inwood - 207 St"],
            "south": ["Far Rockaway - Mott Av"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 30,
            "max_scheduled_headway": 30,
            "delay": 0,
            "travel_time": 0.06129032258064512,
            "travel_time_discrepancy": 1.8999999999999986,
            "scheduled_runtimes": [{
               "id": "H11N-A55N",
               "time": 31.0
            }],
            "actual_runtimes": [{
               "id": "H11N-A55N",
               "description": "Far Rockaway - Mott Av to Euclid Av",
               "time": 32.9,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 32,
            "max_scheduled_headway": 32,
            "delay": 0,
            "travel_time": -0.05303030303030303,
            "travel_time_discrepancy": -1.75,
            "scheduled_runtimes": [{
               "id": "A55S-H11S",
               "time": 33.0
            }],
            "actual_runtimes": [{
               "id": "A55S-H11S",
               "description": "Euclid Av to Far Rockaway - Mott Av",
               "time": 31.25,
               "routes": [{
                  "id": "A",
                  "name": "A",
                  "color": "#2185d0",
                  "text_color": null
               }]
            }],
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
         "status": "Good Service",
         "max_travel_time": 0.09492753623188399,
         "max_travel_time_discrepancy": 1.091666666666666,
         "destinations": {
            "north": ["Broad Channel"],
            "south": ["Rockaway Park - Beach 116 St"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 28,
            "max_scheduled_headway": 28,
            "delay": 0,
            "travel_time": 0.09492753623188399,
            "travel_time_discrepancy": 1.091666666666666,
            "scheduled_runtimes": [{
               "id": "H15N-H04N",
               "time": 11.5
            }],
            "actual_runtimes": [{
               "id": "H15N-H04N",
               "description": "Rockaway Park - Beach 116 St to Broad Channel",
               "time": 12.591666666666665,
               "routes": [{
                  "id": "H",
                  "name": "S",
                  "color": "#767676",
                  "text_color": null
               }]
            }],
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
            "max_actual_headway": 23,
            "max_scheduled_headway": 23,
            "delay": 0,
            "travel_time": 0.0,
            "travel_time_discrepancy": 0.0,
            "scheduled_runtimes": [{
               "id": "H04S-H15S",
               "time": 8.0
            }],
            "actual_runtimes": [{
               "id": "H04S-H15S",
               "description": "Broad Channel to Rockaway Park - Beach 116 St",
               "time": 8.0,
               "routes": [{
                  "id": "H",
                  "name": "S",
                  "color": "#767676",
                  "text_color": null
               }]
            }],
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
         "status": "Good Service",
         "max_travel_time": 0,
         "max_travel_time_discrepancy": null,
         "destinations": {
            "north": ["St George"],
            "south": ["Tottenville"]
         },
         "north": [{
            "type": null,
            "name": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 30,
            "delay": 1,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [],
            "actual_runtimes": [],
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
            "max_actual_headway": 11,
            "max_scheduled_headway": 30,
            "delay": 0,
            "travel_time": null,
            "travel_time_discrepancy": null,
            "scheduled_runtimes": [],
            "actual_runtimes": [],
            "routes": [{
               "id": "SI",
               "name": "SIR",
               "color": "#2185d0",
               "text_color": null
            }]
         }]
      }]
   },
   "timestamp": "2019-06-19T23:32:36-04:00",
   "blog_post": {
      "title": "Introducing: Dynamic Route Maps!",
      "link": "https://medium.com/good-service/introducing-dynamic-route-maps-a8e56dd8a33?source=rss----adc4a7ae40a7---4"
   }
};

export default sampleData;