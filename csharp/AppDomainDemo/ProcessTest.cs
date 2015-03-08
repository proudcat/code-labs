using System;
using System.Diagnostics;
using System.Threading;

namespace AppDomainDemo
{
    public class ProcessTest
    {
        public static void Basic(){
            Process p = Process.Start("notepad.exe", @"F:\download\下载地址.txt");
            Thread.Sleep(2000);
            p.Kill();
        }

        public static void ProcessList()
        {

            var list = Process.GetProcesses();

            foreach (var item in list)
            {
                Console.WriteLine(string.Format("Id:{0}\tName:{1}", item.Id, item.ProcessName));
            }

        }

        public static void ModuleList()
        {
            var moduleList = Process.GetCurrentProcess().Modules;
            foreach (System.Diagnostics.ProcessModule module in moduleList)
                Console.WriteLine(string.Format("{0}\n  URL:{1}\n  Version:{2}", module.ModuleName, module.FileName, module.FileVersionInfo.FileVersion));
        }
    }
}
