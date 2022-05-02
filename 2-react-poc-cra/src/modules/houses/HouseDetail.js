import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const HouseDetail = () => {
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [houseRec, setHouseRec] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            if (isLoading) {
                let resp = await axios.get(`https://react-data-api/api/houses/${id}`);
                var houseDetail = await resp.data;
                setHouseRec(houseDetail);
                setIsLoading(false);
            }
        }
        fetchData();

    }, []);

    if (isLoading) {
        return <div>Loading ...</div>
    }

    const { country, address, description, price, imagePath } = houseRec;
    const house_image = `https://react-data-api/${imagePath}`;
    const navigateListing = () => {
        navigate ("/houses");
    }

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
                    <button className="btn btn-primary" onClick={navigateListing}>Return to Listing</button>
                </div>
            </div>
        </div>
    );
}

export default HouseDetail;