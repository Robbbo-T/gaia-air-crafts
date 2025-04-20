# ToC-GP-AM.md

*Table of Contents – GP-AM Air Systems & Airframes (Part 1)*

## Introduction

This document serves as the central Table of Contents for the **GP-AM (Part 1 – Air Systems & Airframes)** S1000D documentation set. This set details the design, specifications, maintenance procedures, and operational aspects of the airframe and its associated systems, organized primarily using the ATA 100 chapter breakdown structure, with modern extensions.

Unlike the previous document-centric approach, this Table of Contents lists the individual **S1000D Data Modules (DMs)** and **Illustration Control Numbers (ICNs)** that contain the specific units of information. Each listed item represents a self-contained digital file managed within the project's Common Source Data Base (CSDB).

Use this file to understand the structure and navigate the extensive S1000D documentation set for the Air Systems & Airframes component.

## S1000D Data Module & ICN Naming Convention

The documentation follows the S1000D Issue 4.2 standardized naming convention based on the GP-AM project ontology:

**Data Module Code (DMC):**
`modelIdentCode-systemDiffCode-systemCode-subSystemCode-subSubSystemCode-assyCode-disassyCode-disassyCodeVariant-infoCode-infoCodeVariant-itemLocationCode`

**Illustration Control Number (ICN):**
`originatorCode-modelIdentCode-systemDiffCode-systemCode-subSystemCode-subSubSystemCode-assyCode-disassyCode-disassyCodeVariant-itemLocationCode-graphicsCode-sequenceNumber-issueNumber-issueType-inWorkNumber`

Where (for this project):

*   `modelIdentCode`: `GP-AM` (GAIA AIR - AMPEL Project)
*   `systemDiffCode`: `AP` (AMPEL Platform General) or `A4` (A4001 Avionics)
*   `systemCode`: 2-digit ATA Chapter (e.g., `00`, `42`, `72`)
*   `subSystemCode`: 2-char Subsystem code (e.g., `00`, `Q0`)
*   `subSubSystemCode`: 2-char Sub-subsystem code (e.g., `00`, `1`)
*   `assyCode`: 2-char Assembly/Topic code (e.g., `00`, `01`, `03`, `06`)
*   `disassyCode`: 2-char Disassembly code (usually `00`)
*   `disassyCodeVariant`: 1-char Variant (usually `A`)
*   `infoCode`: **3-digit S1000D Info Code** (See mapping below)
*   `infoCodeVariant`: 1-char differentiator (A-Z) for unique DMs
*   `itemLocationCode`: 2-char DM Type (`D`=Descriptive, `A`=Procedural, `L`=Parts List, `W`=Wiring)
*   `originatorCode`: `GAIAAIR` (for ICNs)
*   `graphicsCode`: 5-digit ICN Category Code (10000-99999)
*   `sequenceNumber`: 5-digit sequential number within graphicsCode (00001-99999)
*   `issueNumber`: 3-digit Issue number (001+)
*   `issueType`: 1-char Issue Type (A, C, D)
*   `inWorkNumber`: 2-digit In-work number (00+)

**Fixed [InfoCode] to S1000D infoCode Mapping:**

| Original [InfoCode] | Description                     | Fixed S1000D infoCode | Typical S1000D DM Type (ItemLocationCode) |
|---------------------|---------------------------------|-----------------------|-------------------------------------------|
| ADMIN               | Administrative                  | 001                   | D                                         |
| CAL                 | Calculation / Analysis          | 090                   | D                                         |
| CAT                 | Catalog / List                  | 013                   | D                                         |
| DD                  | Design Document                 | 070                   | D                                         |
| DWG                 | Drawing                         | N/A                   | ICN (GraphicsCode 7xxxx, 8xxxx, 9xxxx)    |
| FIG                 | Figure / Diagram                | N/A                   | ICN (GraphicsCode 1xxxx, 2xxxx, 3xxxx, 4xxxx, 5xxxx, 6xxxx) |
| ICD                 | Interface Control Document      | 060                   | D                                         |
| LIST                | List (Specific)                 | 013                   | D                                         |
| MAN                 | Manual                          | 004                   | D                                         |
| OV                  | Overview                        | 040                   | D                                         |
| PLAN                | Plan                            | 050                   | D                                         |
| PROC                | Procedure                       | 520                   | A                                         |
| REF                 | Reference                       | 016                   | D                                         |
| REQ                 | Requirements                    | 050                   | D                                         |
| RPT                 | Report                          | 060 or 090            | D                                         |
| SDD                 | System Design Description       | 040                   | D                                         |
| SP                  | Specification (General)         | 050                   | D                                         |
| SPEC                | Specification (Often detailed)  | 050                   | D                                         |
| TEST                | Test Plan / Procedure           | 050 (Plan), 520 (Proc), 060 (Results) | D (Plan/Results), A (Proc)                |


---

# Complete S1000D Documentation Item List for GP-AM AMPEL360XWLRGA

This document provides a comprehensive itemized list of all S1000D Data Modules (DMs) and Illustration Control Numbers (ICNs) that comprise the initial certified documentation baseline (MSN1 Published) for the GP-AM AMPEL360XWLRGA aircraft.

Each item is identified by its unique S1000D Code, Type, corresponding Original Document InfoCode (from the project's legacy system, where applicable), a brief description, and its required file extension. This list serves as the definitive manifest of the documentation "master plan" at this baseline.

The organization follows the ATA 100 chapter structure. For simplicity in listing, `infoCodeVariant` and `disassyCodeVariant` are shown as `A` unless variants are needed for uniqueness or specific coding requirements. Classification codes (subSystemCode, assyCode, etc.) are assigned `00` unless the description explicitly aligns with a specific sub-topic defined in our ontology (like assy codes for Architecture=01, Interfaces=02, Design=03, Analysis=05, Test=06, Installation=08, Management=09, Software=10, Hardware=11, Standard Practices=13, Maintenance Planning=14 or subsystem codes like Q0, 1, etc.). The `systemDiffCode` defaults to `AP` for general Airframe/Platform ATA chapters and `A4` specifically for ATA 42.

---

### Foundational Project Data Modules

These DMs are essential for the S1000D environment and are cross-chapter.

| S1000D Code                             | Type      | Original Doc InfoCode | Description                             | File Extension |
|-----------------------------------------|-----------|-----------------------|-----------------------------------------|----------------|
| DMC-GP-AM-A4-42-00-00-00-00-A-022-A-00 | BREX      | BREX                  | Project Business Rules Exchange         | .xml           |
| DMC-GP-AM-A4-42-00-00-00-00-A-003-A-00 | DML       | DML                   | Project Data Module List                | .xml           |
| DMC-GP-AM-A4-42-00-00-00-00-A-014-A-D | Descriptive | CAT/LIST              | Glossary                                | .xml           |
| DMC-GP-AM-A4-42-00-00-00-00-A-015-A-D | Descriptive | CAT/LIST              | Acronyms                                | .xml           |
| DMC-GP-AM-A4-42-00-00-00-00-A-016-A-D | Descriptive | REF                   | Reference Materials List                | .xml           |
| DMC-GP-AM-A4-42-00-00-00-00-A-001-A-D | Descriptive | ADMIN                 | Administrative Information (General)    | .xml           |

---

### ATA Chapter 00: Introduction & General

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                 | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------------|----------------|
| DMC-GP-AM-AP-00-00-00-00-A-040-A-D | Descriptive | OV                    | Aircraft General Overview                   | .xml           |
| DMC-GP-AM-AP-00-00-00-00-A-050-A-D | Descriptive | REQ                   | Aircraft General Requirements               | .xml           |
| DMC-GP-AM-AP-00-00-00-00-A-050-B-D | Descriptive | PLAN                  | Certification Plan                          | .xml           |
| DMC-GP-AM-AP-00-00-03-00-A-070-A-D | Descriptive | DD                    | Design Philosophy                           | .xml           |
| DMC-GP-AM-AP-00-00-00-00-A-040-B-D | Descriptive | SDD                   | System Description (AI Doc Adaptation)      | .xml           |

---

### ATA Chapter 01: Aircraft General

| S1000D Code                             | Type      | Original Doc InfoCode | Description                               | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------|----------------|
| DMC-GP-AM-AP-01-00-00-00-A-040-A-D | Descriptive | OV                    | Aircraft General Overview (ATA 01 Specific) | .xml           |
| DMC-GP-AM-AP-01-00-00-00-A-050-A-D | Descriptive | SPEC                  | Aircraft General Specification (ATA 01)   | .xml           |

---

### ATA Chapter 02: Operations

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                | File Extension |
|-----------------------------------------|-----------|-----------------------|--------------------------------------------|----------------|
| DMC-GP-AM-AP-02-00-00-00-A-040-A-D | Descriptive | OV                    | Operations Overview                        | .xml           |
| DMC-GP-AM-AP-02-00-00-00-A-004-A-D | Descriptive | MAN                   | Flight Operations Manual Content           | .xml           |
| DMC-GP-AM-AP-02-00-00-00-A-050-A-D | Descriptive | PLAN                  | Mission Planning                           | .xml           |

---

### ATA Chapter 03: Performance

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                | File Extension |
|-----------------------------------------|-----------|-----------------------|--------------------------------------------|----------------|
| DMC-GP-AM-AP-03-00-00-00-A-040-A-D | Descriptive | OV                    | Performance Overview                       | .xml           |
| DMC-GP-AM-AP-03-00-00-00-A-050-A-D | Descriptive | SPEC                  | Performance Specification                  | .xml           |
| DMC-GP-AM-AP-03-00-05-00-A-090-A-D | Descriptive | CAL                   | Performance Calculation/Analysis           | .xml           |
| DMC-GP-AM-AP-03-00-06-00-A-060-A-D | Descriptive | RPT                   | Flight Test Report                         | .xml           |

---

### ATA Chapter 04: Airworthiness

| S1000D Code                             | Type      | Original Doc InfoCode | Description                               | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------|----------------|
| DMC-GP-AM-AP-04-00-00-00-A-040-A-D | Descriptive | OV                    | Airworthiness Overview                    | .xml           |
| DMC-GP-AM-AP-04-00-00-00-A-050-A-D | Descriptive | REQ                   | Airworthiness Requirements                | .xml           |
| DMC-GP-AM-AP-04-00-06-00-A-060-A-D | Descriptive | RPT                   | Compliance Report                         | .xml           |
| DMC-GP-AM-AP-04-00-07-00-A-050-A-D | Descriptive | PLAN                  | Certification Plan (Specific Content)     | .xml           |
| DMC-GP-AM-AP-04-00-07-00-A-060-A-D | Descriptive | RPT                   | Certification Report (Specific Content)   | .xml           |
| DMC-GP-AM-AP-04-00-07-00-A-070-A-D | Descriptive | DD/SPEC               | Declaration of Design and Performance (DDP) | .xml           |

---

### ATA Chapter 05: Time Limits & Maintenance

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|----------------|
| DMC-GP-AM-AP-05-00-00-00-A-040-A-D | Descriptive | OV                    | Time Limits & Maintenance Overview             | .xml           |
| DMC-GP-AM-AP-05-00-00-00-A-520-A-A | Procedural | PROC                  | Scheduled Maintenance Procedure              | .xml           |
| DMC-GP-AM-AP-05-00-00-00-A-013-A-D | Descriptive | CAT/LIST              | Life Limits Catalog/List                     | .xml           |
| DMC-GP-AM-AP-05-00-00-00-A-050-A-D | Descriptive | REQ/PLAN              | ALS Requirements / Maintenance Plan (Overall) | .xml           |
| DMC-GP-AM-AP-05-00-00-00-A-040-B-D | Descriptive | SDD                   | Predictive Maint. System Description (AI)    | .xml           |

---

### ATA Chapter 06: Dimensions & Areas

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                     | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------------|----------------|
| DMC-GP-AM-AP-06-00-00-00-A-040-A-D | Descriptive | OV                    | Dimensions & Areas Overview                     | .xml           |
| DMC-GP-AM-AP-06-00-00-00-A-050-A-D | Descriptive | SP                    | Geometry Specification                          | .xml           |
| ICN-GAIAAIR-AMPEL-AP-06-00-00-00-A-00-70001-00001-001-A-00 | ICN       | DWG                   | Overall Aircraft Drawing                        | .svg           |
| ICN-GAIAAIR-AMPEL-AP-06-00-00-00-A-00-70002-00001-001-A-00 | ICN       | DWG                   | Stations & Zones Drawing                        | .svg           |
| DMC-GP-AM-AP-06-00-00-00-A-013-A-D | Descriptive | LIST                  | Reference Points List                           | .xml           |

---

### ATA Chapter 07: Lifting & Shoring

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                     | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------------|----------------|
| DMC-GP-AM-AP-07-00-00-00-A-040-A-D | Descriptive | OV                    | Lifting & Shoring Overview                      | .xml           |
| DMC-GP-AM-AP-07-00-00-00-A-050-A-D | Descriptive | SPEC                  | Lifting & Shoring Specification                   | .xml           |
| ICN-GAIAAIR-AMPEL-AP-07-00-00-00-A-00-70003-00001-001-A-00 | ICN       | DWG                   | Lifting Point Locations Drawing                 | .svg           |
| DMC-GP-AM-AP-07-00-00-00-A-520-A-A | Procedural | PROC                  | Jacking & Shoring Procedure                     | .xml           |
| DMC-GP-AM-AP-07-00-00-00-A-040-B-D | Descriptive | SDD                   | Robotic Jacking System Description              | .xml           |

---

### ATA Chapter 08: Leveling & Weighing

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                 | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------------|----------------|
| DMC-GP-AM-AP-08-00-00-00-A-040-A-D | Descriptive | OV                    | Leveling & Weighing Overview                | .xml           |
| DMC-GP-AM-AP-08-00-00-00-A-520-A-A | Procedural | PROC                  | Weighing & Leveling Procedure               | .xml           |
| DMC-GP-AM-AP-08-00-05-00-A-090-A-D | Descriptive | CAL                   | HPC CG Calculation/Analysis                 | .xml           |
| DMC-GP-AM-AP-08-00-00-00-A-050-A-D | Descriptive | SPEC                  | Leveling Points Specification               | .xml           |
| ICN-GAIAAIR-AMPEL-AP-08-00-00-00-A-00-70004-00001-001-A-00 | ICN       | DWG                   | Leveling Points Drawing                     | .svg           |

---

### ATA Chapter 09: Towing & Taxiing

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                   | File Extension |
|-----------------------------------------|-----------|-----------------------|-----------------------------------------------|----------------|
| DMC-GP-AM-AP-09-00-00-00-A-040-A-D | Descriptive | OV                    | Towing & Taxiing Overview                     | .xml           |
| DMC-GP-AM-AP-09-00-00-00-A-520-A-A | Procedural | PROC                  | Towing & Taxiing Procedure                  | .xml           |
| DMC-GP-AM-AP-09-00-00-00-A-050-A-D | Descriptive | SPEC                  | Towing Limits & Points Specification          | .xml           |
| ICN-GAIAAIR-AMPEL-AP-09-00-00-00-A-00-70005-00001-001-A-00 | ICN       | DWG                   | Towing Points Drawing                         | .svg           |
| DMC-GP-AM-AP-09-00-00-00-A-040-B-D | Descriptive | SDD                   | Autonomous Taxi System Description          | .xml           |

---

### ATA Chapter 10: Parking & Mooring

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                   | File Extension |
|-----------------------------------------|-----------|-----------------------|-----------------------------------------------|----------------|
| DMC-GP-AM-AP-10-00-00-00-A-040-A-D | Descriptive | OV                    | Parking & Mooring Overview                    | .xml           |
| DMC-GP-AM-AP-10-00-00-00-A-520-A-A | Procedural | PROC                  | Parking, Mooring, Storage Procedure           | .xml           |
| DMC-GP-AM-AP-10-00-00-00-A-050-A-D | Descriptive | REQ/PLAN              | Storage Requirements                          | .xml           |
| DMC-GP-AM-AP-10-00-00-00-A-050-B-D | Descriptive | SPEC                  | Cryo Storage Specification                    | .xml           |

---

### ATA Chapter 11: Placards & Markings

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|----------------|
| DMC-GP-AM-AP-11-00-00-00-A-040-A-D | Descriptive | OV                    | Placards & Markings Overview                   | .xml           |
| DMC-GP-AM-AP-11-00-00-00-A-050-A-D | Descriptive | SPEC                  | Markings & Hazard Labels Specification         | .xml           |
| ICN-GAIAAIR-AMPEL-AP-11-00-00-00-A-00-70006-00001-001-A-00 | ICN       | DWG                   | Placard Location Drawing                       | .svg           |
| DMC-GP-AM-AP-11-00-00-00-A-013-A-D | Descriptive | LIST                  | Placard Inventory List                         | .xml           |
| DMC-GP-AM-AP-11-00-00-00-A-040-B-D | Descriptive | SDD                   | AR Placards System Description                 | .xml           |
| DMC-GP-AM-AP-11-00-00-00-A-016-A-D | Descriptive | REF                   | Standards Reference                            | .xml           |

---

### ATA Chapter 12: Servicing

| S1000D Code                             | Type      | Original Doc InfoCode | Description                             | File Extension |
|-----------------------------------------|-----------|-----------------------|-----------------------------------------|----------------|
| DMC-GP-AM-AP-12-00-00-00-A-040-A-D | Descriptive | OV                    | Servicing Overview                      | .xml           |
| DMC-GP-AM-AP-12-00-00-00-A-520-A-A | Procedural | PROC                  | Servicing Procedures                    | .xml           |
| DMC-GP-AM-AP-12-00-00-00-A-050-A-D | Descriptive | SPEC                  | Quantum Coolant Specification           | .xml           |

---

### ATA Chapter 13: Hydraulic Power (Minimal)

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-13-00-00-00-A-040-A-D | Descriptive | OV                    | Hydraulic Power Overview            | .xml           |
| DMC-GP-AM-AP-13-00-00-00-A-040-B-D | Descriptive | SDD                   | Hydraulic System Description        | .xml           |
| DMC-GP-AM-AP-13-00-00-00-A-050-A-D | Descriptive | SPEC                  | Hydraulic Fluids & Pressure Spec    | .xml           |

---

### ATA Chapter 14: Pneumatic Power (Minimal)

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-14-00-00-00-A-040-A-D | Descriptive | OV                    | Pneumatic Power Overview            | .xml           |
| DMC-GP-AM-AP-14-00-00-00-A-040-B-D | Descriptive | SDD                   | Pneumatic System Description        | .xml           |

---

### ATA Chapter 18: Vibration & Noise

| S1000D Code                             | Type      | Original Doc InfoCode | Description                             | File Extension |
|-----------------------------------------|-----------|-----------------------|-----------------------------------------|----------------|
| DMC-GP-AM-AP-18-00-00-00-A-040-A-D | Descriptive | OV                    | Vibration & Noise Overview              | .xml           |
| DMC-GP-AM-AP-18-00-00-00-A-040-B-D | Descriptive | SDD                   | Vibration & Noise System Description    | .xml           |
| DMC-GP-AM-AP-18-00-00-00-A-050-A-D | Descriptive | SPEC                  | Vibration & Noise Specification         | .xml           |
| DMC-GP-AM-AP-18-00-05-00-A-090-A-D | Descriptive | CAL                   | Vibration Modes Analysis                | .xml           |

---

### ATA Chapter 20: Standard Practices – Airframe

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| DMC-GP-AM-AP-20-00-00-00-A-040-A-D | Descriptive | OV                    | Airframe Standard Practices Overview           | .xml           |
| DMC-GP-AM-AP-20-00-00-00-A-520-A-A | Procedural | PROC                  | Airframe Maintenance Practices Procedure         | .xml           |
| DMC-GP-AM-AP-20-00-00-00-A-050-A-D | Descriptive | SPEC                  | Airframe Tools & Materials Specification         | .xml           |
| DMC-GP-AM-AP-20-00-06-00-A-050-A-D | Descriptive | TEST                  | NDT Methods Test Plan                          | .xml           |
| DMC-GP-AM-AP-20-00-06-00-A-520-B-A | Procedural | TEST                  | NDT Methods Test Procedure                     | .xml           |
| DMC-GP-AM-AP-20-00-00-00-A-040-B-D | Descriptive | SDD                   | AI NDT & Digital Twin Repair System Description | .xml           |

---

### ATA Chapter 21: Air Conditioning

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| DMC-GP-AM-AP-21-00-00-00-A-040-A-D | Descriptive | OV                    | Air Conditioning Overview                    | .xml           |
| DMC-GP-AM-AP-21-00-00-00-A-040-B-D | Descriptive | SDD                   | Air Conditioning System Description            | .xml           |
| DMC-GP-AM-AP-21-00-00-00-A-050-A-D | Descriptive | SPEC                  | Air Conditioning Specification                 | .xml           |
| ICN-GAIAAIR-AMPEL-AP-21-00-01-00-A-00-10001-00001-001-A-00 | ICN       | FIG                   | Air Distribution Diagram                     | .svg           |

---

### ATA Chapter 22: Auto Flight

| S1000D Code                             | Type      | Original Doc InfoCode | Description                               | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| DMC-GP-AM-AP-22-00-00-00-A-040-A-D | Descriptive | OV                    | Auto Flight Overview                      | .xml           |
| DMC-GP-AM-AP-22-00-00-00-A-040-B-D | Descriptive | SDD                   | Auto Flight System Description            | .xml           |
| DMC-GP-AM-AP-22-00-00-00-A-050-A-D | Descriptive | SPEC                  | Autopilot Modes Specification             | .xml           |
| ICN-GAIAAIR-AMPEL-AP-22-00-01-00-A-00-10002-00001-001-A-00 | ICN       | FIG                   | Auto Flight Architecture Diagram          | .svg           |

---

### ATA Chapter 23: Communications

| S1000D Code                             | Type      | Original Doc InfoCode | Description                               | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| DMC-GP-AM-AP-23-00-00-00-A-040-A-D | Descriptive | OV                    | Communications Overview                   | .xml           |
| DMC-GP-AM-AP-23-00-00-00-A-040-B-D | Descriptive | SDD                   | Communications System Description         | .xml           |
| DMC-GP-AM-AP-23-00-00-00-A-050-A-D | Descriptive | SPEC                  | Communications Specification              | .xml           |
| ICN-GAIAAIR-AMPEL-AP-23-00-01-00-A-00-10003-00001-001-A-00 | ICN       | FIG                   | Communications Architecture Diagram       | .svg           |

---

### ATA Chapter 24: Electrical Power

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                   | File Extension |
|-----------------------------------------|-----------|-----------------------|-----------------------------------------------|-----------------|
| DMC-GP-AM-AP-24-00-00-00-A-040-A-D | Descriptive | OV                    | Electrical Power Overview                     | .xml           |
| DMC-GP-AM-AP-24-00-00-00-A-040-B-D | Descriptive | SDD                   | Electrical Power System Description           | .xml           |
| DMC-GP-AM-AP-24-00-00-00-A-050-A-D | Descriptive | SPEC                  | Electrical Power Specification                | .xml           |
| ICN-GAIAAIR-AMPEL-AP-24-00-01-00-A-00-10004-00001-001-A-00 | ICN       | DWG                   | Electrical Architecture Drawing               | .svg           |
| ICN-GAIAAIR-AMPEL-AP-24-00-00-00-A-00-70007-00001-001-A-00 | ICN       | DWG                   | Bus Layout Drawing                            | .svg           |
| DMC-GP-AM-AP-24-00-02-00-A-060-A-D | Descriptive | ICD                   | External Power Interface Control              | .xml           |

---

### ATA Chapter 25: Equipment & Furnishings

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| DMC-GP-AM-AP-25-00-00-00-A-040-A-D | Descriptive | OV                    | Equipment & Furnishings Overview               | .xml           |
| DMC-GP-AM-AP-25-00-00-00-A-050-A-D | Descriptive | SPEC                  | Equipment & Furnishings Specification          | .xml           |
| DMC-GP-AM-AP-25-00-00-00-A-013-A-D | Descriptive | LIST                  | Emergency Equipment List                       | .xml           |
| DMC-GP-AM-AP-25-00-00-00-A-013-B-D | Descriptive | LIST                  | Materials List                                 | .xml           |
| ICN-GAIAAIR-AMPEL-AP-25-00-00-00-A-00-70008-00001-001-A-00 | ICN       | FIG                   | Cabin Layout Diagram                           | .svg           |
| ICN-GAIAAIR-AMPEL-AP-25-00-00-00-A-00-70009-00001-001-A-00 | ICN       | DWG                   | Equipment Locations Drawing                    | .svg           |
| DMC-GP-AM-AP-25-00-00-00-A-040-B-D | Descriptive | SDD                   | VR Windows System Description                  | .xml           |
| DMC-GP-AM-AP-25-00-00-00-A-040-C-D | Descriptive | SDD                   | Cargo Loading System Description               | .xml           |

---

### ATA Chapter 26: Fire Protection

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                | File Extension |
|-----------------------------------------|-----------|-----------------------|--------------------------------------------|-----------------|
| DMC-GP-AM-AP-26-00-00-00-A-040-A-D | Descriptive | OV                    | Fire Protection Overview                   | .xml           |
| DMC-GP-AM-AP-26-00-00-00-A-040-B-D | Descriptive | SDD                   | Fire Protection System Description           | .xml           |
| DMC-GP-AM-AP-26-00-00-00-A-050-A-D | Descriptive | SPEC                  | Fire Protection Specification              | .xml           |
| ICN-GAIAAIR-AMPEL-AP-26-00-00-00-A-00-70010-00001-001-A-00 | ICN       | DWG                   | Detector Locations Drawing                   | .svg           |

---

### ATA Chapter 27: Flight Controls

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| DMC-GP-AM-AP-27-00-00-00-A-040-A-D | Descriptive | OV                    | Flight Controls Overview                     | .xml           |
| DMC-GP-AM-AP-27-00-00-00-A-040-B-D | Descriptive | SDD                   | Flight Controls System Description           | .xml           |
| DMC-GP-AM-AP-27-00-00-00-A-050-A-D | Descriptive | SPEC                  | Flight Controls Specification                | .xml           |
| ICN-GAIAAIR-AMPEL-AP-27-00-01-00-A-00-10005-00001-001-A-00 | ICN       | FIG                   | Flight Controls Architecture Diagram         | .svg           |
| DMC-GP-AM-AP-27-00-02-00-A-060-A-D | Descriptive | ICD                   | GPAM Integration Interface Control             | .xml           |

---

### ATA Chapter 28: Fuel

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                   | File Extension |
|-----------------------------------------|-----------|-----------------------|-----------------------------------------------|-----------------|
| DMC-GP-AM-AP-28-00-00-00-A-040-A-D | Descriptive | OV                    | Fuel Overview                                 | .xml           |
| DMC-GP-AM-AP-28-00-00-00-A-040-B-D | Descriptive | SDD                   | Fuel System Description                         | .xml           |
| DMC-GP-AM-AP-28-00-00-00-A-050-A-D | Descriptive | SPEC                  | Fuel Specification                            | .xml           |
| ICN-GAIAAIR-AMPEL-AP-28-00-00-00-A-00-70011-00001-001-A-00 | ICN       | DWG                   | Tank Locations Drawing                          | .svg           |
| ICN-GAIAAIR-AMPEL-AP-28-00-01-00-A-00-10006-00001-001-A-00 | ICN       | FIG                   | Fuel Architecture Diagram                       | .svg           |

---

### ATA Chapter 29: Hydraulic Power

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-29-00-00-00-A-040-A-D | Descriptive | OV                    | Hydraulic Power Overview            | .xml           |
| DMC-GP-AM-AP-29-00-00-00-A-040-B-D | Descriptive | SDD                   | Hydraulic System Description        | .xml           |

---

### ATA Chapter 30: Ice & Rain Protection

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                | File Extension |
|-----------------------------------------|-----------|-----------------------|--------------------------------------------|-----------------|
| DMC-GP-AM-AP-30-00-00-00-A-040-A-D | Descriptive | OV                    | Ice & Rain Protection Overview           | .xml           |
| DMC-GP-AM-AP-30-00-00-00-A-040-B-D | Descriptive | SDD                   | Ice & Rain Protection System Description | .xml           |
| DMC-GP-AM-AP-30-00-00-00-A-050-A-D | Descriptive | SPEC                  | Ice & Rain Protection Specification        | .xml           |

---

### ATA Chapter 31: Indicating & Recording

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| DMC-GP-AM-AP-31-00-00-00-A-040-A-D | Descriptive | OV                    | Indicating & Recording Overview              | .xml           |
| DMC-GP-AM-AP-31-00-00-00-A-040-B-D | Descriptive | SDD                   | Indicating & Recording System Description    | .xml           |
| DMC-GP-AM-AP-31-00-00-00-A-050-A-D | Descriptive | SPEC                  | Indicating & Recording Specification         | .xml           |
| DMC-GP-AM-AP-31-00-02-00-A-060-A-D | Descriptive | ICD                   | i-Aher0 Link Interface Control               | .xml           |

---

### ATA Chapter 32: Landing Gear

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                | File Extension |
|-----------------------------------------|-----------|-----------------------|--------------------------------------------|-----------------|
| DMC-GP-AM-AP-32-00-00-00-A-040-A-D | Descriptive | OV                    | Landing Gear Overview                      | .xml           |
| DMC-GP-AM-AP-32-00-00-00-A-040-B-D | Descriptive | SDD                   | Landing Gear System Description            | .xml           |
| DMC-GP-AM-AP-32-00-00-00-A-050-A-D | Descriptive | SPEC                  | Landing Gear Specification                 | .xml           |
| ICN-GAIAAIR-AMPEL-AP-32-00-90-00-A-00-90001-00001-001-A-00 | ICN       | DWG                   | Landing Gear Assembly Drawing              | .svg           |

---

### ATA Chapter 33: Lights

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| DMC-GP-AM-AP-33-00-00-00-A-040-A-D | Descriptive | OV                    | Lights Overview                              | .xml           |
| DMC-GP-AM-AP-33-00-00-00-A-040-B-D | Descriptive | SDD                   | Lights System Description                    | .xml           |
| DMC-GP-AM-AP-33-00-00-00-A-050-A-D | Descriptive | SPEC                  | Lights Specification                         | .xml           |
| DMC-GP-AM-AP-33-00-00-00-A-013-A-D | Descriptive | LIST                  | Exterior Lights List                         | .xml           |
| ICN-GAIAAIR-AMPEL-AP-33-00-00-00-A-00-70012-00001-001-A-00 | ICN       | DWG                   | Exterior Light Locations Drawing             | .svg           |

---

### ATA Chapter 34: Navigation

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                 | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------------|-----------------|
| DMC-GP-AM-AP-34-00-00-00-A-040-A-D | Descriptive | OV                    | Navigation Overview                       | .xml           |
| DMC-GP-AM-AP-34-00-00-00-A-040-B-D | Descriptive | SDD                   | Navigation System Description               | .xml           |
| DMC-GP-AM-AP-34-00-00-00-A-050-A-D | Descriptive | SPEC                  | Navigation Specification                  | .xml           |
| DMC-GP-AM-AP-34-00-05-00-A-090-A-D | Descriptive | CAL                   | Navigation Calculation/Analysis             | .xml           |
| DMC-GP-AM-AP-34-00-02-00-A-060-A-D | Descriptive | ICD                   | QAO Integration Interface Control           | .xml           |
| ICN-GAIAAIR-AMPEL-AP-34-00-01-00-A-00-10007-00001-001-A-00 | ICN       | FIG                   | Navigation Architecture Diagram           | .svg           |

---

### ATA Chapter 35: Oxygen

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                | File Extension |
|-----------------------------------------|-----------|-----------------------|--------------------------------------------|-----------------|
| DMC-GP-AM-AP-35-00-00-00-A-040-A-D | Descriptive | OV                    | Oxygen Overview                            | .xml           |
| DMC-GP-AM-AM-AP-35-00-00-00-A-040-B-D | Descriptive | SDD                   | Oxygen System Description                  | .xml           |
| DMC-GP-AM-AP-35-00-00-00-A-050-A-D | Descriptive | SPEC                  | Oxygen Specification                     | .xml           |
| DMC-GP-AM-AP-35-00-00-00-A-013-A-D | Descriptive | LIST                  | Portable Equipment List                    | .xml           |

---

### ATA Chapter 36: Pneumatic

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-36-00-00-00-A-040-A-D | Descriptive | OV                    | Pneumatic Overview                  | .xml           |
| DMC-GP-AM-AP-36-00-00-00-A-040-B-D | Descriptive | SDD                   | Pneumatic System Description        | .xml           |
| ICN-GAIAAIR-AMPEL-AP-36-00-00-00-A-00-70013-00001-001-A-00 | ICN       | DWG                   | Pneumatic Ducting Drawing           | .svg           |

---

### ATA Chapter 37: Vacuum

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-37-00-00-00-A-040-A-D | Descriptive | OV                    | Vacuum Overview                     | .xml           |
| DMC-GP-AM-AP-37-00-00-00-A-040-B-D | Descriptive | SDD                   | Vacuum System Description           | .xml           |

---

### ATA Chapter 38: Water & Waste

| S1000D Code                             | Type      | Original Doc InfoCode | Description                               | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| DMC-GP-AM-AP-38-00-00-00-A-040-A-D | Descriptive | OV                    | Water & Waste Overview                    | .xml           |
| DMC-GP-AM-AP-38-00-00-00-A-040-B-D | Descriptive | SDD                   | Water & Waste System Description            | .xml           |
| DMC-GP-AM-AP-38-00-00-00-A-050-A-D | Descriptive | SPEC                  | Lavatory System Specification             | .xml           |

---

### ATA Chapter 39: Electrical Panels

| S1000D Code                             | Type      | Original Doc InfoCode | Description                               | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| DMC-GP-AM-AP-39-00-00-00-A-040-A-D | Descriptive | OV                    | Electrical Panels Overview                | .xml           |
| ICN-GAIAAIR-AMPEL-AP-39-00-00-00-A-00-70014-00001-001-A-00 | ICN       | DWG                   | Panel Layouts Drawing                       | .svg           |

---

### ATA Chapter 41: Water Ballast

| S1000D Code                             | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| DMC-GP-AM-AP-41-00-00-00-A-040-A-D | Descriptive | OV                    | Water Ballast Overview                | .xml           |
| DMC-GP-AM-AP-41-00-00-00-A-040-B-D | Descriptive | SDD                   | Water Ballast System Description      | .xml           |

---

### ATA Chapter 42: Integrated Modular Avionics (IMA) - A4001

*(Note: These DMs and ICNs use systemDiffCode A4 to indicate A4001-specific content)*

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| DMC-GP-AM-A4-42-00-00-00-00-A-040-A-D | Descriptive | SDD/OV                | A4001 Avionics System Overview               | .xml           |
| DMC-GP-AM-A4-42-00-00-03-00-A-070-A-D | Descriptive | SDD/DD                | A4001 Design Overview (General)              | .xml           |
| DMC-GP-AM-A4-42-00-00-01-00-A-040-A-D | Descriptive | SDD                   | A4001 System Architecture                    | .xml           |
| DMC-GP-AM-A4-42-00-00-02-00-A-060-A-D | Descriptive | ICD                   | A4001 External Interfaces                    | .xml           |
| DMC-GP-AM-A4-42-00-02-00-A-060-B-D | Descriptive | ICD                   | A4001 Internal Interfaces                    | .xml           |
| DMC-GP-AM-A4-42-00-02-00-A-060-C-D | Descriptive | ICD                   | A4001 Interface Protocols                    | .xml           |
| DMC-GP-AM-A4-42-00-02-00-A-060-D-D | Descriptive | ICD                   | A4001 Data Formats                           | .xml           |
| DMC-GP-AM-A4-42-00-00-03-00-A-071-A-D | Descriptive | SDD/SDP               | A4001 Software Design Overview               | .xml           |
| DMC-GP-AM-A4-42-00-00-03-00-A-072-A-D | Descriptive | SDD                   | A4001 Data Design (System)                   | .xml           |
| DMC-GP-AM-A4-42-00-00-03-00-A-073-A-D | Descriptive | SDD                   | A4001 Security Design                        | .xml           |
| DMC-GP-AM-A4-42-00-05-00-A-090-A-D | Descriptive | SSA/CAL/RPT           | A4001 System Safety Assessment               | .xml           |
| DMC-GP-AM-A4-42-00-05-00-A-090-E-D | Descriptive | RPT                   | A4001 FMEA Results                           | .xml           |
| DMC-GP-AM-A4-42-00-05-00-A-090-F-D | Descriptive | RPT                   | A4001 FTA Results                            | .xml           |
| DMC-GP-AM-A4-42-00-05-00-A-090-B-D | Descriptive | CAL/CCA               | A4001 CCA Results                            | .xml           |
| DMC-GP-AM-A4-42-00-05-00-A-090-C-D | Descriptive | CAL/PRA               | A4001 PRA Results                            | .xml           |
| DMC-GP-AM-A4-42-00-05-00-A-090-D-D | Descriptive | CAL/ZSA               | A4001 ZSA Results                            | .xml           |
| DMC-GP-AM-A4-42-00-06-00-A-050-A-D | Descriptive | TEST/OV               | A4001 Test Overview / List                   | .xml           |
| DMC-GP-AM-A4-42-00-06-00-A-050-A-D | Descriptive | TEST/TP               | A4001 Test Procedures Template               | .xml           |
| DMC-GP-AM-A4-42-00-06-00-A-060-A-D | Descriptive | RPT                   | A4001 Test Results Report                  | .xml           |
| DMC-GP-AM-A4-42-00-06-00-A-050-B-D | Descriptive | EQTP                  | A4001 Environmental Qualification Test Plan  | .xml           |
| DMC-GP-AM-A4-42-00-06-00-A-050-D-D | Descriptive | EMITP                 | A4001 EMI/EMC Test Plan                    | .xml           |
| DMC-GP-AM-A4-42-00-06-00-A-050-E-D | Descriptive | ITP                   | A4001 Integration Test Plan                  | .xml           |
| DMC-GP-AM-A4-42-00-00-10-00-A-050-A-D | Descriptive | SDP                   | A4001 Software Development Plan              | .xml           |
| DMC-GP-AM-A4-42-00-00-10-00-A-050-B-D | Descriptive | SVP                   | A4001 Software Verification Plan             | .xml           |
| DMC-GP-AM-A4-42-00-00-10-00-A-013-A-D | Descriptive | SCI/LIST              | A4001 Software Configuration Index           | .xml           |
| DMC-GP-AM-A4-42-00-00-10-00-A-060-A-D | Descriptive | SAS/RPT               | A4001 Software Accomplishment Summary        | .xml           |
| DMC-GP-AM-A4-42-00-00-11-00-A-050-A-D | Descriptive | HDP                   | A4001 Hardware Development Plan              | .xml           |
| DMC-GP-AM-A4-42-00-00-11-00-A-050-B-D | Descriptive | HVP                   | A4001 Hardware Verification Plan             | .xml           |
| DMC-GP-AM-A4-42-00-00-11-00-A-090-A-D | Descriptive | CAL/RPT               | A4001 Component Reliability Analysis         | .xml           |
| DMC-GP-AM-A4-42-00-00-11-00-A-013-A-D | Descriptive | PMP/LIST              | A4001 Parts, Materials and Processes List    | .xml           |
| DMC-GP-AM-A4-42-00-00-08-00-A-520-A-A | Procedural  | II/PROC               | A4001 Installation Instructions (General)    | .xml           |
| DMC-GP-AM-A4-42-00-09-00-A-050-A-D | Descriptive | CMP/PLAN              | A4001 Configuration Management Plan          | .xml           |
| DMC-GP-AM-A4-42-00-09-00-A-050-B-D | Descriptive | QAP/PLAN              | A4001 Quality Assurance Plan                 | .xml           |
| DMC-GP-AM-A4-42-00-09-00-A-090-A-D | Descriptive | HFA/CAL               | A4001 Human Factors Assessment               | .xml           |
| *Specific Test Procedures*          | Procedural  | TEST/PROC             | Specific A4001 Test Procedures (approx. 22 DMs) | .xml           |
| *Specific Installation Procedures*  | Procedural  | II/PROC               | Specific A4001 Installation Procedures       | .xml           |
| ICN-GAIAAIR-AMPEL-A4-42-[class]-[graph]-[seq]-A-001-A-00 | ICN | DWG/FIG               | ATA 42 (A4001) Specific Diagrams (approx. 23 ICNs) | .svg           |

---

### ATA Chapter 44: Cabin Systems

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| DMC-GP-AM-AP-44-00-00-00-A-040-A-D | Descriptive | OV                    | Cabin Systems Overview                   | .xml           |
| DMC-GP-AM-AP-44-00-00-00-A-040-B-D | Descriptive | SDD                   | Cabin Systems Description                    | .xml           |
| DMC-GP-AM-AP-44-00-02-00-A-060-A-D | Descriptive | ICD                   | Cabin System Interfaces Interface Control | .xml           |
| DMC-GP-AM-AP-44-00-00-00-A-050-A-D | Descriptive | SPEC                  | Cabin Systems Specification                  | .xml           |

---

### ATA Chapter 45: Central Maintenance System

| S1000D Code                             | Type      | Original Doc InfoCode | Description                               | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| DMC-GP-AM-AP-45-00-00-00-A-040-A-D | Descriptive | OV                    | CMS Overview                              | .xml           |
| DMC-GP-AM-AP-45-00-00-00-A-040-B-D | Descriptive | SDD                   | CMS System Description                    | .xml           |
| DMC-GP-AM-AP-45-00-00-00-A-050-A-D | Descriptive | SPEC                  | CMS Specification                         | .xml           |
| DMC-GP-AM-AP-45-00-05-00-A-090-A-D | Descriptive | CAL                   | AI Fault Detection Analysis               | .xml           |
| DMC-GP-AM-AP-45-00-02-00-A-060-A-D | Descriptive | ICD                   | Digital Twin Integration Interface Control| .xml           |
| DMC-GP-AM-AP-45-00-00-00-A-520-A-A | Procedural | PROC                  | Software Loading Procedure                | .xml           |
| ICN-GAIAAIR-AMPEL-AP-45-00-01-00-A-00-10008-00001-001-A-00 | ICN       | FIG                   | CMS Architecture Diagram                  | .svg           |

---

### ATA Chapter 46: Information Systems

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| DMC-GP-AM-AP-46-00-00-00-A-040-A-D | Descriptive | OV                    | Information Systems Overview                 | .xml           |
| DMC-GP-AM-AP-46-00-00-00-A-040-B-D | Descriptive | SDD                   | Information Systems Description                | .xml           |
| DMC-GP-AM-AP-46-00-00-00-A-050-A-D | Descriptive | SPEC                  | Information Systems Specification              | .xml           |
| DMC-GP-AM-AP-46-00-02-00-A-060-A-D | Descriptive | ICD                   | Information System Interfaces Interface Control | .xml           |
| ICN-GAIAAIR-AMPEL-AP-46-00-01-00-A-00-10009-00001-001-A-00 | ICN       | FIG                   | Network Architecture Diagram                 | .svg           |
| DMC-GP-AM-AP-46-00-00-00-A-520-A-A | Procedural | PROC                  | Intrusion Prevention Procedure               | .xml           |

---

### ATA Chapter 47: Nitrogen Generation

| S1000D Code                             | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| DMC-GP-AM-AP-47-00-00-00-A-040-A-D | Descriptive | OV                    | Nitrogen Generation Overview          | .xml           |
| DMC-GP-AM-AP-47-00-00-00-A-040-B-D | Descriptive | SDD                   | Nitrogen Generation System Description| .xml           |
| DMC-GP-AM-AP-47-00-00-00-A-050-A-D | Descriptive | SPEC                  | Nitrogen Generation Specification     | .xml           |

---

### ATA Chapter 49: Airborne Auxiliary Power

| S1000D Code                             | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| DMC-GP-AM-AP-49-00-00-00-A-040-A-D | Descriptive | OV                    | APU/Alternative Overview              | .xml           |
| DMC-GP-AM-AP-49-00-00-00-A-040-B-D | Descriptive | SDD                   | APU/Fuel Cell System Description      | .xml           |
| DMC-GP-AM-AP-49-00-00-00-A-050-A-D | Descriptive | SPEC                  | APU/Fuel Cell Specification           | .xml           |

---

### ATA Chapter 50: Cargo Compartments

| S1000D Code                             | Type      | Original Doc InfoCode | Description                               | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| DMC-GP-AM-AP-50-00-00-00-A-040-A-D | Descriptive | OV                    | Cargo Compartments Overview               | .xml           |
| DMC-GP-AM-AP-50-00-00-00-A-040-B-D | Descriptive | SDD                   | Cargo Loading System Description          | .xml           |
| DMC-GP-AM-AP-50-00-00-00-A-050-A-D | Descriptive | SPEC                  | Cargo Compartments Specification          | .xml           |

---

### ATA Chapter 51: Structures – General

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| DMC-GP-AM-AP-51-00-00-00-A-040-A-D | Descriptive | OV                    | Structures General Overview                    | .xml           |
| DMC-GP-AM-AP-51-00-03-00-A-070-A-D | Descriptive | DD                    | Overall Structure Design                       | .xml           |
| DMC-GP-AM-AP-51-00-00-00-A-050-A-D | Descriptive | SPEC                  | Materials Specification                        | .xml           |
| DMC-GP-AM-AP-51-00-00-00-A-520-A-A | Procedural | PROC                  | AAMPEL-OPT Process Procedure                   | .xml           |
| DMC-GP-AM-AP-51-00-05-00-A-090-A-D | Descriptive | CAL                   | FEM Summary Calculation/Analysis               | .xml           |
| DMC-GP-AM-AP-51-00-06-00-A-060-A-D | Descriptive | RPT                   | FEM Results Report                             | .xml           |
| DMC-GP-AM-AP-51-00-00-00-A-040-B-D | Descriptive | SDD                   | AI-SHM System Description                      | .xml           |

---

### ATA Chapter 52: Doors

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| DMC-GP-AM-AP-52-00-00-00-A-040-A-D | Descriptive | OV                    | Doors Overview                                 | .xml           |
| DMC-GP-AM-AP-52-00-00-00-A-013-A-D | Descriptive | LIST                  | Door Inventory List                            | .xml           |
| DMC-GP-AM-AP-52-00-03-00-A-070-A-D | Descriptive | DD                    | Passenger Door Design                          | .xml           |
| DMC-GP-AM-AP-52-00-03-00-A-070-B-D | Descriptive | DD                    | Cargo Door Design                              | .xml           |
| DMC-GP-AM-AP-52-00-00-00-A-050-A-D | Descriptive | SPEC                  | Passenger Door Specification                   | .xml           |
| DMC-GP-AM-AP-52-00-00-00-A-050-B-D | Descriptive | SPEC                  | Cargo Door Specification                       | .xml           |
| DMC-GP-AM-AP-52-00-00-00-A-520-A-A | Procedural | PROC                  | Door Operation Procedure                       | .xml           |
| DMC-GP-AM-AP-52-00-00-00-A-040-B-D | Descriptive | SDD                   | Smart Actuation System Description             | .xml           |

---

### ATA Chapter 53: Fuselage

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| DMC-GP-AM-AP-53-00-00-00-A-040-A-D | Descriptive | OV                    | Fuselage Overview                              | .xml           |
| DMC-GP-AM-AP-53-00-03-00-A-070-A-D | Descriptive | DD                    | Fuselage Structure Design                      | .xml           |
| DMC-GP-AM-AP-53-00-00-00-A-050-A-D | Descriptive | SPEC                  | Fuselage Specification                         | .xml           |
| ICN-GAIAAIR-AMPEL-AP-53-00-00-00-A-00-70015-00001-001-A-00 | ICN       | DWG                   | Structural Layout Drawing                      | .svg           |
| ICN-GAIAAIR-AMPEL-AP-53-00-00-00-A-00-70016-00001-001-A-00 | ICN       | DWG                   | Bulkheads Drawing                              | .svg           |

---

### ATA Chapter 54: Nacelles & Pylons

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| DMC-GP-AM-AP-54-00-00-00-A-040-A-D | Descriptive | OV                    | Nacelles & Pylons Overview                   | .xml           |
| DMC-GP-AM-AP-54-00-03-00-A-070-A-D | Descriptive | DD                    | Nacelle Structure Design                       | .xml           |
| DMC-GP-AM-AP-54-00-03-00-A-070-B-D | Descriptive | DD                    | Pylon Structure Design                         | .xml           |
| DMC-GP-AM-AP-54-00-00-00-A-050-A-D | Descriptive | SPEC                  | Nacelles & Pylons Specification                  | .xml           |
| ICN-GAIAAIR-AMPEL-AP-54-00-90-00-A-00-90002-00001-001-A-00 | ICN       | DWG                   | Nacelle Assembly Drawing                       | .svg           |
| ICN-GAIAAIR-AMPEL-AP-54-00-00-00-A-00-70017-00001-001-A-00 | ICN       | DWG                   | Pylon Interface Drawing                        | .svg           |

---

### ATA Chapter 55: Stabilizers

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| DMC-GP-AM-AP-55-00-00-00-A-040-A-D | Descriptive | OV                    | Stabilizers Overview                           | .xml           |
| DMC-GP-AM-AP-55-00-03-00-A-070-A-D | Descriptive | DD                    | Horizontal Stabilizer Design                   | .xml           |
| DMC-GP-AM-AP-55-00-03-00-A-070-B-D | Descriptive | DD                    | Vertical Stabilizer Design                     | .xml           |
| DMC-GP-AM-AP-55-00-00-00-A-050-A-D | Descriptive | SPEC                  | Stabilizers Specification                      | .xml           |
| ICN-GAIAAIR-AMPEL-AP-55-00-00-00-A-00-70018-00001-001-A-00 | ICN       | DWG                   | Structural Layout Drawing                      | .svg           |

---

### ATA Chapter 56: Windows

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| DMC-GP-AM-AP-56-00-00-00-A-040-A-D | Descriptive | OV                    | Windows Overview                             | .xml           |
| DMC-GP-AM-AP-56-00-00-00-A-050-A-D | Descriptive | SPEC                  | Windows Specification                        | .xml           |
| DMC-GP-AM-AP-56-00-00-00-A-040-B-D | Descriptive | SDD                   | VR Window System Description                 | .xml           |

---

### ATA Chapter 57: Wings

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| DMC-GP-AM-AP-57-00-00-00-A-040-A-D | Descriptive | OV                    | Wings Overview                                 | .xml           |
| DMC-GP-AM-AP-57-00-03-00-A-070-A-D | Descriptive | DD                    | Center Wing Structure Design                   | .xml           |
| DMC-GP-AM-AP-57-00-03-00-A-070-B-D | Descriptive | DD                    | Outer Wing Structure Design                    | .xml           |
| DMC-GP-AM-AP-57-00-00-00-A-050-A-D | Descriptive | SPEC                  | Wings Specification                            | .xml           |
| DMC-GP-AM-AP-57-00-00-00-A-040-B-D | Descriptive | SDD                   | Wing Systems Description                       | .xml           |
| ICN-GAIAAIR-AMPEL-AP-57-00-00-00-A-00-70019-00001-001-A-00 | ICN       | DWG                   | Structural Layout Drawing                      | .svg           |
| DMC-GP-AM-AP-57-00-02-00-A-060-A-D | Descriptive | ICD                   | GPAM Integration Interface Control             | .xml           |

---

### ATA Chapter 60: Standard Practices – Engine

| S1000D Code                             | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| DMC-GP-AM-AP-60-00-00-00-A-040-A-D | Descriptive | OV                    | Engine Standard Practices Overview             | .xml           |
| DMC-GP-AM-AP-60-00-00-00-A-520-A-A | Procedural | PROC                  | Engine Maintenance Practices Procedure         | .xml           |
| DMC-GP-AM-AP-60-00-00-00-A-050-A-D | Descriptive | SPEC                  | Engine Tools & Materials Specification         | .xml           |

---

### ATA Chapter 61: Propellers

| S1000D Code                             | Type      | Original Doc InfoCode | Description                             | File Extension |
|-----------------------------------------|-----------|-----------------------|-----------------------------------------|----------------|
| DMC-GP-AM-AP-61-00-00-00-A-040-A-D | Descriptive | OV                    | Propellers Overview                     | .xml           |
| DMC-GP-AM-AP-61-00-00-00-A-040-B-D | Descriptive | SDD                   | Propellers System Description           | .xml           |
| DMC-GP-AM-AP-61-00-00-00-A-050-A-D | Descriptive | SPEC                  | Propellers Specification                | .xml           |

---

### ATA Chapters 62-70 (Non-Applicable or Duplicate)

*(Content likely consolidated or non-applicable for fixed-wing aircraft)*

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-62-00-00-00-A-040-A-D | Descriptive | OV                    | Main Rotor Overview (N/A)           | .xml           |
| DMC-GP-AM-AP-63-00-00-00-A-040-A-D | Descriptive | OV                    | Main Rotor Drive Overview (N/A)     | .xml           |
| DMC-GP-AM-AP-64-00-00-00-A-040-A-D | Descriptive | OV                    | Tail Rotor Overview (N/A)           | .xml           |
| DMC-GP-AM-AP-65-00-00-00-A-040-A-D | Descriptive | OV                    | Tail Rotor Drive Overview (N/A)     | .xml           |
| DMC-GP-AM-AP-66-00-00-00-A-040-A-D | Descriptive | OV                    | Folding Blades Overview (N/A)       | .xml           |
| DMC-GP-AM-AP-67-00-00-00-A-040-A-D | Descriptive | OV                    | Rotors & Flight Control Overview (N/A)| .xml           |
| DMC-GP-AM-AP-70-00-00-00-A-040-A-D | Descriptive | OV                    | Std Practices – Engine (See ATA 60) | .xml           |

---

### ATA Chapter 71: Power Plant

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-71-00-00-00-A-040-A-D | Descriptive | OV                    | Power Plant Overview                | .xml           |
| DMC-GP-AM-AP-71-00-00-00-A-040-B-D | Descriptive | SDD                   | Propulsion Integration System Desc. | .xml           |

---

### ATA Chapter 72: Engine

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-72-00-00-00-A-040-A-D | Descriptive | OV                    | Engine Overview                     | .xml           |
| DMC-GP-AM-AP-72-00-00-00-A-040-B-D | Descriptive | SDD                   | Engine System Description           | .xml           |
| DMC-GP-AM-AP-72-00-00-00-A-050-A-D | Descriptive | SPEC                  | Engine Specification                | .xml           |

---

### ATA Chapter 72 Q01: Quantum Propulsion

*(Note: Uses Subsystem Code Q0, Sub-subsystem Code 1)*

| S1000D Code                             | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| DMC-GP-AM-AP-72-Q0-1-00-A-040-A-D | Descriptive | OV                    | Quantum Propulsion Overview          | .xml           |
| DMC-GP-AM-AP-72-Q0-1-00-A-040-B-D | Descriptive | SDD                   | Quantum Propulsion System Description | .xml           |
| DMC-GP-AM-AP-72-Q0-1-00-A-050-A-D | Descriptive | SPEC                  | Quantum Propulsion Specification      | .xml           |
| DMC-GP-AM-AP-72-Q0-1-02-00-A-060-A-D | Descriptive | ICD                   | Quantum Propulsion Interface Control  | .xml           |

---

### ATA Chapter 73: Engine Fuel Control

| S1000D Code                             | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| DMC-GP-AM-AP-73-00-00-00-A-040-A-D | Descriptive | OV                    | Engine Fuel Control Overview          | .xml           |
| DMC-GP-AM-AP-73-00-00-00-A-040-B-D | Descriptive | SDD                   | Engine Fuel Control System Description| .xml           |
| DMC-GP-AM-AP-73-00-00-00-A-050-A-D | Descriptive | SPEC                  | FADEC Specification                   | .xml           |

---

### ATA Chapter 74: Ignition

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-74-00-00-00-A-040-A-D | Descriptive | OV                    | Ignition Overview                   | .xml           |
| DMC-GP-AM-AP-74-00-00-00-A-040-B-D | Descriptive | SDD                   | Ignition System Description         | .xml           |
| DMC-GP-AM-AP-74-00-00-00-A-050-A-D | Descriptive | SPEC                  | Ignition Specification                | .xml           |

---

### ATA Chapter 75: Air Supply (Engine)

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-75-00-00-00-A-040-A-D | Descriptive | OV                    | Air Supply Overview                 | .xml           |
| DMC-GP-AM-AP-75-00-00-00-A-040-B-D | Descriptive | SDD                   | Engine Bleed Air System Description | .xml           |
| DMC-GP-AM-AP-75-00-00-00-A-050-A-D | Descriptive | SPEC                  | Engine Air Supply Specification       | .xml           |

---

### ATA Chapter 76: Engine Controls

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-76-00-00-00-A-040-A-D | Descriptive | OV                    | Engine Controls Overview            | .xml           |
| DMC-GP-AM-AP-76-00-00-00-A-040-B-D | Descriptive | SDD                   | Engine Controls System Description  | .xml           |
| DMC-GP-AM-AP-76-00-02-00-A-060-A-D | Descriptive | ICD                   | Engine-Cockpit Interface Control    | .xml           |

---

### ATA Chapter 77: Engine Indicating

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-77-00-00-00-A-040-A-D | Descriptive | OV                    | Engine Indicating Overview          | .xml           |
| DMC-GP-AM-AP-77-00-00-00-A-040-B-D | Descriptive | SDD                   | Engine Indicating System Description| .xml           |
| DMC-GP-AM-AP-77-00-00-00-A-050-A-D | Descriptive | SPEC                  | Engine Indicating Specification     | .xml           |
| DMC-GP-AM-AP-77-00-02-00-A-060-A-D | Descriptive | ICD                   | i-Aher0 Link Interface Control      | .xml           |

---

### ATA Chapter 78: Exhaust

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-78-00-00-00-A-040-A-D | Descriptive | OV                    | Exhaust Overview                    | .xml           |
| DMC-GP-AM-AP-78-00-00-00-A-040-B-D | Descriptive | SDD                   | Exhaust System Description          | .xml           |
| DMC-GP-AM-AP-78-00-00-00-A-050-A-D | Descriptive | SPEC                  | Exhaust Specification               | .xml           |

---

### ATA Chapter 79: Oil System

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-79-00-00-00-A-040-A-D | Descriptive | OV                    | Oil System Overview                 | .xml           |
| DMC-GP-AM-AP-79-00-00-00-A-040-B-D | Descriptive | SDD                   | Oil System Description              | .xml           |
| DMC-GP-AM-AP-79-00-00-00-A-050-A-D | Descriptive | SPEC                  | Oil System Specification              | .xml           |

---

### ATA Chapter 80: Starting System

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-80-00-00-00-A-040-A-D | Descriptive | OV                    | Starting System Overview            | .xml           |
| DMC-GP-AM-AP-80-00-00-00-A-040-B-D | Descriptive | SDD                   | Starting System Description         | .xml           |
| DMC-GP-AM-AP-80-00-00-00-A-050-A-D | Descriptive | SPEC                  | Starting System Specification       | .xml           |
| DMC-GP-AM-AP-80-00-00-00-A-520-A-A | Procedural | PROC                  | Starting Sequence Procedure         | .xml           |

---

### ATA Chapter 83: Accessory Gearboxes

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-83-00-00-00-A-040-A-D | Descriptive | OV                    | Accessory Gearboxes Overview        | .xml           |
| DMC-GP-AM-AP-83-00-00-00-A-040-B-D | Descriptive | SDD                   | Accessory Gearboxes System Desc.    | .xml           |
| DMC-GP-AM-AP-83-00-00-00-A-050-A-D | Descriptive | SPEC                  | Accessory Gearboxes Specification     | .xml           |
| ICN-GAIAAIR-AMPEL-AP-83-00-90-00-A-00-90003-00001-001-A-00 | ICN       | DWG                   | Accessory Gearboxes Assembly Drawing| .svg           |

---

### ATA Chapter 85: Fuel Cell System

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-85-00-00-00-A-040-A-D | Descriptive | OV                    | Fuel Cell System Overview           | .xml           |
| DMC-GP-AM-AP-85-00-00-00-A-040-B-D | Descriptive | SDD                   | Fuel Cell System Description        | .xml           |
| DMC-GP-AM-AP-85-00-00-00-A-050-A-D | Descriptive | SPEC                  | Fuel Cell System Specification        | .xml           |
| DMC-GP-AM-AP-85-00-02-00-A-060-A-D | Descriptive | ICD                   | Fuel Cell System Interface Control  | .xml           |

---

### ATA Chapter 91: Charts

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-91-00-00-00-A-040-A-D | Descriptive | OV                    | Charts Overview                     | .xml           |
| DMC-GP-AM-AP-91-00-00-00-A-013-A-D | Descriptive | CAT/LIST              | Applicable Charts Catalog/List      | .xml           |
| ICN-GAIAAIR-AMPEL-AP-91-00-40-00-A-00-40001-00001-001-A-00 | ICN       | FIG                   | Example Charts Diagram              | .svg           |

---

### ATA Chapter 92: Electrical Wiring

| S1000D Code                             | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| DMC-GP-AM-AP-92-00-00-00-A-040-A-D | Descriptive | OV                    | Electrical Wiring Overview            | .xml           |
| ICN-GAIAAIR-AMPEL-AP-92-00-80-00-A-00-80001-00001-001-A-00 | ICN       | DWG                   | Wiring Diagrams ICN Set             | .svg           |
| DMC-GP-AM-AP-92-00-00-00-A-050-A-D | Descriptive | SPEC                  | Wire Types & Connectors Spec.         | .xml           |
| DMC-GP-AM-AP-92-00-00-00-A-520-A-A | Procedural | PROC                  | Wiring Installation & Repair Proc.    | .xml           |

---

### ATA Chapter 95: Special Equipment

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-95-00-00-00-A-040-A-D | Descriptive | OV                    | Special Equipment Overview          | .xml           |
| DMC-GP-AM-AP-95-00-00-00-A-013-A-D | Descriptive | LIST                  | Special Tools & Equipment List      | .xml           |
| DMC-GP-AM-AP-95-00-00-00-A-050-A-D | Descriptive | SPEC                  | Special Equipment Specification     | .xml           |

---

### ATA Chapter 97: Wiring Reporting

| S1000D Code                             | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| DMC-GP-AM-AP-97-00-00-00-A-040-A-D | Descriptive | OV                    | Wiring Reporting Overview           | .xml           |
| DMC-GP-AM-AP-97-00-00-00-A-520-A-A | Procedural | PROC                  | Generating Wiring Reports Procedure | .xml           |

---

### ATA Chapter 99: Special Technology

| S1000D Code                             | Type      | Original Doc InfoCode | Description                             | File Extension |
|-----------------------------------------|-----------|-----------------------|-----------------------------------------|----------------|
| DMC-GP-AM-AP-99-00-00-00-A-040-A-D | Descriptive | OV                    | Special Technology Overview           | .xml           |
| DMC-GP-AM-AP-99-00-00-00-A-040-B-D | Descriptive | SDD                   | Special Technology System Description   | .xml           |
| DMC-GP-AM-AP-99-00-00-00-A-050-A-D | Descriptive | SPEC                  | Special Technology Specification      | .xml           |
| DMC-GP-AM-AP-99-00-00-00-A-013-A-D | Descriptive | LIST                  | Novel Sensor Technology List          | .xml           |
| DMC-GP-AM-AP-99-00-06-00-A-060-A-D | Descriptive | RPT                   | Warp/Wormhole R&D Report              | .xml           |
| DMC-GP-AM-AP-99-00-02-00-A-060-B-D | Descriptive | ICD                   | HPC/Quantum Fabric Interface Control  | .xml           |

---

### Summary Counts

*(Based on the detailed listing above, assuming each entry maps to a single DM or ICN, and "ICN Set" implies multiple ICNs)*

**Total Data Modules (.xml files):**

*   Foundational DMs: **6**
*   ATA 00 - 41 DMs: Count the .xml rows in the detailed tables = 7+2+3+4+3+5+3+4+4+4+4+5+3+3+2+4+6+3+3+3+4+8+4+5+5+2+3+4+3+3+4+3+3+2+2 = **120 DMs**
*   ATA 42 DMs: Based on the count in the previous response = **38 DMs**
*   ATA 44 - 99 DMs: Count the .xml rows in the detailed tables = 4+6+6+3+3+3+7+8+5+6+5+5+4+6+3+3+1+2+3+4+3+4+2+6 = **96 DMs**
*   **Total Estimated XML Files (Data Modules) = 6 + 120 + 38 + 96 = ~260 XML Files**

**Total Illustrations (primarily .svg files):**

*   Count the ICN entries in the detailed tables (assuming the ATA 92 set is 10 ICNs): 2+1+1+1+1+1+1+1+2+2+1+1+2+1+1+1+1+1+1+1+2+1+10+1+1+2 = 50 ICNs
*   ATA 42 ICNs: Based on the count in the previous response = **23 ICNs**
*   **Total Estimated SVG/CGM Files (ICNs) = 50 + 23 = ~73 ICN Files**

**Overall Estimated Files for MSN1 Published Baseline:**

*   **Total XML Files (Data Modules): Approximately 260**
*   **Total SVG/CGM Files (Illustrations/ICNs): Approximately 73**

This results in a combined documentation set of roughly **333 individual files** that make up the certified and tested baseline for MSN1. Each of these files is a self-contained unit of information managed within the S1000D framework.
