import fs from 'fs';

const appTsx = fs.readFileSync('src/App.tsx', 'utf-8');
const match = appTsx.match(/const PUZZLES: Problem\[\] = (\[[\s\S]*?\]);/);
if (match) {
  const puzData = match[1];
  const parsed = eval(puzData);
  fs.writeFileSync('src/puzzles.json', JSON.stringify(parsed, null, 2), 'utf-8');
  console.log('Saved to puzzles.json');
} else {
  console.log('Could not find PUZZLES');
}
