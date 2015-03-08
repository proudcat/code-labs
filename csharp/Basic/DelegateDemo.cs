using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basic
{
    public class DelegateDemo
    {
        public void Test()
        {

            A a = new A() { H = " i am H" };

            Request<A>(a, (data) =>
            {
                Console.WriteLine("data:" + data.GetType().ToString());
            });
        }


        public void Request<T>(object msg, Action<T> callback) where T : new()
        {
            Action<object> cb = callback as Action<object>;
            //callback(msg);
        }
    }

    public class A
    {
        public string H { get; set; }
    }
}
