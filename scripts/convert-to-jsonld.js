const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const jsonld = require('jsonld');

const MAPPINGS_FILE = path.join(__dirname, '../GP-FD/docs/GP-FD-00/GP-FD-00-014-SPEC-A.md');
const MARKDOWN_DIR = path.join(__dirname, '../GP-FD/docs');
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

function convertMarkdownToJsonLd(markdownContent) {
  const yamlContent = markdownContent.split('---')[1];
  const jsonLdContent = yaml.load(yamlContent);
  return jsonLdContent;
}

function validateJsonLdOutput(jsonLdContent) {
  return new Promise((resolve, reject) => {
    jsonld.toRDF(jsonLdContent, { format: 'application/n-quads' }, (err, nquads) => {
      if (err) {
        reject(`Invalid JSON-LD: ${err.message}`);
      } else {
        resolve(nquads);
      }
    });
  });
}

async function processMarkdownFiles() {
  const files = fs.readdirSync(MARKDOWN_DIR).filter(file => file.endsWith('.md'));
  const mappings = loadMappings();

  for (const file of files) {
    const content = fs.readFileSync(path.join(MARKDOWN_DIR, file), 'utf8');
    const jsonLdContent = convertMarkdownToJsonLd(content);

    try {
      await validateJsonLdOutput(jsonLdContent);
      const outputFilePath = path.join(JSONLD_DIR, file.replace('.md', '.jsonld'));
      fs.writeFileSync(outputFilePath, JSON.stringify(jsonLdContent, null, 2));
      console.log(`Converted and validated: ${file}`);
    } catch (error) {
      console.error(`Error processing ${file}: ${error}`);
    }
  }
}

processMarkdownFiles();
