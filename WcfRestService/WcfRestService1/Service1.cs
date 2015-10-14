using System;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;
using Newtonsoft.Json;
using System.ServiceModel.Activation;

namespace WcfRestService1
{
    // Start the service and browse to http://<machine_name>:<port>/Service1/help to view the service's generated help page
    // NOTE: By default, a new instance of the service is created for each call; change the InstanceContextMode to Single if you want
    // a single instance of the service to process all calls.	
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    [ServiceBehavior(InstanceContextMode = InstanceContextMode.PerCall)]
    // NOTE: If the service is renamed, remember to update the global.asax.cs file
    public class Service1
    {
        [WebInvoke(UriTemplate = "Items", Method = "GET",
            ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare)]
        public string GetCollection()
        {
            List<SampleItem> items = new List<SampleItem>() { new SampleItem() { Id = 1, StringValue = "Hello" }, new SampleItem() { Id = 2, StringValue = "hehehehehe" } };
            return JsonConvert.SerializeObject(items);
        }
        [OperationContract]
        [WebInvoke(UriTemplate = "Item", Method = "POST",
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
        public string Create(string item)
        {
            SampleItem obj = JsonConvert.DeserializeObject<SampleItem>(item);
            return JsonConvert.SerializeObject(obj);
        }

        [WebGet(UriTemplate = "{id}")]
        public SampleItem Get(string id)
        {
            // TODO: Return the instance of SampleItem with the given id
            throw new NotImplementedException();
        }

        [WebInvoke(UriTemplate = "{id}", Method = "PUT")]
        public SampleItem Update(string id, SampleItem instance)
        {
            // TODO: Update the given instance of SampleItem in the collection
            throw new NotImplementedException();
        }

        [WebInvoke(UriTemplate = "{id}", Method = "DELETE")]
        public void Delete(string id)
        {
            // TODO: Remove the instance of SampleItem with the given id from the collection
            throw new NotImplementedException();
        }

    }
}
