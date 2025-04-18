# GAIA AIR Crafts Project Structure (8‑Part COAFI Framework)

Below is the authoritative directory tree for the **gaia‑air‑crafts** repository, reflecting the finalized 8‑Part COAFI architecture (Parts 0–7) and every defined chapter within each Part. Keep this as the single source of truth when scaffolding folders or validating filenames.

```plaintext
gaia-air-crafts/
├── .github/
│   └── workflows/
│       └── docs-validation.yml
├── .gitignore
├── AToC.md
├── COAFI.md
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
│
├── GP-FD/                      # Part 0 – Program Foundations
│   ├── ToC-GP-FD.md
│   ├── 00_Intro_Vision/
│   ├── 01_Theories_Proofs/
│   ├── 02_Regulatory_Standards/
│   ├── 03_Cross_Disciplinary/
│   ├── 04_Ethical_AI/
│   ├── 05_Interplanetary_Vision/
│   └── 06_Security_Frameworks/
│
├── GP-AM/                      # Part 1 – Air Systems & Airframes
│   ├── ToC-GP-AM.md
│   └── AMPEL_0100/
│       ├── ATA00_Intro_General/
│       ├── ATA01_Aircraft_General/
│       ├── ATA02_Operations/
│       ├── ATA03_Performance/
│       ├── ATA04_Airworthiness/
│       ├── ATA05_Time_Limits_Maintenance/
│       ├── ATA06_Dimensions_Areas/
│       ├── ATA07_Lifting_Shoring/
│       ├── ATA08_Leveling_Weighing/
│       ├── ATA09_Towing_Taxiing/
│       ├── ATA10_Parking_Mooring/
│       ├── ATA11_Placards_Markings/
│       ├── ATA12_Servicing/
│       ├── ATA13_Hydraulic_Power/
│       ├── ATA14_Pneumatic_Power/
│       ├── ATA18_Vibration_Noise/
│       ├── ATA20_Standard_Practices_Airframe/
│       ├── ATA21_Air_Conditioning/
│       ├── ATA22_Auto_Flight/
│       ├── ATA23_Communications/
│       ├── ATA24_Electrical_Power/
│       ├── ATA25_Equipment_Furnishings/
│       ├── ATA26_Fire_Protection/
│       ├── ATA27_Flight_Controls/
│       ├── ATA28_Fuel/
│       ├── ATA29_Hydraulic_Power/
│       ├── ATA30_Ice_Rain_Protection/
│       ├── ATA31_Indicating_Recording/
│       ├── ATA32_Landing_Gear/
│       ├── ATA33_Lights/
│       ├── ATA34_Navigation/
│       ├── ATA35_Oxygen/
│       ├── ATA36_Pneumatic/
│       ├── ATA37_Vacuum/
│       ├── ATA38_Water_Waste/
│       ├── ATA39_Elec_Panels/
│       ├── ATA41_Water_Ballast/
│       ├── ATA42_IMA/
│       ├── ATA44_Cabin_Systems/
│       ├── ATA45_Central_Maintenance_System/
│       ├── ATA46_Information_Systems/
│       ├── ATA47_Nitrogen_Generation/
│       ├── ATA49_Airborne_Auxiliary_Power/
│       ├── ATA50_Cargo_Compartments/
│       ├── ATA51_Structures_General/
│       ├── ATA52_Doors/
│       ├── ATA53_Fuselage/
│       ├── ATA54_Nacelles_Pylons/
│       ├── ATA55_Stabilizers/
│       ├── ATA56_Windows/
│       ├── ATA57_Wings/
│       ├── ATA60_Standard_Practices_Engine/
│       ├── ATA61_Propellers/
│       ├── ATA62_Main_Rotor/
│       ├── ATA63_Main_Rotor_Drive/
│       ├── ATA64_Tail_Rotor/
│       ├── ATA65_Tail_Rotor_Drive/
│       ├── ATA66_Folding_Blades/
│       ├── ATA67_Rotors_Flight_Control/
│       ├── ATA70_Standard_Practices_Engine/
│       ├── ATA71_Power_Plant/
│       ├── ATA72_Engine/
│       ├── ATA72-Q01_Quantum_Propulsion/
│       ├── ATA73_Engine_Fuel_Control/
│       ├── ATA74_Ignition/
│       ├── ATA75_Air/
│       ├── ATA76_Engine_Controls/
│       ├── ATA77_Engine_Indicating/
│       ├── ATA78_Exhaust/
│       ├── ATA79_Oil/
│       ├── ATA80_Starting/
│       ├── ATA83_Accessory_Gearboxes/
│       ├── ATA85_Fuel_Cell_System/
│       ├── ATA91_Charts/
│       ├── ATA92_Electrical_Wiring/
│       ├── ATA95_Special_Equipment/
│       ├── ATA97_Wiring_Reporting/
│       └── ATA99_Special_Tech/
│
├── GP-AS/                      # Part 2 – Space Systems & Spaceframes
│   ├── ToC-GP-AS.md
│   └── AMPELPLUS_0200/
│       ├── AS00_Intro_General/
│       ├── AS01_Spacecraft_General/
│       ├── AS02_Mission_Operations/
│       ├── AS03_Performance/
│       ├── AS04_Safety_Reliability/
│       ├── AS05_Maintenance_Servicing/
│       ├── AS06_Dimensions_Coords/
│       ├── AS07_Handling_Transport/
│       ├── AS08_Mass_Props_Balance/
│       ├── AS09_Launch_Vehicle_IF/
│       ├── AS10_Storage_Preservation/
│       ├── AS11_Placards_Markings_Space/
│       ├── AS12_Servicing_Space/
│       ├── AS13_Fluid_Power_Mechanisms/
│       ├── AS14_Pressurized_Gas/
│       ├── AS18_Vibration_Acoustic/
│       ├── AS20_Standard_Practices_Structure/
│       ├── AS21_ECLSS/
│       ├── AS22_GNC/
│       ├── AS23_Communications_Space/
│       ├── AS24_EPS/
│       ├── AS25_Crew_Systems_Habitability/
│       ├── AS26_Hazard_Detection_Safety/
│       ├── AS27_Flight_Control_Actuation/
│       ├── AS30_TPS_Temp_Control/
│       ├── AS31_CDH/
│       ├── AS32_Landing_Recovery/
│       ├── AS33_Lighting_Space/
│       ├── AS34_Nav_Sensors/
│       ├── AS39_Crew_Interface/
│       ├── AS41_Ballast_Systems/
│       ├── AS42_Integrated_Avionics/
│       ├── AS44_Payload_Experiment/
│       ├── AS45_SHMS/
│       ├── AS46_OnBoard_Info_Systems/
│       ├── AS49_Aux_Power_Space/
│       ├── AS50_Payload_Cargo/
│       ├── AS51_Structures_Space/
│       ├── AS52_Mechanisms/
│       ├── AS53_Primary_Structure_Vessel/
│       ├── AS54_Propulsion_Module_Struct/
│       ├── AS55_Aero_Control_Surfaces/
│       ├── AS56_Viewports_Windows/
│       ├── AS57_Lifting_Aerobraking/
│       ├── AS60_Standard_Practices_Propulsion/
│       ├── AS71_Propulsion_Systems/
│       ├── AS72_Engine_Details/
│       ├── AS72-Q01_Quantum_Propulsion_Space/
│       ├── AS73_Propellant_Management/
│       ├── AS74_Ignition_Systems/
│       ├── AS75_Propulsion_Gas_Systems/
│       ├── AS76_Propulsion_Control/
│       ├── AS77_Propulsion_Indicating/
│       ├── AS78_Exhaust_Nozzles/
│       ├── AS79_Propulsion_Lubrication/
│       ├── AS80_Starting_Systems/
│       ├── AS83_Accessory_Drives/
│       ├── AS85_Fuel_Cell_Power_Gen/
│       ├── AS88_RPOD/
│       ├── AS91_Mission_Data_Charts/
│       ├── AS92_Harnessing_Installation/
│       ├── AS95_Special_Support_Equip/
│       ├── AS97_Wiring_Data_Mgmt/
│       └── AS99_Special_Tech_Space/
│
├── GP-COM/                     # Part 3 – Core Operating Matrix
│   ├── ToC-GP-COM.md
│   ├── AI_01/
│   ├── QAO_02/
│   ├── SEC_03/
│   ├── BC_04/
│   ├── BITT_05/
│   ├── AMPELCORE_06/
│   └── NET_07/
│
├── GP-GRO/                     # Part 4 – Ground & Infrastructure
│   ├── ToC-GP-GRO.md
│   ├── 01_Launch_Facilities/
│   ├── 02_Fueling_Servicing/
│   ├── 03_Data_Control/
│   ├── 04_Ground_Robotics/
│   └── 05_GSE/
│
├── GP-SUPL/                    # Part 5 – Supply Chain & Ethical Logistics
│   ├── ToC-GP-SUPL.md
│   ├── 01_Ethical_Sourcing/
│   ├── 02_Lifecycle_Trace/
│   └── 03_Logistics_Sustain/
│
├── GP-RAME/                    # Part 6 – Robotic Assembly & Maintenance
│   ├── ToC-GP-RAME.md
│   ├── 01_Architecture_CONOPS/
│   ├── 02_Unit_Design/
│   ├── 03_Control_Systems/
│   ├── 04_Deployment_Retrieval/
│   ├── 05_Maintenance_Servicing/
│   └── 06_Software_AI/
│
├── GP-PM/                      # Part 7 – Program Management & Ops
│   ├── ToC-GP-PM.md
│   ├── 01_Cert_Compliance/
│   ├── 02_WBS_Planning/
│   ├── 03_Training_Qual/
│   ├── 04_Lifecycle_Mgmt/
│   ├── 05_QA_CM/
│   └── 06_Risk_Mgmt/
│
├── assets/
│   ├── images/
│   ├── models/
│   ├── fonts/
│   └── styles/
├── scripts/
│   └── validate_filenames.py
├── templates/
│   └── template_ov.md.jinja
├── docs/
├── notebooks/
├── examples/
├── web/
├── config/
└── tests/
```

---

