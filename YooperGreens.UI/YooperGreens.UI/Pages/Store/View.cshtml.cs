using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using YooperGreensApp.Core.ApplicationService.Service;

namespace YooperGreens.UI.Pages.Store
{
    public class ViewModel : PageModel
    {
        public void OnGet()
        {
            var httpWebHandler = new HttpWebRequestHandler();
            string response = httpWebHandler.GetReleases("https://api.printful.com/orders");

        }
    }
}