# COAFI Master Table of Contents (AToC.md)

This document serves as the central index and Table of Contents for the entire COAFI (Comprehensive Robotics and Aerospace Framework Twin Systems) framework.

Framework Version: 1.1
Last Updated: 2025‑04‑19

## 📂 Parts Overview

| Part                        | Table of Contents                                         |
|-----------------------------|-----------------------------------------------------------|
| Part 0 – Program Foundations   | [GP-FD/docs/ToC-GP-FD.md](GP-FD/docs/ToC-GP-FD.md)     |
| Part 1 – Air Systems & Airframes | [GP-AM/docs/ToC-GP-AM.md](GP-AM/docs/ToC-GP-AM.md)     |
| Part 2 – Space Systems & Spaceframes | [GP-AS/docs/ToC-GP-AS.md](GP-AS/docs/ToC-GP-AS.md)     |
| Part 3 – Core Operating Matrix  | [GP-COM/docs/ToC-GP-COM.md](GP-COM/docs/ToC-GP-COM.md)     |
| Part 4 – Ground & Infrastructure   | [GP-GRO/docs/ToC-GP-GRO.md](GP-GRO/docs/ToC-GP-GRO.md)     |
| Part 5 – Supply Chain & Ethical Logistics | [GP-SUPL/docs/ToC-GP-SUPL.md](GP-SUPL/docs/ToC-GP-SUPL.md)   |
| Part 6 – Robotic Assembly & Maintenance | [GP-RAME/docs/ToC-GP-RAME.md](GP-RAME/docs/ToC-GP-RAME.md)   |
| Part 7 – Program Management & Operations  | [GP-PM/docs/ToC-GP-PM.md](GP-PM/docs/ToC-GP-PM.md)     |

## 🗂️ Standard InfoCode Index

Each document in COAFI is tagged with an InfoCode. For definitions and canonical examples, see the InfoCode index below or in any part’s ToC.

| InfoCode | Meaning                         |
|----------|---------------------------------|
| OV       | Overview                        |
| SPEC     | Specification                   |
| REQ      | Requirements                    |
| SDD      | System Design Description       |
| DD       | Design Document                 |
| DWG      | Drawing                         |
| CAL      | Calculation / Analysis Report   |
| RPT      | Report                          |
| TEST     | Test Plan / Procedure / Report  |
| MAN      | Manual                          |
| PROC     | Procedure                       |
| CAT      | Catalog / Parts List            |
| GLO      | Glossary                        |
| ICD      | Interface Control Document      |
| FIG      | Figure / Diagram                |
| CONOPS   | Concept of Operations           |
| WBS      | Work Breakdown Structure        |
| JSON     | JSON Schema                     |
| BOM      | Bill of Materials              |
| SWD      | Software Documentation          |
| ADMIN    | Administrative Document         |
| REF      | Reference Document              |
| IDX      | Index Document                  |
| MPD      | Maintenance Planning Document   |
| CERT     | Certification Document          |
| PRES     | Presentation                    |
| SCRIPT   | Script / Code                   |
| NB       | Notebook                        |

## 📝 Filename Grammar

All documents follow the naming convention:

`[PartCode]-[DomainCode]-[PlatformCode]-[SeqCode]-[ChapterCode]-[SubjectCode]-[InfoCode]-[Rev].[ext]`

*   **[PartCode]:** Code representing the COAFI Part (e.g., `GP-FD`, `GP-AM`).
*   **[DomainCode]:** Code representing the specific domain within the Part (e.g. `AMPEL` for Airframe Materials).
*   **[PlatformCode]:** Code representing the platform (e.g., specific aircraft model).
    *(See [link to naming convention document, if available] for a detailed explanation of DomainCode and PlatformCode).*
*   **[SeqCode]:** Sequential number.
*   **[ChapterCode]:** Number corresponding to the chapter within the ToC.
*   **[SubjectCode]:** Sequential number for the subject of the document.
*   **[InfoCode]:** Code representing the document type (see InfoCode Index above).
*   **[Rev]:** Revision number (A, B, C, ...).
*   **[ext]:** File extension (e.g., `.md`).

For a fully annotated example, see [GP-FD/docs/ToC-GP-FD.md](GP-FD/docs/ToC-GP-FD.md).

## 🚀 Getting Started

1.  Clone the monorepo:
    ```bash
    git clone https://github.com/gaia-air/gaia-air-crafts.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd gaia-air-crafts
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Use this Master Table of Contents (AToC.md) to navigate to the Table of Contents for each Part of the framework.
5. Jump into any part’s `/docs` folder and start exploring or contributing.

## 🤝 Contributing

See our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on proposing new documents, InfoCodes, or structural changes.

## 📜 License

This framework is licensed under CC BY‑SA 4.0. See [LICENSE](./LICENSE) for details.
