import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import lame from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.createReadStream(process.argv[2] || path.resolve(__dirname, 'sample.float.pcm'))
  .pipe(new lame.Encoder({ channels: 2, bitDepth: 32, float: true }))
  .pipe(fs.createWriteStream(path.resolve(__dirname, 'sample_pcm.mp3')))
  .on('close', function () {
    console.error('done!');
  });
