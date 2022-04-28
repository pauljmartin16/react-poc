namespace ReactPocDataService.Models
{
    public class SpeakerDto
    {
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public bool sat { get; set; }
        public bool sun { get; set; }
        public bool favorite { get; set; }
        public string bio { get; set; }
        public string imagePath { get; set; }
    }
}