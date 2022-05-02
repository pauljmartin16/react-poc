import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from 'next/link';
import https from 'https';

const HouseDetailCsr = () => {
    const { query } = useRouter();
    const id = query.id;

    const [isLoading, setIsLoading] = useState(true);
    const [houseRec, setHouseRec] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (isLoading) {
                const agent = new https.Agent({  
                    rejectUnauthorized: false
                  });
                let resp = await axios.get(`https://react-data-api/api/houses/${id}`, { httpsAgent: agent });
                var houseDetail = await resp.data;
                setHouseRec(houseDetail);
                setIsLoading(false);
            }
        }
        fetchData();

    }, [id]);

    if (isLoading) {
        return <div>Loading ...</div>
    }

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
                    <Link href="/csr/houses-csr" passHref prefetch={false}>
                        <button className="btn btn-primary">Return to Listing</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HouseDetailCsr;