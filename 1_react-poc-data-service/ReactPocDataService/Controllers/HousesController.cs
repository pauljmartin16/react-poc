using Microsoft.AspNetCore.Mvc;
using ReactPocDataService.Models;
using System.Reflection;
using System.Text.Json;

namespace ReactPocDataService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HousesController : ControllerBase
    {
        [HttpGet]
        public IActionResult HousesList()
        {
            try
            {
                var assembly = Assembly.GetExecutingAssembly();
                var resourceName = "ReactPocDataService.data.houses.db.json";

                using (Stream stream = assembly.GetManifestResourceStream(resourceName))
                {
                    using (StreamReader reader = new StreamReader(stream))
                    {
                        string result = reader.ReadToEnd();
                        return Ok(result);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest("Process Failed");
            }
        }

        [HttpGet("{houseId}")]
        public IActionResult House(int houseId)
        {
            try
            {
                var assembly = Assembly.GetExecutingAssembly();
                var resourceName = "ReactPocDataService.data.houses.db.json";

                using (Stream stream = assembly.GetManifestResourceStream(resourceName))
                {
                    using (StreamReader reader = new StreamReader(stream))
                    {
                        string result = reader.ReadToEnd();
                        var houses = JsonSerializer.Deserialize<List<HouseDto>>(result);

                        var houseSearch = houses.FirstOrDefault(x => x.id == houseId);
                        if (houseSearch == null)
                        {
                            return NotFound();
                        }

                        return Ok(houseSearch);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest("Process Failed");
            }
        }

        [HttpGet("houseindex")]
        public IActionResult HouseIndex()
        {
            try
            {
                var assembly = Assembly.GetExecutingAssembly();
                var resourceName = "ReactPocDataService.data.houses.db.json";

                using (Stream stream = assembly.GetManifestResourceStream(resourceName))
                {
                    using (StreamReader reader = new StreamReader(stream))
                    {
                        string result = reader.ReadToEnd();
                        var houses = JsonSerializer.Deserialize<List<HouseDto>>(result);

                        var houseIndex = houses.Select(x => x.id);
                        return Ok(houseIndex);
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
