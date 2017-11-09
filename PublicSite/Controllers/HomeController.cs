using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace PublicSite.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return Redirect(Url.Content("~/"));
        }
    }
}
