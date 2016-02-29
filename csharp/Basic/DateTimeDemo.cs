using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basic
{
    class DateTimeDemo
    {

        public static void Test3()
        {
            long timestamp = 1423021610;

            

            //long lTime = long.Parse(timestamp.ToString() + "0000000");
            //TimeSpan toNow = new TimeSpan(lTime);

            //dtStart.Add(toNow);


            //0001-1-1 ~ now  s
            DateTime serverTime = new DateTime(timestamp * 10000000).AddYears(1969).ToLocalTime();
            //DateTime clientTime = DateTime.Now.Subtract();

            //TimeSpan delta = clientTime - serverTime;

        }

        public static void Test2()
        {

            //DateTimeFormatInfo dtFormat = new System.GlobalizationDateTimeFormatInfo();

            //  dtFormat.ShortDatePattern = "yyyy/MM/dd";

            DateTimeFormatInfo dtFormate = CultureInfo.GetCultureInfo("zh-cn").DateTimeFormat;
            DateTime dt = Convert.ToDateTime("2011/5/26", dtFormate);

            Console.WriteLine(dt);
        }

        public static void Test()
        {
            string dateString, format;
            DateTime result;
            CultureInfo provider = CultureInfo.InvariantCulture;


            dateString = "2015/1/14";
            result = DateTime.Parse(dateString, CultureInfo.GetCultureInfo("zh-cn"));

            Console.WriteLine("{0} converts to {1}.", dateString, result.ToString());

            dateString = "06/15/2008";
            format = "d";

            result = DateTime.ParseExact(dateString, format, provider);
            Console.WriteLine("{0} converts to {1}.", dateString, result.ToString());

            Console.WriteLine(CultureInfo.GetCultureInfo("zh-cn") + "," + CultureInfo.InvariantCulture);

            // Parse date-only value without leading zero in month using "d" format.
            // Should throw a FormatException because standard short date pattern of  
            // invariant culture requires two-digit month.
            dateString = "6/15/2008";
            try
            {
                result = DateTime.ParseExact(dateString, format, provider);
                Console.WriteLine("{0} converts to {1}.", dateString, result.ToString());
            }
            catch (FormatException)
            {
                Console.WriteLine("{0} is not in the correct format.", dateString);
            }

            // Parse date and time with custom specifier.
            dateString = "Sun 15 Jun 2008 8:30 AM -06:00";
            format = "ddd dd MMM yyyy h:mm tt zzz";
            try
            {
                result = DateTime.ParseExact(dateString, format, provider);
                Console.WriteLine("{0} converts to {1}.", dateString, result.ToString());
            }
            catch (FormatException)
            {
                Console.WriteLine("{0} is not in the correct format.", dateString);
            }

            // Parse date and time with offset but without offset's minutes. 
            // Should throw a FormatException because "zzz" specifier requires leading  
            // zero in hours.
            dateString = "Sun 15 Jun 2008 8:30 AM -06";
            try
            {
                result = DateTime.ParseExact(dateString, format, provider);
                Console.WriteLine("{0} converts to {1}.", dateString, result.ToString());
            }
            catch (FormatException)
            {
                Console.WriteLine("{0} is not in the correct format.", dateString);
            }

            dateString = "15/06/2008 08:30";
            format = "g";
            provider = new CultureInfo("fr-FR");
            try
            {
                result = DateTime.ParseExact(dateString, format, provider);
                Console.WriteLine("{0} converts to {1}.", dateString, result.ToString());
            }
            catch (FormatException)
            {
                Console.WriteLine("{0} is not in the correct format.", dateString);
            }
        }
    }
    // The example displays the following output: 
    //       06/15/2008 converts to 6/15/2008 12:00:00 AM. 
    //       6/15/2008 is not in the correct format. 
    //       Sun 15 Jun 2008 8:30 AM -06:00 converts to 6/15/2008 7:30:00 AM. 
    //       Sun 15 Jun 2008 8:30 AM -06 is not in the correct format. 
    //       15/06/2008 08:30 converts to 6/15/2008 8:30:00 AM.
}