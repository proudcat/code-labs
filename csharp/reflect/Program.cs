using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace reflect
{
    class Program
    {
        static void Main(string[] args)
        {
            //Student stu = new Student();
            //Type t = stu.GetType();
            List<Type> peoples = GetClasses();
            peoples.ForEach((type) =>
            {
                Console.WriteLine(type.Name);
                MessageAttribute attribute = type.GetCustomAttribute<MessageAttribute>();
                if (attribute != null)
                {
                    Console.WriteLine(attribute.Route);
                }
            });

            Console.ReadKey();
        }

        static void Test()
        {
            AppDomain.CurrentDomain.GetAssemblies();
            Assembly asm = Assembly.GetExecutingAssembly();
        }

        static List<Type> GetClasses()
        {
            Assembly asm = Assembly.GetExecutingAssembly();

            List<Type> classlist = new List<Type>();

            foreach (Type type in asm.GetTypes())
            {
                if (type.IsClass && type.IsSubclassOf(typeof(People)))
                    classlist.Add(type);
            }

            return classlist;
        }
    }
}
