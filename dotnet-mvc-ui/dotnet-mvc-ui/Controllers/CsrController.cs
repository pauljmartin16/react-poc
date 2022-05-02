using dotnet_mvc_ui.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace dotnet_mvc_ui.Controllers
{
    public class CsrController : Controller
    {
        public IActionResult SpeakerIframe()
        {
            ViewBag.url = "https://react-nginx-api/csr/speaker-csr/10808";
            return View();
        }

        public IActionResult HouseIframe()
        {
            ViewBag.url = "https://react-nginx-api/csr/house-csr/1";
            return View();
        }

        public async Task<IActionResult> SpeakerEmbedded()
        {
            ViewBag.ComponentHtml = await GetHtmlComponent("https://react-nginx-api/csr/speaker-csr/10808");
            return View();
        }

        public async Task<IActionResult> HouseEmbedded()
        {
            ViewBag.ComponentHtml = await GetHtmlComponent("https://react-nginx-api/csr/house-csr/1");
            return View();
        }

        private async Task<string> GetHtmlComponent(string componentUrl)
        {
            using (var httpClientHandler = new HttpClientHandler())
            {
                httpClientHandler.ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => { return true; };
                using (var client = new HttpClient(httpClientHandler))
                {
                    var response = await client.GetAsync(componentUrl);
                    return await response.Content.ReadAsStringAsync() as String;
                }
            }
        }
    }
}
