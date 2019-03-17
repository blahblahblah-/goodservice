const sampleData = {
   "routes":[
      {
         "id":"1",
         "name":"1",
         "color":"#db2828",
         "text_color":null,
         "alternate_name":null,
         "status":"Delay",
         "max_headway_discrepancy":6,
         "destinations":{
            "north":[
               "Van Cortlandt Park - 242 St"
            ],
            "south":[
               "South Ferry"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Van Cortlandt Park - 242 St"
            ],
            "south":[
               "South Ferry"
            ]
         },
         "north":[
            {
               "name":"7 Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":8,
               "max_scheduled_headway":null,
               "delay":1
            },
            {
               "name":"Broadway–7 Avenue",
               "boroughs":[
                  "The Bronx",
                  "Manhattan"
               ],
               "max_actual_headway":14,
               "max_scheduled_headway":8,
               "delay":1
            }
         ],
         "south":[
            {
               "name":"Broadway–7 Avenue",
               "boroughs":[
                  "The Bronx",
                  "Manhattan"
               ],
               "max_actual_headway":9,
               "max_scheduled_headway":8,
               "delay":0
            },
            {
               "name":"7 Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":null,
               "delay":10
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"2",
         "name":"2",
         "color":"#db2828",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "max_headway_discrepancy":12,
         "destinations":{
            "north":[
               "Wakefield - 241 St"
            ],
            "south":[
               "Flatbush Av - Brooklyn College"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Wakefield - 241 St"
            ],
            "south":[
               "Flatbush Av - Brooklyn College"
            ]
         },
         "north":[
            {
               "name":"Nostrand Avenue",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Eastern Parkway Express",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":0,
               "delay":0
            },
            {
               "name":"7 Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":14,
               "max_scheduled_headway":12,
               "delay":1
            },
            {
               "name":"Lenox Avenue",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":14,
               "max_scheduled_headway":12,
               "delay":1
            },
            {
               "name":"White Plains Road Local",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":14,
               "max_scheduled_headway":10,
               "delay":1
            }
         ],
         "south":[
            {
               "name":"White Plains Road Local",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Lenox Avenue",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"7 Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Eastern Parkway Local",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Nostrand Avenue",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":1
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"3",
         "name":"3",
         "color":"#db2828",
         "text_color":null,
         "alternate_name":null,
         "status":"Delay",
         "max_headway_discrepancy":14,
         "destinations":{
            "north":[
               "Harlem - 148 St"
            ],
            "south":[
               "New Lots Av"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Harlem - 148 St"
            ],
            "south":[
               "New Lots Av"
            ]
         },
         "north":[
            {
               "name":"New Lots",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":5
            },
            {
               "name":"Eastern Parkway Express",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":13,
               "max_scheduled_headway":null,
               "delay":5
            },
            {
               "name":"7 Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":26,
               "max_scheduled_headway":12,
               "delay":5
            },
            {
               "name":"Lenox Avenue",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":26,
               "max_scheduled_headway":12,
               "delay":5
            }
         ],
         "south":[
            {
               "name":"Lenox Avenue",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"7 Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":11,
               "max_scheduled_headway":12,
               "delay":1
            },
            {
               "name":"Eastern Parkway Local",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":1
            },
            {
               "name":"New Lots",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":13,
               "max_scheduled_headway":12,
               "delay":1
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"4",
         "name":"4",
         "color":"#21ba45",
         "text_color":null,
         "alternate_name":null,
         "status":"Delay",
         "max_headway_discrepancy":4,
         "destinations":{
            "north":[
               "Woodlawn"
            ],
            "south":[
               "Crown Hts - Utica Av"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Woodlawn"
            ],
            "south":[
               "Crown Hts - Utica Av"
            ]
         },
         "north":[
            {
               "name":"Eastern Parkway Express",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Lexington Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":1
            },
            {
               "name":"Jerome Avenue",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":10,
               "delay":5
            }
         ],
         "south":[
            {
               "name":"Jerome Avenue",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":1
            },
            {
               "name":"Lexington Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":16,
               "max_scheduled_headway":12,
               "delay":1
            },
            {
               "name":"Eastern Parkway Express",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":16,
               "max_scheduled_headway":12,
               "delay":1
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"5",
         "name":"5",
         "color":"#21ba45",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "max_headway_discrepancy":8,
         "destinations":{
            "north":[
               "Eastchester - Dyre Av"
            ],
            "south":[
               "Bowling Green"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Eastchester - Dyre Av"
            ],
            "south":[
               "Bowling Green"
            ]
         },
         "north":[
            {
               "name":"Lexington Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":19,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"White Plains Road Local",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":19,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"Dyre Avenue",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":18,
               "max_scheduled_headway":14,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Dyre Avenue",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":20,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"White Plains Road Local",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":19,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Lexington Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":17,
               "max_scheduled_headway":12,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"6",
         "name":"6",
         "color":"#21ba45",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "max_headway_discrepancy":2,
         "destinations":{
            "north":[
               "Pelham Bay Park"
            ],
            "south":[
               "Brooklyn Bridge - City Hall"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Pelham Bay Park"
            ],
            "south":[
               "Brooklyn Bridge - City Hall"
            ]
         },
         "north":[
            {
               "name":"Lexington Avenue Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":9,
               "max_scheduled_headway":8,
               "delay":0
            },
            {
               "name":"Pelham Local",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":9,
               "max_scheduled_headway":8,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Pelham Local",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":8,
               "delay":0
            },
            {
               "name":"Lexington Avenue Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":8,
               "delay":1
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"6X",
         "name":"6X",
         "color":"#21ba45",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Scheduled",
         "max_headway_discrepancy":null,
         "destinations":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled_destinations":{
            "north":[

            ],
            "south":[

            ]
         },
         "north":[

         ],
         "south":[

         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":false,
         "visible":false
      },
      {
         "id":"7",
         "name":"7",
         "color":"#a333c8",
         "text_color":null,
         "alternate_name":null,
         "status":"Service Change",
         "max_headway_discrepancy":6,
         "destinations":{
            "north":[
               "Flushing - Main St"
            ],
            "south":[

            ]
         },
         "scheduled_destinations":{
            "north":[
               "Flushing - Main St"
            ],
            "south":[
               "34 St - 11 Av"
            ]
         },
         "north":[
            {
               "name":"Flushing Local",
               "boroughs":[
                  "Manhattan",
                  "Queens"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":6,
               "delay":0
            }
         ],
         "south":[

         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[
               {
                  "id":55,
                  "name":"Flushing",
                  "is_visible":true,
                  "boroughs":[
                     "Manhattan",
                     "Queens"
                  ]
               }
            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"7X",
         "name":"7X",
         "color":"#a333c8",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Scheduled",
         "max_headway_discrepancy":null,
         "destinations":{
            "north":[

            ],
            "south":[
               "34 St - 11 Av"
            ]
         },
         "scheduled_destinations":{
            "north":[

            ],
            "south":[

            ]
         },
         "north":[

         ],
         "south":[
            {
               "name":"Flushing Express",
               "boroughs":[
                  "Manhattan",
                  "Queens"
               ],
               "max_actual_headway":8,
               "max_scheduled_headway":null,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":false,
         "visible":false
      },
      {
         "id":"A",
         "name":"A",
         "color":"#2185d0",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "max_headway_discrepancy":5,
         "destinations":{
            "north":[
               "Inwood - 207 St"
            ],
            "south":[
               "Far Rockaway - Mott Av",
               "Ozone Park - Lefferts Blvd"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Inwood - 207 St"
            ],
            "south":[
               "Far Rockaway - Mott Av",
               "Ozone Park - Lefferts Blvd"
            ]
         },
         "north":[
            {
               "name":"Rockaway (Far Rockaway Branch)",
               "boroughs":[
                  "Queens"
               ],
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Lefferts Blvd Branch",
               "boroughs":[

               ],
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Fulton Street Express",
               "boroughs":[
                  "Brooklyn",
                  "Queens"
               ],
               "max_actual_headway":15,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"via Chambers St",
               "boroughs":[

               ],
               "max_actual_headway":15,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"8 Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":15,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"Central Park West Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":15,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"Washington Heights (8 Avenue)",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":11,
               "max_scheduled_headway":10,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Washington Heights (8 Avenue)",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"Central Park West Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":11,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"8 Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":11,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"via Chambers St",
               "boroughs":[

               ],
               "max_actual_headway":11,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"Fulton Street Express",
               "boroughs":[
                  "Brooklyn",
                  "Queens"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":2
            },
            {
               "name":"Rockaway (Far Rockaway Branch)",
               "boroughs":[
                  "Queens"
               ],
               "max_actual_headway":19,
               "max_scheduled_headway":20,
               "delay":2
            },
            {
               "name":"Lefferts Blvd Branch",
               "boroughs":[

               ],
               "max_actual_headway":22,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"B",
         "name":"B",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Scheduled",
         "max_headway_discrepancy":null,
         "destinations":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled_destinations":{
            "north":[

            ],
            "south":[

            ]
         },
         "north":[

         ],
         "south":[

         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":false,
         "visible":true
      },
      {
         "id":"C",
         "name":"C",
         "color":"#2185d0",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "max_headway_discrepancy":6,
         "destinations":{
            "north":[
               "168 St"
            ],
            "south":[
               "Euclid Av"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "168 St"
            ],
            "south":[
               "Euclid Av"
            ]
         },
         "north":[
            {
               "name":"Fulton Street Local",
               "boroughs":[
                  "Brooklyn",
                  "Queens"
               ],
               "max_actual_headway":14,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"via Chambers St",
               "boroughs":[

               ],
               "max_actual_headway":16,
               "max_scheduled_headway":16,
               "delay":0
            },
            {
               "name":"8 Avenue Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":16,
               "max_scheduled_headway":16,
               "delay":1
            },
            {
               "name":"Central Park West Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":18,
               "max_scheduled_headway":12,
               "delay":1
            }
         ],
         "south":[
            {
               "name":"Central Park West Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":14,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"8 Avenue Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":15,
               "max_scheduled_headway":15,
               "delay":0
            },
            {
               "name":"via Chambers St",
               "boroughs":[

               ],
               "max_actual_headway":15,
               "max_scheduled_headway":15,
               "delay":0
            },
            {
               "name":"Fulton Street Local",
               "boroughs":[
                  "Brooklyn",
                  "Queens"
               ],
               "max_actual_headway":14,
               "max_scheduled_headway":14,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"D",
         "name":"D",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "max_headway_discrepancy":9,
         "destinations":{
            "north":[
               "Norwood - 205 St"
            ],
            "south":[
               "Coney Island - Stillwell Av",
               "Bedford Park Blvd"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Norwood - 205 St"
            ],
            "south":[
               "Coney Island - Stillwell Av"
            ]
         },
         "north":[
            {
               "name":"West End",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"4 Avenue Express",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":23,
               "max_scheduled_headway":14,
               "delay":3
            },
            {
               "name":"6 Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":23,
               "max_scheduled_headway":14,
               "delay":3
            },
            {
               "name":"Central Park West Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":19,
               "max_scheduled_headway":14,
               "delay":3
            },
            {
               "name":"Concourse Local",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":10,
               "delay":2
            }
         ],
         "south":[
            {
               "name":"Concourse Local",
               "boroughs":[
                  "The Bronx"
               ],
               "max_actual_headway":18,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"Central Park West Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":18,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"6 Avenue Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":18,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"4 Avenue Express",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":15,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"West End",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":15,
               "max_scheduled_headway":12,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"E",
         "name":"E",
         "color":"#2185d0",
         "text_color":null,
         "alternate_name":null,
         "status":"Service Change",
         "max_headway_discrepancy":8,
         "destinations":{
            "north":[
               "Jamaica Center - Parsons/Archer"
            ],
            "south":[
               "World Trade Center"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Jamaica Center - Parsons/Archer"
            ],
            "south":[
               "World Trade Center"
            ]
         },
         "north":[
            {
               "name":"8 Avenue Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":1
            },
            {
               "name":"via 53 St",
               "boroughs":[

               ],
               "max_actual_headway":12,
               "max_scheduled_headway":13,
               "delay":1
            },
            {
               "name":"Queens Boulevard Local",
               "boroughs":[
                  "Queens"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":null,
               "delay":1
            }
         ],
         "south":[
            {
               "name":"Queens Boulevard Local",
               "boroughs":[
                  "Queens"
               ],
               "max_actual_headway":15,
               "max_scheduled_headway":null,
               "delay":1
            },
            {
               "name":"via 53 St",
               "boroughs":[

               ],
               "max_actual_headway":14,
               "max_scheduled_headway":13,
               "delay":1
            },
            {
               "name":"8 Avenue Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":22,
               "max_scheduled_headway":14,
               "delay":1
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"F",
         "name":"F",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Service Change",
         "max_headway_discrepancy":6,
         "destinations":{
            "north":[
               "Jamaica - 179 St"
            ],
            "south":[
               "Church Av"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Jamaica - 179 St"
            ],
            "south":[
               "Coney Island - Stillwell Av"
            ]
         },
         "north":[
            {
               "name":"Culver",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"via Delancey St",
               "boroughs":[

               ],
               "max_actual_headway":12,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"6 Avenue Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"via 63 St",
               "boroughs":[

               ],
               "max_actual_headway":12,
               "max_scheduled_headway":14,
               "delay":0
            },
            {
               "name":"Queens Boulevard Local",
               "boroughs":[
                  "Queens"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":null,
               "delay":1
            }
         ],
         "south":[
            {
               "name":"Queens Boulevard Local",
               "boroughs":[
                  "Queens"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":null,
               "delay":2
            },
            {
               "name":"via 63 St",
               "boroughs":[

               ],
               "max_actual_headway":12,
               "max_scheduled_headway":14,
               "delay":2
            },
            {
               "name":"6 Avenue Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":14,
               "delay":2
            },
            {
               "name":"via Delancey St",
               "boroughs":[

               ],
               "max_actual_headway":12,
               "max_scheduled_headway":14,
               "delay":2
            },
            {
               "name":"Culver",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":19,
               "max_scheduled_headway":13,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"G",
         "name":"G",
         "color":"#b5cc18",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "max_headway_discrepancy":0,
         "destinations":{
            "north":[
               "Court Sq"
            ],
            "south":[
               "Church Av"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Court Sq"
            ],
            "south":[
               "Church Av"
            ]
         },
         "north":[
            {
               "name":"Culver",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Crosstown",
               "boroughs":[
                  "Queens",
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Crosstown",
               "boroughs":[
                  "Queens",
                  "Brooklyn"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"Culver",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":11,
               "max_scheduled_headway":11,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"J",
         "name":"J",
         "color":"#a5673f",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "max_headway_discrepancy":1,
         "destinations":{
            "north":[
               "Crescent St"
            ],
            "south":[
               "Broad St",
               "Broadway Jct"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Jamaica Center - Parsons/Archer"
            ],
            "south":[
               "Broad St"
            ]
         },
         "north":[
            {
               "name":"Nassau Street",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Broadway (Brooklyn) Local",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Jamaica",
               "boroughs":[
                  "Brooklyn",
                  "Queens"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":11,
               "delay":1
            }
         ],
         "south":[
            {
               "name":"Broadway (Brooklyn) Local",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Jamaica",
               "boroughs":[
                  "Brooklyn",
                  "Queens"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Nassau Street",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"L",
         "name":"L",
         "color":"#A0A0A0",
         "text_color":null,
         "alternate_name":null,
         "status":"Service Change",
         "max_headway_discrepancy":6,
         "destinations":{
            "north":[
               "Broadway Jct"
            ],
            "south":[
               "Canarsie - Rockaway Pkwy"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "8 Av"
            ],
            "south":[
               "Canarsie - Rockaway Pkwy"
            ]
         },
         "north":[
            {
               "name":"East of Myrtle-Wyckoff Avs",
               "boroughs":[

               ],
               "max_actual_headway":10,
               "max_scheduled_headway":5,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"East of Myrtle-Wyckoff Avs",
               "boroughs":[

               ],
               "max_actual_headway":10,
               "max_scheduled_headway":4,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[
               {
                  "id":54,
                  "name":"14 Street–Canarsie",
                  "is_visible":true,
                  "boroughs":[
                     "Manhattan",
                     "Brooklyn"
                  ]
               }
            ],
            "south":[
               {
                  "id":54,
                  "name":"14 Street–Canarsie",
                  "is_visible":true,
                  "boroughs":[
                     "Manhattan",
                     "Brooklyn"
                  ]
               }
            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"M",
         "name":"M",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Service Change",
         "max_headway_discrepancy":0,
         "destinations":{
            "north":[
               "96 St"
            ],
            "south":[
               "Middle Village - Metropolitan Av"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Essex St"
            ],
            "south":[
               "Middle Village - Metropolitan Av"
            ]
         },
         "north":[
            {
               "name":"Broadway (Brooklyn) Local",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"6 Avenue Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":null,
               "delay":0
            },
            {
               "name":"Myrtle Avenue",
               "boroughs":[
                  "Brooklyn",
                  "Queens"
               ],
               "max_actual_headway":8,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"2 Avenue",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":9,
               "max_scheduled_headway":null,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"2 Avenue",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":8,
               "max_scheduled_headway":null,
               "delay":0
            },
            {
               "name":"6 Avenue Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":9,
               "max_scheduled_headway":null,
               "delay":0
            },
            {
               "name":"Broadway (Brooklyn) Local",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":11,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Myrtle Avenue",
               "boroughs":[
                  "Brooklyn",
                  "Queens"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":1
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"N",
         "name":"N",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
         "status":"Service Change",
         "max_headway_discrepancy":15,
         "destinations":{
            "north":[
               "Queensboro Plaza"
            ],
            "south":[
               "Coney Island - Stillwell Av"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Astoria - Ditmars Blvd"
            ],
            "south":[
               "Coney Island - Stillwell Av"
            ]
         },
         "north":[
            {
               "name":"Sea Beach",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":13,
               "max_scheduled_headway":11,
               "delay":0
            },
            {
               "name":"4 Avenue Express",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":14,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"via Manhattan Bridge",
               "boroughs":[

               ],
               "max_actual_headway":15,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"Broadway Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":17,
               "max_scheduled_headway":2,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Broadway Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":17,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"via Manhattan Bridge",
               "boroughs":[

               ],
               "max_actual_headway":17,
               "max_scheduled_headway":10,
               "delay":2
            },
            {
               "name":"4 Avenue Express",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":18,
               "max_scheduled_headway":11,
               "delay":2
            },
            {
               "name":"Sea Beach",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":18,
               "max_scheduled_headway":11,
               "delay":2
            }
         ],
         "lines_not_in_service":{
            "north":[
               {
                  "id":62,
                  "name":"Astoria",
                  "is_visible":true,
                  "boroughs":[
                     "Queens"
                  ]
               }
            ],
            "south":[
               {
                  "id":62,
                  "name":"Astoria",
                  "is_visible":true,
                  "boroughs":[
                     "Queens"
                  ]
               }
            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"Q",
         "name":"Q",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
         "status":"Good Service",
         "max_headway_discrepancy":2,
         "destinations":{
            "north":[
               "96 St"
            ],
            "south":[
               "Coney Island - Stillwell Av"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "96 St"
            ],
            "south":[
               "Coney Island - Stillwell Av"
            ]
         },
         "north":[
            {
               "name":"Brighton Local",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":11,
               "max_scheduled_headway":11,
               "delay":0
            },
            {
               "name":"via Manhattan Bridge",
               "boroughs":[

               ],
               "max_actual_headway":11,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"Broadway Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":9,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"2 Avenue",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"2 Avenue",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":8,
               "max_scheduled_headway":8,
               "delay":0
            },
            {
               "name":"Broadway Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":9,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"via Manhattan Bridge",
               "boroughs":[

               ],
               "max_actual_headway":9,
               "max_scheduled_headway":10,
               "delay":0
            },
            {
               "name":"Brighton Local",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":11,
               "max_scheduled_headway":9,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"R",
         "name":"R",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
         "status":"Service Change",
         "max_headway_discrepancy":10,
         "destinations":{
            "north":[
               "Forest Hills - 71 Av"
            ],
            "south":[
               "Bay Ridge - 95 St"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Forest Hills - 71 Av"
            ],
            "south":[
               "Bay Ridge - 95 St"
            ]
         },
         "north":[
            {
               "name":"4 Avenue Express",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":13,
               "max_scheduled_headway":null,
               "delay":0
            },
            {
               "name":"via Whitehall St",
               "boroughs":[

               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {
               "name":"Broadway Express",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":17,
               "max_scheduled_headway":null,
               "delay":0
            },
            {
               "name":"Queens Boulevard Local",
               "boroughs":[
                  "Queens"
               ],
               "max_actual_headway":22,
               "max_scheduled_headway":12,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Queens Boulevard Local",
               "boroughs":[
                  "Queens"
               ],
               "max_actual_headway":16,
               "max_scheduled_headway":12,
               "delay":1
            },
            {
               "name":"Broadway Local",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":19,
               "max_scheduled_headway":12,
               "delay":1
            },
            {
               "name":"via Whitehall St",
               "boroughs":[

               ],
               "max_actual_headway":19,
               "max_scheduled_headway":14,
               "delay":1
            },
            {
               "name":"4 Avenue Local",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":19,
               "max_scheduled_headway":15,
               "delay":1
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"GS",
         "name":"S",
         "color":"#767676",
         "text_color":null,
         "alternate_name":"42 St Shuttle",
         "status":"Good Service",
         "max_headway_discrepancy":0,
         "destinations":{
            "north":[
               "Times Sq - 42 St"
            ],
            "south":[
               "Grand Central - 42 St"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Times Sq - 42 St"
            ],
            "south":[
               "Grand Central - 42 St"
            ]
         },
         "north":[
            {
               "name":"42 Street",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"42 Street",
               "boroughs":[
                  "Manhattan"
               ],
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"FS",
         "name":"S",
         "color":"#767676",
         "text_color":null,
         "alternate_name":"Franklin Avenue Shuttle",
         "status":"Good Service",
         "max_headway_discrepancy":0,
         "destinations":{
            "north":[
               "Franklin Av"
            ],
            "south":[
               "Prospect Park"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Franklin Av"
            ],
            "south":[
               "Prospect Park"
            ]
         },
         "north":[
            {
               "name":"Franklin Avenue",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":15,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Franklin Avenue",
               "boroughs":[
                  "Brooklyn"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"H",
         "name":"S",
         "color":"#767676",
         "text_color":null,
         "alternate_name":"Rockaway Park Shuttle",
         "status":"Good Service",
         "max_headway_discrepancy":0,
         "destinations":{
            "north":[
               "Broad Channel"
            ],
            "south":[
               "Rockaway Park - Beach 116 St"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "Broad Channel"
            ],
            "south":[
               "Rockaway Park - Beach 116 St"
            ]
         },
         "north":[
            {
               "name":"Rockaway (Rockaway Park Branch)",
               "boroughs":[
                  "Queens"
               ],
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Rockaway (Rockaway Park Branch)",
               "boroughs":[
                  "Queens"
               ],
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":true
      },
      {
         "id":"SI",
         "name":"SIR",
         "color":"#2185d0",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "max_headway_discrepancy":-6,
         "destinations":{
            "north":[
               "St George"
            ],
            "south":[
               "Tottenville"
            ]
         },
         "scheduled_destinations":{
            "north":[
               "St George"
            ],
            "south":[
               "Tottenville"
            ]
         },
         "north":[
            {
               "name":"Staten Island",
               "boroughs":[
                  "Staten Island"
               ],
               "max_actual_headway":24,
               "max_scheduled_headway":30,
               "delay":1
            }
         ],
         "south":[
            {
               "name":"Staten Island",
               "boroughs":[
                  "Staten Island"
               ],
               "max_actual_headway":12,
               "max_scheduled_headway":30,
               "delay":0
            }
         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":true,
         "visible":false
      },
      {
         "id":"W",
         "name":"W",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
         "status":"Not Scheduled",
         "max_headway_discrepancy":null,
         "destinations":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled_destinations":{
            "north":[

            ],
            "south":[

            ]
         },
         "north":[

         ],
         "south":[

         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":false,
         "visible":true
      },
      {
         "id":"Z",
         "name":"Z",
         "color":"#a5673f",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Scheduled",
         "max_headway_discrepancy":null,
         "destinations":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled_destinations":{
            "north":[

            ],
            "south":[

            ]
         },
         "north":[

         ],
         "south":[

         ],
         "lines_not_in_service":{
            "north":[

            ],
            "south":[

            ]
         },
         "scheduled":false,
         "visible":true
      }
   ],
   "lines":{
      "The Bronx":[
         {
            "id":"82",
            "name":"Broadway–7 Avenue",
            "routes":[
               {
                  "id":"1",
                  "name":"1",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Van Cortlandt Park - 242 St"
               ],
               "south":[
                  "South Ferry"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":14,
                  "max_scheduled_headway":8,
                  "delay":1,
                  "routes":[
                     {
                        "id":"1",
                        "name":"1",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":9,
                  "max_scheduled_headway":8,
                  "delay":0,
                  "routes":[
                     {
                        "id":"1",
                        "name":"1",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"72",
            "name":"Concourse",
            "routes":[
               {
                  "id":"D",
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Norwood - 205 St"
               ],
               "south":[
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":10,
                  "delay":2,
                  "routes":[
                     {
                        "id":"D",
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":18,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "id":"D",
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"81",
            "name":"Dyre Avenue",
            "routes":[
               {
                  "id":"5",
                  "name":"5",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Eastchester - Dyre Av"
               ],
               "south":[
                  "Bowling Green"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":18,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "id":"5",
                        "name":"5",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":20,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"5",
                        "name":"5",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"78",
            "name":"Jerome Avenue",
            "routes":[
               {
                  "id":"4",
                  "name":"4",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Delay",
            "destinations":{
               "north":[
                  "Woodlawn"
               ],
               "south":[
                  "Crown Hts - Utica Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":10,
                  "delay":5,
                  "routes":[
                     {
                        "id":"4",
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":1,
                  "routes":[
                     {
                        "id":"4",
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"77",
            "name":"Pelham",
            "routes":[
               {
                  "id":"6",
                  "name":"6",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Pelham Bay Park"
               ],
               "south":[
                  "Brooklyn Bridge - City Hall"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":9,
                  "max_scheduled_headway":8,
                  "delay":0,
                  "routes":[
                     {
                        "id":"6",
                        "name":"6",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":10,
                  "max_scheduled_headway":8,
                  "delay":0,
                  "routes":[
                     {
                        "id":"6",
                        "name":"6",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"80",
            "name":"White Plains Road",
            "routes":[
               {
                  "id":"2",
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               },
               {
                  "id":"5",
                  "name":"5",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Eastchester - Dyre Av",
                  "Wakefield - 241 St"
               ],
               "south":[
                  "Bowling Green",
                  "Flatbush Av - Brooklyn College"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":14,
                  "max_scheduled_headway":10,
                  "delay":1,
                  "routes":[
                     {
                        "id":"2",
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "id":"5",
                        "name":"5",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":7,
                  "delay":0,
                  "routes":[
                     {
                        "id":"2",
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "id":"5",
                        "name":"5",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ]
         }
      ],
      "Brooklyn":[
         {
            "id":"64",
            "name":"4 Avenue",
            "routes":[
               {
                  "id":"D",
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               },
               {
                  "id":"N",
                  "name":"N",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               },
               {
                  "id":"R",
                  "name":"R",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Forest Hills - 71 Av",
                  "Norwood - 205 St",
                  "Queensboro Plaza"
               ],
               "south":[
                  "Bay Ridge - 95 St",
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":7,
                  "max_scheduled_headway":9,
                  "delay":3,
                  "routes":[
                     {
                        "id":"D",
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
                        "id":"N",
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     },
                     {
                        "id":"R",
                        "name":"R",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":15,
                  "max_scheduled_headway":9,
                  "delay":2,
                  "routes":[
                     {
                        "id":"D",
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
                        "id":"N",
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":19,
                  "max_scheduled_headway":15,
                  "delay":1,
                  "routes":[
                     {
                        "id":"R",
                        "name":"R",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {
            "id":"54",
            "name":"14 Street–Canarsie",
            "routes":[

            ],
            "status":"No Service",
            "destinations":{
               "north":[

               ],
               "south":[

               ]
            },
            "north":[

            ],
            "south":[

            ]
         },
         {
            "id":"65",
            "name":"Brighton",
            "routes":[
               {
                  "id":"Q",
                  "name":"Q",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "96 St"
               ],
               "south":[
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":11,
                  "max_scheduled_headway":11,
                  "delay":0,
                  "routes":[
                     {
                        "id":"Q",
                        "name":"Q",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":11,
                  "max_scheduled_headway":9,
                  "delay":0,
                  "routes":[
                     {
                        "id":"Q",
                        "name":"Q",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {
            "id":"69",
            "name":"Broadway (Brooklyn)",
            "routes":[
               {
                  "id":"J",
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               },
               {
                  "id":"M",
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Crescent St",
                  "Middle Village - Metropolitan Av"
               ],
               "south":[
                  "96 St",
                  "Broad St"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":8,
                  "max_scheduled_headway":6,
                  "delay":0,
                  "routes":[
                     {
                        "id":"J",
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     },
                     {
                        "id":"M",
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":8,
                  "max_scheduled_headway":9,
                  "delay":0,
                  "routes":[
                     {
                        "id":"J",
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     },
                     {
                        "id":"M",
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"57",
            "name":"Crosstown",
            "routes":[
               {
                  "id":"G",
                  "name":"G",
                  "color":"#b5cc18",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Court Sq"
               ],
               "south":[
                  "Church Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"G",
                        "name":"G",
                        "color":"#b5cc18",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"G",
                        "name":"G",
                        "color":"#b5cc18",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"73",
            "name":"Culver",
            "routes":[
               {
                  "id":"F",
                  "name":"F",
                  "color":"#f2711c",
                  "text_color":null
               },
               {
                  "id":"G",
                  "name":"G",
                  "color":"#b5cc18",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Court Sq",
                  "Jamaica - 179 St"
               ],
               "south":[
                  "Church Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"F",
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
                        "id":"G",
                        "name":"G",
                        "color":"#b5cc18",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":10,
                  "max_scheduled_headway":9,
                  "delay":0,
                  "routes":[
                     {
                        "id":"F",
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
                        "id":"G",
                        "name":"G",
                        "color":"#b5cc18",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"74",
            "name":"Eastern Parkway",
            "routes":[
               {
                  "id":"2",
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               },
               {
                  "id":"3",
                  "name":"3",
                  "color":"#db2828",
                  "text_color":null
               },
               {
                  "id":"4",
                  "name":"4",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Delay",
            "destinations":{
               "north":[
                  "Harlem - 148 St",
                  "Wakefield - 241 St",
                  "Woodlawn"
               ],
               "south":[
                  "Crown Hts - Utica Av",
                  "Flatbush Av - Brooklyn College",
                  "New Lots Av"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":9,
                  "max_scheduled_headway":12,
                  "delay":5,
                  "routes":[
                     {
                        "id":"2",
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "id":"3",
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "id":"4",
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":16,
                  "max_scheduled_headway":12,
                  "delay":1,
                  "routes":[
                     {
                        "id":"4",
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":6,
                  "max_scheduled_headway":7,
                  "delay":1,
                  "routes":[
                     {
                        "id":"2",
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "id":"3",
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"59",
            "name":"Franklin Avenue",
            "routes":[
               {
                  "id":"FS",
                  "name":"S",
                  "color":"#767676",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Franklin Av"
               ],
               "south":[
                  "Prospect Park"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":15,
                  "delay":0,
                  "routes":[
                     {
                        "id":"FS",
                        "name":"S",
                        "color":"#767676",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"FS",
                        "name":"S",
                        "color":"#767676",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"71",
            "name":"Fulton Street",
            "routes":[
               {
                  "id":"A",
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               },
               {
                  "id":"C",
                  "name":"C",
                  "color":"#2185d0",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "168 St",
                  "Inwood - 207 St"
               ],
               "south":[
                  "Euclid Av",
                  "Far Rockaway - Mott Av",
                  "Ozone Park - Lefferts Blvd"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":15,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":14,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "id":"C",
                        "name":"C",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":2,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":14,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "id":"C",
                        "name":"C",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"68",
            "name":"Jamaica",
            "routes":[
               {
                  "id":"J",
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Crescent St"
               ],
               "south":[
                  "Broad St",
                  "Broadway Jct"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":11,
                  "delay":1,
                  "routes":[
                     {
                        "id":"J",
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":10,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"J",
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"70",
            "name":"Myrtle Avenue",
            "routes":[
               {
                  "id":"M",
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "96 St"
               ],
               "south":[
                  "Middle Village - Metropolitan Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":8,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"M",
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":1,
                  "routes":[
                     {
                        "id":"M",
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"76",
            "name":"New Lots",
            "routes":[
               {
                  "id":"3",
                  "name":"3",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Delay",
            "destinations":{
               "north":[
                  "Harlem - 148 St"
               ],
               "south":[
                  "New Lots Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":5,
                  "routes":[
                     {
                        "id":"3",
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":13,
                  "max_scheduled_headway":12,
                  "delay":1,
                  "routes":[
                     {
                        "id":"3",
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"75",
            "name":"Nostrand Avenue",
            "routes":[
               {
                  "id":"2",
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Wakefield - 241 St"
               ],
               "south":[
                  "Flatbush Av - Brooklyn College"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"2",
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":1,
                  "routes":[
                     {
                        "id":"2",
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"67",
            "name":"Sea Beach",
            "routes":[
               {
                  "id":"N",
                  "name":"N",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Queensboro Plaza"
               ],
               "south":[
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":13,
                  "max_scheduled_headway":11,
                  "delay":0,
                  "routes":[
                     {
                        "id":"N",
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":18,
                  "max_scheduled_headway":11,
                  "delay":2,
                  "routes":[
                     {
                        "id":"N",
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {
            "id":"66",
            "name":"West End",
            "routes":[
               {
                  "id":"D",
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Norwood - 205 St"
               ],
               "south":[
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "id":"D",
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":15,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"D",
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ]
         }
      ],
      "Manhattan":[
         {
            "id":"48",
            "name":"2 Avenue",
            "routes":[
               {
                  "id":"M",
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               },
               {
                  "id":"Q",
                  "name":"Q",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "96 St"
               ],
               "south":[
                  "Coney Island - Stillwell Av",
                  "Middle Village - Metropolitan Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":7,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"M",
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
                        "id":"Q",
                        "name":"Q",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":6,
                  "max_scheduled_headway":8,
                  "delay":0,
                  "routes":[
                     {
                        "id":"M",
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
                        "id":"Q",
                        "name":"Q",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {
            "id":"50",
            "name":"6 Avenue",
            "routes":[
               {
                  "id":"D",
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               },
               {
                  "id":"F",
                  "name":"F",
                  "color":"#f2711c",
                  "text_color":null
               },
               {
                  "id":"M",
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "96 St",
                  "Jamaica - 179 St",
                  "Norwood - 205 St"
               ],
               "south":[
                  "Church Av",
                  "Coney Island - Stillwell Av",
                  "Middle Village - Metropolitan Av"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":23,
                  "max_scheduled_headway":14,
                  "delay":3,
                  "routes":[
                     {
                        "id":"D",
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":9,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "id":"F",
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
                        "id":"M",
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":18,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "id":"D",
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":14,
                  "delay":2,
                  "routes":[
                     {
                        "id":"F",
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
                        "id":"M",
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"52",
            "name":"7 Avenue",
            "routes":[
               {
                  "id":"1",
                  "name":"1",
                  "color":"#db2828",
                  "text_color":null
               },
               {
                  "id":"2",
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               },
               {
                  "id":"3",
                  "name":"3",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Delay",
            "destinations":{
               "north":[
                  "Harlem - 148 St",
                  "Van Cortlandt Park - 242 St",
                  "Wakefield - 241 St"
               ],
               "south":[
                  "Flatbush Av - Brooklyn College",
                  "New Lots Av",
                  "South Ferry"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":8,
                  "max_scheduled_headway":8,
                  "delay":5,
                  "routes":[
                     {
                        "id":"1",
                        "name":"1",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "id":"2",
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "id":"3",
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":6,
                  "max_scheduled_headway":6,
                  "delay":5,
                  "routes":[
                     {
                        "id":"1",
                        "name":"1",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "id":"2",
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "id":"3",
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"53",
            "name":"8 Avenue",
            "routes":[
               {
                  "id":"A",
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               },
               {
                  "id":"C",
                  "name":"C",
                  "color":"#2185d0",
                  "text_color":null
               },
               {
                  "id":"E",
                  "name":"E",
                  "color":"#2185d0",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "168 St",
                  "Inwood - 207 St",
                  "Jamaica Center - Parsons/Archer"
               ],
               "south":[
                  "Euclid Av",
                  "Far Rockaway - Mott Av",
                  "Ozone Park - Lefferts Blvd",
                  "World Trade Center"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":15,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":1,
                  "routes":[
                     {
                        "id":"C",
                        "name":"C",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {
                        "id":"E",
                        "name":"E",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":11,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":13,
                  "max_scheduled_headway":11,
                  "delay":1,
                  "routes":[
                     {
                        "id":"C",
                        "name":"C",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {
                        "id":"E",
                        "name":"E",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"54",
            "name":"14 Street–Canarsie",
            "routes":[

            ],
            "status":"No Service",
            "destinations":{
               "north":[

               ],
               "south":[

               ]
            },
            "north":[

            ],
            "south":[

            ]
         },
         {
            "id":"58",
            "name":"42 Street",
            "routes":[
               {
                  "id":"GS",
                  "name":"S",
                  "color":"#767676",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Times Sq - 42 St"
               ],
               "south":[
                  "Grand Central - 42 St"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"GS",
                        "name":"S",
                        "color":"#767676",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"GS",
                        "name":"S",
                        "color":"#767676",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"51",
            "name":"Broadway",
            "routes":[
               {
                  "id":"N",
                  "name":"N",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               },
               {
                  "id":"Q",
                  "name":"Q",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               },
               {
                  "id":"R",
                  "name":"R",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "96 St",
                  "Forest Hills - 71 Av",
                  "Queensboro Plaza"
               ],
               "south":[
                  "Bay Ridge - 95 St",
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":8,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"N",
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     },
                     {
                        "id":"Q",
                        "name":"Q",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     },
                     {
                        "id":"R",
                        "name":"R",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":9,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"Q",
                        "name":"Q",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":14,
                  "max_scheduled_headway":8,
                  "delay":1,
                  "routes":[
                     {
                        "id":"N",
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     },
                     {
                        "id":"R",
                        "name":"R",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {
            "id":"82",
            "name":"Broadway–7 Avenue",
            "routes":[
               {
                  "id":"1",
                  "name":"1",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Van Cortlandt Park - 242 St"
               ],
               "south":[
                  "South Ferry"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":14,
                  "max_scheduled_headway":8,
                  "delay":1,
                  "routes":[
                     {
                        "id":"1",
                        "name":"1",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":9,
                  "max_scheduled_headway":8,
                  "delay":0,
                  "routes":[
                     {
                        "id":"1",
                        "name":"1",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"83",
            "name":"Central Park West",
            "routes":[
               {
                  "id":"A",
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               },
               {
                  "id":"C",
                  "name":"C",
                  "color":"#2185d0",
                  "text_color":null
               },
               {
                  "id":"D",
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "168 St",
                  "Inwood - 207 St",
                  "Norwood - 205 St"
               ],
               "south":[
                  "Coney Island - Stillwell Av",
                  "Euclid Av",
                  "Far Rockaway - Mott Av",
                  "Ozone Park - Lefferts Blvd"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":12,
                  "max_scheduled_headway":10,
                  "delay":3,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {
                        "id":"D",
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":18,
                  "max_scheduled_headway":12,
                  "delay":1,
                  "routes":[
                     {
                        "id":"C",
                        "name":"C",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":11,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {
                        "id":"D",
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":14,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "id":"C",
                        "name":"C",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"55",
            "name":"Flushing",
            "routes":[
               {
                  "id":"7",
                  "name":"7",
                  "color":"#a333c8",
                  "text_color":null
               },
               {
                  "id":"7X",
                  "name":"7X",
                  "color":"#a333c8",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Flushing - Main St"
               ],
               "south":[
                  "34 St - 11 Av"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":6,
                  "delay":0,
                  "routes":[
                     {
                        "id":"7",
                        "name":"7",
                        "color":"#a333c8",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":8,
                  "max_scheduled_headway":5,
                  "delay":0,
                  "routes":[
                     {
                        "id":"7X",
                        "name":"7X",
                        "color":"#a333c8",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"79",
            "name":"Lenox Avenue",
            "routes":[
               {
                  "id":"2",
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               },
               {
                  "id":"3",
                  "name":"3",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Delay",
            "destinations":{
               "north":[
                  "Harlem - 148 St",
                  "Wakefield - 241 St"
               ],
               "south":[
                  "Flatbush Av - Brooklyn College",
                  "New Lots Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":14,
                  "max_scheduled_headway":8,
                  "delay":5,
                  "routes":[
                     {
                        "id":"2",
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "id":"3",
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":6,
                  "delay":0,
                  "routes":[
                     {
                        "id":"2",
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "id":"3",
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"49",
            "name":"Lexington Avenue",
            "routes":[
               {
                  "id":"4",
                  "name":"4",
                  "color":"#21ba45",
                  "text_color":null
               },
               {
                  "id":"5",
                  "name":"5",
                  "color":"#21ba45",
                  "text_color":null
               },
               {
                  "id":"6",
                  "name":"6",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Eastchester - Dyre Av",
                  "Pelham Bay Park",
                  "Woodlawn"
               ],
               "south":[
                  "Bowling Green",
                  "Brooklyn Bridge - City Hall",
                  "Crown Hts - Utica Av"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":12,
                  "max_scheduled_headway":10,
                  "delay":1,
                  "routes":[
                     {
                        "id":"4",
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     },
                     {
                        "id":"5",
                        "name":"5",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":9,
                  "max_scheduled_headway":8,
                  "delay":0,
                  "routes":[
                     {
                        "id":"6",
                        "name":"6",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":10,
                  "max_scheduled_headway":6,
                  "delay":1,
                  "routes":[
                     {
                        "id":"4",
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     },
                     {
                        "id":"5",
                        "name":"5",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":10,
                  "max_scheduled_headway":8,
                  "delay":1,
                  "routes":[
                     {
                        "id":"6",
                        "name":"6",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"56",
            "name":"Nassau Street",
            "routes":[
               {
                  "id":"J",
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Crescent St"
               ],
               "south":[
                  "Broad St"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"J",
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"J",
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"84",
            "name":"Washington Heights (8 Avenue)",
            "routes":[
               {
                  "id":"A",
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Inwood - 207 St"
               ],
               "south":[
                  "Far Rockaway - Mott Av",
                  "Ozone Park - Lefferts Blvd"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":11,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ]
         }
      ],
      "Queens":[
         {
            "id":"62",
            "name":"Astoria",
            "routes":[

            ],
            "status":"No Service",
            "destinations":{
               "north":[

               ],
               "south":[

               ]
            },
            "north":[

            ],
            "south":[

            ]
         },
         {
            "id":"57",
            "name":"Crosstown",
            "routes":[
               {
                  "id":"G",
                  "name":"G",
                  "color":"#b5cc18",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Court Sq"
               ],
               "south":[
                  "Church Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"G",
                        "name":"G",
                        "color":"#b5cc18",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"G",
                        "name":"G",
                        "color":"#b5cc18",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"55",
            "name":"Flushing",
            "routes":[
               {
                  "id":"7",
                  "name":"7",
                  "color":"#a333c8",
                  "text_color":null
               },
               {
                  "id":"7X",
                  "name":"7X",
                  "color":"#a333c8",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Flushing - Main St"
               ],
               "south":[
                  "34 St - 11 Av"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":6,
                  "delay":0,
                  "routes":[
                     {
                        "id":"7",
                        "name":"7",
                        "color":"#a333c8",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":8,
                  "max_scheduled_headway":5,
                  "delay":0,
                  "routes":[
                     {
                        "id":"7X",
                        "name":"7X",
                        "color":"#a333c8",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"71",
            "name":"Fulton Street",
            "routes":[
               {
                  "id":"A",
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               },
               {
                  "id":"C",
                  "name":"C",
                  "color":"#2185d0",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "168 St",
                  "Inwood - 207 St"
               ],
               "south":[
                  "Euclid Av",
                  "Far Rockaway - Mott Av",
                  "Ozone Park - Lefferts Blvd"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":15,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":14,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "id":"C",
                        "name":"C",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":2,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":14,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "id":"C",
                        "name":"C",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"68",
            "name":"Jamaica",
            "routes":[
               {
                  "id":"J",
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Crescent St"
               ],
               "south":[
                  "Broad St",
                  "Broadway Jct"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":11,
                  "delay":1,
                  "routes":[
                     {
                        "id":"J",
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":10,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"J",
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"70",
            "name":"Myrtle Avenue",
            "routes":[
               {
                  "id":"M",
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "96 St"
               ],
               "south":[
                  "Middle Village - Metropolitan Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":8,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "id":"M",
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":1,
                  "routes":[
                     {
                        "id":"M",
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"63",
            "name":"Queens Boulevard",
            "routes":[
               {
                  "id":"E",
                  "name":"E",
                  "color":"#2185d0",
                  "text_color":null
               },
               {
                  "id":"F",
                  "name":"F",
                  "color":"#f2711c",
                  "text_color":null
               },
               {
                  "id":"R",
                  "name":"R",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Forest Hills - 71 Av",
                  "Jamaica - 179 St",
                  "Jamaica Center - Parsons/Archer"
               ],
               "south":[
                  "Bay Ridge - 95 St",
                  "Church Av",
                  "World Trade Center"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":7,
                  "max_scheduled_headway":12,
                  "delay":1,
                  "routes":[
                     {
                        "id":"E",
                        "name":"E",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {
                        "id":"F",
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
                        "id":"R",
                        "name":"R",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":7,
                  "max_scheduled_headway":12,
                  "delay":2,
                  "routes":[
                     {
                        "id":"E",
                        "name":"E",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {
                        "id":"F",
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
                        "id":"R",
                        "name":"R",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {
            "id":"61",
            "name":"Rockaway (Far Rockaway Branch)",
            "routes":[
               {
                  "id":"A",
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Inwood - 207 St"
               ],
               "south":[
                  "Far Rockaway - Mott Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":19,
                  "max_scheduled_headway":20,
                  "delay":2,
                  "routes":[
                     {
                        "id":"A",
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {
            "id":"60",
            "name":"Rockaway (Rockaway Park Branch)",
            "routes":[
               {
                  "id":"H",
                  "name":"S",
                  "color":"#767676",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Broad Channel"
               ],
               "south":[
                  "Rockaway Park - Beach 116 St"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "id":"H",
                        "name":"S",
                        "color":"#767676",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "id":"H",
                        "name":"S",
                        "color":"#767676",
                        "text_color":null
                     }
                  ]
               }
            ]
         }
      ],
      "Staten Island":[
         {
            "id":"85",
            "name":"Staten Island",
            "routes":[
               {
                  "id":"SI",
                  "name":"SIR",
                  "color":"#2185d0",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "St George"
               ],
               "south":[
                  "Tottenville"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":24,
                  "max_scheduled_headway":30,
                  "delay":1,
                  "routes":[
                     {
                        "id":"SI",
                        "name":"SIR",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":null,
                  "max_actual_headway":12,
                  "max_scheduled_headway":30,
                  "delay":0,
                  "routes":[
                     {
                        "id":"SI",
                        "name":"SIR",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ]
         }
      ]
   },
   "timestamp":"2019-03-16T20:13:47-04:00",
   "blog_post":{
      "title":"goodservice.io on Slack and Twitter",
      "link":"https://medium.com/good-service/goodservice-io-on-slack-and-twitter-cec28beb6cdf?source=rss----adc4a7ae40a7---4"
   }
};

export default sampleData;