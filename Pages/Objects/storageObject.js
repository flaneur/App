export const storageObject = JSON.stringify([{
        "Tag": "Identification",
        "Icon": "create-outline",
        "menu": [{
                "Tag": "Application Tag",
                "Access": "R/W",
                "Value": "EliarBLE"
            },
            {
                "Tag": "Device Name",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Device ID1",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Device ID2",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Device ID3",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Vendor Name",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Vendor ID1",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Device Serial No",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Hardware Version",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Firmware Version",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Order Code",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Device Type",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "User Role",
                "Access": "R",
                "Value": "10"
            }
        ]
    },
    {
        "Tag": "Diagnostics",
        "Icon": "md-pulse-outline",
        "menu": [{
                "Tag": "Actual Diagnostics",
                "Access": "R",
                "Value": "EliarBLE"
            },
            {
                "Tag": "Last Diagnostics",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Simulation Process Variable",
                "Access": "R",
                "Value": "Enabled",
                "Assignable Values": [{
                        "Tag": "Enabled"
                    },
                    {
                        "Tag": "Disabled"
                    }
                ]
            },
            {
                "Tag": "Simulation Process Variable Value Conducticity",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Simulation Process Variable Value Concentration",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Simulation Process Variable Value Temperature",
                "Access": "R",
                "Value": "10"
            }
        ]
    },
    {
        "Tag": "Measured Values",
        "Icon": "md-information",
        "menu": [{
                "Tag": "Conductivity",
                "Access": "R",
                "Value": "EliarBLE"
            },
            {
                "Tag": "Concentration",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Temperature",
                "Access": "R",
                "Value": "10"
            }
        ]
    },
    {
        "Tag": "System Units",
        "Icon": "md-grid-outline",
        "menu": [{
                "Tag": "Unit Conductivity",
                "Access": "R",
                "Value": "μS/cm",
                "PossibleValues": [{
                        "Tag": "μS/cm"
                    },
                    {
                        "Tag": "mS/cm"
                    },
                    {
                        "Tag": " S/m"
                    }
                ]
            },
            {
                "Tag": "Unit Concentration",
                "Access": "R",
                "Value": "Na2SO4",
                "PossibleValues": [{
                        "Tag": "NaCl"
                    },
                    {
                        "Tag": "NaOH"
                    },
                    {
                        "Tag": "Na2SO4"
                    }
                ],
                "SubSelectedValue": "g/kg",
                "SubList": {
                    "NaCl": [{
                            "Tag": "g/kg"
                        },
                        {
                            "Tag": "wt%"
                        },
                        {
                            "Tag": "Baume"
                        }
                    ],
                    "NaOH": [{
                            "Tag": "g/kg"
                        },
                        {
                            "Tag": "wt%"
                        },
                        {
                            "Tag": "Baume"
                        }
                    ],
                    "Na2SO4": [{
                            "Tag": "g/kg"
                        },
                        {
                            "Tag": "wt%"
                        }
                    ]
                }
            },
            {
                "Tag": "Unit Temperature",
                "Access": "R",
                "Value": "°C",
                "PossibleValues": [{
                        "Tag": "°C"
                    },
                    {
                        "Tag": "°F"
                    }
                ]
            }
        ]
    },
    {
        "Tag": "Conductivity",
        "Icon": "md-git-network-outline",
        "menu": [{
                "Tag": "Range",
                "Access": "R",
                "Value": "20 mS/cm",
                "PossibleValues": [{
                        "Tag": "2000 µS/cm"
                    },
                    {
                        "Tag": "20 mS/cm"
                    },
                    {
                        "Tag": "200 mS/cm"
                    },
                    {
                        "Tag": "500 mS/cm"
                    },
                    {
                        "Tag": "1000 mS/cm"
                    },
                    {
                        "Tag": "2000 mS/cm"
                    }
                ]
            },
            {
                "Tag": "Temperature Compensation",
                "Access": "R/W",
                "Value": "Non-Linear",
                "Menu": [{
                        "Tag": "Linear"
                    },
                    {
                        "Tag": "Non-Linear"
                    }
                ]
            },
            {
                "Tag": "Temperature Coefficient",
                "Access": "R/W",
                "Menu": [{
                        "Tag": "Linear",
                        "Value": [{
                            "Tag": "Linear Coefficient",
                            "Value": 2.2,
                            "RangeUpper": 40,
                            "RangeLower": 0.5
                        }]
                    },
                    {
                        "Tag": "Non-Linear",
                        "Value": [{
                                "Tag": "T1",
                                "Value": "0.0",
                                "RangeUpper": 130.0,
                                "RangeLower": -10.0
                            },
                            {
                                "Tag": "T2",
                                "Value": "10.0",
                                "RangeUpper": 130.0,
                                "RangeLower": -10.0
                            },
                            {
                                "Tag": "T3",
                                "Value": "20.0",
                                "RangeUpper": 130.0,
                                "RangeLower": -10.0
                            },
                            {
                                "Tag": "T4",
                                "Value": "50.0",
                                "RangeUpper": 130.0,
                                "RangeLower": -10.0
                            },
                            {
                                "Tag": "T5",
                                "Value": "60.0",
                                "RangeUpper": 130.0,
                                "RangeLower": -10.0
                            },
                            {
                                "Tag": "C1",
                                "Value": "1.8",
                                "RangeUpper": 5.4,
                                "RangeLower": 0.0
                            },
                            {
                                "Tag": "C2",
                                "Value": "1.9",
                                "RangeUpper": "54",
                                "RangeLower": 0.0
                            },
                            {
                                "Tag": "C3",
                                "Value": "2.0",
                                "RangeUpper": 5.4,
                                "RangeLower": 0.0
                            },
                            {
                                "Tag": "C4",
                                "Value": "2.1",
                                "RangeUpper": 5.4,
                                "RangeLower": 0.0
                            },
                            {
                                "Tag": "C5",
                                "Value": "2.2",
                                "RangeUpper": 5.4,
                                "RangeLower": 0.0
                            }
                        ]
                    }
                ]
            },
            {
                "Tag": "Reference Temperature",
                "Access": "R",
                "Value": "0.0",
                "PossibleValues": [{
                        "Tag": "°C",
                        "Value": 25.0,
                        "RangeUpper": 30.0,
                        "RangeLower": 15.0
                    },
                    {
                        "Tag": "°F",
                        "Value": 77.0,
                        "RangeUpper": 86.0,
                        "RangeLower": 59.0
                    }
                ]
            },
            {
                "Tag": "Cell Constant",
                "Access": "R",
                "Value": "10"
            },
            {
                "Tag": "Mounting Factor",
                "Access": "R/W",
                "Value": 1.0,
                "PossibleValues": {
                    "RangeUpper": 1.1,
                    "RangeLower": 0.9
                }
            },
            {
                "Tag": "Zero Point",
                "Access": "R/W",
                "Menu": [{
                        "Tag": "2000 µS/cm",
                        "Value": "0.0",
                        "RangeUpper": "100.0",
                        "RangeLower": "-100.0",
                        "Stepsize": "1"
                    },
                    {
                        "Tag": "20 mS/cm",
                        "Value": "0.0",
                        "RangeUpper": "1",
                        "RangeLower": "-1",
                        "Stepsize": "0.01"
                    },
                    {
                        "Tag": "200 mS/cm",
                        "Value": "0.0",
                        "RangeUpper": "10.0",
                        "RangeLower": "-10.0",
                        "Stepsize": "0.10"
                    },
                    {
                        "Tag": "500 mS/cm",
                        "Value": "0.0",
                        "RangeUpper": "25.0",
                        "RangeLower": "-25.0",
                        "Stepsize": "0.25"
                    },
                    {
                        "Tag": "1000 mS/cm",
                        "Value": "0.0",
                        "RangeUpper": "50.0",
                        "RangeLower": "-50.0",
                        "Stepsize": "0.5"
                    },
                    {
                        "Tag": "2000 mS/cm",
                        "Value": "0.0",
                        "RangeUpper": "100.0",
                        "RangeLower": "-100.0",
                        "Stepsize": "0.1"
                    }
                ]
            },
            {
                "Tag": "Filter Count Constant",
                "Access": "R/W",
                "Value": 20,
                "PossibleValues": {
                    "RangeUpper": 100,
                    "RangeLower": 0
                }
            }
        ]
    },
    {
        "Tag": "Concentration",
        "Icon": "md-flask",
        "menu": [{
                "Tag": "Measurement Type",
                "Access": "R",
                "Value": "NaCl",
                "PossibleValues": [{
                        "Tag": "NaCl"
                    },
                    {
                        "Tag": "NaOH"
                    },
                    {
                        "Tag": "Na2SO4"
                    },
                    {
                        "Tag": "No Function"
                    }
                ]
            },
            {
                "Tag": "Measurement Range",
                "Access": "R",
                "Value": "NaOH Low",
                "Menu": [{
                    "Tag": "NaOH High"

                }, {
                    "Tag": "NaOH Low"
                }]
            }
        ]
    },
    {
        "Tag": "Output1",
        "Icon": "md-play-outline",
        "menu": [{
                "Tag": "Output Type",
                "Access": "R",
                "Value": "IO-Link",
                "PossibleValues": [{
                        "Tag": "Current"
                    },
                    {
                        "Tag": "Switch"
                    },
                    {
                        "Tag": "IO-Link"
                    },
                    {
                        "Tag": "Off"
                    }
                ]
            },
            {
                "Tag": "Current Output",
                "Access": "R",
                "menu": [{
                        "Tag": "Output-Assign",
                        "Access": "R/W",
                        "Value": "Conductivity",
                        "PossibleValues": [{
                                "Tag": "Off"
                            },
                            {
                                "Tag": "Conductivity"
                            },
                            {
                                "Tag": "Concentration"
                            },
                            {
                                "Tag": "Temperature"
                            }
                        ]
                    },
                    {
                        "Tag": "Conductivity Start Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Conductivity End Value",
                        "Access": "R",
                        "Value": "10",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Concentration Start Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Concentration End Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Temperature Start Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Temperature End Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    }
                ]
            },
            {
                "Tag": "Switch Output",
                "Access": "R",
                "Value": "10",
                "menu": [{
                        "Tag": "Switch Function",
                        "Access": "R/W",
                        "Value": "Alarm",
                        "PossibleValues": [{
                                "Tag": "Alarm"
                            },
                            {
                                "Tag": "Off"
                            },
                            {
                                "Tag": "On"
                            },
                            {
                                "Tag": "Limit Conductivity"
                            },
                            {
                                "Tag": "Limit Concentration"
                            },
                            {
                                "Tag": "Limit Temperature"
                            },
                            {
                                "Tag": "Window Conductivity"
                            },
                            {
                                "Tag": "Window Concentration"
                            },
                            {
                                "Tag": "Window Temperature"
                            }
                        ]
                    },
                    {
                        "Tag": "Conductivity On Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Conductivity Off Value",
                        "Access": "R",
                        "Value": "10",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Concentration On Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Concentration Off Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Temperature On Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Temperature Off Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    }
                ]
            },
            {
                "Tag": "IO-Link",
                "Access": "R"
            }
        ]
    },
    {
        "Tag": "Output2",
        "Icon": "md-play-forward-outline",
        "menu": [{
                "Tag": "Output Type",
                "Access": "R",
                "Value": "Digital Input",
                "PossibleValues": [{
                        "Tag": "Current"
                    },
                    {
                        "Tag": "Switch"
                    },
                    {
                        "Tag": "Digital Input"
                    },
                    {
                        "Tag": "Off"
                    }
                ]
            },
            {
                "Tag": "Current Output",
                "Access": "R",
                "Value": "10",
                "menu": [{
                        "Tag": "Output-Assign",
                        "Access": "R/W",
                        "Value": "Off",
                        "PossibleValues": [{
                                "Tag": "Off"
                            },
                            {
                                "Tag": "Conductivity"
                            },
                            {
                                "Tag": "Concentration"
                            },
                            {
                                "Tag": "Temperature"
                            }
                        ]
                    },
                    {
                        "Tag": "Conductivity Start Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Conductivity End Value",
                        "Access": "R",
                        "Value": "10",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Concentration Start Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Concentration End Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Temperature Start Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Temperature End Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    }
                ]
            },
            {
                "Tag": "Switch Output",
                "Access": "R",
                "Value": "10",
                "menu": [{
                        "Tag": "Switch Function",
                        "Access": "R/W",
                        "Value": "Alarm",
                        "PossibleValues": [{
                                "Tag": "Alarm"
                            },
                            {
                                "Tag": "Off"
                            },
                            {
                                "Tag": "On"
                            },
                            {
                                "Tag": "Limit Conductivity"
                            },
                            {
                                "Tag": "Limit Concentration"
                            },
                            {
                                "Tag": "Limit Temperature"
                            },
                            {
                                "Tag": "Window Conductivity"
                            },
                            {
                                "Tag": "Window Concentration"
                            },
                            {
                                "Tag": "Window Temperature"
                            }
                        ]
                    },
                    {
                        "Tag": "Conductivity On Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Conductivity Off Value",
                        "Access": "R",
                        "Value": "10",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Concentration On Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Concentration Off Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Temperature On Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    },
                    {
                        "Tag": "Temperature Off Value",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    }
                ]
            },
            {
                "Tag": "Digital Input",
                "Access": "R",
                "menu": [{
                        "Tag": "D-In Polarity",
                        "Access": "R",
                        "Value": "Low",
                        "PossibleValues": [{
                                "Tag": "Low"
                            },
                            {
                                "Tag": "High"
                            }
                        ]
                    },
                    {
                        "Tag": "D-In Function",
                        "Access": "R",
                        "Value": "Off",
                        "PossibleValues": [{
                                "Tag": "Measurement Assignment Chemical"
                            },
                            {
                                "Tag": "Off"
                            }
                        ]
                    },
                    {
                        "Tag": "D-In Polarity HIGH",
                        "Access": "R",
                        "Value": "NaOH",
                        "PossibleValues": [{
                                "Tag": "NaOH"
                            },
                            {
                                "Tag": "NaCl"
                            },
                            {
                                "Tag": "Na2SO4"
                            }
                        ]
                    },
                    {
                        "Tag": "D-IN Polarity LOW",
                        "Access": "R",
                        "Value": "NaCl",
                        "PossibleValues": [{
                                "Tag": "NaOH"
                            },
                            {
                                "Tag": "NaCl"
                            },
                            {
                                "Tag": "Na2SO4"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "Tag": "Display",
        "Icon": "md-easel-outline",
        "menu": [{
            "Tag": "Backlight",
            "Access": "R",
            "Value": "On",
            "PossibleValues": [{
                    "Tag": "Off"
                },
                {
                    "Tag": "BLE"
                }
            ]
        }]
    },
    {
        "Tag": "Communication",
        "Icon": "md-radio",
        "menu": [{
                "Tag": "Communication Type",
                "Access": "R",
                "Value": "Off",
                "PossibleValues": [{
                        "Tag": "Off"
                    },
                    {
                        "Tag": "Bluetooth"
                    },
                    {
                        "Tag": "WiFi"
                    }
                ]
            },
            {
                "Tag": "Bluetooth",
                "Access": "R",
                "menu": [{
                        "Tag": "Bluetooth Function",
                        "Access": "R/W",
                        "Value": "On",
                        "PossibleValues": [{
                                "Tag": "Off"
                            },
                            {
                                "Tag": "On"
                            }
                        ]
                    },
                    {
                        "Tag": "Bluetooth Tx Power Level",
                        "Access": "R",
                        "Value": "1",
                        "PossibleValues": [{
                                "Tag": "0"
                            },
                            {
                                "Tag": "4"
                            }
                        ]
                    },
                    {
                        "Tag": "Bluetooth Connection Status",
                        "Access": "R/W",
                        "Value": "On",
                        "PossibleValues": [{
                                "Tag": "Off"
                            },
                            {
                                "Tag": "On"
                            }
                        ]
                    }
                ]
            },
            {
                "Tag": "WiFi",
                "Access": "R",
                "menu": [{
                        "Tag": "WiFi Function",
                        "Access": "R/W",
                        "Value": "On",
                        "PossibleValues": [{
                                "Tag": "Off"
                            },
                            {
                                "Tag": "On"
                            }
                        ]
                    },
                    {
                        "Tag": "WiFi Mode",
                        "Access": "R/W",
                        "Value": "Access Point Mode",
                        "PossibleValues": [{
                                "Tag": "Access Point Mode"
                            },
                            {
                                "Tag": "Station Mode"
                            }
                        ]
                    },
                    {
                        "Tag": "SSID",
                        "Access": "R/W",
                        "Value": "ICT-12345678"
                    },
                    {
                        "Tag": "Password",
                        "Access": "W"
                    },
                    {
                        "Tag": "Configure IPv4",
                        "Access": "R/W",
                        "Value": "Manual",
                        "PossibleValues": [{
                                "Tag": "Manual"
                            },
                            {
                                "Tag": "DHCP"
                            }
                        ]
                    },
                    {
                        "Tag": "IP Address",
                        "Access": "R/W",
                        "Value": "132.152.266"
                    },
                    {
                        "Tag": "Subnet Address",
                        "Access": "R/W",
                        "Value": "15"
                    },
                    {
                        "Tag": "Router",
                        "Access": "R/W",
                        "Value": "15",
                        "Limit": "100"
                    }
                ]
            }
        ]
    },
    {
        "Tag": "System",
        "Icon": "md-hammer-sharp",
        "menu": [{
                "Tag": "Language",
                "Access": "R",
                "Value": "English",
                "PossibleValues": [{
                        "Tag": "English"
                    },
                    {
                        "Tag": "Türkçe"
                    }
                ]
            },
            {
                "Tag": "Set Access Code",
                "Access": "W"
            },
            {
                "Tag": "Access Code",
                "Access": "W"
            },
            {
                "Tag": "Auto-Calibrate",
                "Access": "W"
            },
            {
                "Tag": "Device Reset",
                "Access": "R",
                "PossibleValues": [{
                        "Tag": "Cancel"
                    },
                    {
                        "Tag": "Device Restore Factory"
                    },
                    {
                        "Tag": "Device Auto Calibration"
                    },
                    {
                        "Tag": "Parameters Restore"
                    },
                    {
                        "Tag": "Wifi Parameters Restore"
                    },
                    {
                        "Tag": "Restart"
                    }
                ]
            },
            {
                "Tag": "User Role",
                "Access": "R"
            }
        ]
    }
]);