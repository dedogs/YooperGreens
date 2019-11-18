using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace YooperGreensApp.Core.ApplicationService.Service
{
    public class HttpWebRequestHandler
    {
        public string GetReleases(string url)
        {
            using(var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("Authorization", "Basic YXB3bWE2bzQtam0wbC05ZmlqOjY3YW4tejYzNXR0Nng4Nmp2");
                var response = httpClient.GetStringAsync(new Uri(url)).Result;

                return response;
            }
        }
    }
}
