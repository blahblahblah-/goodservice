const sampleData = {
   "routes":[
      {
         "id":"1",
         "name":"1",
         "color":"#db2828",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
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
               "name":"7 Avenue Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Broadway–7 Avenue",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Broadway–7 Avenue",
               "max_actual_headway":21,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"7 Avenue Local",
               "max_actual_headway":21,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"2",
         "name":"2",
         "color":"#db2828",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "destinations":{
            "north":[
               "Wakefield - 241 St",
               "Atlantic Av - Barclays Ctr"
            ],
            "south":[
               "South Ferry",
               "Flatbush Av - Brooklyn College"
            ]
         },
         "north":[
            {
               "name":"7 Avenue Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Lenox Avenue",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Nostrand Avenue",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"White Plains Road Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"White Plains Road Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Eastern Parkway Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Lenox Avenue",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Nostrand Avenue",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"7 Avenue Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"3",
         "name":"3",
         "color":"#db2828",
         "text_color":null,
         "alternate_name":null,
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
         "id":"4",
         "name":"4",
         "color":"#21ba45",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "destinations":{
            "north":[
               "Woodlawn"
            ],
            "south":[
               "New Lots Av"
            ]
         },
         "north":[
            {
               "name":"New Lots",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Eastern Parkway Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Lexington Avenue Local",
               "max_actual_headway":23,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Jerome Avenue",
               "max_actual_headway":9,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Jerome Avenue",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Lexington Avenue Local",
               "max_actual_headway":19,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Eastern Parkway Local",
               "max_actual_headway":19,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"New Lots",
               "max_actual_headway":39,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"5",
         "name":"5",
         "color":"#21ba45",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "destinations":{
            "north":[
               "Eastchester - Dyre Av"
            ],
            "south":[
               "E 180 St"
            ]
         },
         "north":[
            {
               "name":"Dyre Avenue",
               "max_actual_headway":19,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Dyre Avenue",
               "max_actual_headway":19,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"6",
         "name":"6",
         "color":"#21ba45",
         "text_color":null,
         "alternate_name":null,
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
               "name":"Lexington Avenue Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Pelham Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Pelham Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Lexington Avenue Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"7",
         "name":"7",
         "color":"#a333c8",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "destinations":{
            "north":[
               "Flushing - Main St"
            ],
            "south":[
               "Queensboro Plaza"
            ]
         },
         "north":[
            {
               "name":"Flushing Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Flushing Local",
               "max_actual_headway":19,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"A",
         "name":"A",
         "color":"#2185d0",
         "text_color":null,
         "alternate_name":null,
         "status":"Service Change",
         "destinations":{
            "north":[
               "Inwood - 207 St",
               "Ozone Park - Lefferts Blvd"
            ],
            "south":[
               "Far Rockaway - Mott Av",
               "Euclid Av"
            ]
         },
         "north":[
            {
               "name":"Rockaway (Far Rockaway Branch)",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Fulton Street Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"via Delancey St",
               "max_actual_headway":20,
               "max_scheduled_headway":null,
               "delay":0
            },
            {
               "name":"8 Avenue Local",
               "max_actual_headway":18,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Central Park West Local",
               "max_actual_headway":19,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Lefferts Blvd Branch",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Washington Heights (8 Avenue)",
               "max_actual_headway":19,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Washington Heights (8 Avenue)",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Central Park West Express",
               "max_actual_headway":20,
               "max_scheduled_headway":null,
               "delay":0
            },
            {
               "name":"8 Avenue Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"via Chambers St",
               "max_actual_headway":16,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Fulton Street Express",
               "max_actual_headway":21,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Lefferts Blvd Branch",
               "max_actual_headway":12,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Rockaway (Far Rockaway Branch)",
               "max_actual_headway":14,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"B",
         "name":"B",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Scheduled",
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
         "id":"C",
         "name":"C",
         "color":"#2185d0",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Scheduled",
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
         "id":"D",
         "name":"D",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "destinations":{
            "north":[
               "Bedford Park Blvd"
            ],
            "south":[
               "Coney Island - Stillwell Av"
            ]
         },
         "north":[
            {
               "name":"West End",
               "max_actual_headway":13,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"4 Avenue Local",
               "max_actual_headway":25,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"6 Avenue Express",
               "max_actual_headway":25,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Central Park West Express",
               "max_actual_headway":15,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Concourse Local",
               "max_actual_headway":15,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Concourse Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Central Park West Express",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"6 Avenue Express",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"4 Avenue Local",
               "max_actual_headway":10,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"West End",
               "max_actual_headway":29,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"E",
         "name":"E",
         "color":"#2185d0",
         "text_color":null,
         "alternate_name":null,
         "status":"Service Change",
         "destinations":{
            "north":[
               "Jamaica - 179 St"
            ],
            "south":[
               "World Trade Center"
            ]
         },
         "north":[
            {
               "name":"8 Avenue Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"via 53 St",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Queens Boulevard Express",
               "max_actual_headway":10,
               "max_scheduled_headway":null,
               "delay":0
            },
            {
               "name":"Queens Boulevard Local",
               "max_actual_headway":17,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Queens Boulevard Local",
               "max_actual_headway":26,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"via 53 St",
               "max_actual_headway":26,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"8 Avenue Local",
               "max_actual_headway":26,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"F",
         "name":"F",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Service Change",
         "destinations":{
            "north":[
               "Jamaica - 179 St"
            ],
            "south":[
               "Coney Island - Stillwell Av"
            ]
         },
         "north":[
            {
               "name":"South of Kings Hwy",
               "max_actual_headway":18,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Culver",
               "max_actual_headway":18,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"via Delancey St",
               "max_actual_headway":18,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"6 Avenue Local",
               "max_actual_headway":21,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"via 63 St",
               "max_actual_headway":21,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Queens Boulevard Local",
               "max_actual_headway":23,
               "max_scheduled_headway":null,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Queens Boulevard Local",
               "max_actual_headway":20,
               "max_scheduled_headway":null,
               "delay":0
            },
            {
               "name":"via 63 St",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"6 Avenue Local",
               "max_actual_headway":14,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"via Delancey St",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Culver",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"South of Kings Hwy",
               "max_actual_headway":29,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"G",
         "name":"G",
         "color":"#b5cc18",
         "text_color":null,
         "alternate_name":null,
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
               "name":"Culver",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Crosstown",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Crosstown",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Culver",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"J",
         "name":"J",
         "color":"#a5673f",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "destinations":{
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
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Broadway (Brooklyn) Local",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Jamaica",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Jamaica",
               "max_actual_headway":18,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Broadway (Brooklyn) Local",
               "max_actual_headway":18,
               "max_scheduled_headway":20,
               "delay":0
            },
            {
               "name":"Nassau Street",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"L",
         "name":"L",
         "color":"#A0A0A0",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "destinations":{
            "north":[
               "Broadway Jct"
            ],
            "south":[
               "Canarsie - Rockaway Pkwy"
            ]
         },
         "north":[
            {
               "name":"East of Myrtle-Wyckoff Avs",
               "max_actual_headway":15,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"East of Myrtle-Wyckoff Avs",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"M",
         "name":"M",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "destinations":{
            "north":[
               "Myrtle Av"
            ],
            "south":[
               "Middle Village - Metropolitan Av"
            ]
         },
         "north":[
            {
               "name":"Myrtle Avenue",
               "max_actual_headway":9,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Myrtle Avenue",
               "max_actual_headway":10,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"N",
         "name":"N",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
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
         "id":"Q",
         "name":"Q",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
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
         "id":"R",
         "name":"R",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
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
         "id":"GS",
         "name":"S",
         "color":"#767676",
         "text_color":null,
         "alternate_name":"42 St Shuttle",
         "status":"Service Change",
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
               "name":"42 Street",
               "max_actual_headway":10,
               "max_scheduled_headway":null,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"42 Street",
               "max_actual_headway":10,
               "max_scheduled_headway":null,
               "delay":0
            }
         ]
      },
      {
         "id":"FS",
         "name":"S",
         "color":"#767676",
         "text_color":null,
         "alternate_name":"Franklin Avenue Shuttle",
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
         "id":"H",
         "name":"S",
         "color":"#767676",
         "text_color":null,
         "alternate_name":"Rockaway Park Shuttle",
         "status":"Not Good",
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
               "name":"Rockaway (Rockaway Park Branch)",
               "max_actual_headway":19,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Rockaway (Rockaway Park Branch)",
               "max_actual_headway":23,
               "max_scheduled_headway":20,
               "delay":0
            }
         ]
      },
      {
         "id":"SI",
         "name":"SIR",
         "color":"#2185d0",
         "text_color":null,
         "alternate_name":null,
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
               "name":"Staten Island",
               "max_actual_headway":16,
               "max_scheduled_headway":30,
               "delay":0
            }
         ],
         "south":[
            {
               "name":"Staten Island",
               "max_actual_headway":17,
               "max_scheduled_headway":30,
               "delay":0
            }
         ]
      },
      {
         "id":"W",
         "name":"W",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
         "status":"Not Scheduled",
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
         "id":"Z",
         "name":"Z",
         "color":"#a5673f",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Scheduled",
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
      }
   ],
   "lines":{
      "The Bronx":[
         {
            "id":"82",
            "name":"Broadway–7 Avenue",
            "routes":[
               {
                  "name":"1",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Good Service",
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":21,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Bedford Park Blvd"
               ],
               "south":[
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":15,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "name":"5",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Eastchester - Dyre Av"
               ],
               "south":[
                  "E 180 St"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":19,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":19,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "name":"4",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Woodlawn"
               ],
               "south":[
                  "New Lots Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":9,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "South Ferry"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"2",
                        "color":"#db2828",
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
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Bedford Park Blvd"
               ],
               "south":[
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":25,
                  "max_scheduled_headway":15,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":10,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "name":"D",
                        "color":"#f2711c",
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
            "id":"65",
            "name":"Brighton",
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
            "id":"69",
            "name":"Broadway (Brooklyn)",
            "routes":[
               {
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Jamaica Center - Parsons/Archer"
               ],
               "south":[
                  "Broad St"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":18,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"J",
                        "color":"#a5673f",
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "name":"F",
                  "color":"#f2711c",
                  "text_color":null
               },
               {
                  "name":"G",
                  "color":"#b5cc18",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Court Sq",
                  "Jamaica - 179 St"
               ],
               "south":[
                  "Church Av",
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":16,
                  "max_scheduled_headway":15,
                  "delay":0,
                  "routes":[
                     {
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
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
                  "max_actual_headway":14,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[
                     {
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {
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
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               },
               {
                  "name":"4",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Woodlawn"
               ],
               "south":[
                  "Flatbush Av - Brooklyn College",
                  "New Lots Av"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":20,
                  "max_scheduled_headway":18,
                  "delay":0,
                  "routes":[
                     {
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":16,
                  "max_scheduled_headway":18,
                  "delay":0,
                  "routes":[
                     {
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "name":"4",
                        "color":"#21ba45",
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
            "id":"71",
            "name":"Fulton Street",
            "routes":[
               {
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
                  "type":"Local",
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":21,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"A",
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
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Jamaica Center - Parsons/Archer"
               ],
               "south":[
                  "Broad St"
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
                  "max_actual_headway":18,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Myrtle Av"
               ],
               "south":[
                  "Middle Village - Metropolitan Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":9,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":10,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "name":"4",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Woodlawn"
               ],
               "south":[
                  "New Lots Av"
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
                  "max_actual_headway":39,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"4",
                        "color":"#21ba45",
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
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Atlantic Av - Barclays Ctr"
               ],
               "south":[
                  "Flatbush Av - Brooklyn College"
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
            "id":"66",
            "name":"West End",
            "routes":[
               {
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Bedford Park Blvd"
               ],
               "south":[
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":13,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":29,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
            "id":"50",
            "name":"6 Avenue",
            "routes":[
               {
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               },
               {
                  "name":"F",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Bedford Park Blvd",
                  "Jamaica - 179 St"
               ],
               "south":[
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":25,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":21,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":14,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"F",
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
                  "name":"1",
                  "color":"#db2828",
                  "text_color":null
               },
               {
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Van Cortlandt Park - 242 St",
                  "Wakefield - 241 St"
               ],
               "south":[
                  "South Ferry"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":16,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "name":"1",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":11,
                  "max_scheduled_headway":11,
                  "delay":0,
                  "routes":[
                     {
                        "name":"1",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {
                        "name":"2",
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
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               },
               {
                  "name":"E",
                  "color":"#2185d0",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Inwood - 207 St",
                  "Jamaica - 179 St"
               ],
               "south":[
                  "Far Rockaway - Mott Av",
                  "World Trade Center"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":18,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {
                        "name":"E",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":14,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[
                     {
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {
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
                  "max_scheduled_headway":null,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_scheduled_headway":null,
                  "delay":0,
                  "routes":[
                     {
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
            "id":"82",
            "name":"Broadway–7 Avenue",
            "routes":[
               {
                  "name":"1",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Good Service",
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":21,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               },
               {
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Bedford Park Blvd",
                  "Inwood - 207 St"
               ],
               "south":[
                  "Coney Island - Stillwell Av",
                  "Far Rockaway - Mott Av"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":15,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":19,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":18,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {
                        "name":"D",
                        "color":"#f2711c",
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
                  "name":"7",
                  "color":"#a333c8",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Flushing - Main St"
               ],
               "south":[
                  "Queensboro Plaza"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"7",
                        "color":"#a333c8",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":19,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"7",
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
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Wakefield - 241 St"
               ],
               "south":[
                  "South Ferry"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":20,
                  "max_scheduled_headway":16,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[
                     {
                        "name":"2",
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
                  "name":"4",
                  "color":"#21ba45",
                  "text_color":null
               },
               {
                  "name":"6",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{
               "north":[
                  "Pelham Bay Park",
                  "Woodlawn"
               ],
               "south":[
                  "Brooklyn Bridge - City Hall",
                  "New Lots Av"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":20,
                  "max_scheduled_headway":11,
                  "delay":0,
                  "routes":[
                     {
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     },
                     {
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
                  "max_actual_headway":14,
                  "max_scheduled_headway":15,
                  "delay":0,
                  "routes":[
                     {
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     },
                     {
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
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Jamaica Center - Parsons/Archer"
               ],
               "south":[
                  "Broad St"
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":19,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "name":"7",
                  "color":"#a333c8",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Flushing - Main St"
               ],
               "south":[
                  "Queensboro Plaza"
               ]
            },
            "north":[
               {
                  "type":"Local",
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"7",
                        "color":"#a333c8",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":19,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"7",
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
                  "type":"Local",
                  "max_actual_headway":20,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Express",
                  "max_actual_headway":21,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"A",
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
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Jamaica Center - Parsons/Archer"
               ],
               "south":[
                  "Broad St"
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
                  "max_actual_headway":18,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Myrtle Av"
               ],
               "south":[
                  "Middle Village - Metropolitan Av"
               ]
            },
            "north":[
               {
                  "type":null,
                  "max_actual_headway":9,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":10,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "name":"E",
                  "color":"#2185d0",
                  "text_color":null
               },
               {
                  "name":"F",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{
               "north":[
                  "Jamaica - 179 St"
               ],
               "south":[
                  "Coney Island - Stillwell Av",
                  "World Trade Center"
               ]
            },
            "north":[
               {
                  "type":"Express",
                  "max_actual_headway":10,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"E",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {
                  "type":"Local",
                  "max_actual_headway":15,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"E",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[
               {
                  "type":"Local",
                  "max_actual_headway":16,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
                        "name":"E",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
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
                  "max_actual_headway":14,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "name":"S",
                  "color":"#767676",
                  "text_color":null
               }
            ],
            "status":"Not Good",
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
                  "max_actual_headway":19,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":23,
                  "max_scheduled_headway":20,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":16,
                  "max_scheduled_headway":30,
                  "delay":0,
                  "routes":[
                     {
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
                  "max_actual_headway":17,
                  "max_scheduled_headway":30,
                  "delay":0,
                  "routes":[
                     {
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
   "timestamp":"2018-10-17T02:07:53-04:00",
   "blog_post":{
      "title":"New Feature —  Detecting Delays",
      "link":"https://medium.com/good-service/new-feature-detecting-delays-48d29df9ba54?source=rss----adc4a7ae40a7---4"
   }
};

export default sampleData;