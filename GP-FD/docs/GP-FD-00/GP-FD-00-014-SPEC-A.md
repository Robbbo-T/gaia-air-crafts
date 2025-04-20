# GP-FD-00-014-SPEC-A — Document Classification Standard

**(🚨 DISCLAIMER – GenAI Proposal Status 🚨)**  
*Generated Structures and Contents require Official Authority Check for tool Compliance and Certification.*

**Document Code:** GP-FD-00-014-SPEC-A  
**Part:** 0 – Program Foundations (GP-FD)  
**Chapter:** 00 – Document Standards  
**Subject:** 014 – Document Classification Standard  
**Info Code:** SPEC  
**Version:** A  
**Date:** 2025-04-19  
**Author(s):** GAIA AIR Documentation Team  
**Status:** Draft  

[Return to AToC.md](../../AToC.md) | [Return to COAFI.md](../../COAFI.md)

---

## 1. Introduction

This document defines the standard for classifying documents within the GAIA AIR project. It includes the mapping schema between different identification systems (IDs vs P/N) and provides guidelines for maintaining consistency across structured data sources, human-readable Markdown documents, and machine-readable semantic output (JSON-LD/RDF).

---

## 2. Mapping Schema

### 2.1 Identification Systems

The GAIA AIR project uses multiple identification systems to uniquely identify components, documents, and other entities. The primary systems are:

- **IDs (Identification Numbers):** Unique alphanumeric codes assigned to components and documents.
- **P/N (Part Numbers):** Unique alphanumeric codes assigned to parts and assemblies.

### 2.2 Mapping Schema Definition

The mapping schema defines the relationships between IDs and P/Ns. The schema ensures that each ID can be mapped to a corresponding P/N and vice versa. The schema is documented in the following table:

| ID         | P/N        | Description                          |
|------------|------------|--------------------------------------|
| ID-001     | PN-1001    | Component A                          |
| ID-002     | PN-1002    | Component B                          |
| ID-003     | PN-1003    | Assembly X                           |
| ID-004     | PN-1004    | Assembly Y                           |

### 2.3 Examples of Mappings

#### Example 1: Component Mapping

- **ID:** ID-001
- **P/N:** PN-1001
- **Description:** Component A

#### Example 2: Assembly Mapping

- **ID:** ID-003
- **P/N:** PN-1003
- **Description:** Assembly X

---

## 3. Importance of Maintaining Consistency

Maintaining consistency between different identification systems is crucial for the following reasons:

- **Data Integrity:** Ensures that data remains accurate and reliable across different systems.
- **Traceability:** Facilitates tracking of components and documents throughout their lifecycle.
- **Interoperability:** Enables seamless integration between different systems and tools.
- **Compliance:** Ensures adherence to regulatory and industry standards.

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

## 5. Conclusion

This document provides the standard for classifying documents within the GAIA AIR project. By defining the mapping schema between different identification systems and emphasizing the importance of maintaining consistency, we ensure data integrity, traceability, interoperability, and compliance.

---

> **This document is part of the GAIA AIR Foundational Doctrine**  
> 📁 `GP-FD` — *Foundational Doctrine*  
> 📄 `GP-FD-00-014-SPEC-A.md`  
> 🌐 Integrated with: `CFSI`, `AMEDEO`, `QAO`, `COAFI`, `AGIS`
