import { useEffect, useState } from "react";
import axios from "axios";
import SpeakerProfile from "./SpeakerProfile";
import { useNavigate } from "react-router-dom";

const SpeakersApp = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [speakersList, setSpeakersList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            if (isLoading) {
                let resp = await axios.get('https://react-data-api/api/speakers')
                var speakers = await resp.data;
                setSpeakersList(speakers);
                setIsLoading(false);
            }
        }
        fetchData();

    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const returnRootApp = () => {
        navigate("/");
    }

    return (
        <div>
            <div className="container">
                <div className="row" style={{ "height": "75px", "marginTop": "40px", "marginBottom": "20px" }}>
                    <h3 className="col-10">Conference Speakers</h3>
                    <button className="btn btn-primary col-2" style={{ "height": "50px" }} onClick={returnRootApp}>Return to Root App</button>
                </div>
                <div className="row">
                    <div className="card-deck">
                        {speakersList.map(
                            (speakerRec) => {
                                return (
                                    <SpeakerProfile
                                        key={speakerRec.id}
                                        speakerRec={speakerRec} />
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeakersApp;