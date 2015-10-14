using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;

namespace WcfRestService1
{
    // TODO: Edit the SampleItem class
    [DataContract]
    public class SampleItem
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string StringValue { get; set; }
    }
}
