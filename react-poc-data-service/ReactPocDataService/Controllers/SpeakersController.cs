using Microsoft.AspNetCore.Mvc;
using ReactPocDataService.Models;
using System.Reflection;
using System.Text.Json;

namespace ReactPocDataService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpeakersController : ControllerBase
    {
        [HttpGet]
        public IActionResult SpeakersList()
        {
            try
            {
                var assembly = Assembly.GetExecutingAssembly();
                var resourceName = "ReactPocDataService.data.speakers.db.json";

                using (Stream stream = assembly.GetManifestResourceStream(resourceName))
                {
                    using (StreamReader reader = new StreamReader(stream))
                    {
                        string result = reader.ReadToEnd();
                        return Ok(result);
                    }
                }
                return BadRequest("No data found");
            }
            catch (Exception)
            {
                return BadRequest("Process Failed");
            }
        }

        [HttpGet("{speakerId}")]
        public IActionResult Speaker(int speakerId)
        {
            try
            {
                var assembly = Assembly.GetExecutingAssembly();
                var resourceName = "ReactPocDataService.data.speakers.db.json";

                using (Stream stream = assembly.GetManifestResourceStream(resourceName))
                {
                    using (StreamReader reader = new StreamReader(stream))
                    {
                        string result = reader.ReadToEnd();
                        var speakers = JsonSerializer.Deserialize<List<SpeakerDto>>(result);

                        var speakerSearch = speakers.FirstOrDefault(x => x.id == speakerId);
                        if (speakerSearch == null)
                        {
                            return NotFound();
                        }

                        return Ok(speakerSearch);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest("Process Failed");
            }
        }

        [HttpGet("speakerindex")]
        public IActionResult SpeakerIndex()
        {
            try
            {
                var assembly = Assembly.GetExecutingAssembly();
                var resourceName = "ReactPocDataService.data.speakers.db.json";

                using (Stream stream = assembly.GetManifestResourceStream(resourceName))
                {
                    using (StreamReader reader = new StreamReader(stream))
                    {
                        string result = reader.ReadToEnd();
                        var speakers = JsonSerializer.Deserialize<List<SpeakerDto>>(result);
                        var speakerIndex = speakers.Select(x => x.id);
                        return Ok(speakerIndex);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest("Process Failed");
            }
        }


    }
}
