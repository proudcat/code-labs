using System;
using System.Collections.Generic;
using System.Windows.Forms;

namespace Net
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {

            NetworkBasic b = new NetworkBasic();

            bool hehe = b.Parse("192.168.0.1");
            bool dd = b.Parse("www.baidu.com");


            //Application.EnableVisualStyles();
            //Application.SetCompatibleTextRenderingDefault(false);
            //Application.Run(new Form1());
        }
    }
}
