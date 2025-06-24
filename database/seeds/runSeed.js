import { up, down } from './seedEscola.js';

// Pega o argumento passado (ex: "up" ou "down")
const command = process.argv[2];

if (command === 'up') {
  await up();
} else if (command === 'down') {
  await down();
} else {
  console.log('❗ Uso correto:');
  console.log('   node runSeed.js up    ← para inserir os dados');
  console.log('   node runSeed.js down  ← para remover os dados');
  process.exit(1);
}
