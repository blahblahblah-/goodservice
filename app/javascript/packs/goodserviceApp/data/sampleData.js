const sampleData = {  
   "routes":[  
      {  
         "name":"1",
         "color":"#db2828",
         "text_color":null,
         "alternate_name":null,
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
               "name":"7 Avenue Local",
               "max_actual_headway":7,
               "max_scheduled_headway":5,
               "delay":1
            },
            {  
               "name":"Broadway–7 Avenue",
               "max_actual_headway":10,
               "max_scheduled_headway":5,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Broadway–7 Avenue",
               "max_actual_headway":6,
               "max_scheduled_headway":5,
               "delay":0
            },
            {  
               "name":"7 Avenue Local",
               "max_actual_headway":6,
               "max_scheduled_headway":5,
               "delay":1
            }
         ]
      },
      {  
         "name":"2",
         "color":"#db2828",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
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
               "name":"Nostrand Avenue",
               "max_actual_headway":7,
               "max_scheduled_headway":7,
               "delay":0
            },
            {  
               "name":"Eastern Parkway Local",
               "max_actual_headway":10,
               "max_scheduled_headway":7,
               "delay":1
            },
            {  
               "name":"7 Avenue Express",
               "max_actual_headway":10,
               "max_scheduled_headway":12,
               "delay":1
            },
            {  
               "name":"Lenox Avenue",
               "max_actual_headway":9,
               "max_scheduled_headway":12,
               "delay":0
            },
            {  
               "name":"White Plains Road Local",
               "max_actual_headway":12,
               "max_scheduled_headway":7,
               "delay":-1
            }
         ],
         "south":[  
            {  
               "name":"White Plains Road Local",
               "max_actual_headway":9,
               "max_scheduled_headway":8,
               "delay":0
            },
            {  
               "name":"Lenox Avenue",
               "max_actual_headway":9,
               "max_scheduled_headway":7,
               "delay":2
            },
            {  
               "name":"7 Avenue Express",
               "max_actual_headway":10,
               "max_scheduled_headway":7,
               "delay":0
            },
            {  
               "name":"Eastern Parkway Local",
               "max_actual_headway":10,
               "max_scheduled_headway":8,
               "delay":0
            },
            {  
               "name":"Nostrand Avenue",
               "max_actual_headway":9,
               "max_scheduled_headway":7,
               "delay":-1
            }
         ]
      },
      {  
         "name":"3",
         "color":"#db2828",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
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
               "name":"New Lots",
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {  
               "name":"Eastern Parkway Local",
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            },
            {  
               "name":"7 Avenue Express",
               "max_actual_headway":9,
               "max_scheduled_headway":7,
               "delay":0
            },
            {  
               "name":"Lenox Avenue",
               "max_actual_headway":9,
               "max_scheduled_headway":7,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Lenox Avenue",
               "max_actual_headway":11,
               "max_scheduled_headway":11,
               "delay":1
            },
            {  
               "name":"7 Avenue Express",
               "max_actual_headway":11,
               "max_scheduled_headway":11,
               "delay":-2
            },
            {  
               "name":"Eastern Parkway Local",
               "max_actual_headway":10,
               "max_scheduled_headway":11,
               "delay":0
            },
            {  
               "name":"New Lots",
               "max_actual_headway":11,
               "max_scheduled_headway":10,
               "delay":1
            }
         ]
      },
      {  
         "name":"4",
         "color":"#21ba45",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "destinations":{  
            "north":[  
               "Woodlawn",
               "Bedford Park Blvd - Lehman College",
               "Burnside Av"
            ],
            "south":[  
               "Crown Hts - Utica Av",
               "New Lots Av"
            ]
         },
         "north":[  
            {  
               "name":"Eastern Parkway Express",
               "max_actual_headway":7,
               "max_scheduled_headway":8,
               "delay":1
            },
            {  
               "name":"Lexington Avenue Express",
               "max_actual_headway":11,
               "max_scheduled_headway":5,
               "delay":1
            },
            {  
               "name":"Jerome Avenue",
               "max_actual_headway":7,
               "max_scheduled_headway":10,
               "delay":4
            }
         ],
         "south":[  
            {  
               "name":"Jerome Avenue",
               "max_actual_headway":8,
               "max_scheduled_headway":9,
               "delay":0
            },
            {  
               "name":"Lexington Avenue Express",
               "max_actual_headway":9,
               "max_scheduled_headway":8,
               "delay":0
            },
            {  
               "name":"New Lots",
               "max_actual_headway":11,
               "max_scheduled_headway":13,
               "delay":4
            },
            {  
               "name":"Eastern Parkway Express",
               "max_actual_headway":9,
               "max_scheduled_headway":7,
               "delay":1
            }
         ]
      },
      {  
         "name":"5",
         "color":"#21ba45",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "destinations":{  
            "north":[  
               "Eastchester - Dyre Av",
               "Nereid Av"
            ],
            "south":[  
               "Flatbush Av - Brooklyn College",
               "Crown Hts - Utica Av"
            ]
         },
         "north":[  
            {  
               "name":"Nostrand Avenue",
               "max_actual_headway":13,
               "max_scheduled_headway":13,
               "delay":-2
            },
            {  
               "name":"Eastern Parkway Express",
               "max_actual_headway":9,
               "max_scheduled_headway":9,
               "delay":4
            },
            {  
               "name":"Lexington Avenue Express",
               "max_actual_headway":9,
               "max_scheduled_headway":7,
               "delay":0
            },
            {  
               "name":"White Plains Road Express",
               "max_actual_headway":10,
               "max_scheduled_headway":9,
               "delay":0
            },
            {  
               "name":"Dyre Avenue",
               "max_actual_headway":13,
               "max_scheduled_headway":11,
               "delay":-2
            }
         ],
         "south":[  
            {  
               "name":"Dyre Avenue",
               "max_actual_headway":11,
               "max_scheduled_headway":11,
               "delay":0
            },
            {  
               "name":"White Plains Road Local",
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":-1
            },
            {  
               "name":"Lexington Avenue Express",
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            },
            {  
               "name":"Eastern Parkway Express",
               "max_actual_headway":11,
               "max_scheduled_headway":9,
               "delay":0
            },
            {  
               "name":"Nostrand Avenue",
               "max_actual_headway":11,
               "max_scheduled_headway":12,
               "delay":0
            }
         ]
      },
      {  
         "name":"6",
         "color":"#21ba45",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "destinations":{  
            "north":[  
               "Parkchester"
            ],
            "south":[  
               "Brooklyn Bridge - City Hall"
            ]
         },
         "north":[  
            {  
               "name":"Lexington Avenue Local",
               "max_actual_headway":13,
               "max_scheduled_headway":11,
               "delay":0
            },
            {  
               "name":"Pelham Local",
               "max_actual_headway":11,
               "max_scheduled_headway":10,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Pelham Local",
               "max_actual_headway":8,
               "max_scheduled_headway":4,
               "delay":0
            },
            {  
               "name":"Lexington Avenue Local",
               "max_actual_headway":6,
               "max_scheduled_headway":5,
               "delay":0
            }
         ]
      },
      {  
         "name":"6X",
         "color":"#21ba45",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "destinations":{  
            "north":[  
               "Pelham Bay Park"
            ],
            "south":[  

            ]
         },
         "north":[  
            {  
               "name":"Lexington Avenue Local",
               "max_actual_headway":8,
               "max_scheduled_headway":8,
               "delay":0
            },
            {  
               "name":"Pelham Express",
               "max_actual_headway":12,
               "max_scheduled_headway":8,
               "delay":0
            }
         ],
         "south":[  

         ]
      },
      {  
         "name":"7",
         "color":"#a333c8",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "destinations":{  
            "north":[  
               "Flushing - Main St",
               "111 St",
               "Mets - Willets Point"
            ],
            "south":[  
               "34 St - 11 Av"
            ]
         },
         "north":[  
            {  
               "name":"Flushing Local",
               "max_actual_headway":8,
               "max_scheduled_headway":6,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Flushing Local",
               "max_actual_headway":5,
               "max_scheduled_headway":4,
               "delay":-1
            }
         ]
      },
      {  
         "name":"7X",
         "color":"#a333c8",
         "text_color":null,
         "alternate_name":null,
         "status":"Good Service",
         "destinations":{  
            "north":[  
               "Flushing - Main St"
            ],
            "south":[  

            ]
         },
         "north":[  
            {  
               "name":"Flushing Express",
               "max_actual_headway":7,
               "max_scheduled_headway":7,
               "delay":0
            }
         ],
         "south":[  

         ]
      },
      {  
         "name":"A",
         "color":"#2185d0",
         "text_color":null,
         "alternate_name":null,
         "status":"Delay",
         "destinations":{  
            "north":[  
               "Inwood - 207 St"
            ],
            "south":[  
               "Far Rockaway - Mott Av",
               "Rockaway Park - Beach 116 St",
               "Ozone Park - Lefferts Blvd"
            ]
         },
         "north":[  
            {  
               "name":"Lefferts Blvd Branch",
               "max_actual_headway":13,
               "max_scheduled_headway":17,
               "delay":0
            },
            {  
               "name":"Rockaway (Far Rockaway Branch)",
               "max_actual_headway":18,
               "max_scheduled_headway":18,
               "delay":-1
            },
            {  
               "name":"Fulton Street Local",
               "max_actual_headway":38,
               "max_scheduled_headway":null,
               "delay":-1
            },
            {  
               "name":"Fulton Street Express",
               "max_actual_headway":14,
               "max_scheduled_headway":9,
               "delay":3
            },
            {  
               "name":"via Chambers St",
               "max_actual_headway":12,
               "max_scheduled_headway":9,
               "delay":0
            },
            {  
               "name":"8 Avenue Express",
               "max_actual_headway":12,
               "max_scheduled_headway":9,
               "delay":-2
            },
            {  
               "name":"Central Park West Express",
               "max_actual_headway":13,
               "max_scheduled_headway":9,
               "delay":1
            },
            {  
               "name":"Washington Heights (8 Avenue)",
               "max_actual_headway":13,
               "max_scheduled_headway":10,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Washington Heights (8 Avenue)",
               "max_actual_headway":7,
               "max_scheduled_headway":7,
               "delay":-2
            },
            {  
               "name":"Central Park West Express",
               "max_actual_headway":7,
               "max_scheduled_headway":7,
               "delay":0
            },
            {  
               "name":"8 Avenue Express",
               "max_actual_headway":7,
               "max_scheduled_headway":6,
               "delay":0
            },
            {  
               "name":"via Chambers St",
               "max_actual_headway":7,
               "max_scheduled_headway":7,
               "delay":5
            },
            {  
               "name":"Fulton Street Express",
               "max_actual_headway":6,
               "max_scheduled_headway":6,
               "delay":-1
            },
            {  
               "name":"Rockaway (Rockaway Park Branch)",
               "max_actual_headway":18,
               "max_scheduled_headway":21,
               "delay":-2
            },
            {  
               "name":"Lefferts Blvd Branch",
               "max_actual_headway":15,
               "max_scheduled_headway":13,
               "delay":0
            },
            {  
               "name":"Rockaway (Far Rockaway Branch)",
               "max_actual_headway":17,
               "max_scheduled_headway":14,
               "delay":-1
            }
         ]
      },
      {  
         "name":"B",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "destinations":{  
            "north":[  
               "Bedford Park Blvd",
               "145 St"
            ],
            "south":[  
               "Brighton Beach"
            ]
         },
         "north":[  
            {  
               "name":"Brighton Express",
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            },
            {  
               "name":"6 Avenue Express",
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            },
            {  
               "name":"Central Park West Local",
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            },
            {  
               "name":"Concourse Local",
               "max_actual_headway":22,
               "max_scheduled_headway":10,
               "delay":1
            }
         ],
         "south":[  
            {  
               "name":"Concourse Local",
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            },
            {  
               "name":"Central Park West Local",
               "max_actual_headway":18,
               "max_scheduled_headway":10,
               "delay":1
            },
            {  
               "name":"6 Avenue Express",
               "max_actual_headway":20,
               "max_scheduled_headway":9,
               "delay":0
            },
            {  
               "name":"Brighton Express",
               "max_actual_headway":11,
               "max_scheduled_headway":8,
               "delay":0
            }
         ]
      },
      {  
         "name":"C",
         "color":"#2185d0",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "destinations":{  
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
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {  
               "name":"via Chambers St",
               "max_actual_headway":15,
               "max_scheduled_headway":12,
               "delay":-1
            },
            {  
               "name":"8 Avenue Local",
               "max_actual_headway":15,
               "max_scheduled_headway":12,
               "delay":0
            },
            {  
               "name":"Central Park West Local",
               "max_actual_headway":15,
               "max_scheduled_headway":11,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Central Park West Local",
               "max_actual_headway":12,
               "max_scheduled_headway":11,
               "delay":1
            },
            {  
               "name":"8 Avenue Local",
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":1
            },
            {  
               "name":"via Chambers St",
               "max_actual_headway":13,
               "max_scheduled_headway":13,
               "delay":0
            },
            {  
               "name":"Fulton Street Local",
               "max_actual_headway":12,
               "max_scheduled_headway":11,
               "delay":-3
            }
         ]
      },
      {  
         "name":"D",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Service Change",
         "destinations":{  
            "north":[  
               "Norwood - 205 St"
            ],
            "south":[  
               "Coney Island - Stillwell Av",
               "Bedford Park Blvd"
            ]
         },
         "north":[  
            {  
               "name":"West End",
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":-1
            },
            {  
               "name":"4 Avenue Express",
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":1
            },
            {  
               "name":"6 Avenue Express",
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":-1
            },
            {  
               "name":"Central Park West Express",
               "max_actual_headway":9,
               "max_scheduled_headway":10,
               "delay":0
            },
            {  
               "name":"Concourse Express",
               "max_actual_headway":9,
               "max_scheduled_headway":10,
               "delay":0
            },
            {  
               "name":"Concourse Local",
               "max_actual_headway":27,
               "max_scheduled_headway":null,
               "delay":4
            }
         ],
         "south":[  
            {  
               "name":"Concourse Local",
               "max_actual_headway":9,
               "max_scheduled_headway":11,
               "delay":0
            },
            {  
               "name":"Central Park West Express",
               "max_actual_headway":20,
               "max_scheduled_headway":9,
               "delay":0
            },
            {  
               "name":"6 Avenue Express",
               "max_actual_headway":20,
               "max_scheduled_headway":9,
               "delay":-1
            },
            {  
               "name":"4 Avenue Express",
               "max_actual_headway":9,
               "max_scheduled_headway":8,
               "delay":1
            },
            {  
               "name":"West End",
               "max_actual_headway":9,
               "max_scheduled_headway":8,
               "delay":0
            }
         ]
      },
      {  
         "name":"E",
         "color":"#2185d0",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "destinations":{  
            "north":[  
               "Jamaica Center - Parsons/Archer",
               "Jamaica - 179 St"
            ],
            "south":[  
               "World Trade Center"
            ]
         },
         "north":[  
            {  
               "name":"8 Avenue Local",
               "max_actual_headway":6,
               "max_scheduled_headway":6,
               "delay":0
            },
            {  
               "name":"via 53 St",
               "max_actual_headway":5,
               "max_scheduled_headway":6,
               "delay":0
            },
            {  
               "name":"Queens Boulevard Express",
               "max_actual_headway":6,
               "max_scheduled_headway":5,
               "delay":1
            }
         ],
         "south":[  
            {  
               "name":"Queens Boulevard Express",
               "max_actual_headway":10,
               "max_scheduled_headway":6,
               "delay":0
            },
            {  
               "name":"via 53 St",
               "max_actual_headway":10,
               "max_scheduled_headway":6,
               "delay":1
            },
            {  
               "name":"8 Avenue Local",
               "max_actual_headway":9,
               "max_scheduled_headway":6,
               "delay":0
            }
         ]
      },
      {  
         "name":"F",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Delay",
         "destinations":{  
            "north":[  
               "Jamaica - 179 St"
            ],
            "south":[  
               "Coney Island - Stillwell Av",
               "Kings Hwy"
            ]
         },
         "north":[  
            {  
               "name":"South of Kings Hwy",
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":7
            },
            {  
               "name":"Culver",
               "max_actual_headway":11,
               "max_scheduled_headway":7,
               "delay":-1
            },
            {  
               "name":"via Delancey St",
               "max_actual_headway":12,
               "max_scheduled_headway":8,
               "delay":0
            },
            {  
               "name":"6 Avenue Local",
               "max_actual_headway":12,
               "max_scheduled_headway":6,
               "delay":0
            },
            {  
               "name":"via 63 St",
               "max_actual_headway":12,
               "max_scheduled_headway":5,
               "delay":-5
            },
            {  
               "name":"Queens Boulevard Express",
               "max_actual_headway":7,
               "max_scheduled_headway":5,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Queens Boulevard Express",
               "max_actual_headway":9,
               "max_scheduled_headway":6,
               "delay":0
            },
            {  
               "name":"via 63 St",
               "max_actual_headway":9,
               "max_scheduled_headway":5,
               "delay":0
            },
            {  
               "name":"6 Avenue Local",
               "max_actual_headway":9,
               "max_scheduled_headway":5,
               "delay":1
            },
            {  
               "name":"via Delancey St",
               "max_actual_headway":9,
               "max_scheduled_headway":6,
               "delay":2
            },
            {  
               "name":"Culver",
               "max_actual_headway":8,
               "max_scheduled_headway":8,
               "delay":0
            },
            {  
               "name":"South of Kings Hwy",
               "max_actual_headway":8,
               "max_scheduled_headway":12,
               "delay":2
            }
         ]
      },
      {  
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
               "max_actual_headway":11,
               "max_scheduled_headway":10,
               "delay":0
            },
            {  
               "name":"Crosstown",
               "max_actual_headway":11,
               "max_scheduled_headway":9,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Crosstown",
               "max_actual_headway":8,
               "max_scheduled_headway":8,
               "delay":-1
            },
            {  
               "name":"Culver",
               "max_actual_headway":9,
               "max_scheduled_headway":9,
               "delay":0
            }
         ]
      },
      {  
         "name":"J",
         "color":"#a5673f",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
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
               "max_actual_headway":17,
               "max_scheduled_headway":11,
               "delay":2
            },
            {  
               "name":"Broadway (Brooklyn) Express",
               "max_actual_headway":18,
               "max_scheduled_headway":11,
               "delay":0
            },
            {  
               "name":"Jamaica",
               "max_actual_headway":22,
               "max_scheduled_headway":15,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Jamaica",
               "max_actual_headway":12,
               "max_scheduled_headway":11,
               "delay":-1
            },
            {  
               "name":"Broadway (Brooklyn) Local",
               "max_actual_headway":12,
               "max_scheduled_headway":11,
               "delay":2
            },
            {  
               "name":"Nassau Street",
               "max_actual_headway":11,
               "max_scheduled_headway":10,
               "delay":-1
            }
         ]
      },
      {  
         "name":"L",
         "color":"#A0A0A0",
         "text_color":null,
         "alternate_name":null,
         "status":"Not Good",
         "destinations":{  
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
               "max_actual_headway":5,
               "max_scheduled_headway":3,
               "delay":0
            },
            {  
               "name":"14 Street–Canarsie",
               "max_actual_headway":5,
               "max_scheduled_headway":3,
               "delay":-1
            }
         ],
         "south":[  
            {  
               "name":"14 Street–Canarsie",
               "max_actual_headway":4,
               "max_scheduled_headway":3,
               "delay":-1
            },
            {  
               "name":"East of Myrtle-Wyckoff Avs",
               "max_actual_headway":8,
               "max_scheduled_headway":4,
               "delay":-1
            }
         ]
      },
      {  
         "name":"M",
         "color":"#f2711c",
         "text_color":null,
         "alternate_name":null,
         "status":"Delay",
         "destinations":{  
            "north":[  
               "Forest Hills - 71 Av"
            ],
            "south":[  
               "Middle Village - Metropolitan Av"
            ]
         },
         "north":[  
            {  
               "name":"6 Avenue Local",
               "max_actual_headway":15,
               "max_scheduled_headway":10,
               "delay":-1
            },
            {  
               "name":"via 53 St",
               "max_actual_headway":13,
               "max_scheduled_headway":9,
               "delay":1
            },
            {  
               "name":"Broadway (Brooklyn) Local",
               "max_actual_headway":13,
               "max_scheduled_headway":10,
               "delay":4
            },
            {  
               "name":"Myrtle Avenue",
               "max_actual_headway":13,
               "max_scheduled_headway":10,
               "delay":-1
            },
            {  
               "name":"Queens Boulevard Local",
               "max_actual_headway":13,
               "max_scheduled_headway":9,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Queens Boulevard Local",
               "max_actual_headway":11,
               "max_scheduled_headway":11,
               "delay":1
            },
            {  
               "name":"via 53 St",
               "max_actual_headway":11,
               "max_scheduled_headway":11,
               "delay":0
            },
            {  
               "name":"6 Avenue Local",
               "max_actual_headway":10,
               "max_scheduled_headway":9,
               "delay":0
            },
            {  
               "name":"Broadway (Brooklyn) Local",
               "max_actual_headway":13,
               "max_scheduled_headway":11,
               "delay":-2
            },
            {  
               "name":"Myrtle Avenue",
               "max_actual_headway":13,
               "max_scheduled_headway":11,
               "delay":7
            }
         ]
      },
      {  
         "name":"N",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
         "status":"Service Change",
         "destinations":{  
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
               "max_actual_headway":14,
               "max_scheduled_headway":12,
               "delay":-2
            },
            {  
               "name":"4 Avenue Express",
               "max_actual_headway":14,
               "max_scheduled_headway":12,
               "delay":-1
            },
            {  
               "name":"via Manhattan Bridge",
               "max_actual_headway":15,
               "max_scheduled_headway":12,
               "delay":0
            },
            {  
               "name":"Broadway Express",
               "max_actual_headway":16,
               "max_scheduled_headway":13,
               "delay":0
            },
            {  
               "name":"Astoria",
               "max_actual_headway":10,
               "max_scheduled_headway":18,
               "delay":-2
            }
         ],
         "south":[  
            {  
               "name":"2 Avenue",
               "max_actual_headway":6,
               "max_scheduled_headway":null,
               "delay":0
            },
            {  
               "name":"Astoria",
               "max_actual_headway":9,
               "max_scheduled_headway":9,
               "delay":-1
            },
            {  
               "name":"Broadway Express",
               "max_actual_headway":9,
               "max_scheduled_headway":9,
               "delay":-1
            },
            {  
               "name":"via Manhattan Bridge",
               "max_actual_headway":15,
               "max_scheduled_headway":9,
               "delay":0
            },
            {  
               "name":"4 Avenue Express",
               "max_actual_headway":15,
               "max_scheduled_headway":9,
               "delay":0
            },
            {  
               "name":"Sea Beach",
               "max_actual_headway":17,
               "max_scheduled_headway":12,
               "delay":-4
            }
         ]
      },
      {  
         "name":"Q",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
         "status":"Not Good",
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
               "name":"Brighton Local",
               "max_actual_headway":8,
               "max_scheduled_headway":8,
               "delay":0
            },
            {  
               "name":"via Manhattan Bridge",
               "max_actual_headway":9,
               "max_scheduled_headway":8,
               "delay":0
            },
            {  
               "name":"Broadway Express",
               "max_actual_headway":9,
               "max_scheduled_headway":8,
               "delay":0
            },
            {  
               "name":"2 Avenue",
               "max_actual_headway":7,
               "max_scheduled_headway":8,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"2 Avenue",
               "max_actual_headway":8,
               "max_scheduled_headway":8,
               "delay":-1
            },
            {  
               "name":"Broadway Express",
               "max_actual_headway":12,
               "max_scheduled_headway":8,
               "delay":-2
            },
            {  
               "name":"via Manhattan Bridge",
               "max_actual_headway":12,
               "max_scheduled_headway":8,
               "delay":-1
            },
            {  
               "name":"Brighton Local",
               "max_actual_headway":18,
               "max_scheduled_headway":7,
               "delay":0
            }
         ]
      },
      {  
         "name":"R",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
         "status":"Not Good",
         "destinations":{  
            "north":[  
               "Forest Hills - 71 Av"
            ],
            "south":[  
               "Bay Ridge - 95 St"
            ]
         },
         "north":[  
            {  
               "name":"4 Avenue Local",
               "max_actual_headway":9,
               "max_scheduled_headway":9,
               "delay":1
            },
            {  
               "name":"via Whitehall St",
               "max_actual_headway":9,
               "max_scheduled_headway":9,
               "delay":0
            },
            {  
               "name":"Broadway Local",
               "max_actual_headway":8,
               "max_scheduled_headway":9,
               "delay":0
            },
            {  
               "name":"Queens Boulevard Local",
               "max_actual_headway":26,
               "max_scheduled_headway":9,
               "delay":-1
            }
         ],
         "south":[  
            {  
               "name":"Queens Boulevard Local",
               "max_actual_headway":16,
               "max_scheduled_headway":11,
               "delay":0
            },
            {  
               "name":"Broadway Local",
               "max_actual_headway":16,
               "max_scheduled_headway":12,
               "delay":-1
            },
            {  
               "name":"via Whitehall St",
               "max_actual_headway":7,
               "max_scheduled_headway":11,
               "delay":0
            },
            {  
               "name":"4 Avenue Local",
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":-1
            }
         ]
      },
      {  
         "name":"S",
         "color":"#767676",
         "text_color":null,
         "alternate_name":"42 St Shuttle",
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
               "name":"42 Street",
               "max_actual_headway":2,
               "max_scheduled_headway":2,
               "delay":1
            }
         ],
         "south":[  
            {  
               "name":"42 Street",
               "max_actual_headway":2,
               "max_scheduled_headway":2,
               "delay":1
            }
         ]
      },
      {  
         "name":"S",
         "color":"#767676",
         "text_color":null,
         "alternate_name":"Franklin Avenue Shuttle",
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
               "name":"Franklin Avenue",
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Franklin Avenue",
               "max_actual_headway":10,
               "max_scheduled_headway":10,
               "delay":0
            }
         ]
      },
      {  
         "name":"S",
         "color":"#767676",
         "text_color":null,
         "alternate_name":"Rockaway Park Shuttle",
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
               "name":"Rockaway (Rockaway Park Branch)",
               "max_actual_headway":20,
               "max_scheduled_headway":20,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Rockaway (Rockaway Park Branch)",
               "max_actual_headway":27,
               "max_scheduled_headway":27,
               "delay":0
            }
         ]
      },
      {  
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
               "Tottenville",
               "Great Kills"
            ]
         },
         "north":[  
            {  
               "name":"Staten Island",
               "max_actual_headway":13,
               "max_scheduled_headway":17,
               "delay":0
            }
         ],
         "south":[  
            {  
               "name":"Staten Island",
               "max_actual_headway":13,
               "max_scheduled_headway":13,
               "delay":0
            }
         ]
      },
      {  
         "name":"W",
         "color":"#fbbd08",
         "text_color":"#000000",
         "alternate_name":null,
         "status":"Not Good",
         "destinations":{  
            "north":[  
               "Astoria - Ditmars Blvd"
            ],
            "south":[  
               "Whitehall St"
            ]
         },
         "north":[  
            {  
               "name":"via Whitehall St",
               "max_actual_headway":12,
               "max_scheduled_headway":13,
               "delay":0
            },
            {  
               "name":"Broadway Local",
               "max_actual_headway":12,
               "max_scheduled_headway":13,
               "delay":2
            },
            {  
               "name":"Astoria",
               "max_actual_headway":11,
               "max_scheduled_headway":11,
               "delay":2
            }
         ],
         "south":[  
            {  
               "name":"Astoria",
               "max_actual_headway":12,
               "max_scheduled_headway":12,
               "delay":0
            },
            {  
               "name":"Broadway Local",
               "max_actual_headway":15,
               "max_scheduled_headway":13,
               "delay":0
            },
            {  
               "name":"via Whitehall St",
               "max_actual_headway":15,
               "max_scheduled_headway":11,
               "delay":-2
            }
         ]
      },
      {  
         "name":"Z",
         "color":"#a5673f",
         "text_color":null,
         "alternate_name":null,
         "status":"Delay",
         "destinations":{  
            "north":[  
               "Jamaica Center - Parsons/Archer"
            ],
            "south":[  

            ]
         },
         "north":[  
            {  
               "name":"Nassau Street",
               "max_actual_headway":11,
               "max_scheduled_headway":null,
               "delay":0
            },
            {  
               "name":"Broadway (Brooklyn) Express",
               "max_actual_headway":12,
               "max_scheduled_headway":10,
               "delay":16
            },
            {  
               "name":"Jamaica",
               "max_actual_headway":12,
               "max_scheduled_headway":10,
               "delay":14
            }
         ],
         "south":[  

         ]
      }
   ],
   "lines":{  
      "The Bronx":[  
         {  
            "name":"Broadway–7 Avenue",
            "routes":[  
               {  
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
                  "max_actual_headway":10,
                  "max_scheduled_headway":5,
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
                  "max_actual_headway":6,
                  "max_scheduled_headway":5,
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
            "name":"Concourse",
            "routes":[  
               {  
                  "name":"B",
                  "color":"#f2711c",
                  "text_color":null
               },
               {  
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{  
               "north":[  
                  "Bedford Park Blvd",
                  "Norwood - 205 St"
               ],
               "south":[  
                  "Brighton Beach",
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":9,
                  "max_scheduled_headway":10,
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
                  "max_actual_headway":15,
                  "max_scheduled_headway":10,
                  "delay":1,
                  "routes":[  
                     {  
                        "name":"B",
                        "color":"#f2711c",
                        "text_color":null
                     },
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
                  "max_actual_headway":7,
                  "max_scheduled_headway":7,
                  "delay":1,
                  "routes":[  
                     {  
                        "name":"B",
                        "color":"#f2711c",
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
                  "Flatbush Av - Brooklyn College"
               ]
            },
            "north":[  
               {  
                  "type":null,
                  "max_actual_headway":13,
                  "max_scheduled_headway":11,
                  "delay":-2,
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
                  "max_actual_headway":11,
                  "max_scheduled_headway":11,
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
                  "Bedford Park Blvd - Lehman College",
                  "Woodlawn"
               ],
               "south":[  
                  "Crown Hts - Utica Av"
               ]
            },
            "north":[  
               {  
                  "type":null,
                  "max_actual_headway":7,
                  "max_scheduled_headway":10,
                  "delay":4,
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
                  "max_actual_headway":8,
                  "max_scheduled_headway":9,
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
            "name":"Pelham",
            "routes":[  
               {  
                  "name":"6",
                  "color":"#21ba45",
                  "text_color":null
               },
               {  
                  "name":"6X",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{  
               "north":[  
                  "Parkchester",
                  "Pelham Bay Park"
               ],
               "south":[  
                  "Brooklyn Bridge - City Hall"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":12,
                  "max_scheduled_headway":8,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"6X",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":11,
                  "max_scheduled_headway":10,
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
                  "max_actual_headway":8,
                  "max_scheduled_headway":4,
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
            "name":"White Plains Road",
            "routes":[  
               {  
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               },
               {  
                  "name":"5",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{  
               "north":[  
                  "Eastchester - Dyre Av",
                  "Nereid Av",
                  "Wakefield - 241 St"
               ],
               "south":[  
                  "Flatbush Av - Brooklyn College"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":10,
                  "max_scheduled_headway":9,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"5",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":7,
                  "delay":-1,
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
                  "max_actual_headway":7,
                  "max_scheduled_headway":6,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {  
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
            "name":"4 Avenue",
            "routes":[  
               {  
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               },
               {  
                  "name":"N",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               },
               {  
                  "name":"R",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               }
            ],
            "status":"Good Service",
            "destinations":{  
               "north":[  
                  "Astoria - Ditmars Blvd",
                  "Forest Hills - 71 Av",
                  "Norwood - 205 St"
               ],
               "south":[  
                  "Bay Ridge - 95 St",
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {  
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":9,
                  "max_scheduled_headway":9,
                  "delay":1,
                  "routes":[  
                     {  
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
                  "max_actual_headway":7,
                  "max_scheduled_headway":6,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {  
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"R",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {  
            "name":"14 Street–Canarsie",
            "routes":[  
               {  
                  "name":"L",
                  "color":"#A0A0A0",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{  
               "north":[  
                  "8 Av"
               ],
               "south":[  
                  "Canarsie - Rockaway Pkwy"
               ]
            },
            "north":[  
               {  
                  "type":null,
                  "max_actual_headway":5,
                  "max_scheduled_headway":3,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"L",
                        "color":"#A0A0A0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[  
               {  
                  "type":null,
                  "max_actual_headway":4,
                  "max_scheduled_headway":3,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"L",
                        "color":"#A0A0A0",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {  
            "name":"Brighton",
            "routes":[  
               {  
                  "name":"B",
                  "color":"#f2711c",
                  "text_color":null
               },
               {  
                  "name":"Q",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               }
            ],
            "status":"Not Good",
            "destinations":{  
               "north":[  
                  "145 St",
                  "96 St",
                  "Bedford Park Blvd"
               ],
               "south":[  
                  "Brighton Beach",
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"B",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":8,
                  "max_scheduled_headway":8,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"Q",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ],
            "south":[  
               {  
                  "type":"Express",
                  "max_actual_headway":11,
                  "max_scheduled_headway":8,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"B",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":18,
                  "max_scheduled_headway":7,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"Q",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {  
            "name":"Broadway (Brooklyn)",
            "routes":[  
               {  
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               },
               {  
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               },
               {  
                  "name":"Z",
                  "color":"#a5673f",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{  
               "north":[  
                  "Jamaica Center - Parsons/Archer",
                  "Middle Village - Metropolitan Av"
               ],
               "south":[  
                  "Broad St",
                  "Forest Hills - 71 Av"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":10,
                  "max_scheduled_headway":7,
                  "delay":1,
                  "routes":[  
                     {  
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     },
                     {  
                        "name":"Z",
                        "color":"#a5673f",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":13,
                  "max_scheduled_headway":11,
                  "delay":-2,
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
                  "type":"Local",
                  "max_actual_headway":11,
                  "max_scheduled_headway":8,
                  "delay":1,
                  "routes":[  
                     {  
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     },
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
                  "max_actual_headway":11,
                  "max_scheduled_headway":9,
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
                  "max_actual_headway":8,
                  "max_scheduled_headway":8,
                  "delay":-1,
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
                  "Coney Island - Stillwell Av",
                  "Kings Hwy"
               ]
            },
            "north":[  
               {  
                  "type":null,
                  "max_actual_headway":11,
                  "max_scheduled_headway":6,
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
                  "max_actual_headway":7,
                  "max_scheduled_headway":5,
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
            "name":"Eastern Parkway",
            "routes":[  
               {  
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               },
               {  
                  "name":"3",
                  "color":"#db2828",
                  "text_color":null
               },
               {  
                  "name":"4",
                  "color":"#21ba45",
                  "text_color":null
               },
               {  
                  "name":"5",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{  
               "north":[  
                  "Bedford Park Blvd - Lehman College",
                  "Burnside Av",
                  "Eastchester - Dyre Av",
                  "Harlem - 148 St",
                  "Nereid Av",
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
                  "max_scheduled_headway":5,
                  "delay":1,
                  "routes":[  
                     {  
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     },
                     {  
                        "name":"5",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":9,
                  "max_scheduled_headway":5,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {  
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
                  "max_scheduled_headway":4,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     },
                     {  
                        "name":"5",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":7,
                  "max_scheduled_headway":7,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {  
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {  
            "name":"Franklin Avenue",
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
                  "Franklin Av"
               ],
               "south":[  
                  "Prospect Park"
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
                        "name":"S",
                        "color":"#767676",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {  
            "name":"Fulton Street",
            "routes":[  
               {  
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               },
               {  
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
                  "Ozone Park - Lefferts Blvd",
                  "Rockaway Park - Beach 116 St"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":14,
                  "max_scheduled_headway":9,
                  "delay":3,
                  "routes":[  
                     {  
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {  
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
                  "max_actual_headway":6,
                  "max_scheduled_headway":6,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":11,
                  "delay":-3,
                  "routes":[  
                     {  
                        "name":"C",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {  
            "name":"Jamaica",
            "routes":[  
               {  
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               },
               {  
                  "name":"Z",
                  "color":"#a5673f",
                  "text_color":null
               }
            ],
            "status":"Not Good",
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
                  "max_actual_headway":15,
                  "max_scheduled_headway":11,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     },
                     {  
                        "name":"Z",
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
                  "max_scheduled_headway":11,
                  "delay":-1,
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
            "name":"Myrtle Avenue",
            "routes":[  
               {  
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Delay",
            "destinations":{  
               "north":[  
                  "Forest Hills - 71 Av"
               ],
               "south":[  
                  "Middle Village - Metropolitan Av"
               ]
            },
            "north":[  
               {  
                  "type":null,
                  "max_actual_headway":13,
                  "max_scheduled_headway":10,
                  "delay":-1,
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
                  "max_actual_headway":13,
                  "max_scheduled_headway":11,
                  "delay":7,
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
            "name":"New Lots",
            "routes":[  
               {  
                  "name":"3",
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
                  "delay":0,
                  "routes":[  
                     {  
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
                  "max_actual_headway":11,
                  "max_scheduled_headway":10,
                  "delay":1,
                  "routes":[  
                     {  
                        "name":"3",
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
            "name":"Nostrand Avenue",
            "routes":[  
               {  
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               },
               {  
                  "name":"5",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{  
               "north":[  
                  "Eastchester - Dyre Av",
                  "Nereid Av",
                  "Wakefield - 241 St"
               ],
               "south":[  
                  "Flatbush Av - Brooklyn College"
               ]
            },
            "north":[  
               {  
                  "type":null,
                  "max_actual_headway":5,
                  "max_scheduled_headway":5,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
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
                  "max_actual_headway":9,
                  "max_scheduled_headway":7,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
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
            "name":"Sea Beach",
            "routes":[  
               {  
                  "name":"N",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               }
            ],
            "status":"Not Good",
            "destinations":{  
               "north":[  
                  "Astoria - Ditmars Blvd"
               ],
               "south":[  
                  "Coney Island - Stillwell Av"
               ]
            },
            "north":[  
               {  
                  "type":null,
                  "max_actual_headway":14,
                  "max_scheduled_headway":12,
                  "delay":-2,
                  "routes":[  
                     {  
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
                  "max_actual_headway":17,
                  "max_scheduled_headway":12,
                  "delay":-4,
                  "routes":[  
                     {  
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {  
            "name":"West End",
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
                  "max_scheduled_headway":12,
                  "delay":-1,
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
                  "max_actual_headway":9,
                  "max_scheduled_headway":8,
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
            "name":"2 Avenue",
            "routes":[  
               {  
                  "name":"N",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               },
               {  
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
                  "type":null,
                  "max_actual_headway":7,
                  "max_scheduled_headway":8,
                  "delay":0,
                  "routes":[  
                     {  
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
                  "max_scheduled_headway":7,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     },
                     {  
                        "name":"Q",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {  
            "name":"6 Avenue",
            "routes":[  
               {  
                  "name":"B",
                  "color":"#f2711c",
                  "text_color":null
               },
               {  
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               },
               {  
                  "name":"F",
                  "color":"#f2711c",
                  "text_color":null
               },
               {  
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{  
               "north":[  
                  "145 St",
                  "Bedford Park Blvd",
                  "Forest Hills - 71 Av",
                  "Jamaica - 179 St",
                  "Norwood - 205 St"
               ],
               "south":[  
                  "Brighton Beach",
                  "Coney Island - Stillwell Av",
                  "Kings Hwy",
                  "Middle Village - Metropolitan Av"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":9,
                  "max_scheduled_headway":5,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"B",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {  
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":6,
                  "max_scheduled_headway":5,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     },
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
                  "type":"Express",
                  "max_actual_headway":16,
                  "max_scheduled_headway":5,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"B",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {  
                        "name":"D",
                        "color":"#f2711c",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":6,
                  "max_scheduled_headway":5,
                  "delay":1,
                  "routes":[  
                     {  
                        "name":"F",
                        "color":"#f2711c",
                        "text_color":null
                     },
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
               },
               {  
                  "name":"3",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Not Good",
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
                  "max_actual_headway":9,
                  "max_scheduled_headway":5,
                  "delay":1,
                  "routes":[  
                     {  
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {  
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":7,
                  "max_scheduled_headway":5,
                  "delay":1,
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
                  "type":"Express",
                  "max_actual_headway":7,
                  "max_scheduled_headway":7,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {  
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":6,
                  "max_scheduled_headway":5,
                  "delay":1,
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
            "name":"8 Avenue",
            "routes":[  
               {  
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               },
               {  
                  "name":"C",
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
                  "max_actual_headway":12,
                  "max_scheduled_headway":9,
                  "delay":-2,
                  "routes":[  
                     {  
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":5,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"C",
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
                  "type":"Express",
                  "max_actual_headway":7,
                  "max_scheduled_headway":6,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":8,
                  "max_scheduled_headway":6,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"C",
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
            "name":"14 Street–Canarsie",
            "routes":[  
               {  
                  "name":"L",
                  "color":"#A0A0A0",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{  
               "north":[  
                  "8 Av"
               ],
               "south":[  
                  "Canarsie - Rockaway Pkwy"
               ]
            },
            "north":[  
               {  
                  "type":null,
                  "max_actual_headway":5,
                  "max_scheduled_headway":3,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"L",
                        "color":"#A0A0A0",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[  
               {  
                  "type":null,
                  "max_actual_headway":4,
                  "max_scheduled_headway":3,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"L",
                        "color":"#A0A0A0",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {  
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
                  "max_actual_headway":2,
                  "max_scheduled_headway":2,
                  "delay":1,
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
                  "max_actual_headway":2,
                  "max_scheduled_headway":2,
                  "delay":1,
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
            "name":"Broadway",
            "routes":[  
               {  
                  "name":"N",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               },
               {  
                  "name":"Q",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               },
               {  
                  "name":"R",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               },
               {  
                  "name":"W",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               }
            ],
            "status":"Not Good",
            "destinations":{  
               "north":[  
                  "96 St",
                  "Astoria - Ditmars Blvd",
                  "Forest Hills - 71 Av"
               ],
               "south":[  
                  "Bay Ridge - 95 St",
                  "Coney Island - Stillwell Av",
                  "Whitehall St"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":8,
                  "max_scheduled_headway":7,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     },
                     {  
                        "name":"Q",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":8,
                  "max_scheduled_headway":7,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"R",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     },
                     {  
                        "name":"W",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ],
            "south":[  
               {  
                  "type":"Express",
                  "max_actual_headway":11,
                  "max_scheduled_headway":5,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     },
                     {  
                        "name":"Q",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"R",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     },
                     {  
                        "name":"W",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {  
            "name":"Broadway–7 Avenue",
            "routes":[  
               {  
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
                  "max_actual_headway":10,
                  "max_scheduled_headway":5,
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
                  "max_actual_headway":6,
                  "max_scheduled_headway":5,
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
            "name":"Central Park West",
            "routes":[  
               {  
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               },
               {  
                  "name":"B",
                  "color":"#f2711c",
                  "text_color":null
               },
               {  
                  "name":"C",
                  "color":"#2185d0",
                  "text_color":null
               },
               {  
                  "name":"D",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{  
               "north":[  
                  "168 St",
                  "Bedford Park Blvd",
                  "Inwood - 207 St",
                  "Norwood - 205 St"
               ],
               "south":[  
                  "Brighton Beach",
                  "Coney Island - Stillwell Av",
                  "Euclid Av",
                  "Far Rockaway - Mott Av",
                  "Ozone Park - Lefferts Blvd"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":9,
                  "max_scheduled_headway":6,
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
               },
               {  
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":8,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"B",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {  
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
                  "max_actual_headway":7,
                  "max_scheduled_headway":4,
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
               },
               {  
                  "type":"Local",
                  "max_actual_headway":9,
                  "max_scheduled_headway":8,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"B",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {  
                        "name":"C",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {  
            "name":"Flushing",
            "routes":[  
               {  
                  "name":"7",
                  "color":"#a333c8",
                  "text_color":null
               },
               {  
                  "name":"7X",
                  "color":"#a333c8",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{  
               "north":[  
                  "111 St",
                  "Flushing - Main St",
                  "Mets - Willets Point"
               ],
               "south":[  
                  "34 St - 11 Av"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":7,
                  "max_scheduled_headway":7,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"7X",
                        "color":"#a333c8",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":8,
                  "max_scheduled_headway":6,
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
                  "max_actual_headway":5,
                  "max_scheduled_headway":4,
                  "delay":-1,
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
            "name":"Lenox Avenue",
            "routes":[  
               {  
                  "name":"2",
                  "color":"#db2828",
                  "text_color":null
               },
               {  
                  "name":"3",
                  "color":"#db2828",
                  "text_color":null
               }
            ],
            "status":"Good Service",
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
                  "max_actual_headway":5,
                  "max_scheduled_headway":5,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {  
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
                  "max_actual_headway":7,
                  "max_scheduled_headway":7,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"2",
                        "color":"#db2828",
                        "text_color":null
                     },
                     {  
                        "name":"3",
                        "color":"#db2828",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {  
            "name":"Lexington Avenue",
            "routes":[  
               {  
                  "name":"4",
                  "color":"#21ba45",
                  "text_color":null
               },
               {  
                  "name":"5",
                  "color":"#21ba45",
                  "text_color":null
               },
               {  
                  "name":"6",
                  "color":"#21ba45",
                  "text_color":null
               },
               {  
                  "name":"6X",
                  "color":"#21ba45",
                  "text_color":null
               }
            ],
            "status":"Not Good",
            "destinations":{  
               "north":[  
                  "Bedford Park Blvd - Lehman College",
                  "Eastchester - Dyre Av",
                  "Nereid Av",
                  "Parkchester",
                  "Pelham Bay Park",
                  "Woodlawn"
               ],
               "south":[  
                  "Brooklyn Bridge - City Hall",
                  "Crown Hts - Utica Av",
                  "Flatbush Av - Brooklyn College",
                  "New Lots Av"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":4,
                  "max_scheduled_headway":4,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     },
                     {  
                        "name":"5",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":6,
                  "max_scheduled_headway":4,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"6",
                        "color":"#21ba45",
                        "text_color":null
                     },
                     {  
                        "name":"6X",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[  
               {  
                  "type":"Express",
                  "max_actual_headway":7,
                  "max_scheduled_headway":4,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"4",
                        "color":"#21ba45",
                        "text_color":null
                     },
                     {  
                        "name":"5",
                        "color":"#21ba45",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":6,
                  "max_scheduled_headway":5,
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
            "name":"Nassau Street",
            "routes":[  
               {  
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               },
               {  
                  "name":"Z",
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
                  "max_actual_headway":10,
                  "max_scheduled_headway":10,
                  "delay":1,
                  "routes":[  
                     {  
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     },
                     {  
                        "name":"Z",
                        "color":"#a5673f",
                        "text_color":null
                     }
                  ]
               }
            ],
            "south":[  
               {  
                  "type":null,
                  "max_actual_headway":11,
                  "max_scheduled_headway":10,
                  "delay":-1,
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
            "name":"Washington Heights (8 Avenue)",
            "routes":[  
               {  
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               }
            ],
            "status":"Not Good",
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
                  "max_actual_headway":13,
                  "max_scheduled_headway":10,
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
                  "max_actual_headway":7,
                  "max_scheduled_headway":7,
                  "delay":-2,
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
            "name":"Astoria",
            "routes":[  
               {  
                  "name":"N",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               },
               {  
                  "name":"W",
                  "color":"#fbbd08",
                  "text_color":"#000000"
               }
            ],
            "status":"Good Service",
            "destinations":{  
               "north":[  
                  "Astoria - Ditmars Blvd"
               ],
               "south":[  
                  "Coney Island - Stillwell Av",
                  "Whitehall St"
               ]
            },
            "north":[  
               {  
                  "type":null,
                  "max_actual_headway":7,
                  "max_scheduled_headway":7,
                  "delay":-2,
                  "routes":[  
                     {  
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     },
                     {  
                        "name":"W",
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
                  "max_scheduled_headway":6,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"N",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     },
                     {  
                        "name":"W",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {  
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
                  "max_actual_headway":11,
                  "max_scheduled_headway":9,
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
                  "max_actual_headway":8,
                  "max_scheduled_headway":8,
                  "delay":-1,
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
            "name":"Flushing",
            "routes":[  
               {  
                  "name":"7",
                  "color":"#a333c8",
                  "text_color":null
               },
               {  
                  "name":"7X",
                  "color":"#a333c8",
                  "text_color":null
               }
            ],
            "status":"Good Service",
            "destinations":{  
               "north":[  
                  "111 St",
                  "Flushing - Main St",
                  "Mets - Willets Point"
               ],
               "south":[  
                  "34 St - 11 Av"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":7,
                  "max_scheduled_headway":7,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"7X",
                        "color":"#a333c8",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":8,
                  "max_scheduled_headway":6,
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
                  "max_actual_headway":5,
                  "max_scheduled_headway":4,
                  "delay":-1,
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
            "name":"Fulton Street",
            "routes":[  
               {  
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               },
               {  
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
                  "Ozone Park - Lefferts Blvd",
                  "Rockaway Park - Beach 116 St"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":14,
                  "max_scheduled_headway":9,
                  "delay":3,
                  "routes":[  
                     {  
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":12,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     },
                     {  
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
                  "max_actual_headway":6,
                  "max_scheduled_headway":6,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               },
               {  
                  "type":"Local",
                  "max_actual_headway":12,
                  "max_scheduled_headway":11,
                  "delay":-3,
                  "routes":[  
                     {  
                        "name":"C",
                        "color":"#2185d0",
                        "text_color":null
                     }
                  ]
               }
            ]
         },
         {  
            "name":"Jamaica",
            "routes":[  
               {  
                  "name":"J",
                  "color":"#a5673f",
                  "text_color":null
               },
               {  
                  "name":"Z",
                  "color":"#a5673f",
                  "text_color":null
               }
            ],
            "status":"Not Good",
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
                  "max_actual_headway":15,
                  "max_scheduled_headway":11,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"J",
                        "color":"#a5673f",
                        "text_color":null
                     },
                     {  
                        "name":"Z",
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
                  "max_scheduled_headway":11,
                  "delay":-1,
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
            "name":"Myrtle Avenue",
            "routes":[  
               {  
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               }
            ],
            "status":"Delay",
            "destinations":{  
               "north":[  
                  "Forest Hills - 71 Av"
               ],
               "south":[  
                  "Middle Village - Metropolitan Av"
               ]
            },
            "north":[  
               {  
                  "type":null,
                  "max_actual_headway":13,
                  "max_scheduled_headway":10,
                  "delay":-1,
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
                  "max_actual_headway":13,
                  "max_scheduled_headway":11,
                  "delay":7,
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
               },
               {  
                  "name":"M",
                  "color":"#f2711c",
                  "text_color":null
               },
               {  
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
                  "Coney Island - Stillwell Av",
                  "Kings Hwy",
                  "Middle Village - Metropolitan Av",
                  "World Trade Center"
               ]
            },
            "north":[  
               {  
                  "type":"Express",
                  "max_actual_headway":5,
                  "max_scheduled_headway":3,
                  "delay":1,
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
               },
               {  
                  "type":"Local",
                  "max_actual_headway":9,
                  "max_scheduled_headway":7,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {  
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
                  "max_actual_headway":5,
                  "max_scheduled_headway":3,
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
               },
               {  
                  "type":"Local",
                  "max_actual_headway":5,
                  "max_scheduled_headway":8,
                  "delay":-1,
                  "routes":[  
                     {  
                        "name":"M",
                        "color":"#f2711c",
                        "text_color":null
                     },
                     {  
                        "name":"R",
                        "color":"#fbbd08",
                        "text_color":"#000000"
                     }
                  ]
               }
            ]
         },
         {  
            "name":"Rockaway (Far Rockaway Branch)",
            "routes":[  
               {  
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               }
            ],
            "status":"Not Good",
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
                  "max_actual_headway":18,
                  "max_scheduled_headway":18,
                  "delay":-1,
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
                  "max_actual_headway":17,
                  "max_scheduled_headway":14,
                  "delay":-1,
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
            "name":"Rockaway (Rockaway Park Branch)",
            "routes":[  
               {  
                  "name":"A",
                  "color":"#2185d0",
                  "text_color":null
               },
               {  
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
                  "max_actual_headway":11,
                  "max_scheduled_headway":14,
                  "delay":0,
                  "routes":[  
                     {  
                        "name":"A",
                        "color":"#2185d0",
                        "text_color":null
                     },
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
                  "Great Kills",
                  "Tottenville"
               ]
            },
            "north":[  
               {  
                  "type":null,
                  "max_actual_headway":13,
                  "max_scheduled_headway":17,
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
                  "max_actual_headway":13,
                  "max_scheduled_headway":13,
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
   "timestamp":"2018-10-12T17:46:44-04:00",
   "blog_post":{  
      "title":"New Feature —  Detecting Delays",
      "link":"https://medium.com/good-service/new-feature-detecting-delays-48d29df9ba54?source=rss----adc4a7ae40a7---4"
   }
};

export default sampleData;