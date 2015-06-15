using SimpleJson;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Json
{
    class Program
    {
        static void Main(string[] args)
        {
            string json = File.ReadAllText("./abc.json");
            //            string json = File.ReadAllText("./rebirthConfig.json");

            // List<Rebirth> obj_list = SimpleJson.SimpleJson.DeserializeObject<List<Rebirth>>(json);

            TEST[] obj_array = SimpleJson.SimpleJson.DeserializeObject<TEST[]>(json);
            //            Rebirth[] obj_array = SimpleJson.SimpleJson.DeserializeObject<Rebirth[]>(json);

            Console.ReadKey();
        }
    }
}
