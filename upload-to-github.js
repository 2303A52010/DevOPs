// Direct GitHub Repository Uploader via GitHub REST API (No Git required)
const fs = require('fs');
const path = require('path');
const https = require('https');

const OWNER = '2303A52010';
const REPO = 'DevOPs';
const TOKEN = process.argv[2] || process.env.GITHUB_TOKEN;

if (!TOKEN) {
  console.error('\n❌ Error: Please provide your GitHub Personal Access Token.');
  console.log('\nUsage: node upload-to-github.js <YOUR_GITHUB_TOKEN>\n');
  console.log('To generate a token:');
  console.log('1. Go to https://github.com/settings/tokens');
  console.log('2. Click "Generate new token (classic)"');
  console.log('3. Select the "repo" scope and click Generate\n');
  process.exit(1);
}

function githubRequest(apiPath, method, body) {
  return new Promise((resolve, reject) => {
    const dataString = body ? JSON.stringify(body) : null;
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: apiPath,
      method: method,
      headers: {
        'User-Agent': 'NodeJS-Uploader',
        'Authorization': `token ${TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        ...(dataString ? { 'Content-Length': Buffer.byteLength(dataString) } : {})
      }
    };

    const req = https.request(options, (res) => {
      let resData = '';
      res.on('data', (chunk) => { resData += chunk; });
      res.on('end', () => {
        try {
          const parsed = resData ? JSON.parse(resData) : {};
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            resolve({ error: true, status: res.statusCode, data: parsed });
          }
        } catch (e) {
          resolve({ error: true, status: res.statusCode, raw: resData });
        }
      });
    });

    req.on('error', (err) => reject(err));
    if (dataString) req.write(dataString);
    req.end();
  });
}

async function getFileSha(filePath) {
  const res = await githubRequest(`/repos/${OWNER}/${REPO}/contents/${filePath}`, 'GET');
  if (!res.error && res.sha) {
    return res.sha;
  }
  return null;
}

async function uploadFile(localPath, repoPath) {
  const content = fs.readFileSync(localPath);
  const base64Content = content.toString('base64');
  const existingSha = await getFileSha(repoPath);

  const payload = {
    message: `Add ${repoPath} for student dashboard assignment`,
    content: base64Content,
    ...(existingSha ? { sha: existingSha } : {})
  };

  const res = await githubRequest(`/repos/${OWNER}/${REPO}/contents/${repoPath}`, 'PUT', payload);
  if (res.error) {
    console.error(`❌ Failed to upload ${repoPath}:`, res.data?.message || res.status);
  } else {
    console.log(`✅ Uploaded: ${repoPath}`);
  }
}

function getAllFiles(dir, prefix = '') {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (['node_modules', 'dist', '.git', 'upload-to-github.js'].includes(entry.name)) {
      continue;
    }
    if (entry.isDirectory()) {
      files = files.concat(getAllFiles(path.join(dir, entry.name), relative));
    } else {
      files.push({ local: path.join(dir, entry.name), repo: relative });
    }
  }
  return files;
}

async function run() {
  console.log(`\n🚀 Uploading project files to https://github.com/${OWNER}/${REPO}...\n`);
  const projectDir = __dirname;
  const files = getAllFiles(projectDir);

  console.log(`Found ${files.length} project files to upload.`);
  for (const file of files) {
    await uploadFile(file.local, file.repo);
  }
  console.log(`\n🎉 All files pushed to https://github.com/${OWNER}/${REPO} successfully!\n`);
}

run();
