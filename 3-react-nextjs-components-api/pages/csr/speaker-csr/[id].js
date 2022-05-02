import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from 'next/link';
import https from 'https';

const SpeakerDetailCsr = () => {
    const { query } = useRouter();
    const id = query.id;
    const imageRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [speakerRec, setSpeakerRec] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (isLoading) {
                const agent = new https.Agent({  
                    rejectUnauthorized: false
                  });
                let resp = await axios.get(`https://react-data-api/api/speakers/${id}`, { httpsAgent: agent });
                var speakerDetail = await resp.data;
                setSpeakerRec(speakerDetail);
                setIsLoading(false);
            }
        }
        fetchData();

    }, [id]);

    if (isLoading) {
        return <div>Loading ...</div>
    }

    const { firstName, lastName, bio, favorite, imagePath } = speakerRec;
    const speaker_image = `https://react-nginx-api${imagePath}`;
    const bw_speaker_image = speaker_image.replace("/speakers/", "/speakers/bw/");

    return (
        <div className="container">
            <br />
            <div className="row" >
                <div className="col-6" style={{ "padding": "0" }}>
                    {/* <img src={speaker_image} /> */}
                    <img onMouseOver={() => {
                            imageRef.current.src = bw_speaker_image;
                        }} onMouseOut={() => {
                            imageRef.current.src = speaker_image;
                        }}
                        src={speaker_image} 
                        ref={imageRef} 
                        />
                </div>
                <div className="col-6">
                    <h3>
                        {firstName} {lastName}
                    </h3>
                    <div>
                        {bio}
                    </div>
                    <br />
                    <Link href="/csr/speakers-csr" passHref prefetch={false}>
                        <button className="btn btn-primary">Return to Listing</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SpeakerDetailCsr;