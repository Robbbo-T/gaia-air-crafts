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

# Complete S1000D Documentation Item List for GP-AM AMPEL360XWLRGA (MSN1 Published Baseline)

This document provides the definitive itemized list of all S1000D Data Modules (DMs) and Illustration Control Numbers (ICNs) that comprise the initial certified documentation baseline (MSN1 Published) for the GP-AM AMPEL360XWLRGA aircraft.

Each item is identified by its unique S1000D Code (now presented as a hyperlink to its file location within the `gaia-air-crafts` repository structure), its Type (Descriptive, Procedural, ICN, etc.), the corresponding Original Document InfoCode (from the project's legacy system, where applicable), a brief description, and its required file extension.

The list is organized by ATA 100 chapter. Codes (`infoCodeVariant`, `disassyCodeVariant`, etc.) default as previously defined unless required otherwise for uniqueness or classification. The `systemDiffCode` is `AP` for general ATA chapters and `A4` specifically for ATA 42.

---

### Foundational Project Data Modules

These DMs are essential for the S1000D environment and are cross-chapter. They are often classified under a specific ATA chapter like 00 or 42 for DML purposes. Our ontology places them under ATA 42 with `systemDiffCode="A4"`.

| S1000D Code                               | Type      | Original Doc InfoCode | Description                             | File Extension |
|-------------------------------------------|-----------|-----------------------|-----------------------------------------|----------------|
| [rDMC-GP-AM-A4-42-00-00-00-00-A-022-A-00.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-00-00-A-022-A-00.xml) | BREX      | BREX                  | Project Business Rules Exchange         | .xml           |
| [rDMC-GP-AM-A4-42-00-00-00-00-A-003-A-00.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-00-00-A-003-A-00.xml) | DML       | DML                   | Project Data Module List                | .xml           |
| [rDMC-GP-AM-A4-42-00-00-00-00-A-014-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-00-00-A-014-A-D.xml) | Descriptive | CAT/LIST              | Glossary                                | .xml           |
| [rDMC-GP-AM-A4-42-00-00-00-00-A-015-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-00-00-A-015-A-D.xml) | Descriptive | CAT/LIST              | Acronyms                                | .xml           |
| [rDMC-GP-AM-A4-42-00-00-00-00-A-016-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-00-00-A-016-A-D.xml) | Descriptive | REF                   | Reference Materials List                | .xml           |
| [rDMC-GP-AM-A4-42-00-00-00-00-A-001-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-00-00-A-001-A-D.xml) | Descriptive | ADMIN                 | Administrative Information (General)    | .xml           |

---

### ATA Chapter 00: Introduction & General

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                 | File Extension |
|-------------------------------------------|-----------|-----------------------|---------------------------------------------|----------------|
| [rDMC-GP-AM-AP-00-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-00/rDMC-GP-AM-AP-00-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Aircraft General Overview                   | .xml           |
| [rDMC-GP-AM-AP-00-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-00/rDMC-GP-AM-AP-00-00-00-00-A-050-A-D.xml) | Descriptive | REQ                   | Aircraft General Requirements               | .xml           |
| [rDMC-GP-AM-AP-00-00-00-00-A-050-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-00/rDMC-GP-AM-AP-00-00-00-00-A-050-B-D.xml) | Descriptive | PLAN                  | Certification Plan                          | .xml           |
| [rDMC-GP-AM-AP-00-00-03-00-A-070-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-00/rDMC-GP-AM-AP-00-00-03-00-A-070-A-D.xml) | Descriptive | DD                    | Design Philosophy                           | .xml           |
| [rDMC-GP-AM-AP-00-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-00/rDMC-GP-AM-AP-00-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | System Description (AI Doc Adaptation)      | .xml           |

---

### ATA Chapter 01: Aircraft General

| S1000D Code                               | Type      | Original Doc InfoCode | Description                               | File Extension |
|-------------------------------------------|-----------|-----------------------|-------------------------------------------|----------------|
| [rDMC-GP-AM-AP-01-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-01/rDMC-GP-AM-AP-01-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Aircraft General Overview (ATA 01 Specific) | .xml           |
| [rDMC-GP-AM-AP-01-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-01/rDMC-GP-AM-AP-01-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Aircraft General Specification (ATA 01)   | .xml           |

---

### ATA Chapter 02: Operations

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                | File Extension |
|-------------------------------------------|-----------|-----------------------|--------------------------------------------|----------------|
| [rDMC-GP-AM-AP-02-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-02/rDMC-GP-AM-AP-02-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Operations Overview                        | .xml           |
| [rDMC-GP-AM-AP-02-00-00-00-A-004-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-02/rDMC-GP-AM-AP-02-00-00-00-A-004-A-D.xml) | Descriptive | MAN                   | Flight Operations Manual Content           | .xml           |
| [rDMC-GP-AM-AP-02-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-02/rDMC-GP-AM-AP-02-00-00-00-A-050-A-D.xml) | Descriptive | PLAN                  | Mission Planning                           | .xml           |

---

### ATA Chapter 03: Performance

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                | File Extension |
|-------------------------------------------|-----------|-----------------------|--------------------------------------------|----------------|
| [rDMC-GP-AM-AP-03-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-03/rDMC-GP-AM-AP-03-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Performance Overview                       | .xml           |
| [rDMC-GP-AM-AP-03-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-03/rDMC-GP-AM-AP-03-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Performance Specification                  | .xml           |
| [rDMC-GP-AM-AP-03-00-05-00-A-090-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-03/rDMC-GP-AM-AP-03-00-05-00-A-090-A-D.xml) | Descriptive | CAL                   | Performance Calculation/Analysis           | .xml           |
| [rDMC-GP-AM-AP-03-00-06-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-03/rDMC-GP-AM-AP-03-00-06-00-A-060-A-D.xml) | Descriptive | RPT                   | Flight Test Report                         | .xml           |

---

### ATA Chapter 04: Airworthiness

| S1000D Code                               | Type      | Original Doc InfoCode | Description                               | File Extension |
|-------------------------------------------|-----------|-----------------------|-------------------------------------------|----------------|
| [rDMC-GP-AM-AP-04-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-04/rDMC-GP-AM-AP-04-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Airworthiness Overview                    | .xml           |
| [rDMC-GP-AM-AP-04-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-04/rDMC-GP-AM-AP-04-00-00-00-A-050-A-D.xml) | Descriptive | REQ                   | Airworthiness Requirements                | .xml           |
| [rDMC-GP-AM-AP-04-00-06-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-04/rDMC-GP-AM-AP-04-00-06-00-A-060-A-D.xml) | Descriptive | RPT                   | Compliance Report                         | .xml           |
| [rDMC-GP-AM-AP-04-00-07-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-04/rDMC-GP-AM-AP-04-00-07-00-A-050-A-D.xml) | Descriptive | PLAN                  | Certification Plan (Specific Content)     | .xml           |
| [rDMC-GP-AM-AP-04-00-07-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-04/rDMC-GP-AM-AP-04-00-07-00-A-060-A-D.xml) | Descriptive | RPT                   | Certification Report (Specific Content)   | .xml           |
| [rDMC-GP-AM-AP-04-00-07-00-A-070-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-04/rDMC-GP-AM-AP-04-00-07-00-A-070-A-D.xml) | Descriptive | DD/SPEC               | Declaration of Design and Performance (DDP) | .xml           |

---

### ATA Chapter 05: Time Limits & Maintenance

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-------------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-05-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-05/rDMC-GP-AM-AP-05-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Time Limits & Maintenance Overview             | .xml           |
| [rDMC-GP-AM-AP-05-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-05/rDMC-GP-AM-AP-05-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Scheduled Maintenance Procedure              | .xml           |
| [rDMC-GP-AM-AP-05-00-00-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-05/rDMC-GP-AM-AP-05-00-00-00-A-013-A-D.xml) | Descriptive | CAT/LIST              | Life Limits Catalog/List                     | .xml           |
| [rDMC-GP-AM-AP-05-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-05/rDMC-GP-AM-AP-05-00-00-00-A-050-A-D.xml) | Descriptive | REQ/PLAN              | ALS Requirements / Maintenance Plan (Overall) | .xml           |
| [rDMC-GP-AM-AP-05-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-05/rDMC-GP-AM-AP-05-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Predictive Maint. System Description (AI)    | .xml           |

---

### ATA Chapter 06: Dimensions & Areas

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                     | File Extension |
|-------------------------------------------|-----------|-----------------------|-------------------------------------------------|----------------|
| [rDMC-GP-AM-AP-06-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-06/rDMC-GP-AM-AP-06-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Dimensions & Areas Overview                     | .xml           |
| [rDMC-GP-AM-AP-06-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-06/rDMC-GP-AM-AP-06-00-00-00-A-050-A-D.xml) | Descriptive | SP                    | Geometry Specification                          | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-06-00-00-00-A-00-70001-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-06/ICN-GAIAAIR-AMPEL-AP-06-00-00-00-A-00-70001-00001-001-A-00.svg) | ICN       | DWG                   | Overall Aircraft Drawing                        | .svg           |
| [ICN-GAIAAIR-AMPEL-AP-06-00-00-00-A-00-70002-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-06/ICN-GAIAAIR-AMPEL-AP-06-00-00-00-A-00-70002-00001-001-A-00.svg) | ICN       | DWG                   | Stations & Zones Drawing                        | .svg           |
| [rDMC-GP-AM-AP-06-00-00-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-06/rDMC-GP-AM-AP-06-00-00-00-A-013-A-D.xml) | Descriptive | LIST                  | Reference Points List                           | .xml           |

---

### ATA Chapter 07: Lifting & Shoring

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                     | File Extension |
|-------------------------------------------|-----------|-----------------------|-------------------------------------------------|----------------|
| [rDMC-GP-AM-AP-07-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-07/rDMC-GP-AM-AP-07-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Lifting & Shoring Overview                      | .xml           |
| [rDMC-GP-AM-AP-07-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-07/rDMC-GP-AM-AP-07-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Lifting & Shoring Specification                   | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-07-00-00-00-A-00-70003-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-07/ICN-GAIAAIR-AMPEL-AP-07-00-00-00-A-00-70003-00001-001-A-00.svg) | ICN       | DWG                   | Lifting Point Locations Drawing                 | .svg           |
| [rDMC-GP-AM-AP-07-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-07/rDMC-GP-AM-AP-07-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Jacking & Shoring Procedure                     | .xml           |
| [rDMC-GP-AM-AP-07-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-07/rDMC-GP-AM-AP-07-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Robotic Jacking System Description              | .xml           |

---

### ATA Chapter 08: Leveling & Weighing

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                 | File Extension |
|-------------------------------------------|-----------|-----------------------|---------------------------------------------|----------------|
| [rDMC-GP-AM-AP-08-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-08/rDMC-GP-AM-AP-08-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Leveling & Weighing Overview                | .xml           |
| [rDMC-GP-AM-AP-08-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-08/rDMC-GP-AM-AP-08-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Weighing & Leveling Procedure               | .xml           |
| [rDMC-GP-AM-AP-08-00-05-00-A-090-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-08/rDMC-GP-AM-AP-08-00-05-00-A-090-A-D.xml) | Descriptive | CAL                   | HPC CG Calculation/Analysis                 | .xml           |
| [rDMC-GP-AM-AP-08-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-08/rDMC-GP-AM-AP-08-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Leveling Points Specification               | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-08-00-00-00-A-00-70004-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-08/ICN-GAIAAIR-AMPEL-AP-08-00-00-00-A-00-70004-00001-001-A-00.svg) | ICN       | DWG                   | Leveling Points Drawing                     | .svg           |

---

### ATA Chapter 09: Towing & Taxiing

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                   | File Extension |
|-------------------------------------------|-----------|-----------------------|-----------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-09-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-09/rDMC-GP-AM-AP-09-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Towing & Taxiing Overview                     | .xml           |
| [rDMC-GP-AM-AP-09-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-09/rDMC-GP-AM-AP-09-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Towing & Taxiing Procedure                  | .xml           |
| [rDMC-GP-AM-AP-09-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-09/rDMC-GP-AM-AP-09-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Towing Limits & Points Specification          | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-09-00-00-00-A-00-70005-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-09/ICN-GAIAAIR-AMPEL-AP-09-00-00-00-A-00-70005-00001-001-A-00.svg) | ICN       | DWG                   | Towing Points Drawing                         | .svg           |
| [rDMC-GP-AM-AP-09-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-09/rDMC-GP-AM-AP-09-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Autonomous Taxi System Description          | .xml           |

---

### ATA Chapter 10: Parking & Mooring

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                   | File Extension |
|-------------------------------------------|-----------|-----------------------|-----------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-10-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-10/rDMC-GP-AM-AP-10-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Parking & Mooring Overview                    | .xml           |
| [rDMC-GP-AM-AP-10-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-10/rDMC-GP-AM-AP-10-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Parking, Mooring, Storage Procedure           | .xml           |
| [rDMC-GP-AM-AP-10-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-10/rDMC-GP-AM-AP-10-00-00-00-A-050-A-D.xml) | Descriptive | REQ/PLAN              | Storage Requirements                          | .xml           |
| [rDMC-GP-AM-AP-10-00-00-00-A-050-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-10/rDMC-GP-AM-AP-10-00-00-00-A-050-B-D.xml) | Descriptive | SPEC                  | Cryo Storage Specification                    | .xml           |

---

### ATA Chapter 11: Placards & Markings

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-------------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-11-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-11/rDMC-GP-AM-AP-11-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Placards & Markings Overview                   | .xml           |
| [rDMC-GP-AM-AP-11-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-11/rDMC-GP-AM-AP-11-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Markings & Hazard Labels Specification         | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-11-00-00-00-A-00-70006-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-11/ICN-GAIAAIR-AMPEL-AP-11-00-00-00-A-00-70006-00001-001-A-00.svg) | ICN       | DWG                   | Placard Location Drawing                       | .svg           |
| [rDMC-GP-AM-AP-11-00-00-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-11/rDMC-GP-AM-AP-11-00-00-00-A-013-A-D.xml) | Descriptive | LIST                  | Placard Inventory List                         | .xml           |
| [rDMC-GP-AM-AP-11-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-11/rDMC-GP-AM-AP-11-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | AR Placards System Description                 | .xml           |
| [rDMC-GP-AM-AP-11-00-00-00-A-016-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-11/rDMC-GP-AM-AP-11-00-00-00-A-016-A-D.xml) | Descriptive | REF                   | Standards Reference                            | .xml           |

---

### ATA Chapter 12: Servicing

| S1000D Code                               | Type      | Original Doc InfoCode | Description                             | File Extension |
|-------------------------------------------|-----------|-----------------------|-----------------------------------------|----------------|
| [rDMC-GP-AM-AP-12-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-12/rDMC-GP-AM-AP-12-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Servicing Overview                      | .xml           |
| [rDMC-GP-AM-AP-12-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-12/rDMC-GP-AM-AP-12-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Servicing Procedures                    | .xml           |
| [rDMC-GP-AM-AP-12-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-12/rDMC-GP-AM-AP-12-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Quantum Coolant Specification           | .xml           |

---

### ATA Chapter 13: Hydraulic Power

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-------------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-13-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-13/rDMC-GP-AM-AP-13-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Hydraulic Power Overview            | .xml           |
| [rDMC-GP-AM-AP-13-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-13/rDMC-GP-AM-AP-13-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Hydraulic System Description        | .xml           |
| [rDMC-GP-AM-AP-13-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-13/rDMC-GP-AM-AP-13-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Hydraulic Fluids & Pressure Spec    | .xml           |

---

### ATA Chapter 14: Pneumatic Power

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-14-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-14/rDMC-GP-AM-AP-14-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Pneumatic Power Overview            | .xml           |
| [rDMC-GP-AM-AP-14-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-14/rDMC-GP-AM-AP-14-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Pneumatic System Description        | .xml           |

---

### ATA Chapter 18: Vibration & Noise

| S1000D Code                               | Type      | Original Doc InfoCode | Description                             | File Extension |
|-------------------------------------------|-----------|-----------------------|-----------------------------------------|----------------|
| [rDMC-GP-AM-AP-18-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-18/rDMC-GP-AM-AP-18-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Vibration & Noise Overview              | .xml           |
| [rDMC-GP-AM-AP-18-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-18/rDMC-GP-AM-AP-18-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Vibration & Noise System Description    | .xml           |
| [rDMC-GP-AM-AP-18-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-18/rDMC-GP-AM-AP-18-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Vibration & Noise Specification         | .xml           |
| [rDMC-GP-AM-AP-18-00-05-00-A-090-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-18/rDMC-GP-AM-AP-18-00-05-00-A-090-A-D.xml) | Descriptive | CAL                   | Vibration Modes Analysis                | .xml           |

---

### ATA Chapter 20: Standard Practices – Airframe

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-------------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-20-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-20/rDMC-GP-AM-AP-20-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Airframe Standard Practices Overview           | .xml           |
| [rDMC-GP-AM-AP-20-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-20/rDMC-GP-AM-AP-20-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Airframe Maintenance Practices Procedure         | .xml           |
| [rDMC-GP-AM-AP-20-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-20/rDMC-GP-AM-AP-20-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Airframe Tools & Materials Specification         | .xml           |
| [rDMC-GP-AM-AP-20-00-06-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-20/rDMC-GP-AM-AP-20-00-06-00-A-050-A-D.xml) | Descriptive | TEST                  | NDT Methods Test Plan                          | .xml           |
| [rDMC-GP-AM-AP-20-00-06-00-A-520-B-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-20/rDMC-GP-AM-AP-20-00-06-00-A-520-B-A.xml) | Procedural | TEST                  | NDT Methods Test Procedure                     | .xml           |
| [rDMC-GP-AM-AP-20-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-20/rDMC-GP-AM-AP-20-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | AI NDT & Digital Twin Repair System Description | .xml           |

---

### ATA Chapter 21: Air Conditioning

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-21-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-21/rDMC-GP-AM-AP-21-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Air Conditioning Overview                    | .xml           |
| [rDMC-GP-AM-AP-21-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-21/rDMC-GP-AM-AP-21-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Air Conditioning System Description            | .xml           |
| [rDMC-GP-AM-AP-21-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-21/rDMC-GP-AM-AP-21-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Air Conditioning Specification                 | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-21-00-01-00-A-00-10001-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-21/ICN-GAIAAIR-AMPEL-AP-21-00-01-00-A-00-10001-00001-001-A-00.svg) | ICN       | FIG                   | Air Distribution Diagram                     | .svg           |

---

### ATA Chapter 22: Auto Flight

| S1000D Code                               | Type      | Original Doc InfoCode | Description                               | File Extension |
|-------------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-22-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-22/rDMC-GP-AM-AP-22-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Auto Flight Overview                      | .xml           |
| [rDMC-GP-AM-AP-22-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-22/rDMC-GP-AM-AP-22-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Auto Flight System Description            | .xml           |
| [rDMC-GP-AM-AP-22-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-22/rDMC-GP-AM-AP-22-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Autopilot Modes Specification             | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-22-00-01-00-A-00-10002-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-22/ICN-GAIAAIR-AMPEL-AP-22-00-01-00-A-00-10002-00001-001-A-00.svg) | ICN       | FIG                   | Auto Flight Architecture Diagram          | .svg           |

---

### ATA Chapter 23: Communications

| S1000D Code                               | Type      | Original Doc InfoCode | Description                               | File Extension |
|-------------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-23-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-23/rDMC-GP-AM-AP-23-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Communications Overview                   | .xml           |
| [rDMC-GP-AM-AP-23-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-23/rDMC-GP-AM-AP-23-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Communications System Description         | .xml           |
| [rDMC-GP-AM-AP-23-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-23/rDMC-GP-AM-AP-23-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Communications Specification              | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-23-00-01-00-A-00-10003-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-23/ICN-GAIAAIR-AMPEL-AP-23-00-01-00-A-00-10003-00001-001-A-00.svg) | ICN       | FIG                   | Communications Architecture Diagram       | .svg           |

---

### ATA Chapter 24: Electrical Power

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                   | File Extension |
|-------------------------------------------|-----------|-----------------------|-----------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-24-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-24/rDMC-GP-AM-AP-24-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Electrical Power Overview                     | .xml           |
| [rDMC-GP-AM-AP-24-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-24/rDMC-GP-AM-AP-24-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Electrical Power System Description           | .xml           |
| [rDMC-GP-AM-AP-24-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-24/rDMC-GP-AM-AP-24-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Electrical Power Specification                | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-24-00-01-00-A-00-10004-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-24/ICN-GAIAAIR-AMPEL-AP-24-00-01-00-A-00-10004-00001-001-A-00.svg) | ICN       | DWG                   | Electrical Architecture Drawing               | .svg           |
| [ICN-GAIAAIR-AMPEL-AP-24-00-00-00-A-00-70007-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-24/ICN-GAIAAIR-AMPEL-AP-24-00-00-00-A-00-70007-00001-001-A-00.svg) | ICN       | DWG                   | Bus Layout Drawing                            | .svg           |
| [rDMC-GP-AM-AP-24-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-24/rDMC-GP-AM-AP-24-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | External Power Interface Control              | .xml           |

---

### ATA Chapter 25: Equipment & Furnishings

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-------------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-25-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-25/rDMC-GP-AM-AP-25-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Equipment & Furnishings Overview               | .xml           |
| [rDMC-GP-AM-AP-25-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-25/rDMC-GP-AM-AP-25-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Equipment & Furnishings Specification          | .xml           |
| [rDMC-GP-AM-AP-25-00-00-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-25/rDMC-GP-AM-AP-25-00-00-00-A-013-A-D.xml) | Descriptive | LIST                  | Emergency Equipment List                       | .xml           |
| [rDMC-GP-AM-AP-25-00-00-00-A-013-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-25/rDMC-GP-AM-AP-25-00-00-00-A-013-B-D.xml) | Descriptive | LIST                  | Materials List                                 | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-25-00-00-00-A-00-70008-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-25/ICN-GAIAAIR-AMPEL-AP-25-00-00-00-A-00-70008-00001-001-A-00.svg) | ICN       | FIG                   | Cabin Layout Diagram                           | .svg           |
| [ICN-GAIAAIR-AMPEL-AP-25-00-00-00-A-00-70009-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-25/ICN-GAIAAIR-AMPEL-AP-25-00-00-00-A-00-70009-00001-001-A-00.svg) | ICN       | DWG                   | Equipment Locations Drawing                    | .svg           |
| [rDMC-GP-AM-AP-25-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-25/rDMC-GP-AM-AP-25-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | VR Windows System Description                  | .xml           |
| [rDMC-GP-AM-AP-25-00-00-00-A-040-C-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-25/rDMC-GP-AM-AP-25-00-00-00-A-040-C-D.xml) | Descriptive | SDD                   | Cargo Loading System Description               | .xml           |

---

### ATA Chapter 26: Fire Protection

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                | File Extension |
|-------------------------------------------|-----------|-----------------------|--------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-26-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-26/rDMC-GP-AM-AP-26-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Fire Protection Overview                   | .xml           |
| [rDMC-GP-AM-AP-26-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-26/rDMC-GP-AM-AP-26-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Fire Protection System Description           | .xml           |
| [rDMC-GP-AM-AP-26-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-26/rDMC-GP-AM-AP-26-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Fire Protection Specification              | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-26-00-00-00-A-00-70010-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-26/ICN-GAIAAIR-AMPEL-AP-26-00-00-00-A-00-70010-00001-001-A-00.svg) | ICN       | DWG                   | Detector Locations Drawing                   | .svg           |

---

### ATA Chapter 27: Flight Controls

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-------------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-27-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-27/rDMC-GP-AM-AP-27-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Flight Controls Overview                     | .xml           |
| [rDMC-GP-AM-AP-27-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-27/rDMC-GP-AM-AP-27-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Flight Controls System Description           | .xml           |
| [rDMC-GP-AM-AP-27-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-27/rDMC-GP-AM-AP-27-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Flight Controls Specification                | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-27-00-01-00-A-00-10005-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-27/ICN-GAIAAIR-AMPEL-AP-27-00-01-00-A-00-10005-00001-001-A-00.svg) | ICN       | FIG                   | Flight Controls Architecture Diagram         | .svg           |
| [rDMC-GP-AM-AP-27-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-27/rDMC-GP-AM-AP-27-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | GPAM Integration Interface Control             | .xml           |

---

### ATA Chapter 28: Fuel

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                   | File Extension |
|-------------------------------------------|-----------|-----------------------|-----------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-28-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-28/rDMC-GP-AM-AP-28-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Fuel Overview                                 | .xml           |
| [rDMC-GP-AM-AP-28-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-28/rDMC-GP-AM-AP-28-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Fuel System Description                         | .xml           |
| [rDMC-GP-AM-AP-28-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-28/rDMC-GP-AM-AP-28-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Fuel Specification                            | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-28-00-00-00-A-00-70011-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-28/ICN-GAIAAIR-AMPEL-AP-28-00-00-00-A-00-70011-00001-001-A-00.svg) | ICN       | DWG                   | Tank Locations Drawing                          | .svg           |
| [ICN-GAIAAIR-AMPEL-AP-28-00-01-00-A-00-10006-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-28/ICN-GAIAAIR-AMPEL-AP-28-00-01-00-A-00-10006-00001-001-A-00.svg) | ICN       | FIG                   | Fuel Architecture Diagram                       | .svg           |

---

### ATA Chapter 29: Hydraulic Power

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-------------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-29-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-29/rDMC-GP-AM-AP-29-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Hydraulic Power Overview            | .xml           |
| [rDMC-GP-AM-AP-29-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-29/rDMC-GP-AM-AP-29-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Hydraulic System Description        | .xml           |

---

### ATA Chapter 30: Ice & Rain Protection

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                | File Extension |
|-------------------------------------------|-----------|-----------------------|--------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-30-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-30/rDMC-GP-AM-AP-30-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Ice & Rain Protection Overview           | .xml           |
| [rDMC-GP-AM-AP-30-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-30/rDMC-GP-AM-AP-30-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Ice & Rain Protection System Description | .xml           |
| [rDMC-GP-AM-AP-30-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-30/rDMC-GP-AM-AP-30-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Ice & Rain Protection Specification        | .xml           |

---

### ATA Chapter 31: Indicating & Recording

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-31-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-31/rDMC-GP-AM-AP-31-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Indicating & Recording Overview              | .xml           |
| [rDMC-GP-AM-AP-31-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-31/rDMC-GP-AM-AP-31-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Indicating & Recording System Description    | .xml           |
| [rDMC-GP-AM-AP-31-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-31/rDMC-GP-AM-AP-31-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Indicating & Recording Specification         | .xml           |
| [rDMC-GP-AM-AP-31-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-31/rDMC-GP-AM-AP-31-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | i-Aher0 Link Interface Control               | .xml           |

---

### ATA Chapter 32: Landing Gear

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                | File Extension |
|-----------------------------------------|-----------|-----------------------|--------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-32-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-32/rDMC-GP-AM-AP-32-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Landing Gear Overview                      | .xml           |
| [rDMC-GP-AM-AP-32-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-32/rDMC-GP-AM-AP-32-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Landing Gear System Description            | .xml           |
| [rDMC-GP-AM-AP-32-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-32/rDMC-GP-AM-AP-32-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Landing Gear Specification                 | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-32-00-90-00-A-00-90001-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-32/ICN-GAIAAIR-AMPEL-AP-32-00-90-00-A-00-90001-00001-001-A-00.svg) | ICN       | DWG                   | Landing Gear Assembly Drawing              | .svg           |

---

### ATA Chapter 33: Lights

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-33-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-33/rDMC-GP-AM-AP-33-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Lights Overview                              | .xml           |
| [rDMC-GP-AM-AP-33-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-33/rDMC-GP-AM-AP-33-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Lights System Description                    | .xml           |
| [rDMC-GP-AM-AP-33-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-33/rDMC-GP-AM-AP-33-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Lights Specification                         | .xml           |
| [rDMC-GP-AM-AP-33-00-00-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-33/rDMC-GP-AM-AP-33-00-00-00-A-013-A-D.xml) | Descriptive | LIST                  | Exterior Lights List                         | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-33-00-00-00-A-00-70012-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-33/ICN-GAIAAIR-AMPEL-AP-33-00-00-00-A-00-70012-00001-001-A-00.svg) | ICN       | DWG                   | Exterior Light Locations Drawing             | .svg           |

---

### ATA Chapter 34: Navigation

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                 | File Extension |
|-------------------------------------------|-----------|-----------------------|---------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-34-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-34/rDMC-GP-AM-AP-34-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Navigation Overview                       | .xml           |
| [rDMC-GP-AM-AP-34-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-34/rDMC-GP-AM-AP-34-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Navigation System Description               | .xml           |
| [rDMC-GP-AM-AP-34-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-34/rDMC-GP-AM-AP-34-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Navigation Specification                  | .xml           |
| [rDMC-GP-AM-AP-34-00-05-00-A-090-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-34/rDMC-GP-AM-AP-34-00-05-00-A-090-A-D.xml) | Descriptive | CAL                   | Navigation Calculation/Analysis             | .xml           |
| [rDMC-GP-AM-AP-34-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-34/rDMC-GP-AM-AP-34-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | QAO Integration Interface Control           | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-34-00-01-00-A-00-10007-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-34/ICN-GAIAAIR-AMPEL-AP-34-00-01-00-A-00-10007-00001-001-A-00.svg) | ICN       | FIG                   | Navigation Architecture Diagram           | .svg           |

---

### ATA Chapter 35: Oxygen

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                | File Extension |
|-----------------------------------------|-----------|-----------------------|--------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-35-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-35/rDMC-GP-AM-AP-35-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Oxygen Overview                            | .xml           |
| [rDMC-GP-AM-AP-35-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-35/rDMC-GP-AM-AP-35-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Oxygen System Description                  | .xml           |
| [rDMC-GP-AM-AP-35-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-35/rDMC-GP-AM-AP-35-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Oxygen Specification                     | .xml           |
| [rDMC-GP-AM-AP-35-00-00-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-35/rDMC-GP-AM-AP-35-00-00-00-A-013-A-D.xml) | Descriptive | LIST                  | Portable Equipment List                    | .xml           |

---

### ATA Chapter 36: Pneumatic

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-36-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-36/rDMC-GP-AM-AP-36-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Pneumatic Overview                  | .xml           |
| [rDMC-GP-AM-AP-36-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-36/rDMC-GP-AM-AP-36-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Pneumatic System Description        | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-36-00-00-00-A-00-70013-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-36/ICN-GAIAAIR-AMPEL-AP-36-00-00-00-A-00-70013-00001-001-A-00.svg) | ICN       | DWG                   | Pneumatic Ducting Drawing           | .svg           |

---

### ATA Chapter 37: Vacuum

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-37-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-37/rDMC-GP-AM-AP-37-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Vacuum Overview                     | .xml           |
| [rDMC-GP-AM-AP-37-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-37/rDMC-GP-AM-AP-37-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Vacuum System Description           | .xml           |

---

### ATA Chapter 38: Water & Waste

| S1000D Code                               | Type      | Original Doc InfoCode | Description                               | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-38-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-38/rDMC-GP-AM-AP-38-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Water & Waste Overview                    | .xml           |
| [rDMC-GP-AM-AP-38-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-38/rDMC-GP-AM-AP-38-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Water & Waste System Description            | .xml           |
| [rDMC-GP-AM-AP-38-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-38/rDMC-GP-AM-AP-38-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Lavatory System Specification             | .xml           |

---

### ATA Chapter 39: Electrical Panels

| S1000D Code                               | Type      | Original Doc InfoCode | Description                               | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-39-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-39/rDMC-GP-AM-AP-39-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Electrical Panels Overview                | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-39-00-00-00-A-00-70014-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-39/ICN-GAIAAIR-AMPEL-AP-39-00-00-00-A-00-70014-00001-001-A-00.svg) | ICN       | DWG                   | Panel Layouts Drawing                       | .svg           |

---

### ATA Chapter 41: Water Ballast

| S1000D Code                               | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| [rDMC-GP-AM-AP-41-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-41/rDMC-GP-AM-AP-41-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Water Ballast Overview                | .xml           |
| [rDMC-GP-AM-AP-41-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-41/rDMC-GP-AM-AP-41-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Water Ballast System Description      | .xml           |

---

### ATA Chapter 42: Integrated Modular Avionics (IMA) - A4001

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-------------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| [rDMC-GP-AM-A4-42-00-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-00-00-A-040-A-D.xml) | Descriptive | SDD/OV                | A4001 Avionics System Overview               | .xml           |
| [rDMC-GP-AM-A4-42-00-00-03-00-A-070-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-03-00-A-070-A-D.xml) | Descriptive | SDD/DD                | A4001 Design Overview (General)              | .xml           |
| [rDMC-GP-AM-A4-42-00-00-01-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-01-00-A-040-A-D.xml) | Descriptive | SDD                   | A4001 System Architecture                    | .xml           |
| [rDMC-GP-AM-A4-42-00-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | A4001 External Interfaces                    | .xml           |
| [rDMC-GP-AM-A4-42-00-02-00-A-060-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-02-00-A-060-B-D.xml) | Descriptive | ICD                   | A4001 Internal Interfaces                    | .xml           |
| [rDMC-GP-AM-A4-42-00-02-00-A-060-C-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-02-00-A-060-C-D.xml) | Descriptive | ICD                   | A4001 Interface Protocols                    | .xml           |
| [rDMC-GP-AM-A4-42-00-02-00-A-060-D-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-02-00-A-060-D-D.xml) | Descriptive | ICD                   | A4001 Data Formats                           | .xml           |
| [rDMC-GP-AM-A4-42-00-00-03-00-A-071-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-03-00-A-071-A-D.xml) | Descriptive | SDD/SDP               | A4001 Software Design Overview               | .xml           |
| [rDMC-GP-AM-A4-42-00-00-03-00-A-072-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-03-00-A-072-A-D.xml) | Descriptive | SDD                   | A4001 Data Design (System)                   | .xml           |
| [rDMC-GP-AM-A4-42-00-00-03-00-A-073-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-03-00-A-073-A-D.xml) | Descriptive | SDD                   | A4001 Security Design                        | .xml           |
| [rDMC-GP-AM-A4-42-00-05-00-A-090-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-05-00-A-090-A-D.xml) | Descriptive | SSA/CAL/RPT           | A4001 System Safety Assessment               | .xml           |
| [rDMC-GP-AM-A4-42-00-05-00-A-090-E-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-05-00-A-090-E-D.xml) | Descriptive | RPT                   | A4001 FMEA Results                           | .xml           |
| [rDMC-GP-AM-A4-42-00-05-00-A-090-F-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-05-00-A-090-F-D.xml) | Descriptive | RPT                   | A4001 FTA Results                            | .xml           |
| [rDMC-GP-AM-A4-42-00-05-00-A-090-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-05-00-A-090-B-D.xml) | Descriptive | CAL/CCA               | A4001 CCA Results                            | .xml           |
| [rDMC-GP-AM-A4-42-00-05-00-A-090-C-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-05-00-A-090-C-D.xml) | Descriptive | CAL/PRA               | A4001 PRA Results                            | .xml           |
| [rDMC-GP-AM-A4-42-00-05-00-A-090-D-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-05-00-A-090-D-D.xml) | Descriptive | CAL/ZSA               | A4001 ZSA Results                            | .xml           |
| [rDMC-GP-AM-A4-42-00-06-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-06-00-A-050-A-D.xml) | Descriptive | TEST/OV               | A4001 Test Overview / List                   | .xml           |
| [rDMC-GP-AM-A4-42-00-06-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-06-00-A-050-A-D.xml) | Descriptive | TEST/TP               | A4001 Test Procedures Template               | .xml           |
| [rDMC-GP-AM-A4-42-00-06-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-06-00-A-060-A-D.xml) | Descriptive | RPT                   | A4001 Test Results Report                  | .xml           |
| [rDMC-GP-AM-A4-42-00-06-00-A-050-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-06-00-A-050-B-D.xml) | Descriptive | EQTP                  | A4001 Environmental Qualification Test Plan  | .xml           |
| [rDMC-GP-AM-A4-42-00-06-00-A-050-D-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-06-00-A-050-D-D.xml) | Descriptive | EMITP                 | A4001 EMI/EMC Test Plan                    | .xml           |
| [rDMC-GP-AM-A4-42-00-06-00-A-050-E-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-06-00-A-050-E-D.xml) | Descriptive | ITP                   | A4001 Integration Test Plan                  | .xml           |
| [rDMC-GP-AM-A4-42-00-00-10-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-10-00-A-050-A-D.xml) | Descriptive | SDP                   | A4001 Software Development Plan              | .xml           |
| [rDMC-GP-AM-A4-42-00-00-10-00-A-050-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-10-00-A-050-B-D.xml) | Descriptive | SVP                   | A4001 Software Verification Plan             | .xml           |
| [rDMC-GP-AM-A4-42-00-00-10-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-10-00-A-013-A-D.xml) | Descriptive | SCI/LIST              | A4001 Software Configuration Index           | .xml           |
| [rDMC-GP-AM-A4-42-00-00-10-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-10-00-A-060-A-D.xml) | Descriptive | SAS/RPT               | A4001 Software Accomplishment Summary        | .xml           |
| [rDMC-GP-AM-A4-42-00-00-11-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-11-00-A-050-A-D.xml) | Descriptive | HDP                   | A4001 Hardware Development Plan              | .xml           |
| [rDMC-GP-AM-A4-42-00-00-11-00-A-050-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-11-00-A-050-B-D.xml) | Descriptive | HVP                   | A4001 Hardware Verification Plan             | .xml           |
| [rDMC-GP-AM-A4-42-00-00-11-00-A-090-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-11-00-A-090-A-D.xml) | Descriptive | CAL/RPT               | A4001 Component Reliability Analysis         | .xml           |
| [rDMC-GP-AM-A4-42-00-00-11-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-11-00-A-013-A-D.xml) | Descriptive | PMP/LIST              | A4001 Parts, Materials and Processes List    | .xml           |
| [rDMC-GP-AM-A4-42-00-00-08-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-00-08-00-A-520-A-A.xml) | Procedural  | II/PROC               | A4001 Installation Instructions (General)    | .xml           |
| [rDMC-GP-AM-A4-42-00-09-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-09-00-A-050-A-D.xml) | Descriptive | CMP/PLAN              | A4001 Configuration Management Plan          | .xml           |
| [rDMC-GP-AM-A4-42-00-09-00-A-050-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-09-00-A-050-B-D.xml) | Descriptive | QAP/PLAN              | A4001 Quality Assurance Plan                 | .xml           |
| [rDMC-GP-AM-A4-42-00-09-00-A-090-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-00-09-00-A-090-A-D.xml) | Descriptive | HFA/CAL               | A4001 Human Factors Assessment               | .xml           |
| [rDMC-GP-AM-A4-42-01-00-06-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-01-00-06-00-A-520-A-A.xml) | Procedural  | TEST/PROC             | Specific A4001 Test Procedures (e.g. FCC Func.) | .xml           |
| ... (approx. 21 more test procs) ...    | Procedural  | TEST/PROC             | Specific A4001 Test Procedures               | .xml           |
| [rDMC-GP-AM-A4-42-01-00-08-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-42/rDMC-GP-AM-A4-42-01-00-08-00-A-520-A-A.xml) | Procedural  | II/PROC               | Specific A4001 Installation Proc. (e.g. FCS) | .xml           |
| ... (potentially more instl procs) ...  | Procedural  | II/PROC               | Specific A4001 Installation Procedures       | .xml           |
| [ICN-GAIAAIR-AMPEL-A4-42-00-01-00-A-00-10001-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-42/ICN-GAIAAIR-AMPEL-A4-42-00-01-00-A-00-10001-00001-001-A-00.svg) | ICN       | DWG/FIG               | ATA 42 ICN: A4001 Arch Diagram 1           | .svg           |
| ... (approx. 22 more ATA 42 specific ICNs)... | ICN | DWG/FIG               | ATA 42 ICNs                                  | .svg           |

---

### ATA Chapter 44: Cabin Systems

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-44-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-44/rDMC-GP-AM-AP-44-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Cabin Systems Overview                   | .xml           |
| [rDMC-GP-AM-AP-44-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-44/rDMC-GP-AM-AP-44-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Cabin Systems Description                    | .xml           |
| [rDMC-GP-AM-AP-44-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-44/rDMC-GP-AM-AP-44-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | Cabin System Interfaces Interface Control | .xml           |
| [rDMC-GP-AM-AP-44-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-44/rDMC-GP-AM-AP-44-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Cabin Systems Specification                  | .xml           |

---

### ATA Chapter 45: Central Maintenance System

| S1000D Code                               | Type      | Original Doc InfoCode | Description                               | File Extension |
|-------------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-45-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-45/rDMC-GP-AM-AP-45-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | CMS Overview                              | .xml           |
| [rDMC-GP-AM-AP-45-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-45/rDMC-GP-AM-AP-45-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | CMS System Description                    | .xml           |
| [rDMC-GP-AM-AP-45-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-45/rDMC-GP-AM-AP-45-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | CMS Specification                         | .xml           |
| [rDMC-GP-AM-AP-45-00-05-00-A-090-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-45/rDMC-GP-AM-AP-45-00-05-00-A-090-A-D.xml) | Descriptive | CAL                   | AI Fault Detection Analysis               | .xml           |
| [rDMC-GP-AM-AP-45-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-45/rDMC-GP-AM-AP-45-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | Digital Twin Integration Interface Control| .xml           |
| [rDMC-GP-AM-AP-45-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-45/rDMC-GP-AM-AP-45-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Software Loading Procedure                | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-45-00-01-00-A-00-10008-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-45/ICN-GAIAAIR-AMPEL-AP-45-00-01-00-A-00-10008-00001-001-A-00.svg) | ICN       | FIG                   | CMS Architecture Diagram                  | .svg           |

---

### ATA Chapter 46: Information Systems

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-------------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-46-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-46/rDMC-GP-AM-AP-46-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Information Systems Overview                 | .xml           |
| [rDMC-GP-AM-AP-46-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-46/rDMC-GP-AM-AP-46-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Information Systems Description                | .xml           |
| [rDMC-GP-AM-AP-46-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-46/rDMC-GP-AM-AP-46-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Information Systems Specification              | .xml           |
| [rDMC-GP-AM-AP-46-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-46/rDMC-GP-AM-AP-46-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | Information System Interfaces Interface Control | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-46-00-01-00-A-00-10009-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-46/ICN-GAIAAIR-AMPEL-AP-46-00-01-00-A-00-10009-00001-001-A-00.svg) | ICN       | FIG                   | Network Architecture Diagram                 | .svg           |
| [rDMC-GP-AM-AP-46-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-46/rDMC-GP-AM-AP-46-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Intrusion Prevention Procedure               | .xml           |

---

### ATA Chapter 47: Nitrogen Generation

| S1000D Code                               | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| [rDMC-GP-AM-AP-47-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-47/rDMC-GP-AM-AP-47-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Nitrogen Generation Overview          | .xml           |
| [rDMC-GP-AM-AP-47-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-47/rDMC-GP-AM-AP-47-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Nitrogen Generation System Description| .xml           |
| [rDMC-GP-AM-AP-47-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-47/rDMC-GP-AM-AP-47-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Nitrogen Generation Specification     | .xml           |

---

### ATA Chapter 49: Airborne Auxiliary Power

| S1000D Code                               | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| [rDMC-GP-AM-AP-49-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-49/rDMC-GP-AM-AP-49-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | APU/Alternative Overview              | .xml           |
| [rDMC-GP-AM-AP-49-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-49/rDMC-GP-AM-AP-49-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | APU/Fuel Cell System Description      | .xml           |
| [rDMC-GP-AM-AP-49-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-49/rDMC-GP-AM-AP-49-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | APU/Fuel Cell Specification           | .xml           |

---

### ATA Chapter 50: Cargo Compartments

| S1000D Code                               | Type      | Original Doc InfoCode | Description                               | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-50-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-50/rDMC-GP-AM-AP-50-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Cargo Compartments Overview               | .xml           |
| [rDMC-GP-AM-AP-50-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-50/rDMC-GP-AM-AP-50-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Cargo Loading System Description          | .xml           |
| [rDMC-GP-AM-AP-50-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-50/rDMC-GP-AM-AP-50-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Cargo Compartments Specification          | .xml           |

---

### ATA Chapter 51: Structures – General

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-51-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-51/rDMC-GP-AM-AP-51-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Structures General Overview                    | .xml           |
| [rDMC-GP-AM-AP-51-00-03-00-A-070-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-51/rDMC-GP-AM-AP-51-00-03-00-A-070-A-D.xml) | Descriptive | DD                    | Overall Structure Design                       | .xml           |
| [rDMC-GP-AM-AP-51-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-51/rDMC-GP-AM-AP-51-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Materials Specification                        | .xml           |
| [rDMC-GP-AM-AP-51-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-51/rDMC-GP-AM-AP-51-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | AAMPEL-OPT Process Procedure                   | .xml           |
| [rDMC-GP-AM-AP-51-00-05-00-A-090-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-51/rDMC-GP-AM-AP-51-00-05-00-A-090-A-D.xml) | Descriptive | CAL                   | FEM Summary Calculation/Analysis               | .xml           |
| [rDMC-GP-AM-AP-51-00-06-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-51/rDMC-GP-AM-AP-51-00-06-00-A-060-A-D.xml) | Descriptive | RPT                   | FEM Results Report                             | .xml           |
| [rDMC-GP-AM-AP-51-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-51/rDMC-GP-AM-AP-51-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | AI-SHM System Description                      | .xml           |

---

### ATA Chapter 52: Doors

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-52-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-52/rDMC-GP-AM-AP-52-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Doors Overview                                 | .xml           |
| [rDMC-GP-AM-AP-52-00-00-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-52/rDMC-GP-AM-AP-52-00-00-00-A-013-A-D.xml) | Descriptive | LIST                  | Door Inventory List                            | .xml           |
| [rDMC-GP-AM-AP-52-00-03-00-A-070-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-52/rDMC-GP-AM-AP-52-00-03-00-A-070-A-D.xml) | Descriptive | DD                    | Passenger Door Design                          | .xml           |
| [rDMC-GP-AM-AP-52-00-03-00-A-070-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-52/rDMC-GP-AM-AP-52-00-03-00-A-070-B-D.xml) | Descriptive | DD                    | Cargo Door Design                              | .xml           |
| [rDMC-GP-AM-AP-52-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-52/rDMC-GP-AM-AP-52-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Passenger Door Specification                   | .xml           |
| [rDMC-GP-AM-AP-52-00-00-00-A-050-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-52/rDMC-GP-AM-AP-52-00-00-00-A-050-B-D.xml) | Descriptive | SPEC                  | Cargo Door Specification                       | .xml           |
| [rDMC-GP-AM-AP-52-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-52/rDMC-GP-AM-AP-52-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Door Operation Procedure                       | .xml           |
| [rDMC-GP-AM-AP-52-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-52/rDMC-GP-AM-AP-52-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Smart Actuation System Description             | .xml           |

---

### ATA Chapter 53: Fuselage

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-53-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-53/rDMC-GP-AM-AP-53-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Fuselage Overview                              | .xml           |
| [rDMC-GP-AM-AP-53-00-03-00-A-070-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-53/rDMC-GP-AM-AP-53-00-03-00-A-070-A-D.xml) | Descriptive | DD                    | Fuselage Structure Design                      | .xml           |
| [rDMC-GP-AM-AP-53-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-53/rDMC-GP-AM-AP-53-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Fuselage Specification                         | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-53-00-00-00-A-00-70015-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-53/ICN-GAIAAIR-AMPEL-AP-53-00-00-00-A-00-70015-00001-001-A-00.svg) | ICN       | DWG                   | Structural Layout Drawing                      | .svg           |
| [ICN-GAIAAIR-AMPEL-AP-53-00-00-00-A-00-70016-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-53/ICN-GAIAAIR-AMPEL-AP-53-00-00-00-A-00-70016-00001-001-A-00.svg) | ICN       | DWG                   | Bulkheads Drawing                              | .svg           |

---

### ATA Chapter 54: Nacelles & Pylons

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-54-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-54/rDMC-GP-AM-AP-54-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Nacelles & Pylons Overview                   | .xml           |
| [rDMC-GP-AM-AP-54-00-03-00-A-070-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-54/rDMC-GP-AM-AP-54-00-03-00-A-070-A-D.xml) | Descriptive | DD                    | Nacelle Structure Design                       | .xml           |
| [rDMC-GP-AM-AP-54-00-03-00-A-070-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-54/rDMC-GP-AM-AP-54-00-03-00-A-070-B-D.xml) | Descriptive | DD                    | Pylon Structure Design                         | .xml           |
| [rDMC-GP-AM-AP-54-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-54/rDMC-GP-AM-AP-54-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Nacelles & Pylons Specification                  | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-54-00-90-00-A-00-90002-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-54/ICN-GAIAAIR-AMPEL-AP-54-00-90-00-A-00-90002-00001-001-A-00.svg) | ICN       | DWG                   | Nacelle Assembly Drawing                       | .svg           |
| [ICN-GAIAAIR-AMPEL-AP-54-00-00-00-A-00-70017-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-54/ICN-GAIAAIR-AMPEL-AP-54-00-00-00-A-00-70017-00001-001-A-00.svg) | ICN       | DWG                   | Pylon Interface Drawing                        | .svg           |

---

### ATA Chapter 55: Stabilizers

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-55-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-55/rDMC-GP-AM-AP-55-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Stabilizers Overview                           | .xml           |
| [rDMC-GP-AM-AP-55-00-03-00-A-070-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-55/rDMC-GP-AM-AP-55-00-03-00-A-070-A-D.xml) | Descriptive | DD                    | Horizontal Stabilizer Design                   | .xml           |
| [rDMC-GP-AM-AP-55-00-03-00-A-070-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-55/rDMC-GP-AM-AP-55-00-03-00-A-070-B-D.xml) | Descriptive | DD                    | Vertical Stabilizer Design                     | .xml           |
| [rDMC-GP-AM-AP-55-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-55/rDMC-GP-AM-AP-55-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Stabilizers Specification                      | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-55-00-00-00-A-00-70018-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-55/ICN-GAIAAIR-AMPEL-AP-55-00-00-00-A-00-70018-00001-001-A-00.svg) | ICN       | DWG                   | Structural Layout Drawing                      | .svg           |

---

### ATA Chapter 56: Windows

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                  | File Extension |
|-----------------------------------------|-----------|-----------------------|----------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-56-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-56/rDMC-GP-AM-AP-56-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Windows Overview                             | .xml           |
| [rDMC-GP-AM-AP-56-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-56/rDMC-GP-AM-AP-56-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Windows Specification                        | .xml           |
| [rDMC-GP-AM-AP-56-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-56/rDMC-GP-AM-AP-56-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | VR Window System Description                 | .xml           |

---

### ATA Chapter 57: Wings

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-----------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-57-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-57/rDMC-GP-AM-AP-57-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Wings Overview                                 | .xml           |
| [rDMC-GP-AM-AP-57-00-03-00-A-070-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-57/rDMC-GP-AM-AP-57-00-03-00-A-070-A-D.xml) | Descriptive | DD                    | Center Wing Structure Design                   | .xml           |
| [rDMC-GP-AM-AP-57-00-03-00-A-070-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-57/rDMC-GP-AM-AP-57-00-03-00-A-070-B-D.xml) | Descriptive | DD                    | Outer Wing Structure Design                    | .xml           |
| [rDMC-GP-AM-AP-57-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-57/rDMC-GP-AM-AP-57-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Wings Specification                            | .xml           |
| [rDMC-GP-AM-AP-57-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-57/rDMC-GP-AM-AP-57-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Wing Systems Description                       | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-57-00-00-00-A-00-70019-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-57/ICN-GAIAAIR-AMPEL-AP-57-00-00-00-A-00-70019-00001-001-A-00.svg) | ICN       | DWG                   | Structural Layout Drawing                      | .svg           |
| [rDMC-GP-AM-AP-57-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-57/rDMC-GP-AM-AP-57-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | GPAM Integration Interface Control             | .xml           |

---

### ATA Chapter 60: Standard Practices – Engine

| S1000D Code                               | Type      | Original Doc InfoCode | Description                                    | File Extension |
|-------------------------------------------|-----------|-----------------------|------------------------------------------------|-----------------|
| [rDMC-GP-AM-AP-60-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-60/rDMC-GP-AM-AP-60-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Engine Standard Practices Overview             | .xml           |
| [rDMC-GP-AM-AP-60-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-60/rDMC-GP-AM-AP-60-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Engine Maintenance Practices Procedure         | .xml           |
| [rDMC-GP-AM-AP-60-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-60/rDMC-GP-AM-AP-60-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Engine Tools & Materials Specification         | .xml           |

---

### ATA Chapter 61: Propellers

| S1000D Code                               | Type      | Original Doc InfoCode | Description                             | File Extension |
|-----------------------------------------|-----------|-----------------------|-----------------------------------------|----------------|
| [rDMC-GP-AM-AP-61-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-61/rDMC-GP-AM-AP-61-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Propellers Overview                     | .xml           |
| [rDMC-GP-AM-AP-61-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-61/rDMC-GP-AM-AP-61-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Propellers System Description           | .xml           |
| [rDMC-GP-AM-AP-61-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-61/rDMC-GP-AM-AP-61-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Propellers Specification                | .xml           |

---

### ATA Chapters 62-70 (Non-Applicable or Duplicate)

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-62-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-62/rDMC-GP-AM-AP-62-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Main Rotor Overview (N/A)           | .xml           |
| [rDMC-GP-AM-AP-63-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-63/rDMC-GP-AM-AP-63-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Main Rotor Drive Overview (N/A)     | .xml           |
| [rDMC-GP-AM-AP-64-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-64/rDMC-GP-AM-AP-64-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Tail Rotor Overview (N/A)           | .xml           |
| [rDMC-GP-AM-AP-65-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-65/rDMC-GP-AM-AP-65-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Tail Rotor Drive Overview (N/A)     | .xml           |
| [rDMC-GP-AM-AP-66-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-66/rDMC-GP-AM-AP-66-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Folding Blades Overview (N/A)       | .xml           |
| [rDMC-GP-AM-AP-67-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-67/rDMC-GP-AM-AP-67-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Rotors & Flight Control Overview (N/A)| .xml           |
| [rDMC-GP-AM-AP-70-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-70/rDMC-GP-AM-AP-70-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Std Practices – Engine (See ATA 60) | .xml           |

---

### ATA Chapter 71: Power Plant

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-71-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-71/rDMC-GP-AM-AP-71-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Power Plant Overview                | .xml           |
| [rDMC-GP-AM-AP-71-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-71/rDMC-GP-AM-AP-71-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Propulsion Integration System Desc. | .xml           |

---

### ATA Chapter 72: Engine

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-72-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-72/rDMC-GP-AM-AP-72-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Engine Overview                     | .xml           |
| [rDMC-GP-AM-AP-72-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-72/rDMC-GP-AM-AP-72-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Engine System Description           | .xml           |
| [rDMC-GP-AM-AP-72-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-72/rDMC-GP-AM-AP-72-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Engine Specification                | .xml           |

---

### ATA Chapter 72 Q01: Quantum Propulsion

*(Note: Uses Subsystem Code Q0, Sub-subsystem Code 1)*

| S1000D Code                               | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| [rDMC-GP-AM-AP-72-Q0-1-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-72/rDMC-GP-AM-AP-72-Q0-1-00-A-040-A-D.xml) | Descriptive | OV                    | Quantum Propulsion Overview          | .xml           |
| [rDMC-GP-AM-AP-72-Q0-1-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-72/rDMC-GP-AM-AP-72-Q0-1-00-A-040-B-D.xml) | Descriptive | SDD                   | Quantum Propulsion System Description | .xml           |
| [rDMC-GP-AM-AP-72-Q0-1-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-72/rDMC-GP-AM-AP-72-Q0-1-00-A-050-A-D.xml) | Descriptive | SPEC                  | Quantum Propulsion Specification      | .xml           |
| [rDMC-GP-AM-AP-72-Q0-1-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-72/rDMC-GP-AM-AP-72-Q0-1-02-00-A-060-A-D.xml) | Descriptive | ICD                   | Quantum Propulsion Interface Control  | .xml           |

---

### ATA Chapter 73: Engine Fuel Control

| S1000D Code                               | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| [rDMC-GP-AM-AP-73-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-73/rDMC-GP-AM-AP-73-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Engine Fuel Control Overview          | .xml           |
| [rDMC-GP-AM-AP-73-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-73/rDMC-GP-AM-AP-73-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Engine Fuel Control System Description| .xml           |
| [rDMC-GP-AM-AP-73-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-73/rDMC-GP-AM-AP-73-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | FADEC Specification                   | .xml           |

---

### ATA Chapter 74: Ignition

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-74-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-74/rDMC-GP-AM-AP-74-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Ignition Overview                   | .xml           |
| [rDMC-GP-AM-AP-74-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-74/rDMC-GP-AM-AP-74-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Ignition System Description         | .xml           |
| [rDMC-GP-AM-AP-74-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-74/rDMC-GP-AM-AP-74-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Ignition Specification                | .xml           |

---

### ATA Chapter 75: Air Supply (Engine)

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-75-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-75/rDMC-GP-AM-AP-75-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Air Supply Overview                 | .xml           |
| [rDMC-GP-AM-AP-75-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-75/rDMC-GP-AM-AP-75-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Engine Bleed Air System Description | .xml           |
| [rDMC-GP-AM-AP-75-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-75/rDMC-GP-AM-AP-75-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Engine Air Supply Specification       | .xml           |

---

### ATA Chapter 76: Engine Controls

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-76-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-76/rDMC-GP-AM-AP-76-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Engine Controls Overview            | .xml           |
| [rDMC-GP-AM-AP-76-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-76/rDMC-GP-AM-AP-76-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Engine Controls System Description  | .xml           |
| [rDMC-GP-AM-AP-76-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-76/rDMC-GP-AM-AP-76-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | Engine-Cockpit Interface Control    | .xml           |

---

### ATA Chapter 77: Engine Indicating

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-77-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-77/rDMC-GP-AM-AP-77-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Engine Indicating Overview          | .xml           |
| [rDMC-GP-AM-AP-77-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-77/rDMC-GP-AM-AP-77-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Engine Indicating System Description| .xml           |
| [rDMC-GP-AM-AP-77-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-77/rDMC-GP-AM-AP-77-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Engine Indicating Specification     | .xml           |
| [rDMC-GP-AM-AP-77-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-77/rDMC-GP-AM-AP-77-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | i-Aher0 Link Interface Control      | .xml           |

---

### ATA Chapter 78: Exhaust

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-78-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-78/rDMC-GP-AM-AP-78-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Exhaust Overview                    | .xml           |
| [rDMC-GP-AM-AP-78-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-78/rDMC-GP-AM-AP-78-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Exhaust System Description          | .xml           |
| [rDMC-GP-AM-AP-78-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-78/rDMC-GP-AM-AP-78-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Exhaust Specification               | .xml           |

---

### ATA Chapter 79: Oil System

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-79-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-79/rDMC-GP-AM-AP-79-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Oil System Overview                 | .xml           |
| [rDMC-GP-AM-AP-79-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-79/rDMC-GP-AM-AP-79-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Oil System Description              | .xml           |
| [rDMC-GP-AM-AP-79-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-79/rDMC-GP-AM-AP-79-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Oil System Specification              | .xml           |

---

### ATA Chapter 80: Starting System

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-80-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-80/rDMC-GP-AM-AP-80-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Starting System Overview            | .xml           |
| [rDMC-GP-AM-AP-80-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-80/rDMC-GP-AM-AP-80-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Starting System Description         | .xml           |
| [rDMC-GP-AM-AP-80-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-80/rDMC-GP-AM-AP-80-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Starting System Specification       | .xml           |
| [rDMC-GP-AM-AP-80-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-80/rDMC-GP-AM-AP-80-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Starting Sequence Procedure         | .xml           |

---

### ATA Chapter 83: Accessory Gearboxes

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-83-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-83/rDMC-GP-AM-AP-83-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Accessory Gearboxes Overview        | .xml           |
| [rDMC-GP-AM-AP-83-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-83/rDMC-GP-AM-AP-83-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Accessory Gearboxes System Desc.    | .xml           |
| [rDMC-GP-AM-AP-83-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-83/rDMC-GP-AM-AP-83-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Accessory Gearboxes Specification     | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-83-00-90-00-A-00-90003-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-83/ICN-GAIAAIR-AMPEL-AP-83-00-90-00-A-00-90003-00001-001-A-00.svg) | ICN       | DWG                   | Accessory Gearboxes Assembly Drawing| .svg           |

---

### ATA Chapter 85: Fuel Cell System

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-85-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-85/rDMC-GP-AM-AP-85-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Fuel Cell System Overview           | .xml           |
| [rDMC-GP-AM-AP-85-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-85/rDMC-GP-AM-AP-85-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Fuel Cell System Description        | .xml           |
| [rDMC-GP-AM-AP-85-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-85/rDMC-GP-AM-AP-85-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Fuel Cell System Specification        | .xml           |
| [rDMC-GP-AM-AP-85-00-02-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-85/rDMC-GP-AM-AP-85-00-02-00-A-060-A-D.xml) | Descriptive | ICD                   | Fuel Cell System Interface Control  | .xml           |

---

### ATA Chapter 91: Charts

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-91-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-91/rDMC-GP-AM-AP-91-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Charts Overview                     | .xml           |
| [rDMC-GP-AM-AP-91-00-00-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-91/rDMC-GP-AM-AP-91-00-00-00-A-013-A-D.xml) | Descriptive | CAT/LIST              | Applicable Charts Catalog/List      | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-91-00-40-00-A-00-40001-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-91/ICN-GAIAAIR-AMPEL-AP-91-00-40-00-A-00-40001-00001-001-A-00.svg) | ICN       | FIG                   | Example Charts Diagram              | .svg           |

---

### ATA Chapter 92: Electrical Wiring

| S1000D Code                               | Type      | Original Doc InfoCode | Description                           | File Extension |
|-----------------------------------------|-----------|-----------------------|---------------------------------------|-----------------|
| [rDMC-GP-AM-AP-92-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-92/rDMC-GP-AM-AP-92-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Electrical Wiring Overview            | .xml           |
| [ICN-GAIAAIR-AMPEL-AP-92-00-80-00-A-00-80001-00001-001-A-00.svg](gaia-air-crafts/GP-AM/docs/Chapter-92/ICN-GAIAAIR-AMPEL-AP-92-00-80-00-A-00-80001-00001-001-A-00.svg) | ICN       | DWG                   | Wiring Diagrams ICN Set             | .svg           |
| [rDMC-GP-AM-AP-92-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-92/rDMC-GP-AM-AP-92-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Wire Types & Connectors Spec.         | .xml           |
| [rDMC-GP-AM-AP-92-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-92/rDMC-GP-AM-AP-92-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Wiring Installation & Repair Proc.    | .xml           |

---

### ATA Chapter 95: Special Equipment

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-95-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-95/rDMC-GP-AM-AP-95-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Special Equipment Overview          | .xml           |
| [rDMC-GP-AM-AP-95-00-00-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-95/rDMC-GP-AM-AP-95-00-00-00-A-013-A-D.xml) | Descriptive | LIST                  | Special Tools & Equipment List      | .xml           |
| [rDMC-GP-AM-AP-95-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-95/rDMC-GP-AM-AP-95-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Special Equipment Specification     | .xml           |

---

### ATA Chapter 97: Wiring Reporting

| S1000D Code                               | Type      | Original Doc InfoCode | Description                         | File Extension |
|-----------------------------------------|-----------|-----------------------|-------------------------------------|----------------|
| [rDMC-GP-AM-AP-97-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-97/rDMC-GP-AM-AP-97-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Wiring Reporting Overview           | .xml           |
| [rDMC-GP-AM-AP-97-00-00-00-A-520-A-A.xml](gaia-air-crafts/GP-AM/docs/Chapter-97/rDMC-GP-AM-AP-97-00-00-00-A-520-A-A.xml) | Procedural | PROC                  | Generating Wiring Reports Procedure | .xml           |

---

### ATA Chapter 99: Special Technology

| S1000D Code                               | Type      | Original Doc InfoCode | Description                             | File Extension |
|-----------------------------------------|-----------|-----------------------|-----------------------------------------|----------------|
| [rDMC-GP-AM-AP-99-00-00-00-A-040-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-99/rDMC-GP-AM-AP-99-00-00-00-A-040-A-D.xml) | Descriptive | OV                    | Special Technology Overview           | .xml           |
| [rDMC-GP-AM-AP-99-00-00-00-A-040-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-99/rDMC-GP-AM-AP-99-00-00-00-A-040-B-D.xml) | Descriptive | SDD                   | Special Technology System Description   | .xml           |
| [rDMC-GP-AM-AP-99-00-00-00-A-050-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-99/rDMC-GP-AM-AP-99-00-00-00-A-050-A-D.xml) | Descriptive | SPEC                  | Special Technology Specification      | .xml           |
| [rDMC-GP-AM-AP-99-00-00-00-A-013-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-99/rDMC-GP-AM-AP-99-00-00-00-A-013-A-D.xml) | Descriptive | LIST                  | Novel Sensor Technology List          | .xml           |
| [rDMC-GP-AM-AP-99-00-06-00-A-060-A-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-99/rDMC-GP-AM-AP-99-00-06-00-A-060-A-D.xml) | Descriptive | RPT                   | Warp/Wormhole R&D Report              | .xml           |
| [rDMC-GP-AM-AP-99-00-02-00-A-060-B-D.xml](gaia-air-crafts/GP-AM/docs/Chapter-99/rDMC-GP-AM-AP-99-00-02-00-A-060-B-D.xml) | Descriptive | ICD                   | HPC/Quantum Fabric Interface Control  | .xml           |

---

## Summary Counts

*   **Total XML Files (Data Modules):** Based on counting the .xml rows in the detailed tables and the Foundational DMs, this remains approximately **~260 XML Files**.
*   **Total SVG/CGM Files (Illustrations/ICNs):** Based on counting the .svg rows in the detailed tables and the ATA 42 specific ICNs (~23), assuming the ATA 92 set is 10 individual ICNs, this remains approximately **~73 SVG/CGM Files**.

This gives a total estimated baseline of around **~333 individual files** at the MSN1 Published status.

---

**Note:** The paths used here (`gaia-air-crafts/GP-AM/docs/Chapter-XX/...`) are constructed to match the structure implied by your file path example and may not reflect a standard CSDB or file system layout, which often use `/data/DMC/...` or `/data/ICN/...` or are flat directories. The exact file names with `rDMC-` prefixes are also based on your specific example structure.
