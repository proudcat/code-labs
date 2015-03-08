using System;
using System.Threading;

namespace AppDomainExec
{
    class Program
    {
        static void Main(string[] args)
        {
            var message = string.Format("  CurrentThreadID is:{0}\tAppDomainID is:{1}", Thread.CurrentThread.ManagedThreadId, AppDomain.CurrentDomain.Id);
            Console.WriteLine(message);
        }
    }
}
