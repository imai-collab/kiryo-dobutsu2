import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
const puzMatch = content.match(/^const PUZZLES: Problem\[\] = \[[\s\S]*?^\];$/m);
if (puzMatch) {
  content = content.replace(puzMatch[0], 'import defaultPuzzles from "./puzzles.json";\n\nconst PUZZLES: Problem[] = defaultPuzzles as Problem[];');
  fs.writeFileSync('src/App.tsx', content, 'utf-8');
  console.log('Replaced PUZZLES');
} else {
  console.log('Not found');
}
