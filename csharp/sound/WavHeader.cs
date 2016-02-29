using System.IO;

namespace sound
{
    /// <summary>
    /// LazyFish(于小懒)
    /// 
    /// http://github.com/koalaylj
    /// 
    /// WAV 头格式类
    /// 一个标准的wav：RIFF header + "fmt" sub-chunk + "data" sub-chunk
    /// WAV格式标准：https://ccrma.stanford.edu/courses/422/projects/WaveFormat/
    /// </summary>
    public class WavHeader
    {
        /**************************************** RIFF header ****************************************/

        /// <summary>
        /// Contains the letters "RIFF" in ASCII form (0x52494646 big-endian form).
        /// </summary>
        public string ChunkID = "RIFF";

        /// <summary>
        /// 36 + SubChunk2Size, or more precisely: 4 + (8 + SubChunk1Size) + (8 + SubChunk2Size)
        /// 
        ///  This is the size of the rest of the chunk following this number.   
        ///  This is the size of the entire file in bytes minus 8 bytes for the
        ///  two fields not included in this count:  ChunkID and ChunkSize.
        /// </summary>
        public uint ChunkSize;

        /// <summary>
        /// Contains the letters "WAVE"  (0x57415645 big-endian form).
        /// </summary>
        public string Format = "WAVE";

        /************************ "fmt" sub-chunk(describe the sound data's formate) **********************/

        /// <summary>
        /// Contains the letters "fmt " (0x666d7420 big-endian form).
        /// </summary>
        public string Subchunk1ID = "fmt ";

        /// <summary>
        /// 16 for PCM.  This is the size of the rest of the Subchunk which follows this number.
        /// </summary>
        public uint Subchunk1Size = 16;

        /// <summary>
        ///  PCM = 1 (i.e. Linear quantization) Values other than 1 indicate some form of compression.
        /// </summary>
        public ushort AudioFormat = 1;

        /// <summary>
        /// Mono = 1(单声道), Stereo = 2(双声道(立体声)), etc.
        /// </summary>
        public ushort NumChannels = 2;

        /// <summary>
        ///  8000, 44100, etc.
        /// </summary>
        public uint SampleRate = 16000;

        /// <summary>
        /// SampleRate * NumChannels * BitsPerSample/8
        /// </summary>
        public uint ByteRate ;

        /// <summary>
        /// NumChannels * BitsPerSample / 8
        /// 
        /// The number of bytes for one sample including
        /// all channels. I wonder what happens when
        /// this number isn't an integer?
        /// </summary>
        public ushort BlockAlign ;

        /// <summary>
        /// 8 bits = 8, 16 bits = 16, etc.
        /// </summary>
        public ushort BitsPerSample = 16;

        /************************ "data" sub-chunk(contains the size of the data and the actual sound) **********************/

        /// <summary>
        ///  Contains the letters "data" (0x64617461 big-endian form).
        /// </summary>
        public string Subchunk2ID = "data";

        /// <summary>
        /// NumSamples * NumChannels * BitsPerSample/8
        /// 
        /// This is the number of bytes in the data.
        /// You can also think of this as the size of the read of the subchunk following this  number.
        /// </summary>
        public uint Subchunk2Size;

        /// <summary>
        /// 实际的pcm数据
        /// </summary>
        //public byte[] data;

    }
}
