---
title: "A4001 Avionics System – System Specification"
id: a4001-system-specification
part_of: engineering-documentation
system_code: "A4001"
ata_chapter: "42"
seq: "002"
info_code: "SPEC"
document_number: "GP-AM-AMPEL-0100-42-002-SPEC-A"
revision: "A"          # Rev A = initial release
tags:
  - specification
  - gp-am
  - ata
  - requirements
  - system
contributors:
  - "GAIA AIR Certification Team"
last_updated: "2025-04-20"
review_status: draft
classification: internal
related_documents:
  - GP-AM-AMPEL-0100-42-001-OV-A
  - GP-AM-AMPEL-0100-42-003-SDD-A
  - GP-AM-AMPEL-0100-42-007-CAT-A
info_codes:
  - GP-AM-0100
---

# A4001 Avionics System – System Specification (Rev A)

> **Document purpose** – This specification defines the requirements for the A4001 Avionics System including functional, performance, environmental, interface, safety, reliability, maintainability, certification, and test requirements.

---

## 1  Document Control

### 1.1  Revision History

| Revision | Date       | Description      | Author                          |
|----------|------------|------------------|---------------------------------|
| A        | 2025‑04‑20 | Initial release  | GAIA AIR Certification Team     |

### 1.2  Approval

| Role                      | Name                | Organization        | Signature | Date       |
|---------------------------|---------------------|---------------------|-----------|------------|
| System Engineer           | [Name]              | GAIA AIR            | _______   | YYYY-MM-DD |
| Chief Engineer            | [Name]              | GAIA AIR            | _______   | YYYY-MM-DD |
| Certification Manager     | [Name]              | GAIA AIR            | _______   | YYYY-MM-DD |
| Quality Assurance         | [Name]              | GAIA AIR            | _______   | YYYY-MM-DD |

### 1.3  Distribution

This document is distributed to:

1. GAIA AIR Engineering Team
2. GAIA AIR Certification Team
3. Supplier Engineering Teams
4. EASA Certification Authority (as required)

---

## 2  Introduction

### 2.1  Purpose

This System Specification defines the requirements for the A4001 Avionics System. It establishes the functional, performance, environmental, interface, safety, reliability, maintainability, certification, and test requirements that the system must satisfy.

### 2.2  Scope

This specification applies to the A4001 Avionics System and all its subsystems:
- A4001-A: Flight Control System
- A4001-B: Navigation System
- A4001-C: Communication System

### 2.3  Document Structure

This document is organized as follows:
- Section 1: Document Control
- Section 2: Introduction
- Section 3: Applicable Documents
- Section 4: System Overview
- Section 5: Functional Requirements
- Section 6: Performance Requirements
- Section 7: Environmental Requirements
- Section 8: Interface Requirements
- Section 9: Safety Requirements
- Section 10: Reliability Requirements
- Section 11: Maintainability Requirements
- Section 12: Certification Requirements
- Section 13: Test Requirements
- Section 14: Acronyms & Abbreviations
- Section 15: References
- Section 16: Appendices

### 2.4  Requirement Identification

Requirements in this document are uniquely identified using the following convention:

[System]-[Category]-[Sequential Number]

Where:
- [System] = A4001
- [Category] = FUNC (Functional), PERF (Performance), ENV (Environmental), INT (Interface), SAF (Safety), REL (Reliability), MAINT (Maintainability), CERT (Certification), TEST (Test)
- [Sequential Number] = Three-digit sequential number (e.g., 001, 002, etc.)

Example: A4001-FUNC-001

---

## 3  Applicable Documents

### 3.1  Regulations

1. EASA CS-25 Certification Specifications for Large Aeroplanes
2. EASA AMC 25.1309 System Design and Analysis
3. RTCA DO-178C Software Considerations in Airborne Systems and Equipment Certification
4. RTCA DO-254 Design Assurance Guidance for Airborne Electronic Hardware
5. RTCA DO-160G Environmental Conditions and Test Procedures for Airborne Equipment

### 3.2  Standards

1. ARINC 429 Digital Information Transfer System (DITS)
2. ARINC 664 Aircraft Data Network
3. ARINC 653 Avionics Application Software Standard Interface
4. MIL-STD-1553B Digital Time Division Command/Response Multiplex Data Bus
5. MIL-STD-810G Environmental Engineering Considerations and Laboratory Tests

### 3.3  Project Documents

1. System Overview — GP-AM-AMPEL-0100-42-001-OV-A
2. System Design Description — GP-AM-AMPEL-0100-42-003-SDD-A
3. Interface Control Document — GP-AM-AMPEL-0100-42-004-ICD-A
4. Interface Matrix — GP-AM-AMPEL-0100-42-007-CAT-A
5. Safety Assessment Report — GP-AM-AMPEL-0100-42-010-SAR-A

---

## 4  System Overview

### 4.1  System Description

The A4001 Avionics System is an integrated suite of electronic systems that provides flight control, navigation, and communication functions for the aircraft. The system consists of three main subsystems:

1. A4001-A: Flight Control System
   - Primary and Secondary Flight Computers
   - Flight Control Laws Processing Unit
   - Actuator Control Unit
   - Flight Mode Selector

2. A4001-B: Navigation System
   - A4001-B-1: GPS Receiver
   - A4001-B-2: Inertial Navigation System

3. A4001-C: Communication System
   - VHF and HF Transceivers
   - SATCOM Interface
   - Data Link Processor
   - Audio Management Unit

### 4.2  System Architecture

The A4001 Avionics System employs a distributed architecture with redundant components and communication paths to ensure high reliability and availability. The system uses a combination of ARINC 429, ARINC 664 (AFDX), and MIL-STD-1553B data buses for internal and external communications.

[System Architecture Diagram to be inserted here]

### 4.3  System Boundaries

The A4001 Avionics System interfaces with the following aircraft systems:
- Flight Control Actuators
- Primary Flight Display
- Engine Control System
- Aircraft Power System
- Cockpit Control Panels
- Warning Systems
- Landing Gear System
- Fuel Management System
- Navigation Sensors
- Weather Radar
- Environmental Control System
- Communication Radios

Ground Support Equipment interfaces include:
- Maintenance Computer
- Test Equipment

### 4.4  Operational Concept

The A4001 Avionics System operates continuously during all phases of flight, from pre-flight through post-flight. It provides the following primary functions:
- Flight control and stability augmentation
- Navigation and positioning
- Communication with ground stations and other aircraft
- System monitoring and fault detection

---

## 5  Functional Requirements

### 5.1  General Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-FUNC-001 | The A4001 Avionics System shall provide flight control, navigation, and communication functions. | Demonstration |
| A4001-FUNC-002 | The A4001 Avionics System shall operate in all phases of flight. | Test |
| A4001-FUNC-003 | The A4001 Avionics System shall provide built-in test capability. | Test |
| A4001-FUNC-004 | The A4001 Avionics System shall provide fault detection, isolation, and recovery capabilities. | Test |
| A4001-FUNC-005 | The A4001 Avionics System shall provide status information to the flight crew. | Demonstration |

### 5.2  Flight Control System Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-FUNC-101 | The Flight Control System shall process pilot inputs and sensor data to generate control surface commands. | Test |
| A4001-FUNC-102 | The Flight Control System shall provide stability augmentation in all axes (pitch, roll, yaw). | Test |
| A4001-FUNC-103 | The Flight Control System shall provide flight envelope protection. | Test |
| A4001-FUNC-104 | The Flight Control System shall provide autopilot functionality. | Test |
| A4001-FUNC-105 | The Flight Control System shall provide flight director guidance. | Test |

### 5.3  Navigation System Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-FUNC-201 | The Navigation System shall determine aircraft position with an accuracy of [TBD]. | Test |
| A4001-FUNC-202 | The Navigation System shall provide attitude, heading, and air data information. | Test |
| A4001-FUNC-203 | The Navigation System shall support RNAV and RNP operations. | Test |
| A4001-FUNC-204 | The Navigation System shall provide approach guidance for precision and non-precision approaches. | Test |
| A4001-FUNC-205 | The Navigation System shall provide terrain awareness. | Test |

### 5.4  Communication System Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-FUNC-301 | The Communication System shall provide VHF voice communication. | Test |
| A4001-FUNC-302 | The Communication System shall provide HF voice communication. | Test |
| A4001-FUNC-303 | The Communication System shall provide SATCOM voice and data communication. | Test |
| A4001-FUNC-304 | The Communication System shall provide datalink capability for CPDLC and ADS-C. | Test |
| A4001-FUNC-305 | The Communication System shall provide audio management for all communication sources. | Test |

---

## 6  Performance Requirements

### 6.1  General Performance Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-PERF-001 | The A4001 Avionics System shall have a power-up time of less than 60 seconds. | Test |
| A4001-PERF-002 | The A4001 Avionics System shall have a continuous operation capability of at least 24 hours. | Test |
| A4001-PERF-003 | The A4001 Avionics System shall have a data processing latency of less than 50 milliseconds for critical functions. | Test |
| A4001-PERF-004 | The A4001 Avionics System shall have a data refresh rate of at least 20 Hz for flight critical parameters. | Test |
| A4001-PERF-005 | The A4001 Avionics System shall have a mean time between failures (MTBF) of at least 10,000 flight hours. | Analysis |

### 6.2  Flight Control System Performance

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-PERF-101 | The Flight Control System shall have a control loop execution rate of at least 50 Hz. | Test |
| A4001-PERF-102 | The Flight Control System shall have a control surface command latency of less than 20 milliseconds. | Test |
| A4001-PERF-103 | The Flight Control System shall maintain aircraft stability in all certified flight conditions. | Test |
| A4001-PERF-104 | The Flight Control System shall provide autopilot tracking accuracy of ±50 feet for altitude and ±0.5 degrees for heading. | Test |
| A4001-PERF-105 | The Flight Control System shall detect and respond to failures within 100 milliseconds. | Test |

### 6.3  Navigation System Performance

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-PERF-201 | The Navigation System shall provide position accuracy of ±0.1 NM during en-route operations. | Test |
| A4001-PERF-202 | The Navigation System shall provide position accuracy of ±0.3 NM during terminal operations. | Test |
| A4001-PERF-203 | The Navigation System shall provide position accuracy of ±0.1 NM during approach operations. | Test |
| A4001-PERF-204 | The Navigation System shall provide attitude accuracy of ±0.5 degrees. | Test |
| A4001-PERF-205 | The Navigation System shall provide heading accuracy of ±1.0 degree. | Test |

### 6.4  Communication System Performance

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-PERF-301 | The Communication System shall provide VHF communication range of at least 200 NM at cruise altitude. | Test |
| A4001-PERF-302 | The Communication System shall provide HF communication range of at least 2,000 NM. | Test |
| A4001-PERF-303 | The Communication System shall provide SATCOM coverage in all operational areas. | Demonstration |
| A4001-PERF-304 | The Communication System shall provide datalink message delivery with a success rate of at least 99%. | Test |
| A4001-PERF-305 | The Communication System shall provide audio quality with a minimum intelligibility score of 0.7 on the Speech Transmission Index. | Test |

---

## 7  Environmental Requirements

### 7.1  Temperature and Altitude

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-ENV-001 | The A4001 Avionics System shall operate within specification at temperatures from -55°C to +70°C. | Test |
| A4001-ENV-002 | The A4001 Avionics System shall operate within specification at altitudes from sea level to 45,000 feet. | Test |
| A4001-ENV-003 | The A4001 Avionics System shall withstand rapid decompression from sea level to 45,000 feet in 1 second. | Test |
| A4001-ENV-004 | The A4001 Avionics System shall operate within specification during temperature changes of up to 10°C per minute. | Test |
| A4001-ENV-005 | The A4001 Avionics System shall operate within specification at relative humidity levels from 0% to 95% non-condensing. | Test |

### 7.2  Vibration and Shock

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-ENV-101 | The A4001 Avionics System shall operate within specification when subjected to random vibration as defined in RTCA DO-160G Section 8 Category R. | Test |
| A4001-ENV-102 | The A4001 Avionics System shall operate within specification when subjected to sinusoidal vibration as defined in RTCA DO-160G Section 8 Category S. | Test |
| A4001-ENV-103 | The A4001 Avionics System shall operate within specification after being subjected to operational shocks of 6g peak, 11ms duration. | Test |
| A4001-ENV-104 | The A4001 Avionics System shall operate within specification after being subjected to crash safety shocks of 20g peak, 11ms duration. | Test |
| A4001-ENV-105 | The A4001 Avionics System shall operate within specification when subjected to continuous acceleration of 7g in any direction. | Test |

### 7.3  Electromagnetic Compatibility

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-ENV-201 | The A4001 Avionics System shall operate within specification when subjected to conducted emissions as defined in RTCA DO-160G Section 21 Category M. | Test |
| A4001-ENV-202 | The A4001 Avionics System shall operate within specification when subjected to radiated emissions as defined in RTCA DO-160G Section 21 Category M. | Test |
| A4001-ENV-203 | The A4001 Avionics System shall operate within specification when subjected to conducted susceptibility as defined in RTCA DO-160G Section 20 Category R. | Test |
| A4001-ENV-204 | The A4001 Avionics System shall operate within specification when subjected to radiated susceptibility as defined in RTCA DO-160G Section 20 Category R. | Test |
| A4001-ENV-205 | The A4001 Avionics System shall operate within specification when subjected to lightning induced transients as defined in RTCA DO-160G Section 22 Category A3J3L3. | Test |

### 7.4  Power Supply

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-ENV-301 | The A4001 Avionics System shall operate within specification when supplied with 28V DC power as defined in RTCA DO-160G Section 16 Category B. | Test |
| A4001-ENV-302 | The A4001 Avionics System shall operate within specification when supplied with 115V AC 400Hz power as defined in RTCA DO-160G Section 16 Category B. | Test |
| A4001-ENV-303 | The A4001 Avionics System shall operate within specification during power interruptions of up to 200ms. | Test |
| A4001-ENV-304 | The A4001 Avionics System shall operate within specification during voltage spikes as defined in RTCA DO-160G Section 17 Category A. | Test |
| A4001-ENV-305 | The A4001 Avionics System shall operate within specification during frequency variations as defined in RTCA DO-160G Section 16 Category B. | Test |

---

## 8  Interface Requirements

### 8.1  External Interfaces

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-INT-001 | The A4001 Avionics System shall interface with Flight Control Actuators using ARINC 429 as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |
| A4001-INT-002 | The A4001 Avionics System shall interface with the Aircraft Power System using 28V DC and 115V AC 400Hz as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |
| A4001-INT-003 | The A4001 Avionics System shall interface with the Primary Flight Display using ARINC 664 (AFDX) as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |
| A4001-INT-004 | The A4001 Avionics System shall interface with the Engine Control System using ARINC 429 as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |
| A4001-INT-005 | The A4001 Avionics System shall interface with Maintenance Computer (GSE) using Ethernet as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |

### 8.2  Internal Interfaces

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-INT-101 | The Flight Control System shall interface with the Navigation System using ARINC 429 as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |
| A4001-INT-102 | The Navigation System shall interface with the Flight Control System using ARINC 429 as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |
| A4001-INT-103 | The Navigation System shall interface with the Communication System using ARINC 429 as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |
| A4001-INT-104 | The Communication System shall interface with the Flight Control System using ARINC 429 as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |
| A4001-INT-105 | All subsystems shall interface with the System Data Bus using ARINC 664 (AFDX) as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |

### 8.3  Software Interfaces

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-INT-201 | The Flight Control Software shall interface with the Navigation Software using ARINC 653 API as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |
| A4001-INT-202 | The Navigation Software shall interface with the Communication Software using ARINC 653 API as defined in GP-AM-AMPEL-0100-42-007-CAT-A. | Test |
| A4001-INT-203 | All software modules shall interface with the Operating System using ARINC 653 API. | Test |
| A4001-INT-204 | All software modules shall interface with the Health Monitoring software using defined APIs. | Test |
| A4001-INT-205 | All software modules shall interface with the Maintenance software using defined APIs. | Test |

---

## 9  Safety Requirements

### 9.1  General Safety Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-SAF-001 | The A4001 Avionics System shall be developed to Design Assurance Level (DAL) A as defined in RTCA DO-178C and DO-254. | Analysis |
| A4001-SAF-002 | The A4001 Avionics System shall not have any single point of failure that could result in a catastrophic failure condition. | Analysis |
| A4001-SAF-003 | The A4001 Avionics System shall detect and annunciate all failures that could result in hazardous or catastrophic failure conditions. | Test |
| A4001-SAF-004 | The A4001 Avionics System shall provide failure detection coverage of at least 99% for all critical functions. | Analysis |
| A4001-SAF-005 | The A4001 Avionics System shall maintain safe operation after any single failure. | Test |

### 9.2  Specific Safety Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-SAF-101 | The Flight Control System shall maintain aircraft control after any single failure. | Test |
| A4001-SAF-102 | The Navigation System shall provide position integrity monitoring and alerting. | Test |
| A4001-SAF-103 | The Communication System shall provide alternate communication paths in case of primary path failure. | Test |
| A4001-SAF-104 | The A4001 Avionics System shall prevent inadvertent mode changes during critical flight phases. | Test |
| A4001-SAF-105 | The A4001 Avionics System shall provide protection against erroneous pilot inputs that could result in unsafe conditions. | Test |

### 9.3  Failure Conditions

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-SAF-201 | Loss of all flight control functions shall have a probability of occurrence less than 1x10^-9 per flight hour. | Analysis |
| A4001-SAF-202 | Loss of all navigation functions shall have a probability of occurrence less than 1x10^-7 per flight hour. | Analysis |
| A4001-SAF-203 | Loss of all communication functions shall have a probability of occurrence less than 1x10^-5 per flight hour. | Analysis |
| A4001-SAF-204 | Undetected erroneous flight control commands shall have a probability of occurrence less than 1x10^-9 per flight hour. | Analysis |
| A4001-SAF-205 | Undetected erroneous navigation data shall have a probability of occurrence less than 1x10^-7 per flight hour. | Analysis |

---

## 10  Reliability Requirements

### 10.1  General Reliability Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-REL-001 | The A4001 Avionics System shall have a Mean Time Between Failures (MTBF) of at least 10,000 flight hours. | Analysis |
| A4001-REL-002 | The A4001 Avionics System shall have a probability of dispatch with all functions operational of at least 99%. | Analysis |
| A4001-REL-003 | The A4001 Avionics System shall have a probability of mission completion without failure of at least 99.9%. | Analysis |
| A4001-REL-004 | The A4001 Avionics System shall have a service life of at least 20,000 flight hours or 10 years, whichever occurs first. | Analysis |
| A4001-REL-005 | The A4001 Avionics System shall have a reliability growth rate of at least 10% per year during the first 5 years of operation. | Analysis |

### 10.2  Subsystem Reliability Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-REL-101 | The Flight Control System shall have an MTBF of at least 20,000 flight hours. | Analysis |
| A4001-REL-102 | The Navigation System shall have an MTBF of at least 15,000 flight hours. | Analysis |
| A4001-REL-103 | The Communication System shall have an MTBF of at least 12,000 flight hours. | Analysis |
| A4001-REL-104 | The System Data Bus shall have an MTBF of at least 50,000 flight hours. | Analysis |
| A4001-REL-105 | The Power Supply shall have an MTBF of at least 30,000 flight hours. | Analysis |

### 10.3  Redundancy Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-REL-201 | The Flight Control System shall employ triple redundancy for all critical functions. | Inspection |
| A4001-REL-202 | The Navigation System shall employ dual redundancy for all critical functions. | Inspection |
| A4001-REL-203 | The Communication System shall employ dual redundancy for all critical functions. | Inspection |
| A4001-REL-204 | The System Data Bus shall employ dual redundancy. | Inspection |
| A4001-REL-205 | The Power Supply shall employ dual redundancy. | Inspection |

---

## 11  Maintainability Requirements

### 11.1  General Maintainability Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-MAINT-001 | The A4001 Avionics System shall have a Mean Time To Repair (MTTR) of less than 2 hours. | Analysis |
| A4001-MAINT-002 | The A4001 Avionics System shall have Built-In Test (BIT) capability that detects at least 95% of all failures. | Test |
| A4001-MAINT-003 | The A4001 Avionics System shall have Line Replaceable Units (LRUs) that can be removed and replaced without special tools. | Demonstration |
| A4001-MAINT-004 | The A4001 Avionics System shall have a maintenance interval of at least 5,000 flight hours. | Analysis |
| A4001-MAINT-005 | The A4001 Avionics System shall provide maintenance data recording for at least the last 100 flight hours. | Test |

### 11.2  Diagnostic Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-MAINT-101 | The A4001 Avionics System shall perform a comprehensive self-test at power-up. | Test |
| A4001-MAINT-102 | The A4001 Avionics System shall perform continuous background monitoring during operation. | Test |
| A4001-MAINT-103 | The A4001 Avionics System shall provide fault isolation to the LRU level. | Test |
| A4001-MAINT-104 | The A4001 Avionics System shall provide maintenance alerts for impending failures. | Test |
| A4001-MAINT-105 | The A4001 Avionics System shall provide a maintenance interface for external diagnostic equipment. | Test |

### 11.3  Maintenance Data Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-MAINT-201 | The A4001 Avionics System shall record all detected failures with date, time, and flight phase. | Test |
| A4001-MAINT-202 | The A4001 Avionics System shall record all maintenance actions with date, time, and technician ID. | Test |
| A4001-MAINT-203 | The A4001 Avionics System shall record system performance parameters for trend analysis. | Test |
| A4001-MAINT-204 | The A4001 Avionics System shall provide maintenance data in a standard format compatible with airline maintenance systems. | Test |
| A4001-MAINT-205 | The A4001 Avionics System shall retain maintenance data after power loss. | Test |

---

## 12  Certification Requirements

### 12.1  General Certification Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-CERT-001 | The A4001 Avionics System shall comply with EASA CS-25 certification requirements. | Analysis |
| A4001-CERT-002 | The A4001 Avionics System software shall be developed in accordance with RTCA DO-178C Level A. | Analysis |
| A4001-CERT-003 | The A4001 Avionics System hardware shall be developed in accordance with RTCA DO-254 Level A. | Analysis |
| A4001-CERT-004 | The A4001 Avionics System shall be environmentally qualified in accordance with RTCA DO-160G. | Test |
| A4001-CERT-005 | The A4001 Avionics System shall have a Safety Assessment in accordance with EASA AMC 25.1309. | Analysis |

### 12.2  Documentation Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-CERT-101 | The A4001 Avionics System shall have a Plan for Software Aspects of Certification (PSAC). | Inspection |
| A4001-CERT-102 | The A4001 Avionics System shall have a Plan for Hardware Aspects of Certification (PHAC). | Inspection |
| A4001-CERT-103 | The A4001 Avionics System shall have a Functional Hazard Assessment (FHA). | Inspection |
| A4001-CERT-104 | The A4001 Avionics System shall have a System Safety Assessment (SSA). | Inspection |
| A4001-CERT-105 | The A4001 Avionics System shall have a Declaration of Design and Performance (DDP). | Inspection |

### 12.3  Compliance Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-CERT-201 | The A4001 Avionics System shall demonstrate compliance with all applicable EASA Special Conditions. | Analysis |
| A4001-CERT-202 | The A4001 Avionics System shall demonstrate compliance with all applicable EASA Certification Review Items (CRIs). | Analysis |
| A4001-CERT-203 | The A4001 Avionics System shall demonstrate compliance with all applicable EASA Interpretative Material. | Analysis |
| A4001-CERT-204 | The A4001 Avionics System shall have a Compliance Checklist that traces all certification requirements to verification evidence. | Inspection |
| A4001-CERT-205 | The A4001 Avionics System shall have a Certification Summary Report. | Inspection |

---

## 13  Test Requirements

### 13.1  General Test Requirements

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-TEST-001 | The A4001 Avionics System shall undergo unit testing for all software components. | Inspection |
| A4001-TEST-002 | The A4001 Avionics System shall undergo integration testing for all subsystems. | Test |
| A4001-TEST-003 | The A4001 Avionics System shall undergo system testing for the complete system. | Test |
| A4001-TEST-004 | The A4001 Avionics System shall undergo environmental qualification testing per RTCA DO-160G. | Test |
| A4001-TEST-005 | The A4001 Avionics System shall undergo EMI/EMC testing per RTCA DO-160G. | Test |

### 13.2  Verification Methods

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-TEST-101 | All requirements shall be verified by one or more of the following methods: Analysis, Inspection, Demonstration, or Test. | Inspection |
| A4001-TEST-102 | All safety-critical requirements shall be verified by Test. | Inspection |
| A4001-TEST-103 | All performance requirements shall be verified by Test or Analysis. | Inspection |
| A4001-TEST-104 | All interface requirements shall be verified by Test. | Inspection |
| A4001-TEST-105 | All environmental requirements shall be verified by Test. | Inspection |

### 13.3  Test Documentation

| ID | Requirement | Verification Method |
|----|-------------|---------------------|
| A4001-TEST-201 | The A4001 Avionics System shall have a Master Test Plan. | Inspection |
| A4001-TEST-202 | The A4001 Avionics System shall have Test Procedures for all tests. | Inspection |
| A4001-TEST-203 | The A4001 Avionics System shall have Test Reports for all tests. | Inspection |
| A4001-TEST-204 | The A4001 Avionics System shall have a Requirements Verification Matrix. | Inspection |
| A4001-TEST-205 | The A4001 Avionics System shall have a Verification and Validation Summary Report. | Inspection |

---

## 14  Acronyms & Abbreviations

| Acronym | Definition |
|---------|------------|
| AFDX | Avionics Full-Duplex Switched Ethernet |
| AMC | Acceptable Means of Compliance |
| API | Application Programming Interface |
| ARINC | Aeronautical Radio Incorporated |
| BIT | Built-In Test |
| CRI | Certification Review Item |
| CS | Certification Specification |
| DAL | Design Assurance Level |
| DDP | Declaration of Design and Performance |
| EASA | European Union Aviation Safety Agency |
| EMC | Electromagnetic Compatibility |
| EMI | Electromagnetic Interference |
| FHA | Functional Hazard Assessment |
| GSE | Ground Support Equipment |
| HF | High Frequency |
| ICD | Interface Control Document |
| LRU | Line Replaceable Unit |
| MTBF | Mean Time Between Failures |
| MTTR | Mean Time To Repair |
| PHAC | Plan for Hardware Aspects of Certification |
| PSAC | Plan for Software Aspects of Certification |
| RNAV | Area Navigation |
| RNP | Required Navigation Performance |
| RTCA | Radio Technical Commission for Aeronautics |
| SATCOM | Satellite Communication |
| SSA | System Safety Assessment |
| VHF | Very High Frequency |

---

## 15  References

1. EASA CS-25 Certification Specifications for Large Aeroplanes
2. EASA AMC 25.1309 System Design and Analysis
3. RTCA DO-178C Software Considerations in Airborne Systems and Equipment Certification
4. RTCA DO-254 Design Assurance Guidance for Airborne Electronic Hardware
5. RTCA DO-160G Environmental Conditions and Test Procedures for Airborne Equipment
6. ARINC 429 Digital Information Transfer System (DITS)
7. ARINC 664 Aircraft Data Network
8. ARINC 653 Avionics Application Software Standard Interface
9. MIL-STD-1553B Digital Time Division Command/Response Multiplex Data Bus
10. System Overview — GP-AM-AMPEL-0100-42-001-OV-A
11. System Design Description — GP-AM-AMPEL-0100-42-003-SDD-A
12. Interface Control Document — GP-AM-AMPEL-0100-42-004-ICD-A
13. Interface Matrix — GP-AM-AMPEL-0100-42-007-CAT-A
14. Safety Assessment Report — GP-AM-AMPEL-0100-42-010-SAR-A

---

## 16  Appendices

### Appendix A: Requirements Traceability Matrix

[Requirements Traceability Matrix to be inserted here]

### Appendix B: Verification Cross-Reference Matrix

[Verification Cross-Reference Matrix to be inserted here]

### Appendix C: System Architecture Diagrams

[System Architecture Diagrams to be inserted here]

### Appendix D: Interface Diagrams

[Interface Diagrams to be inserted here]

---

*End of document*
