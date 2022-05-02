import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SpeakerDetail = () => {
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [speakerRec, setSpeakerRec] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            if (isLoading) {
                let resp = await axios.get(`https://react-data-api/api/speakers/${id}`);
                var speakerDetail = await resp.data;
                setSpeakerRec(speakerDetail);
                setIsLoading(false);
            }
        }
        fetchData();

    }, []);

    if (isLoading) {
        return <div>Loading ...</div>
    }

    const { firstName, lastName, bio, favorite, imagePath } = speakerRec;
    const speaker_image = `https://react-data-api/${imagePath}`;
    const navigateListing = () => {
        navigate ("/speakers");
    }

    return (
        <div className="container">
            <br />
            <div className="row" >
                <div className="col-6" style={{ "padding": "0" }}>
                    <img src={speaker_image} />
                </div>
                <div className="col-6">
                    <h3>
                        {firstName} {lastName}
                    </h3>
                    <div>
                        {bio}
                    </div>
                    <br />
                    <button className="btn btn-primary" onClick={navigateListing}>Return to Listing</button>
                </div>
            </div>
        </div>
    );
}

export default SpeakerDetail;