using System;
using System.Collections.Generic;
using System.Text;
using System.IO;

namespace sound
{

    /**
     *  使用用例
       string fileName = "./hehe.pcm";
        if (File.Exists(fileName))
        {
            byte[] pcm = File.ReadAllBytes(fileName);

            MemoryStream wav = WavHelper.GetWav(pcm);
            SoundPlayer player = new SoundPlayer(wav);
            player.PlayLooping();
        }
 
     */
    public class WavHelper
    {

        /// <summary>
        /// 获得完整的wave数据
        /// </summary>
        /// <param name="pcm">pcm流</param>
        /// <returns></returns>
        public static MemoryStream GetWav(byte[] pcm)
        {
            System.Text.Encoding encoding = System.Text.Encoding.ASCII;

            WavHeader head = new WavHeader();
            //head.data = pcm;
            head.Subchunk2Size = (uint)pcm.Length;
            head.ChunkSize =  4 + (8 + head.Subchunk1Size) + (8 + head.Subchunk2Size);
            head.ByteRate = head.SampleRate * head.NumChannels * head.BitsPerSample/8;
            head.BlockAlign =(ushort)(head.NumChannels * head.BitsPerSample / 8);
                
            MemoryStream ms = new MemoryStream();

            ms.Write(encoding.GetBytes(head.ChunkID),0,4);
            ms.Write(BitConverter.GetBytes(head.ChunkSize),0,4);
            ms.Write(encoding.GetBytes(head.Format),0,4);

            ms.Write(encoding.GetBytes(head.Subchunk1ID),0,4);
            ms.Write(BitConverter.GetBytes(head.Subchunk1Size),0,4);
            ms.Write(BitConverter.GetBytes(head.AudioFormat),0,2);
            ms.Write(BitConverter.GetBytes(head.NumChannels),0,2);
            ms.Write(BitConverter.GetBytes(head.SampleRate),0,4);
            ms.Write(BitConverter.GetBytes(head.ByteRate),0,4);
            ms.Write(BitConverter.GetBytes(head.BlockAlign),0,2);
            ms.Write(BitConverter.GetBytes(head.BitsPerSample),0,2);

            ms.Write(encoding.GetBytes(head.Subchunk2ID),0,4);
            ms.Write(BitConverter.GetBytes(head.Subchunk2Size),0,4);
            ms.Write(pcm,0,pcm.Length);

            return ms;
        }
    }
}
