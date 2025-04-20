---
# YAML Frontmatter: Standard Metadata Block per Rule B.15
documentCode: GP-STD-ONT-0000-01-001-SPEC # Full document code without revision
partCode: GP
domainCode: STD # New: Standards
platformCode: GEN # General to Standards Part
seqCode: 0000 # Baseline for foundational standards
chapterCode: 01 # Chapter for Ontology & Identification
subjectCode: 001 # First document on Ontology & Identification
infoCode: [SPEC, ONT] # Proposing 'ONT' Info Code for Ontology. Requires Info Code Index definition per Rule B.12
revision: A # Major revision
version: A.1 # Minor/internal version
name: "GAIA AIR Identification, Mapping, & Ontology Specification" # Document Title
designator: "ONT-ID-SPEC" # Specific identifier for this standard
author: "GAIA AIR Standards Committee" # Authors
date: 2025-04-21 # Date of this specific revision version
status: Draft # Lifecycle Status
---

# GAIA AIR Identification, Mapping, & Ontology Specification

This specification defines the standard systems for identifying product elements within GAIA AIR, establishes formal mapping relationships between these systems, and outlines the core ontology for representing product data in machine-readable formats like JSON-LD/RDF. Adherence to this specification is mandatory for all data management, design, manufacturing, and documentation processes (Rule F.33, C.16).

**Document Code:** {{ page.documentCode }} (Rev {{ page.revision }})
**Version:** {{ page.version }}
**Author(s):** {{ page.author }}
**Date:** {{ page.date }}
**Part:** Standards ({{ page.partCode }}-{{ page.domainCode }})
**Platform:** {{ page.platformCode }}
**Sequence Code:** {{ page.seqCode }}
**Chapter:** {{ page.chapterCode }} – Ontology & Identification
**Subject:** {{ page.subjectCode }} – Identification, Mapping, Ontology
**Info Code(s):** {{ page.infoCode | join(', ') }}
**Status:** {{ page.status }}

[Return to GP-STD Table of Contents (ToC-GP-STD.md)](../ToC-GP-STD.md) # Link assumes a ToC for GP-STD
[Return to GAIA AIR COAFI Main Document (COAFI.md)](../../COAFI.md) # Link needs path adjustment if needed

---

## 1. Overview

Complex engineering projects require multiple perspectives or "views" of a product, each with its own identification scheme suited for specific workflows (e.g., engineering design, manufacturing, maintenance, supply chain). This document standardizes these identification systems, defines the formal links between them, and provides the foundational ontology necessary to represent this product data as linked open data, enabling advanced querying, AI reasoning, and digital twin capabilities.

---

## 2. Standard Identification Systems

The following primary identification systems are utilized across the GAIA AIR project:

### 2.1. Engineering/Design Identifiers (EngIDs)

*   **Purpose:** Unique identifiers assigned to logical concepts of parts, components, assemblies, subsystems, and systems as defined during the engineering design process. Represents the *type* of element independent of its physical manifestation or manufacturing batch.
*   **Format:** Variable, often hierarchical or semantic (e.g., `SYS-AVN`, `PART-GPS-001`, `COMP-GPS-PCB` as seen in the provided JSON product structure).
*   **Assignment Authority:** Design Engineering teams.
*   **Usage:** Primarily within internal design databases, engineering diagrams, system models (SIM, CAL), and the canonical product structure JSON (Rule F.33 source data).

### 2.2. Manufacturing/Maintenance Identifiers (MMIDs)

*   **Purpose:** Identifiers assigned to physical items produced or procured for the product. Includes Part Numbers (P/N), Internal Numbers (IN), and Serial Numbers (S/N). These are the identifiers stamped/labeled on physical hardware.
*   **Format:** Standardized format depending on the source/type (e.g., `AMPEL360XWLRGA-NAV-001` for GAIA AIR manufactured P/Ns, `GPPM-QPROP-0401-02-001` for externally procured or project-specific INs, `ABC-12345` for vendor serial numbers, `GAIA-ABC-S/N-XYZ` for GAIA AIR assigned S/Ns). A formal specification for MMID formats SHOULD be referenced here (e.g., `GP-SUPL-GEN-0500-02-002-SPEC-A.md` for UID spec, if defined).
*   **Assignment Authority:** Manufacturing, Supply Chain, Configuration Management.
*   **Usage:** BOMs (CAT), logistics, inventory management, maintenance records, test reports (RPT), repair procedures (PROC). MMID + S/N identifies a specific *instance* of a part.

### 2.3. Documentation Codes (DocCodes)

*   **Purpose:** Unique identifiers assigned to specific documentation files (e.g., Markdown documents). Represents the document *describing* an element, system, procedure, etc., at a specific revision.
*   **Format:** Strict format `[PartCode]-[DomainCode]-[PlatformCode]-[SeqCode]-[ChapterCode]-[SubjectCode]-[InfoCode]` (Rule B.6-B.14). The Revision ([Rev]) identifies the specific version of the document file (Rule B.13).
*   **Assignment Authority:** Documentation Control / Configuration Management, Authors (following standard).
*   **Usage:** Referencing documents internally (Rule F.30), metadata (Rule B.15), version control commits (Rule G.35), automated tooling for processing.

### 2.4. Semantic Identifiers (SemanticIDs / URIs)

*   **Purpose:** Global, unique identifiers for entities in the knowledge graph (RDF/JSON-LD). Link the different views together and provide stable references for AI reasoning and data integration across the GAIA AIR ecosystem (COAFI).
*   **Format:** Uniform Resource Identifiers (URIs), often in URN or URL format, using defined namespaces (e.g., `urn:gaiaair:part:GPS-001`, `urn:ampel:AMPEL360XWLRGA-NAV-001`, `gaiaair:documentItem:GP-AM-AMPEL-0100-99-001-SPEC-A`). Namespaces like `http://gaiaair.org/ontology#` will be used for semantic properties and classes.
*   **Assignment Authority:** Data Architects, Ontology Managers.
*   **Usage:** Knowledge Graph / Triple Store, JSON-LD output (Rule F.33), SPARQL querying, AI agents for reasoning and data discovery.

---

## 3. Mapping Relationships

Formal relationships connect the different identification systems:

*   **`EngID` maps to `MMID (P/N)`:** A logical Engineering Design Part/Component (`EngID`) corresponds to one or more approved Manufacturing/Maintenance Part Numbers (`MMID P/N`). This maps design intent to manufacturing reality.
    *   *Ontology Property:* `gaiaair:mapsToPartNumber` or `http://schema.org/productID`
*   **`MMID (P/N + S/N)` is an instance of `EngID`:** A specific Physical Unit (`MMID P/N` + Serial Number) is an *instance* of a logical Engineering Design Part (`EngID`).
    *   *Ontology Property:* `http://www.w3.org/1999/02/22-rdf-syntax-ns#type` (linking instance to class defined by EngID/Part Type)
*   **`EngID` / `MMID (P/N)` are described by `DocCode`:** A logical Part/Component (`EngID`) or a specific Part Number (`MMID P/N`) is described, specified, or subject to procedures documented by a Documentation File (`DocCode`).
    *   *Ontology Property:* `http://schema.org/isDescribedBy` or `gaiaair:isDocumentedBy`
*   **`SemanticID (for EngID/MMID/Instance)` is associated with `SemanticID (for DocCode)`:** Entities in the semantic graph have defined relationships linking them to documents describing them.
    *   *Ontology Property:* `http://schema.org/mainEntityOfPage` (from doc to item), or inverse `isDescribedBy`.

A central mapping table or service SHOULD maintain the definitive links between `EngID` and `MMID (P/N)` for the current approved configuration baseline. This information is the source for properties like `specLink` in product structure data and for generating cross-references in documents (Rule F.30).

---

## 4. Core Ontology for Product Data

The GAIA AIR core ontology (namespace `http://gaiaair.org/ontology#`) provides the semantic framework for representing product structure and associated properties. Key classes and properties SHALL include:

### 4.1. Classes (Corresponding to Product Types)

*   `gaiaair:Product` (SubClass of `schema:Product` or similar)
*   `gaiaair:Aircraft`
*   `gaiaair:System` (SubClass of `gaiaair:Product`)
*   `gaiaair:Subsystem` (SubClass of `gaiaair:System`)
*   `gaiaair:Assembly` (SubClass of `gaiaair:Subsystem` or `gaiaair:Assembly`)
*   `gaiaair:Part` (SubClass of `gaiaair:Assembly` or `schema:Part`)
*   `gaiaair:Component` (SubClass of `gaiaair:Part` or `gaiaair:Component`)
*   `gaiaair:RawMaterial` (SubClass of `gaiaair:Component` or `schema:Material`)
*   `gaiaair:Document` (SubClass of `schema:CreativeWork`) - To be refined with sub-classes based on `InfoCode` (e.g., `gaiaair:Specification`, `gaiaair:Procedure`, `gaiaair:Drawing`)
*   `gaiaair:Manufacturer` / `gaiaair:Vendor` (SubClass of `schema:Organization`)

### 4.2. Properties (Corresponding to Product Properties & Relationships)

*   `http://schema.org/hasPart` / `http://schema.org/isPartOf` (For product structure hierarchy: System has part Subsystem, Assembly has part Part, etc. Matches the JSON `children` relationship).
*   `gaiaair:engineeringId` (Links a Product element to its unique EngID)
*   `http://schema.org/productID` (Links a Physical Instance or P/N to its MMID)
*   `http://schema.org/serialNumber` (Links a Physical Instance to its S/N)
*   `gaiaair:hasUnitInstance` (Links a P/N to a specific Physical Unit instance)
*   Properties from the JSON "properties" block, mapped to ontology properties:
    *   `gaiaair:weight_kg` (`schema:weight` or custom, define units)
    *   `gaiaair:cost_usd` (`schema:price` or custom, define currency)
    *   `gaiaair:criticality`
    *   `gaiaair:vendor` (Link to `gaiaair:Vendor` entity)
    *   `gaiaair:material` (Link to `gaiaair:RawMaterial` entity or use literal)
    *   `gaiaair:qtyPerParent`
    *   `gaiaair:grade`, `gaiaair:thickness_mm`, `gaiaair:fiber`, `gaiaair:resin` (Specific to Raw Materials)
    *   `gaiaair:specLink` (This represents a *link* to a document, should be handled via `isDocumentedBy` relation to the document entity itself in the semantic graph).
*   `gaiaair:isDocumentedBy` (Object property linking Product Elements/Instances to Document entities - covers `specLink` concept semantically).
*   `gaiaair:infoCode` (Data property on Document entities - lists the Info Code(s)).
*   `gaiaair:documentCode` (Data property on Document entities - lists the DocCode without revision).
*   `gaiaair:hasRevision` (Object property linking a conceptual Document (`DocCode`) to a specific Revision Document Instance (`DocCode`+`Rev`)).
*   `gaiaair:documentRevision` (Data property on a specific Revision Document Instance).
*   `gaiaair:directoryPath`, `gaiaair:filePath` (Data properties on Document entities or their instances, if file path tracking is needed in ontology).

Detailed schemas (e.g., SHACL, RDFS/OWL) defining these classes, properties, expected data types, and relationships SHALL be managed and version-controlled (Rule G.34) as part of this specification.

---

## 5. Coherence Requirements & Tooling (Rule F.33, B.15)

Maintaining consistency between the canonical product data (EngIDs, MMIDs, relations, properties), the Markdown documentation (.md files, metadata, table content), and the semantic knowledge graph (JSON-LD/RDF) is CRITICAL for enabling automation and AI-driven workflows.

Automated tools, as specified in `GP-PM-TOOLS-0600-01-001-SPEC-A.md`, SHALL implement the following to ensure coherence:

1.  **Product Data as Source of Truth:** The primary source of truth for product structure (`hasPart`), basic properties (weight, cost, material), and EngID-MMID mappings SHALL be the controlled product data source (e.g., PDM system, dedicated database validated against ontology schema).
2.  **Markdown Validation against Source:** Automated tools SHALL:
    *   Parse metadata from Markdown files (`---YAML---` block per Rule B.15) and verify keys and values (e.g., `documentCode`, `partCode`, `platformCode` must follow Rule B structure; `infoCode` values must exist in [INFOCODE-INDEX] per Rule B.12).
    *   (For specific document types like BOMs (CAT/BOM InfoCode) or Specs (SPEC/SP InfoCode)): Extract structured content (e.g., tables listing parts and properties) from the Markdown body.
    *   Validate the extracted Markdown content (e.g., P/N, Qty, Material, Cost in a BOM table) against the master product data source to detect inconsistencies.
    *   Verify internal Markdown links (`[text](path)`) and cross-references to DocCodes or SemanticIDs.
3.  **Semantic Graph Generation:** Automated tools SHALL generate the JSON-LD/RDF knowledge graph (Rule F.33) directly from the master product data source AND the parsed metadata/validated content from the Markdown documents, using the ontology defined in Section 4 of *this* specification.
4.  **Validation of Naming, Metadata, and Structure:** Automated tools SHALL validate:
    *   File and directory names against Rules A.2, B.6-B.13.
    *   Metadata consistency between file name and frontmatter (Rule B.15).
    *   Unique Subject Codes within chapters (Rule B.11).
    *   Correct linking in ToC files (Rule A.5).
5.  **Change Management Integration:** Tooling validation SHALL be integrated into the version control workflow (Rule G.34) and trigger checks during the review/approval process (Rule H.38-H.40). Failures MUST block formal release of non-compliant documentation or data updates.

This systematic approach ensures that inconsistencies are flagged early, manual data entry errors are minimized, and all representations of the product (structured data, human-readable docs, semantic graph) remain coherent, providing a reliable foundation for GAIA AIR operations and AI utilization.

---

**Placeholder Links:**

*   [INFOCODE-INDEX](#) - Link to the canonical Info Code Definitions (GP-STD-GEN-0000-00-001-LIST-A.md).
*   [GP-STD Table of Contents (ToC-GP-STD.md)](#) - Link to the ToC for the Standards Part.
*   [GAIA AIR COAFI Main Document (COAFI.md)](#) - Link to the top-level COAFI document.
*   [GP-PM-TOOLS-0600-01-001-SPEC-A.md](#) - Link to the Documentation Automation Tooling Specification.
*   Reference `GP-SUPL-GEN-0500-02-002-SPEC-A.md` (If Uniform Identifier spec exists for MMIDs).

---
**End of Document.**
