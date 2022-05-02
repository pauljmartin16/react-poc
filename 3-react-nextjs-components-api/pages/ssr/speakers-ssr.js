import axios from "axios";
import Link from 'next/link';
import SpeakerProfileSsr from "../../src/speakers/SpeakerProfileSsr";
import https from 'https';

export async function getServerSideProps() {
    const agent = new https.Agent({  
        rejectUnauthorized: false
      });
      let resp = await axios.get('https://react-data-api/api/speakers', { httpsAgent: agent });

    return {
      props: {
        speakersList: await resp.data,
      },
    };
  }

const SpeakersSsr = ({speakersList}) => {
    return (
        <div>
            <div className="container">
                <div className="row" style={{ "height": "75px", "marginTop": "40px", "marginBottom": "20px" }}>
                    <h3 className="col-10">SSR Conference Speakers</h3>
                    <Link href="/" passHref prefetch={false}>
                        <button className="btn btn-primary col-2" style={{ "height": "50px" }}>Return to Root App</button>
                    </Link>
                </div>
                <div className="row">
                    <div className="card-deck">
                        {speakersList.map(
                            (speakerRec) => {
                                return (
                                    <SpeakerProfileSsr
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

export default SpeakersSsr;