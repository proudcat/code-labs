using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MD5Helper
{
    public partial class CryptoTest : Form
    {
        public CryptoTest()
        {
            InitializeComponent();
            Console.WriteLine(BitConverter.IsLittleEndian);

        }

        private void btnMd5_Click(object sender, EventArgs e)
        {
            string src = tbSrc.Text;
            if (!string.IsNullOrEmpty(src))
            {
                string hash = Crypto.GetMd5Hash(src.Trim());
                tbDest.Text = hash.ToLower();
            }
            else {
            }
        }

        private void tbSrc_Enter(object sender, EventArgs e)
        {
        }
    }
}