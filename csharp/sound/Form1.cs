using System;
using System.Windows.Forms;
using System.IO;
using System.Media;

namespace sound
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string fileName = "../../res/hehe.pcm";
            if (File.Exists(fileName))
            {
                byte[] pcm = File.ReadAllBytes(fileName);

                MemoryStream wav = WavHelper.GetWav(pcm);
                SoundPlayer player = new SoundPlayer(wav);
                player.PlayLooping();
            }else{
                MessageBox.Show("file not exist:" + fileName);
            }
        }


        private void AddWavHeader(MemoryStream wav) {
            wav.Seek(0, SeekOrigin.Begin);

        }
    }
}
