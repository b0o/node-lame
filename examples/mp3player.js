import fs from 'fs';
import Speaker from 'speaker';

import lame from '../index.js';

fs.createReadStream(process.argv[2])
  .pipe(new lame.Decoder)
  .on('format', console.log)
  .pipe(new Speaker);
