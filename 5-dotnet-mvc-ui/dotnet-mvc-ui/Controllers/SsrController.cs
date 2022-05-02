using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace dotnet_mvc_ui.Controllers
{
    public class SsrController : Controller
    {
        public IActionResult SpeakerIframe()
        {
            ViewBag.url = "https://react-nginx-api/ssr/speaker-ssr/10808";
            return View();
        }

        public IActionResult HouseIframe()
        {
            ViewBag.url = "https://react-nginx-api/ssr/house-ssr/1";
            return View();
        }

        public async Task<IActionResult> SpeakerEmbedded()
        {
            ViewBag.ComponentHtml = await GetHtmlComponent("https://react-nginx-api/ssr/speaker-ssr/10808");
            return View();
        }

        public async Task<IActionResult> HouseEmbedded()
        {
            ViewBag.ComponentHtml = await GetHtmlComponent("https://react-nginx-api/ssr/house-ssr/1");
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
