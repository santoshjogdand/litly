const { execSync } = require('child_process');
const path = require('path');

// Set commit dates
const date17 = 'Tue, 17 Jun 2025 12:00:00 +0530';
const date18 = 'Wed, 18 Jun 2025 12:00:00 +0530';

// Your Git repo root
const GIT_DIR = '.';

// Get list of modified and untracked files
let files;
try {
  const output = execSync('git ls-files --modified --others --exclude-standard', { cwd: GIT_DIR });
  files = output.toString().trim().split('\n');
} catch (err) {
  console.error('Error fetching files:', err);
  process.exit(1);
}

if (files.length === 0) {
  console.log('No files to commit.');
  process.exit(0);
}

console.log(`Found ${files.length} files. Starting commit process...\n`);

// Function to create smart commit messages
function generateCommitMessage(filePath) {
  const filename = path.basename(filePath);

  if (filename.includes('Header')) return `Add ${filename.replace('.jsx', '')} component for top navigation`;
  if (filename.includes('SideBar')) return `Create ${filename.replace('.jsx', '')} layout for sidebar navigation`;
  if (filename.includes('Dashboard')) return `Add ${filename.replace('.jsx', '')} dashboard page`;
  if (filename.includes('Login')) return `Add user login form UI`;
  if (filename.includes('SignUp') || filename.includes('Signup')) return `Add user signup form UI`;
  if (filename.includes('Links')) return `Add link management page`;
  if (filename.includes('Analytics')) return `Add analytics data display page`;
  if (filename.includes('About')) return `Add About page with app info`;
  if (filename.includes('Home')) return `Create Home page layout`;
  if (filename.includes('PublicLayout')) return `Setup PublicLayout wrapper`;
  if (filename.includes('PrivateLayout')) return `Setup PrivateLayout wrapper`;
  if (filename === 'App.jsx') return `Setup app routing and structure`;
  if (filename === 'api.js') return `Setup API service module`;
  if (filename.endsWith('.css')) return `Add global styles to ${filename}`;
  if (filename === 'index.html') return `Update HTML boilerplate`;

  return `Update ${filename}`; // Default message
}

// Start committing
files.forEach((file, index) => {
  const commitDate = index % 2 === 0 ? date17 : date18;
  const commitMsg = generateCommitMessage(file);

  try {
    execSync(`git add "${file}"`, { stdio: 'inherit' });
    execSync(`git commit -m "${commitMsg}" --date="${commitDate}"`, { stdio: 'inherit' });
    console.log(`✅ Committed ${file} ➜ ${commitMsg} (${commitDate})\n`);
  } catch (err) {
    console.error(`❌ Failed to commit ${file}:`, err.message);
  }
});
