using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace Net
{
    public class NetworkBasic
    {
        public bool Parse(string host) {
            IPAddress ipAddress;

            return IPAddress.TryParse(host, out ipAddress);
            //if (!)
            //{
            //    ipAddress = Dns.GetHostEntry(host).AddressList[0];
            //}
        }
    }
}
