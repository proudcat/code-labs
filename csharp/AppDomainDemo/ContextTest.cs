using System;
using System.Runtime.Remoting.Contexts;
using System.Threading;

namespace AppDomainDemo
{
    public class ContextTest
    {
        [Synchronization]
        public class ContextBound : ContextBoundObject
        {
            public void Test(string message)
            {
                ContextMessage(message);
            }


            public void ShowThreadInfo()
            {
                ShowThreadInfo();
            }
        }

        public class Example
        {
            public void Test()
            {
                ContextMessage("Example Test\n");
            }

            //访问上下文绑定对象测试
            public void Sync(ContextBound contextBound)
            {
                contextBound.Test("Example call on contextBound\n");
            }
        }


        public static void ContextBoundTest()
        {
            Example example = new Example();
            example.Test();


            ContextBound contextBound = new ContextBound();
            contextBound.Test("ContentBound Test\n");
            example.Sync(contextBound);


            ContextBound contextBound2 = new ContextBound();
            contextBound2.Test("ContentBound Test\n");
            example.Sync(contextBound2);
        }

        //显示上下文信息
        public static void ContextMessage(string data)
        {
            Context context = Thread.CurrentContext;
            Console.WriteLine(string.Format("{0}ContextId is {1}", data, context.ContextID));
            foreach (var prop in context.ContextProperties)
                Console.WriteLine(prop.Name);
            Console.WriteLine();
        }

        static void Main()
        {
            //当前应用程序域信息
            Console.WriteLine("CurrentAppDomain start!");
            ShowThreadInfo();

            //在上下文绑定对象中运行线程
            ContextBound contextBound = new ContextBound();
            contextBound.ShowThreadInfo();
            Console.ReadKey();
        }

        public static void ShowThreadInfo()
        {
            var message = string.Format("  CurrentThreadID is:{0}\tContextID is:{1}",
                 Thread.CurrentThread.ManagedThreadId, Thread.CurrentContext.ContextID);
            Console.WriteLine(message);
        }
    }
}
