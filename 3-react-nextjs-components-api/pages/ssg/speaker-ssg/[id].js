import axios from "axios";
import Link from 'next/link';
import https from 'https';
import { useState, useEffect, useRef } from "react";

// enable  with getServerSideProps
export async function getServerSideProps({query}) {
    const id = query.id;

    // local fix - handles invalid k8s certificate
    const agent = new https.Agent({  
        rejectUnauthorized: false
      });
      let resp = await axios.get(`https://react-data-api/api/speakers/${id}`, { httpsAgent: agent });
    
    return {
      props: {
        speakerRec: await resp.data,
      },
    };
  }

const SpeakerDetailSsg = ({speakerRec}) => {
    const { firstName, lastName, bio, favorite, imagePath } = speakerRec;
    const imageRef = useRef(null);
    const speaker_image = `https://react-nginx-api${imagePath}`;
    const bw_speaker_image = speaker_image.replace("/speakers/", "/speakers/bw/");
    const [hasMounted, setHasMounted] = useState(false);

    // hasMounted pattern reqd to host in c# using @html.raw. Render just once & avoid hydration - https://www.joshwcomeau.com/react/the-perils-of-rehydration/
    // NOTE - this is not reqd if using iFrame
    // useEffect(() => {
    //     setHasMounted(true);
    // });

    // if (!hasMounted) {
    //     return null;
    //   }

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
                    <Link href="/ssg/speakers-ssg" passHref prefetch={false}>
                        <button className="btn btn-primary">Return to Listing</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SpeakerDetailSsg;