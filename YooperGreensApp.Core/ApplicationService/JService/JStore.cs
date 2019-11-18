using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace YooperGreensApp.Core.ApplicationService.JService
{

    public class JStore
    {
        public JStore(string json)
        {
            JObject jObject = JObject.Parse(json);
            JToken jStore = jObject["user"];

            Id = (int)jStore["id"];
            Name = (string)jStore["name"];

        }

        public int Id { get; set; }
        public string Name { get; set; }

    }
}
