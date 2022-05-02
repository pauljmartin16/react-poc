import { useEffect, useState } from "react";
import axios from "axios";
import HouseProfile from "./HouseProfile";
import { useNavigate } from "react-router-dom";

const HousesApp = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [housesList, setHousesList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            if (isLoading) {
                let resp = await axios.get('https://react-data-api/api/houses')
                var speakers = await resp.data;
                setHousesList(speakers);
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
                    <h3 className="col-10">Houses For Sale</h3>
                    <button className="btn btn-primary col-2" style={{ "height": "50px" }} onClick={returnRootApp}>Return to Root App</button>
                </div>

                <div className="row">
                    <div className="card-deck">
                        {housesList.map(
                            (houseRec) => {
                                return (
                                    <HouseProfile
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

export default HousesApp;