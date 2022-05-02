import axios from "axios";
import Link from 'next/link';
import HouseProfileSsr from "../../src/houses/HouseProfileSsr";
import https from 'https';

export async function getServerSideProps() {
    const agent = new https.Agent({  
        rejectUnauthorized: false
      });
    const resp = await axios.get('https://react-data-api/api/houses', { httpsAgent: agent });
    
    return {
      props: {
        housesList: await resp.data,
      },
    };
  }

const HousesSsr = ({housesList}) => {
    return (
        <div>
            <div className="container">
                <div className="row" style={{ "height": "75px", "marginTop": "40px", "marginBottom": "20px" }}>
                    <h3 className="col-10">SSR Houses For Sale</h3>
                    <Link href="/" passHref prefetch={false}>
                        <button className="btn btn-primary col-2" style={{ "height": "50px" }}>Return to Root App</button>
                    </Link>
                </div>

                <div className="row">
                    <div className="card-deck">
                        {housesList.map(
                            (houseRec) => {
                                return (
                                    <HouseProfileSsr
                                        key={houseRec.id}
                                        houseRec={houseRec} />
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HousesSsr;