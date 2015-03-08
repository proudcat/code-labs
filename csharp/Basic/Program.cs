using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basic
{
    class Program
    {

        [Flags]
        public enum SlotType
        {
            NONE,
            LIST_EQUIP,    //物品列表
            LIST_SKILL,    //技能列表
            HEHE = LIST_SKILL | LIST_EQUIP,
            COST,       //消耗品
            TARGET      //目标升级的物品
        }

        static void Main(string[] args)
        {
            //Debug.WriteLine(sizeof(long));

            //DateTimeDemo.Test3();

            EventDemo demo = new EventDemo();
            demo.Test();

            Console.ReadKey();
        }

        static void TestCompilerOptimize()
        {
            int j = 1;
            int i = (++j) + (++j) + (++j);

            Console.WriteLine(" i = " + i);
        }

        static void TestDictionary()
        {
            Dictionary<int, string> d = new Dictionary<int, string>(){
                {1,"1"},{2,"2"}
            };

            d.Remove(3);
        }

        static void TestEnum()
        {
            SlotType slot = SlotType.LIST_EQUIP;

            if ((slot & SlotType.HEHE) != 0)
            {
                Console.WriteLine("hehehehehe");
            }

            switch (slot)
            {
                case SlotType.NONE:
                    break;
                case SlotType.HEHE:
                    Console.WriteLine("switch hehehehehe");
                    break;
                case SlotType.COST:
                    break;
                case SlotType.TARGET:
                    break;
                default:
                    Console.WriteLine("dddddddd");

                    break;
            }



            Console.WriteLine(SlotType.NONE);
            Console.WriteLine(SlotType.LIST_EQUIP);
            Console.WriteLine(SlotType.LIST_SKILL);
            Console.WriteLine(SlotType.COST);


            Console.WriteLine((int)SlotType.NONE);
            Console.WriteLine((int)SlotType.LIST_EQUIP);
            Console.WriteLine((int)SlotType.LIST_SKILL);
            Console.WriteLine((int)SlotType.COST);
        }

    }
}
