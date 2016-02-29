using System;
using System.Threading;

namespace AppDomainDemo
{
    public class AppDomainTest
    {
        public static void ShowDomains()
        {
            var appDomain = AppDomain.CurrentDomain;

            foreach (var item in appDomain.GetAssemblies())
            {
                Console.WriteLine(item.FullName);
                Console.WriteLine("------------------------------------------------------");
            }
        }


        public static void ThreadTest()
        {
            //当前应用程序域信息
            Console.WriteLine("CurrentAppDomain start!");
            ShowMessage();

            //建立新的应用程序域对象
            AppDomain newAppDomain = AppDomain.CreateDomain("newAppDomain");

            //在新的应用程序域中执行Example.exe
            newAppDomain.ExecuteAssembly("AppDomainExec.exe");
            
            AppDomain.Unload(newAppDomain);
        }

        public static void ShowMessage()
        {
            var message = string.Format("  CurrentThreadID is:{0}\tAppDomainID is:{1}", Thread.CurrentThread.ManagedThreadId, AppDomain.CurrentDomain.Id);
            Console.WriteLine(message);
        }



        public static void CrossDomainTest()
        {
            Console.WriteLine("CurrentAppDomain start!");
            
            //建立新的应用程序域对象
            AppDomain newAppDomain = AppDomain.CreateDomain("newAppDomain");
            
            //绑定CrossAppDomainDelegate的委托方法
            CrossAppDomainDelegate crossAppDomainDelegate = new CrossAppDomainDelegate(MyCallBack);
            
            //绑定DomainUnload的事件处理方法
            newAppDomain.DomainUnload += (obj, e) =>
            {
                Console.WriteLine("NewAppDomain unload!");
            };
            
            //调用委托
            newAppDomain.DoCallBack(crossAppDomainDelegate);
            AppDomain.Unload(newAppDomain);
        }

        static public void MyCallBack()
        {
            string name = AppDomain.CurrentDomain.FriendlyName;
            for (int n = 0; n < 4; n++)
                Console.WriteLine(string.Format("  Do work in {0}........", name));
        }
    }
}
