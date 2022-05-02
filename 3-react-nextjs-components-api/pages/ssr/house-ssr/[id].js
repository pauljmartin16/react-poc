import axios from "axios";
import Link from 'next/link';
import https from 'https';

export async function getServerSideProps({query}) {
    const id = query.id;

    const agent = new https.Agent({  
        rejectUnauthorized: false
      });
      let resp = await axios.get(`https://react-data-api/api/houses/${id}`, { httpsAgent: agent });
    
    return {
      props: {
        houseRec: await resp.data,
      },
    };
  }

const HouseDetailSsr = ({houseRec}) => {
    const { country, address, description, price, imagePath } = houseRec;
    const house_image = `https://react-nginx-api${imagePath}`;

    return (
        <div className="container">
            <br />
            <div className="row" >
                <div className="col-6" style={{ "padding": "0" }}>
                    <img src={house_image} />
                </div>
                <div className="col-6">
                    <h3>
                        {country}
                    </h3>
                    <h3>
                        {address}
                    </h3>
                    <h4>
                        ${price}
                    </h4>
                    <div>
                        {description}
                    </div>
                    <br />
                    <Link href="/ssr/houses-ssr" passHref prefetch={false}>
                        <button className="btn btn-primary">Return to Listing</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HouseDetailSsr;