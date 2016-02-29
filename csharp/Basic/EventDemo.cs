using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Basic
{
    public class EventDemo
    {
        MessageCenter mc = new MessageCenter();

        public void Test()
        {
            Test1();
            GC.Collect();
            Test2();
        }

        public void Test1()
        {
            MessageListener1 listener1 = new MessageListener1();
            listener1.Listen(mc);

            MessageListener2 listener2 = new MessageListener2();
            listener2.Listen(mc);

            mc.ShowEventInfo();

            mc.Clear();

        }

        public void Test2()
        {
            mc.ShowEventInfo();

            MessageListener2 listener2 = new MessageListener2();
            listener2.Listen(mc);

            mc.ShowEventInfo();
        }
    }

    internal class MessageListener1
    {

        public MessageListener1()
        {
            Console.WriteLine("constructor : " + this.GetType().Name);
        }

        ~MessageListener1()
        {
            Console.WriteLine("destroy : " + this.GetType().Name);
        }

        public void Listen(MessageCenter mc)
        {
            mc.MessageEvent += () =>
            {
                Console.WriteLine("Listening : " + this.GetType().Name);
            };
        }
    }


    internal class MessageListener2
    {

        public MessageListener2()
        {
            Console.WriteLine("constructor : " + this.GetType().Name);
        }

        ~MessageListener2()
        {
            Console.WriteLine("destroy : " + this.GetType().Name);
        }

        public void Listen(MessageCenter mc)
        {
            mc.MessageEvent += () =>
            {
                Console.WriteLine("Listening : " + this.GetType().Name);
            };
        }
    }

    internal class MessageCenter
    {
        public event Action MessageEvent;

        public void Clear()
        {
            if (MessageEvent != null)
            {
                MessageEvent = null;
            }
        }

        public void ShowEventInfo()
        {
            Console.WriteLine("------------- MessageEvent Info ------------");
            if (MessageEvent != null)
            {
                Delegate[] methods = MessageEvent.GetInvocationList();
                Console.WriteLine("methods.length:" + methods.Length);
                MessageEvent();
            }
        }
    }
}
