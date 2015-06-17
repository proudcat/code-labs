using System;
using System.Net;
using System.Net.Sockets;
using System.Windows.Forms;

namespace Network
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btn_start_Click(object sender, EventArgs e)
        {
            rtb_log.Clear();
            string host = tb_host.Text.ToString();
            IPAddress _ipAddress = null;

            try
            {
                IPAddress[] addresses = Dns.GetHostEntry(host).AddressList;
                foreach (var item in addresses)
                {
                    if (item.AddressFamily == AddressFamily.InterNetwork)
                    {
                        _ipAddress = item;
                        rtb_log.AppendText("----->" + item.ToString());
                    }
                    else
                    {
                        rtb_log.AppendText(item.ToString());
                    }

                    rtb_log.AppendText("\n");

                }
            }
            catch (Exception ex)
            {
                
                rtb_log.AppendText(ex.ToString());
            }
        }
    }
}
