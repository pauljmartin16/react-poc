import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link';
import SpeakerProfileCsr from "../../src/speakers/SpeakerProfileCsr";
import https from 'https';

const SpeakersCsr = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [speakersList, setSpeakersList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (isLoading) {
                const agent = new https.Agent({  
                    rejectUnauthorized: false
                  });
                let resp = await axios.get('https://react-data-api/api/speakers', { httpsAgent: agent });
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

    return (
        <div>
            <div className="container">
                <div className="row" style={{ "height": "75px", "marginTop": "40px", "marginBottom": "20px" }}>
                    <h3 className="col-10">CSR Conference Speakers</h3>
                    <Link href="/" passHref prefetch={false}>
                        <button className="btn btn-primary col-2" style={{ "height": "50px" }}>Return to Root App</button>
                    </Link>
                </div>
                <div className="row">
                    <div className="card-deck">
                        {speakersList.map(
                            (speakerRec) => {
                                return (
                                    <SpeakerProfileCsr
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

export default SpeakersCsr;