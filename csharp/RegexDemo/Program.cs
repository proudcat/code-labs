using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace RegexDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(IsValidUserName("aaaa"));
            Console.WriteLine(IsValidUserName("dfddadfasdfa1432halfhhakhfa"));
            Console.WriteLine(IsValidUserName("哈大煞风景爱了就爱"));
            Console.WriteLine(IsValidUserName("123yiuy____"));
            Console.WriteLine(IsValidUserName("1346576465768"));
            Console.WriteLine(IsValidUserName("aaaa"));
            Console.WriteLine(IsValidUserName("dddd_________adafdfasdasd123fasdfasdfadfasfasfasfa"));
            Console.WriteLine(IsValidUserName("12312321_1aa_"));

            Console.ReadKey();
        }


        public static bool IsValidUserName(string userName)
        {
            if (string.IsNullOrEmpty(userName)
            || userName.Length < 6
            || userName.Length > 22)
            {
                return false;
            }

            Regex regex = new Regex(@"[a-zA-Z0-9_]+");
            if (!string.IsNullOrEmpty(userName) && regex.IsMatch(userName))
            {
                return true;
            }

            return false;
        }
    }
}
