using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Basic
{
    class RegexDemo
    {
        public static void Test()
        {

            string htmltext = File.ReadAllText("MaintenancePage.html");

            string pattern = @"<%=\s*(\w+)\s*%>";
            string result = Regex.Replace(htmltext, pattern, match =>
            {

                Console.WriteLine(" ========== ");

                Console.WriteLine(match.Value);
                Console.WriteLine(match.Groups[0].Value);
                Console.WriteLine(match.Groups[1].Value);

                return htmltext.Replace(match.Groups[0].Value, match.Groups[1].Value);
            });


            //Console.WriteLine("#########" + result);
            Trace.WriteLine(result);
        }
    }
}
