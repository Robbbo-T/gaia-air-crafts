const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const jsonld = require('jsonld');

const MAPPINGS_FILE = path.join(__dirname, '../GP-FD/docs/GP-FD-00/GP-FD-00-014-SPEC-A.md');
const JSONLD_DIR = path.join(__dirname, '../jsonld');

function loadMappings() {
  const content = fs.readFileSync(MAPPINGS_FILE, 'utf8');
  const mappingsSection = content.split('## 2. Mapping Schema')[1].split('## 3. Importance of Maintaining Consistency')[0];
  const lines = mappingsSection.split('\n').filter(line => line.trim().startsWith('|'));
  const mappings = lines.slice(2).map(line => {
    const [id, pn, description] = line.split('|').map(cell => cell.trim());
    return { id, pn, description };
  });
  return mappings;
}

function validateMappings(mappings) {
  const inconsistencies = [];
  const ids = new Set();
  const pns = new Set();

  mappings.forEach(mapping => {
    if (ids.has(mapping.id)) {
      inconsistencies.push(`Duplicate ID found: ${mapping.id}`);
    } else {
      ids.add(mapping.id);
    }

    if (pns.has(mapping.pn)) {
      inconsistencies.push(`Duplicate P/N found: ${mapping.pn}`);
    } else {
      pns.add(mapping.pn);
    }
  });

  return inconsistencies;
}

function generateReport(inconsistencies) {
  if (inconsistencies.length === 0) {
    console.log('No inconsistencies found.');
  } else {
    console.log('Inconsistencies found:');
    inconsistencies.forEach(inc => console.log(`- ${inc}`));
  }
}

function validateJsonLdOutput() {
  const files = fs.readdirSync(JSONLD_DIR).filter(file => file.endsWith('.jsonld'));
  const inconsistencies = [];

  files.forEach(file => {
    const content = fs.readFileSync(path.join(JSONLD_DIR, file), 'utf8');
    const jsonldData = JSON.parse(content);

    jsonld.toRDF(jsonldData, { format: 'application/n-quads' }, (err, nquads) => {
      if (err) {
        inconsistencies.push(`Invalid JSON-LD in file: ${file}`);
      }
    });
  });

  return inconsistencies;
}

function main() {
  const mappings = loadMappings();
  const mappingInconsistencies = validateMappings(mappings);
  const jsonldInconsistencies = validateJsonLdOutput();
  const allInconsistencies = [...mappingInconsistencies, ...jsonldInconsistencies];

  generateReport(allInconsistencies);
}

main();
