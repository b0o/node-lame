declare module 'lame' {
    import { WriteStream } from 'fs';
    import { DuplexOptions } from 'stream';

    export interface DecoderOptions extends DuplexOptions {
        readonly decoder: string;
    }

    export interface EncoderOptions extends DuplexOptions {
        readonly float;
        readonly signed?: number;
        readonly bitDepth?: number;
        readonly channels?: number;
        readonly sampleRate?: number;
    }

    /**
     * The `Decoder` accepts an MP3 file and outputs raw PCM data.
     *
     * @param opts Configurations.
     * @returns A writable stream.
     */
    export class Decoder extends WriteStream {
        constructor(opts?: DecoderOptions);
    }

    /**
     * The `Encoder` accepts raw PCM data and outputs an MP3 file.
     *
     * @param opts Configurations.
     * @returns A writable stream.
     */
    export class Encoder extends WriteStream {
        constructor(opts?: EncoderOptions);
    }

    /*
     * Channel Modes
     */
    export enum ChannelModes {
        STEREO,
        JOINTSTEREO,
        DUALCHANNEL,
        MONO
    }
}
