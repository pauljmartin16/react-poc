using dotnet_mvc_ui.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace dotnet_mvc_ui.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost()]
        public IActionResult Navigate(string value)
        {
            switch (value)
            {
                case "SSR House IFrame":
                    return RedirectToAction("HouseIframe", "Ssr");
                case "SSR Speaker IFrame":
                    return RedirectToAction("SpeakerIframe", "Ssr");
                case "CSR House IFrame":
                    return RedirectToAction("HouseIframe", "Csr");
                case "CSR Speaker IFrame":
                    return RedirectToAction("SpeakerIframe", "Csr");
                case "SSR House Embedded":
                    return RedirectToAction("HouseEmbedded", "Ssr");
                case "SSR Speaker Embedded":
                    return RedirectToAction("SpeakerEmbedded", "Ssr");
                case "CSR House Embedded":
                    return RedirectToAction("HouseEmbedded", "Csr");
                case "CSR Speaker Embedded":
                    return RedirectToAction("SpeakerEmbedded", "Csr");
            }
            return View();
        }
    }
}