const sampleData = {
  "routes": [
    {
      "name": "1",
      "color": "#EE352E",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "Van Cortlandt Park - 242 St"
        ],
        "south": [
          "South Ferry"
        ]
      },
      "north": [
        {
          "name": "7 Avenue Local",
          "max_actual_headway": 9,
          "max_scheduled_headway": 10
        },
        {
          "name": "7 Avenue Express",
          "max_actual_headway": 7,
          "max_scheduled_headway": null
        },
        {
          "name": "Broadway–7 Avenue",
          "max_actual_headway": 9,
          "max_scheduled_headway": 11
        }
      ],
      "south": [
        {
          "name": "Broadway–7 Avenue",
          "max_actual_headway": 8,
          "max_scheduled_headway": 12
        },
        {
          "name": "7 Avenue Local",
          "max_actual_headway": 12,
          "max_scheduled_headway": 12
        },
        {
          "name": "7 Avenue Express",
          "max_actual_headway": 6,
          "max_scheduled_headway": null
        }
      ]
    },
    {
      "name": "2",
      "color": "#EE352E",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "destinations": {
        "north": [
          "Wakefield - 241 St"
        ],
        "south": [
          "Flatbush Av - Brooklyn College"
        ]
      },
      "north": [
        {
          "name": "Nostrand Avenue",
          "max_actual_headway": 8,
          "max_scheduled_headway": 12
        },
        {
          "name": "Eastern Parkway Local",
          "max_actual_headway": 8,
          "max_scheduled_headway": 12
        },
        {
          "name": "Eastern Parkway Express",
          "max_actual_headway": 7,
          "max_scheduled_headway": null
        },
        {
          "name": "7 Avenue Express",
          "max_actual_headway": 13,
          "max_scheduled_headway": 12
        },
        {
          "name": "Lenox Avenue",
          "max_actual_headway": 11,
          "max_scheduled_headway": 12
        },
        {
          "name": "White Plains Road Local",
          "max_actual_headway": 11,
          "max_scheduled_headway": 12
        },
        {
          "name": "White Plains Road Express",
          "max_actual_headway": 11,
          "max_scheduled_headway": null
        }
      ],
      "south": [
        {
          "name": "White Plains Road Local",
          "max_actual_headway": 8,
          "max_scheduled_headway": 16
        },
        {
          "name": "White Plains Road Express",
          "max_actual_headway": 5,
          "max_scheduled_headway": null
        },
        {
          "name": "Lenox Avenue",
          "max_actual_headway": 8,
          "max_scheduled_headway": 16
        },
        {
          "name": "7 Avenue Express",
          "max_actual_headway": 8,
          "max_scheduled_headway": 13
        },
        {
          "name": "Eastern Parkway Local",
          "max_actual_headway": 10,
          "max_scheduled_headway": 12
        },
        {
          "name": "Eastern Parkway Express",
          "max_actual_headway": 10,
          "max_scheduled_headway": null
        },
        {
          "name": "Nostrand Avenue",
          "max_actual_headway": 15,
          "max_scheduled_headway": 12
        }
      ]
    },
    {
      "name": "3",
      "color": "#EE352E",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "137 St - City College"
        ],
        "south": [
          "New Lots Av"
        ]
      },
      "north": [
        {
          "name": "New Lots",
          "max_actual_headway": 12,
          "max_scheduled_headway": 14
        },
        {
          "name": "Eastern Parkway Local",
          "max_actual_headway": 12,
          "max_scheduled_headway": 12
        },
        {
          "name": "Eastern Parkway Express",
          "max_actual_headway": 12,
          "max_scheduled_headway": null
        },
        {
          "name": "7 Avenue Express",
          "max_actual_headway": 9,
          "max_scheduled_headway": 12
        },
        {
          "name": "Broadway–7 Avenue",
          "max_actual_headway": 9,
          "max_scheduled_headway": null
        }
      ],
      "south": [
        {
          "name": "Broadway–7 Avenue",
          "max_actual_headway": 12,
          "max_scheduled_headway": null
        },
        {
          "name": "7 Avenue Express",
          "max_actual_headway": 9,
          "max_scheduled_headway": 17
        },
        {
          "name": "Eastern Parkway Local",
          "max_actual_headway": 9,
          "max_scheduled_headway": 17
        },
        {
          "name": "Eastern Parkway Express",
          "max_actual_headway": 9,
          "max_scheduled_headway": null
        },
        {
          "name": "New Lots",
          "max_actual_headway": 6,
          "max_scheduled_headway": 14
        }
      ]
    },
    {
      "name": "4",
      "color": "#00933C",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "Woodlawn"
        ],
        "south": [
          "Bowling Green"
        ]
      },
      "north": [
        {
          "name": "Lexington Avenue Express",
          "max_actual_headway": 9,
          "max_scheduled_headway": 12
        },
        {
          "name": "Jerome Avenue",
          "max_actual_headway": 7,
          "max_scheduled_headway": 14
        }
      ],
      "south": [
        {
          "name": "Jerome Avenue",
          "max_actual_headway": 8,
          "max_scheduled_headway": 15
        },
        {
          "name": "Lexington Avenue Express",
          "max_actual_headway": 3,
          "max_scheduled_headway": 14
        }
      ]
    },
    {
      "name": "5",
      "color": "#00933C",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "destinations": {
        "north": [
          "E 180 St"
        ],
        "south": [
          "Bowling Green"
        ]
      },
      "north": [
        {
          "name": "Lexington Avenue Express",
          "max_actual_headway": 10,
          "max_scheduled_headway": null
        },
        {
          "name": "White Plains Road Local",
          "max_actual_headway": 17,
          "max_scheduled_headway": 12
        },
        {
          "name": "White Plains Road Express",
          "max_actual_headway": 25,
          "max_scheduled_headway": null
        }
      ],
      "south": [
        {
          "name": "White Plains Road Local",
          "max_actual_headway": 18,
          "max_scheduled_headway": null
        },
        {
          "name": "White Plains Road Express",
          "max_actual_headway": 25,
          "max_scheduled_headway": null
        },
        {
          "name": "Lexington Avenue Express",
          "max_actual_headway": 7,
          "max_scheduled_headway": null
        }
      ]
    },
    {
      "name": "6",
      "color": "#00933C",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "Pelham Bay Park"
        ],
        "south": [
          "Brooklyn Bridge - City Hall"
        ]
      },
      "north": [
        {
          "name": "Lexington Avenue Local",
          "max_actual_headway": 8,
          "max_scheduled_headway": 12
        },
        {
          "name": "Lexington Avenue Express",
          "max_actual_headway": 7,
          "max_scheduled_headway": null
        },
        {
          "name": "Pelham Local",
          "max_actual_headway": 13,
          "max_scheduled_headway": 12
        },
        {
          "name": "Pelham Express",
          "max_actual_headway": null,
          "max_scheduled_headway": null
        }
      ],
      "south": [
        {
          "name": "Pelham Local",
          "max_actual_headway": 11,
          "max_scheduled_headway": 15
        },
        {
          "name": "Pelham Express",
          "max_actual_headway": 7,
          "max_scheduled_headway": null
        },
        {
          "name": "Lexington Avenue Local",
          "max_actual_headway": 15,
          "max_scheduled_headway": 15
        }
      ]
    },
    {
      "name": "7",
      "color": "#B933AD",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Good",
      "destinations": {
        "north": [
          "Flushing - Main St"
        ],
        "south": [
          "34 St - 11 Av"
        ]
      },
      "north": [
        {
          "name": "Flushing Local",
          "max_actual_headway": 7,
          "max_scheduled_headway": 10
        },
        {
          "name": "Flushing Express",
          "max_actual_headway": 7,
          "max_scheduled_headway": null
        }
      ],
      "south": [
        {
          "name": "Flushing Local",
          "max_actual_headway": 10,
          "max_scheduled_headway": 10
        },
        {
          "name": "Flushing Express",
          "max_actual_headway": 22,
          "max_scheduled_headway": 10
        }
      ]
    },
    {
      "name": "A",
      "color": "#2850AD",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "Inwood - 207 St"
        ],
        "south": [
          "Far Rockaway - Mott Av",
          "Ozone Park - Lefferts Blvd"
        ]
      },
      "north": [
        {
          "name": "Rockaway (Far Rockaway Branch)",
          "max_actual_headway": 20,
          "max_scheduled_headway": null
        },
        {
          "name": "Fulton Street Express",
          "max_actual_headway": 10,
          "max_scheduled_headway": null
        },
        {
          "name": "8 Avenue Express",
          "max_actual_headway": 7,
          "max_scheduled_headway": null
        },
        {
          "name": "Central Park West Express",
          "max_actual_headway": 10,
          "max_scheduled_headway": 15
        },
        {
          "name": "8 Avenue (Washington Heights)",
          "max_actual_headway": 12,
          "max_scheduled_headway": 15
        }
      ],
      "south": [
        {
          "name": "8 Avenue (Washington Heights)",
          "max_actual_headway": 11,
          "max_scheduled_headway": 15
        },
        {
          "name": "Central Park West Express",
          "max_actual_headway": 11,
          "max_scheduled_headway": null
        },
        {
          "name": "8 Avenue Local",
          "max_actual_headway": 12,
          "max_scheduled_headway": 12
        },
        {
          "name": "8 Avenue Express",
          "max_actual_headway": 12,
          "max_scheduled_headway": null
        },
        {
          "name": "Fulton Street Express",
          "max_actual_headway": 7,
          "max_scheduled_headway": 12
        },
        {
          "name": "Rockaway (Far Rockaway Branch)",
          "max_actual_headway": 17,
          "max_scheduled_headway": 20
        }
      ]
    },
    {
      "name": "B",
      "color": "#FF6319",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Scheduled",
      "destinations": {
        "north": [],
        "south": []
      },
      "north": [],
      "south": []
    },
    {
      "name": "C",
      "color": "#2850AD",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "168 St"
        ],
        "south": [
          "Euclid Av"
        ]
      },
      "north": [
        {
          "name": "Fulton Street Express",
          "max_actual_headway": 13,
          "max_scheduled_headway": null
        },
        {
          "name": "Fulton Street Local",
          "max_actual_headway": 13,
          "max_scheduled_headway": null
        },
        {
          "name": "8 Avenue Express",
          "max_actual_headway": 14,
          "max_scheduled_headway": null
        },
        {
          "name": "Central Park West Local",
          "max_actual_headway": 10,
          "max_scheduled_headway": 13
        },
        {
          "name": "Central Park West Express",
          "max_actual_headway": 17,
          "max_scheduled_headway": null
        }
      ],
      "south": [
        {
          "name": "Central Park West Local",
          "max_actual_headway": 10,
          "max_scheduled_headway": null
        },
        {
          "name": "Central Park West Express",
          "max_actual_headway": 10,
          "max_scheduled_headway": null
        },
        {
          "name": "8 Avenue Local",
          "max_actual_headway": 13,
          "max_scheduled_headway": null
        },
        {
          "name": "8 Avenue Express",
          "max_actual_headway": 13,
          "max_scheduled_headway": null
        },
        {
          "name": "Fulton Street Local",
          "max_actual_headway": 14,
          "max_scheduled_headway": 15
        },
        {
          "name": "Fulton Street Express",
          "max_actual_headway": 14,
          "max_scheduled_headway": null
        }
      ]
    },
    {
      "name": "D",
      "color": "#FF6319",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "Norwood - 205 St"
        ],
        "south": [
          "34 St - Herald Sq",
          "Bedford Park Blvd"
        ]
      },
      "north": [
        {
          "name": "Central Park West Express",
          "max_actual_headway": 14,
          "max_scheduled_headway": 15
        },
        {
          "name": "Concourse Local",
          "max_actual_headway": 10,
          "max_scheduled_headway": 16
        },
        {
          "name": "Concourse Express",
          "max_actual_headway": 20,
          "max_scheduled_headway": null
        }
      ],
      "south": [
        {
          "name": "Concourse Express",
          "max_actual_headway": 11,
          "max_scheduled_headway": null
        },
        {
          "name": "Central Park West Express",
          "max_actual_headway": 11,
          "max_scheduled_headway": 15
        }
      ]
    },
    {
      "name": "E",
      "color": "#2850AD",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "Jamaica Center - Parsons/Archer"
        ],
        "south": [
          "World Trade Center"
        ]
      },
      "north": [
        {
          "name": "8 Avenue Express",
          "max_actual_headway": 12,
          "max_scheduled_headway": null
        },
        {
          "name": "Queens Boulevard Local",
          "max_actual_headway": 10,
          "max_scheduled_headway": null
        },
        {
          "name": "Queens Boulevard Express",
          "max_actual_headway": 7,
          "max_scheduled_headway": 13
        }
      ],
      "south": [
        {
          "name": "Queens Boulevard Express",
          "max_actual_headway": 13,
          "max_scheduled_headway": null
        },
        {
          "name": "8 Avenue Local",
          "max_actual_headway": 5,
          "max_scheduled_headway": 15
        },
        {
          "name": "8 Avenue Express",
          "max_actual_headway": 9,
          "max_scheduled_headway": null
        }
      ]
    },
    {
      "name": "F",
      "color": "#FF6319",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "Jamaica - 179 St"
        ],
        "south": [
          "Coney Island - Stillwell Av"
        ]
      },
      "north": [
        {
          "name": "Culver",
          "max_actual_headway": 12,
          "max_scheduled_headway": 15
        },
        {
          "name": "6 Avenue Local",
          "max_actual_headway": 9,
          "max_scheduled_headway": 15
        },
        {
          "name": "6 Avenue Express",
          "max_actual_headway": 9,
          "max_scheduled_headway": null
        },
        {
          "name": "Queens Boulevard Local",
          "max_actual_headway": 18,
          "max_scheduled_headway": null
        },
        {
          "name": "Queens Boulevard Express",
          "max_actual_headway": 9,
          "max_scheduled_headway": 15
        }
      ],
      "south": [
        {
          "name": "Queens Boulevard Express",
          "max_actual_headway": 7,
          "max_scheduled_headway": 15
        },
        {
          "name": "6 Avenue Local",
          "max_actual_headway": 11,
          "max_scheduled_headway": 15
        },
        {
          "name": "6 Avenue Express",
          "max_actual_headway": 11,
          "max_scheduled_headway": null
        },
        {
          "name": "Culver",
          "max_actual_headway": 9,
          "max_scheduled_headway": 15
        }
      ]
    },
    {
      "name": "G",
      "color": "#6CBE45",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "Bedford - Nostrand Avs"
        ],
        "south": [
          "Church Av"
        ]
      },
      "north": [
        {
          "name": "Culver",
          "max_actual_headway": 10,
          "max_scheduled_headway": 15
        },
        {
          "name": "Crosstown",
          "max_actual_headway": 9,
          "max_scheduled_headway": 15
        }
      ],
      "south": [
        {
          "name": "Crosstown",
          "max_actual_headway": 10,
          "max_scheduled_headway": 14
        },
        {
          "name": "Culver",
          "max_actual_headway": 10,
          "max_scheduled_headway": 12
        }
      ]
    },
    {
      "name": "J",
      "color": "#996633",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "Jamaica Center - Parsons/Archer"
        ],
        "south": [
          "Broad St"
        ]
      },
      "north": [
        {
          "name": "Nassau Street",
          "max_actual_headway": 12,
          "max_scheduled_headway": 15
        },
        {
          "name": "Broadway (Brooklyn) Local",
          "max_actual_headway": 15,
          "max_scheduled_headway": 15
        },
        {
          "name": "Broadway (Brooklyn) Express",
          "max_actual_headway": 15,
          "max_scheduled_headway": null
        },
        {
          "name": "Jamaica",
          "max_actual_headway": 11,
          "max_scheduled_headway": 15
        }
      ],
      "south": [
        {
          "name": "Jamaica",
          "max_actual_headway": 15,
          "max_scheduled_headway": 17
        },
        {
          "name": "Broadway (Brooklyn) Local",
          "max_actual_headway": 10,
          "max_scheduled_headway": 17
        },
        {
          "name": "Broadway (Brooklyn) Express",
          "max_actual_headway": 7,
          "max_scheduled_headway": null
        },
        {
          "name": "Nassau Street",
          "max_actual_headway": 14,
          "max_scheduled_headway": 15
        }
      ]
    },
    {
      "name": "L",
      "color": "#A7A9AC",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "8 Av"
        ],
        "south": [
          "Canarsie - Rockaway Pkwy"
        ]
      },
      "north": [
        {
          "name": "14 Street–Canarsie",
          "max_actual_headway": 6,
          "max_scheduled_headway": 12
        }
      ],
      "south": [
        {
          "name": "14 Street–Canarsie",
          "max_actual_headway": 6,
          "max_scheduled_headway": 10
        }
      ]
    },
    {
      "name": "M",
      "color": "#FF6319",
      "text_color": null,
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "Essex St"
        ],
        "south": [
          "Middle Village - Metropolitan Av"
        ]
      },
      "north": [
        {
          "name": "Myrtle Avenue",
          "max_actual_headway": 12,
          "max_scheduled_headway": 15
        },
        {
          "name": "Broadway (Brooklyn) Express",
          "max_actual_headway": 12,
          "max_scheduled_headway": null
        },
        {
          "name": "Broadway (Brooklyn) Local",
          "max_actual_headway": 12,
          "max_scheduled_headway": 15
        }
      ],
      "south": [
        {
          "name": "Broadway (Brooklyn) Express",
          "max_actual_headway": 12,
          "max_scheduled_headway": null
        },
        {
          "name": "Broadway (Brooklyn) Local",
          "max_actual_headway": 12,
          "max_scheduled_headway": 15
        },
        {
          "name": "Myrtle Avenue",
          "max_actual_headway": 12,
          "max_scheduled_headway": 15
        }
      ]
    },
    {
      "name": "N",
      "color": "#FCCC0A",
      "text_color": "#000000",
      "alternate_name": null,
      "status": "Good Service",
      "destinations": {
        "north": [
          "Queensboro Plaza"
        ],
        "south": [
          "Coney Island - Stillwell Av"
        ]
      },
      "north": [
        {
          "name": "West End",
          "max_actual_headway": 13,
          "max_scheduled_headway": null
        },
        {
          "name": "4 Avenue Express",
          "max_actual_headway": 9,
          "max_scheduled_headway": null
        },
        {
          "name": "Broadway Local",
          "max_actual_headway": 11,
          "max_scheduled_headway": 12
        },
        {
          "name": "Broadway Express",
          "max_actual_headway": 11,
          "max_scheduled_headway": null
        }
      ],
      "south": [
        {
          "name": "Broadway Express",
          "max_actual_headway": 13,
          "max_scheduled_headway": null
        },
        {
          "name": "Broadway Local",
          "max_actual_headway": 13,
          "max_scheduled_headway": 13
        },
        {
          "name": "4 Avenue Express",
          "max_actual_headway": 12,
          "max_scheduled_headway": 13
        },
        {
          "name": "West End",
          "max_actual_headway": 19,
          "max_scheduled_headway": null
        }
      ]
    },
    {
      "name": "Q",
      "color": "#FCCC0A",
      "text_color": "#000000",
      "alternate_name": null,
      "status": "Not Good",
      "destinations": {
        "north": [
          "96 St"
        ],
        "south": [
          "Coney Island - Stillwell Av"
        ]
      },
      "north": [
        {
          "name": "Brighton Local",
          "max_actual_headway": 11,
          "max_scheduled_headway": 15
        },
        {
          "name": "Brighton Express",
          "max_actual_headway": 11,
          "max_scheduled_headway": null
        },
        {
          "name": "Broadway Express",
          "max_actual_headway": 18,
          "max_scheduled_headway": 12
        },
        {
          "name": "2 Avenue",
          "max_actual_headway": 8,
          "max_scheduled_headway": 12
        }
      ],
      "south": [
        {
          "name": "2 Avenue",
          "max_actual_headway": 10,
          "max_scheduled_headway": 12
        },
        {
          "name": "Broadway Express",
          "max_actual_headway": 11,
          "max_scheduled_headway": 12
        },
        {
          "name": "Brighton Express",
          "max_actual_headway": 14,
          "max_scheduled_headway": null
        },
        {
          "name": "Brighton Local",
          "max_actual_headway": 11,
          "max_scheduled_headway": 12
        }
      ]
    },
    {
      "name": "R",
      "color": "#FCCC0A",
      "text_color": "#000000",
      "alternate_name": null,
      "status": "Not Good",
      "destinations": {
        "north": [
          "Forest Hills - 71 Av"
        ],
        "south": [
          "Bay Ridge - 95 St"
        ]
      },
      "north": [
        {
          "name": "4 Avenue Local",
          "max_actual_headway": 14,
          "max_scheduled_headway": 12
        },
        {
          "name": "4 Avenue Express",
          "max_actual_headway": 14,
          "max_scheduled_headway": null
        },
        {
          "name": "Broadway Local",
          "max_actual_headway": 12,
          "max_scheduled_headway": 12
        },
        {
          "name": "Broadway Express",
          "max_actual_headway": 12,
          "max_scheduled_headway": null
        },
        {
          "name": "Queens Boulevard Local",
          "max_actual_headway": 24,
          "max_scheduled_headway": 12
        }
      ],
      "south": [
        {
          "name": "Queens Boulevard Express",
          "max_actual_headway": 20,
          "max_scheduled_headway": null
        },
        {
          "name": "Queens Boulevard Local",
          "max_actual_headway": 14,
          "max_scheduled_headway": null
        },
        {
          "name": "Broadway Express",
          "max_actual_headway": 20,
          "max_scheduled_headway": null
        },
        {
          "name": "Broadway Local",
          "max_actual_headway": 20,
          "max_scheduled_headway": 12
        },
        {
          "name": "4 Avenue Local",
          "max_actual_headway": 12,
          "max_scheduled_headway": 13
        },
        {
          "name": "4 Avenue Express",
          "max_actual_headway": 12,
          "max_scheduled_headway": null
        }
      ]
    },
    {
      "name": "S",
      "color": "#6D6E71",
      "text_color": null,
      "alternate_name": "42 St Shuttle",
      "status": "Good Service",
      "destinations": {
        "north": [
          "Times Sq - 42 St"
        ],
        "south": [
          "Grand Central - 42 St"
        ]
      },
      "north": [
        {
          "name": "42 Street",
          "max_actual_headway": 5,
          "max_scheduled_headway": 10
        }
      ],
      "south": [
        {
          "name": "42 Street",
          "max_actual_headway": 5,
          "max_scheduled_headway": 10
        }
      ]
    },
    {
      "name": "S",
      "color": "#6D6E71",
      "text_color": null,
      "alternate_name": "Franklin Avenue Shuttle",
      "status": "Good Service",
      "destinations": {
        "north": [
          "Franklin Av"
        ],
        "south": [
          "Prospect Park"
        ]
      },
      "north": [
        {
          "name": "Franklin Avenue",
          "max_actual_headway": 12,
          "max_scheduled_headway": 20
        }
      ],
      "south": [
        {
          "name": "Franklin Avenue",
          "max_actual_headway": 12,
          "max_scheduled_headway": 20
        }
      ]
    },
    {
      "name": "S",
      "color": "#6D6E71",
      "text_color": null,
      "alternate_name": "Rockaway Park Shuttle",
      "status": "Good Service",
      "destinations": {
        "north": [
          "Rockaway Blvd"
        ],
        "south": [
          "Rockaway Park - Beach 116 St"
        ]
      },
      "north": [
        {
          "name": "Rockaway (Rockaway Park Branch)",
          "max_actual_headway": 20,
          "max_scheduled_headway": 25
        }
      ],
      "south": [
        {
          "name": "Rockaway (Rockaway Park Branch)",
          "max_actual_headway": 17,
          "max_scheduled_headway": null
        }
      ]
    },
    {
      "name": "SIR",
      "color": "#2850AD",
      "text_color": null,
      "alternate_name": null,
      "status": "No Service",
      "destinations": {
        "north": [
          "St George"
        ],
        "south": [
          "Huguenot"
        ]
      },
      "north": [
        {
          "name": "Staten Island",
          "max_actual_headway": 20,
          "max_scheduled_headway": null
        }
      ],
      "south": [
        {
          "name": "Staten Island",
          "max_actual_headway": 12,
          "max_scheduled_headway": null
        }
      ]
    },
    {
      "name": "W",
      "color": "#FCCC0A",
      "text_color": "#000000",
      "alternate_name": null,
      "status": "Not Scheduled",
      "destinations": {
        "north": [],
        "south": []
      },
      "north": [],
      "south": []
    },
    {
      "name": "Z",
      "color": "#996633",
      "text_color": null,
      "alternate_name": null,
      "status": "Not Scheduled",
      "destinations": {
        "north": [],
        "south": []
      },
      "north": [],
      "south": []
    }
  ],
  "lines": {
    "The Bronx": [
      {
        "name": "Broadway–7 Avenue",
        "routes": [
          {
            "name": "1",
            "color": "#EE352E",
            "text_color": null
          },
          {
            "name": "3",
            "color": "#EE352E",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "137 St - City College",
            "Van Cortlandt Park - 242 St"
          ],
          "south": [
            "New Lots Av",
            "South Ferry"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 7,
            "max_scheduled_headway": 11,
            "routes": [
              {
                "name": "1",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "1",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Concourse",
        "routes": [
          {
            "name": "D",
            "color": "#FF6319",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Norwood - 205 St"
          ],
          "south": [
            "34 St - Herald Sq"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 20,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "D",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 16,
            "routes": [
              {
                "name": "D",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "D",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Dyre Avenue",
        "routes": [],
        "status": "No Service",
        "destinations": {
          "north": [],
          "south": []
        },
        "north": [],
        "south": []
      },
      {
        "name": "Jerome Avenue",
        "routes": [
          {
            "name": "4",
            "color": "#00933C",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Woodlawn"
          ],
          "south": [
            "Bowling Green"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 7,
            "max_scheduled_headway": 14,
            "routes": [
              {
                "name": "4",
                "color": "#00933C",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "4",
                "color": "#00933C",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Pelham",
        "routes": [
          {
            "name": "6",
            "color": "#00933C",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Pelham Bay Park"
          ],
          "south": [
            "Brooklyn Bridge - City Hall"
          ]
        },
        "north": [
          {
            "type": "Local",
            "max_actual_headway": 13,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "6",
                "color": "#00933C",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "6",
                "color": "#00933C",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 11,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "6",
                "color": "#00933C",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "White Plains Road",
        "routes": [
          {
            "name": "2",
            "color": "#EE352E",
            "text_color": null
          },
          {
            "name": "5",
            "color": "#00933C",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "E 180 St",
            "Wakefield - 241 St"
          ],
          "south": [
            "Bowling Green",
            "Flatbush Av - Brooklyn College"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "5",
                "color": "#00933C",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 7,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "5",
                "color": "#00933C",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 5,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "5",
                "color": "#00933C",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 5,
            "max_scheduled_headway": 16,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "5",
                "color": "#00933C",
                "text_color": null
              }
            ]
          }
        ]
      }
    ],
    "Brooklyn": [
      {
        "name": "4 Avenue",
        "routes": [
          {
            "name": "N",
            "color": "#FCCC0A",
            "text_color": "#000000"
          },
          {
            "name": "R",
            "color": "#FCCC0A",
            "text_color": "#000000"
          }
        ],
        "status": "Not Good",
        "destinations": {
          "north": [
            "Forest Hills - 71 Av",
            "Queensboro Plaza"
          ],
          "south": [
            "Bay Ridge - 95 St",
            "Coney Island - Stillwell Av"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "N",
                "color": "#FCCC0A",
                "text_color": "#000000"
              },
              {
                "name": "R",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 14,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "R",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "N",
                "color": "#FCCC0A",
                "text_color": "#000000"
              },
              {
                "name": "R",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 12,
            "max_scheduled_headway": 13,
            "routes": [
              {
                "name": "R",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ]
      },
      {
        "name": "14 Street–Canarsie",
        "routes": [
          {
            "name": "L",
            "color": "#A7A9AC",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "8 Av"
          ],
          "south": [
            "Canarsie - Rockaway Pkwy"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 6,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "L",
                "color": "#A7A9AC",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 6,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "L",
                "color": "#A7A9AC",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Brighton",
        "routes": [
          {
            "name": "Q",
            "color": "#FCCC0A",
            "text_color": "#000000"
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "96 St"
          ],
          "south": [
            "Coney Island - Stillwell Av"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "Q",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 11,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "Q",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 14,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "Q",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 11,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "Q",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ]
      },
      {
        "name": "Broadway (Brooklyn)",
        "routes": [
          {
            "name": "J",
            "color": "#996633",
            "text_color": null
          },
          {
            "name": "M",
            "color": "#FF6319",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Essex St",
            "Jamaica Center - Parsons/Archer"
          ],
          "south": [
            "Broad St",
            "Middle Village - Metropolitan Av"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 8,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "J",
                "color": "#996633",
                "text_color": null
              },
              {
                "name": "M",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 9,
            "max_scheduled_headway": 8,
            "routes": [
              {
                "name": "J",
                "color": "#996633",
                "text_color": null
              },
              {
                "name": "M",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 6,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "J",
                "color": "#996633",
                "text_color": null
              },
              {
                "name": "M",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 7,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "J",
                "color": "#996633",
                "text_color": null
              },
              {
                "name": "M",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Crosstown",
        "routes": [
          {
            "name": "G",
            "color": "#6CBE45",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Bedford - Nostrand Avs"
          ],
          "south": [
            "Church Av"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 9,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "G",
                "color": "#6CBE45",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 10,
            "max_scheduled_headway": 14,
            "routes": [
              {
                "name": "G",
                "color": "#6CBE45",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Culver",
        "routes": [
          {
            "name": "F",
            "color": "#FF6319",
            "text_color": null
          },
          {
            "name": "G",
            "color": "#6CBE45",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Bedford - Nostrand Avs",
            "Jamaica - 179 St"
          ],
          "south": [
            "Church Av",
            "Coney Island - Stillwell Av"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 7,
            "max_scheduled_headway": 8,
            "routes": [
              {
                "name": "F",
                "color": "#FF6319",
                "text_color": null
              },
              {
                "name": "G",
                "color": "#6CBE45",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 9,
            "routes": [
              {
                "name": "F",
                "color": "#FF6319",
                "text_color": null
              },
              {
                "name": "G",
                "color": "#6CBE45",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Eastern Parkway",
        "routes": [
          {
            "name": "2",
            "color": "#EE352E",
            "text_color": null
          },
          {
            "name": "3",
            "color": "#EE352E",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "137 St - City College",
            "Wakefield - 241 St"
          ],
          "south": [
            "Flatbush Av - Brooklyn College",
            "New Lots Av"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 7,
            "max_scheduled_headway": 7,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 6,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 6,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Franklin Avenue",
        "routes": [
          {
            "name": "S",
            "color": "#6D6E71",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Franklin Av"
          ],
          "south": [
            "Prospect Park"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 20,
            "routes": [
              {
                "name": "S",
                "color": "#6D6E71",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 20,
            "routes": [
              {
                "name": "S",
                "color": "#6D6E71",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Fulton Street",
        "routes": [
          {
            "name": "A",
            "color": "#2850AD",
            "text_color": null
          },
          {
            "name": "C",
            "color": "#2850AD",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "168 St",
            "Inwood - 207 St"
          ],
          "south": [
            "Euclid Av",
            "Far Rockaway - Mott Av",
            "Ozone Park - Lefferts Blvd"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 6,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 13,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 6,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 14,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Jamaica",
        "routes": [
          {
            "name": "J",
            "color": "#996633",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Jamaica Center - Parsons/Archer"
          ],
          "south": [
            "Broad St"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 11,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "J",
                "color": "#996633",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 15,
            "max_scheduled_headway": 17,
            "routes": [
              {
                "name": "J",
                "color": "#996633",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Myrtle Avenue",
        "routes": [
          {
            "name": "M",
            "color": "#FF6319",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Essex St"
          ],
          "south": [
            "Middle Village - Metropolitan Av"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "M",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "M",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "New Lots",
        "routes": [
          {
            "name": "3",
            "color": "#EE352E",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "137 St - City College"
          ],
          "south": [
            "New Lots Av"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 14,
            "routes": [
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 6,
            "max_scheduled_headway": 14,
            "routes": [
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Nostrand Avenue",
        "routes": [
          {
            "name": "2",
            "color": "#EE352E",
            "text_color": null
          }
        ],
        "status": "Not Good",
        "destinations": {
          "north": [
            "Wakefield - 241 St"
          ],
          "south": [
            "Flatbush Av - Brooklyn College"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 15,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Sea Beach",
        "routes": [],
        "status": "No Service",
        "destinations": {
          "north": [],
          "south": []
        },
        "north": [],
        "south": []
      },
      {
        "name": "West End",
        "routes": [
          {
            "name": "N",
            "color": "#FCCC0A",
            "text_color": "#000000"
          }
        ],
        "status": "Not Good",
        "destinations": {
          "north": [
            "Queensboro Plaza"
          ],
          "south": [
            "Coney Island - Stillwell Av"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 13,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "N",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 19,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "N",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ]
      }
    ],
    "Manhattan": [
      {
        "name": "2 Avenue",
        "routes": [
          {
            "name": "Q",
            "color": "#FCCC0A",
            "text_color": "#000000"
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "96 St"
          ],
          "south": [
            "Coney Island - Stillwell Av"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "Q",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 10,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "Q",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ]
      },
      {
        "name": "6 Avenue",
        "routes": [
          {
            "name": "F",
            "color": "#FF6319",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Jamaica - 179 St"
          ],
          "south": [
            "Coney Island - Stillwell Av"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 9,
            "max_scheduled_headway": 18,
            "routes": [
              {
                "name": "F",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 9,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "F",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "F",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 11,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "F",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "7 Avenue",
        "routes": [
          {
            "name": "1",
            "color": "#EE352E",
            "text_color": null
          },
          {
            "name": "2",
            "color": "#EE352E",
            "text_color": null
          },
          {
            "name": "3",
            "color": "#EE352E",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "137 St - City College",
            "Van Cortlandt Park - 242 St",
            "Wakefield - 241 St"
          ],
          "south": [
            "Flatbush Av - Brooklyn College",
            "New Lots Av",
            "South Ferry"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": 7,
            "routes": [
              {
                "name": "1",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 9,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "1",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 4,
            "max_scheduled_headway": 9,
            "routes": [
              {
                "name": "1",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 12,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "1",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "8 Avenue",
        "routes": [
          {
            "name": "A",
            "color": "#2850AD",
            "text_color": null
          },
          {
            "name": "C",
            "color": "#2850AD",
            "text_color": null
          },
          {
            "name": "E",
            "color": "#2850AD",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "168 St",
            "Inwood - 207 St",
            "Jamaica Center - Parsons/Archer"
          ],
          "south": [
            "Euclid Av",
            "Far Rockaway - Mott Av",
            "Ozone Park - Lefferts Blvd",
            "World Trade Center"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 6,
            "max_scheduled_headway": 7,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "E",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 12,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "E",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 12,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "E",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "8 Avenue (Washington Heights)",
        "routes": [
          {
            "name": "A",
            "color": "#2850AD",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Inwood - 207 St"
          ],
          "south": [
            "Far Rockaway - Mott Av",
            "Ozone Park - Lefferts Blvd"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 11,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "14 Street–Canarsie",
        "routes": [
          {
            "name": "L",
            "color": "#A7A9AC",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "8 Av"
          ],
          "south": [
            "Canarsie - Rockaway Pkwy"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 6,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "L",
                "color": "#A7A9AC",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 6,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "L",
                "color": "#A7A9AC",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "42 Street",
        "routes": [
          {
            "name": "S",
            "color": "#6D6E71",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Times Sq - 42 St"
          ],
          "south": [
            "Grand Central - 42 St"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 5,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "S",
                "color": "#6D6E71",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 5,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "S",
                "color": "#6D6E71",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Broadway",
        "routes": [
          {
            "name": "N",
            "color": "#FCCC0A",
            "text_color": "#000000"
          },
          {
            "name": "Q",
            "color": "#FCCC0A",
            "text_color": "#000000"
          },
          {
            "name": "R",
            "color": "#FCCC0A",
            "text_color": "#000000"
          }
        ],
        "status": "Not Good",
        "destinations": {
          "north": [
            "96 St",
            "Forest Hills - 71 Av",
            "Queensboro Plaza"
          ],
          "south": [
            "Bay Ridge - 95 St",
            "Coney Island - Stillwell Av"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 10,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "N",
                "color": "#FCCC0A",
                "text_color": "#000000"
              },
              {
                "name": "Q",
                "color": "#FCCC0A",
                "text_color": "#000000"
              },
              {
                "name": "R",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 9,
            "max_scheduled_headway": 7,
            "routes": [
              {
                "name": "N",
                "color": "#FCCC0A",
                "text_color": "#000000"
              },
              {
                "name": "R",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 11,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "N",
                "color": "#FCCC0A",
                "text_color": "#000000"
              },
              {
                "name": "Q",
                "color": "#FCCC0A",
                "text_color": "#000000"
              },
              {
                "name": "R",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 13,
            "max_scheduled_headway": 7,
            "routes": [
              {
                "name": "N",
                "color": "#FCCC0A",
                "text_color": "#000000"
              },
              {
                "name": "R",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ]
      },
      {
        "name": "Broadway–7 Avenue",
        "routes": [
          {
            "name": "1",
            "color": "#EE352E",
            "text_color": null
          },
          {
            "name": "3",
            "color": "#EE352E",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "137 St - City College",
            "Van Cortlandt Park - 242 St"
          ],
          "south": [
            "New Lots Av",
            "South Ferry"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 7,
            "max_scheduled_headway": 11,
            "routes": [
              {
                "name": "1",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "1",
                "color": "#EE352E",
                "text_color": null
              },
              {
                "name": "3",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Central Park West",
        "routes": [
          {
            "name": "A",
            "color": "#2850AD",
            "text_color": null
          },
          {
            "name": "C",
            "color": "#2850AD",
            "text_color": null
          },
          {
            "name": "D",
            "color": "#FF6319",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "168 St",
            "Inwood - 207 St",
            "Norwood - 205 St"
          ],
          "south": [
            "34 St - Herald Sq",
            "Euclid Av",
            "Far Rockaway - Mott Av",
            "Ozone Park - Lefferts Blvd"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": 13,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "D",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 13,
            "routes": [
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 9,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "D",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Flushing",
        "routes": [
          {
            "name": "7",
            "color": "#B933AD",
            "text_color": null
          }
        ],
        "status": "Not Good",
        "destinations": {
          "north": [
            "Flushing - Main St"
          ],
          "south": [
            "34 St - 11 Av"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "7",
                "color": "#B933AD",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 7,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "7",
                "color": "#B933AD",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 22,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "7",
                "color": "#B933AD",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "7",
                "color": "#B933AD",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Lenox Avenue",
        "routes": [
          {
            "name": "2",
            "color": "#EE352E",
            "text_color": null
          }
        ],
        "status": "Not Good",
        "destinations": {
          "north": [
            "Wakefield - 241 St"
          ],
          "south": [
            "Flatbush Av - Brooklyn College"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 11,
            "max_scheduled_headway": 6,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 8,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "2",
                "color": "#EE352E",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Lexington Avenue",
        "routes": [
          {
            "name": "4",
            "color": "#00933C",
            "text_color": null
          },
          {
            "name": "5",
            "color": "#00933C",
            "text_color": null
          },
          {
            "name": "6",
            "color": "#00933C",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "E 180 St",
            "Pelham Bay Park",
            "Woodlawn"
          ],
          "south": [
            "Bowling Green",
            "Brooklyn Bridge - City Hall"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 5,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "4",
                "color": "#00933C",
                "text_color": null
              },
              {
                "name": "5",
                "color": "#00933C",
                "text_color": null
              },
              {
                "name": "6",
                "color": "#00933C",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 8,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "6",
                "color": "#00933C",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 5,
            "max_scheduled_headway": 14,
            "routes": [
              {
                "name": "4",
                "color": "#00933C",
                "text_color": null
              },
              {
                "name": "5",
                "color": "#00933C",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 15,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "6",
                "color": "#00933C",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Nassau Street",
        "routes": [
          {
            "name": "J",
            "color": "#996633",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Jamaica Center - Parsons/Archer"
          ],
          "south": [
            "Broad St"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "J",
                "color": "#996633",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 14,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "J",
                "color": "#996633",
                "text_color": null
              }
            ]
          }
        ]
      }
    ],
    "Queens": [
      {
        "name": "Astoria",
        "routes": [],
        "status": "No Service",
        "destinations": {
          "north": [],
          "south": []
        },
        "north": [],
        "south": []
      },
      {
        "name": "Crosstown",
        "routes": [
          {
            "name": "G",
            "color": "#6CBE45",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Bedford - Nostrand Avs"
          ],
          "south": [
            "Church Av"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 9,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "G",
                "color": "#6CBE45",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 10,
            "max_scheduled_headway": 14,
            "routes": [
              {
                "name": "G",
                "color": "#6CBE45",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Flushing",
        "routes": [
          {
            "name": "7",
            "color": "#B933AD",
            "text_color": null
          }
        ],
        "status": "Not Good",
        "destinations": {
          "north": [
            "Flushing - Main St"
          ],
          "south": [
            "34 St - 11 Av"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 7,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "7",
                "color": "#B933AD",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 7,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "7",
                "color": "#B933AD",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 22,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "7",
                "color": "#B933AD",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 10,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "7",
                "color": "#B933AD",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Fulton Street",
        "routes": [
          {
            "name": "A",
            "color": "#2850AD",
            "text_color": null
          },
          {
            "name": "C",
            "color": "#2850AD",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "168 St",
            "Inwood - 207 St"
          ],
          "south": [
            "Euclid Av",
            "Far Rockaway - Mott Av",
            "Ozone Park - Lefferts Blvd"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 6,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 13,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 6,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 14,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "C",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Jamaica",
        "routes": [
          {
            "name": "J",
            "color": "#996633",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Jamaica Center - Parsons/Archer"
          ],
          "south": [
            "Broad St"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 11,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "J",
                "color": "#996633",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 15,
            "max_scheduled_headway": 17,
            "routes": [
              {
                "name": "J",
                "color": "#996633",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Myrtle Avenue",
        "routes": [
          {
            "name": "M",
            "color": "#FF6319",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Essex St"
          ],
          "south": [
            "Middle Village - Metropolitan Av"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "M",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "M",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Queens Boulevard",
        "routes": [
          {
            "name": "E",
            "color": "#2850AD",
            "text_color": null
          },
          {
            "name": "F",
            "color": "#FF6319",
            "text_color": null
          },
          {
            "name": "R",
            "color": "#FCCC0A",
            "text_color": "#000000"
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Forest Hills - 71 Av",
            "Jamaica - 179 St",
            "Jamaica Center - Parsons/Archer"
          ],
          "south": [
            "Bay Ridge - 95 St",
            "Coney Island - Stillwell Av",
            "World Trade Center"
          ]
        },
        "north": [
          {
            "type": "Express",
            "max_actual_headway": 6,
            "max_scheduled_headway": 10,
            "routes": [
              {
                "name": "E",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "F",
                "color": "#FF6319",
                "text_color": null
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 7,
            "max_scheduled_headway": 12,
            "routes": [
              {
                "name": "E",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "F",
                "color": "#FF6319",
                "text_color": null
              },
              {
                "name": "R",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ],
        "south": [
          {
            "type": "Express",
            "max_actual_headway": 6,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "E",
                "color": "#2850AD",
                "text_color": null
              },
              {
                "name": "F",
                "color": "#FF6319",
                "text_color": null
              },
              {
                "name": "R",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          },
          {
            "type": "Local",
            "max_actual_headway": 14,
            "max_scheduled_headway": 15,
            "routes": [
              {
                "name": "R",
                "color": "#FCCC0A",
                "text_color": "#000000"
              }
            ]
          }
        ]
      },
      {
        "name": "Rockaway (Far Rockaway Branch)",
        "routes": [
          {
            "name": "A",
            "color": "#2850AD",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Inwood - 207 St"
          ],
          "south": [
            "Far Rockaway - Mott Av"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 20,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 17,
            "max_scheduled_headway": 20,
            "routes": [
              {
                "name": "A",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ]
      },
      {
        "name": "Rockaway (Rockaway Park Branch)",
        "routes": [
          {
            "name": "S",
            "color": "#6D6E71",
            "text_color": null
          }
        ],
        "status": "Good Service",
        "destinations": {
          "north": [
            "Rockaway Blvd"
          ],
          "south": [
            "Rockaway Park - Beach 116 St"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 20,
            "max_scheduled_headway": 25,
            "routes": [
              {
                "name": "S",
                "color": "#6D6E71",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 17,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "S",
                "color": "#6D6E71",
                "text_color": null
              }
            ]
          }
        ]
      }
    ],
    "Staten Island": [
      {
        "name": "Staten Island",
        "routes": [
          {
            "name": "SIR",
            "color": "#2850AD",
            "text_color": null
          }
        ],
        "status": "No Service",
        "destinations": {
          "north": [
            "St George"
          ],
          "south": [
            "Huguenot"
          ]
        },
        "north": [
          {
            "type": null,
            "max_actual_headway": 20,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "SIR",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ],
        "south": [
          {
            "type": null,
            "max_actual_headway": 12,
            "max_scheduled_headway": null,
            "routes": [
              {
                "name": "SIR",
                "color": "#2850AD",
                "text_color": null
              }
            ]
          }
        ]
      }
    ]
  }
};

export default sampleData;