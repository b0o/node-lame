/**
 * The `Decoder` accepts an MP3 file and outputs raw PCM data.
 */
import _Decoder from './lib/decoder.js';
export const Decoder = _Decoder;

/**
 * The `Encoder` accepts raw PCM data and outputs an MP3 file.
 */
import _Encoder from './lib/encoder.js';
export const Encoder = _Encoder;

/*
 * Channel Modes
 */
export const STEREO = 0;
export const JOINTSTEREO = 1;
export const DUALCHANNEL = 2;
export const MONO = 3;

export default {
  Decoder,
  Encoder,
  STEREO,
  JOINTSTEREO,
  DUALCHANNEL,
  MONO
};
