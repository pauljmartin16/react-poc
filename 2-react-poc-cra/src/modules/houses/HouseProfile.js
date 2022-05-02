import React from "react";
import { Link } from "react-router-dom";

const HouseProfile = React.memo(
    ({ houseRec }) => {
        const { id, country, address, description, price, imagePath } = houseRec;
        console.log(`HouseProfile:${id} ${country} ${address} ${description} ${price} ${imagePath}`);

        const house_image = `https://react-data-api/${imagePath}`;

        return (
            <>
                <div className="container">
                    <div className="row" style={{ "marginTop": "10px", "marginBottom": "10px" }} >

                        <div className="col-1" style={{ "padding": "0" }}>
                            <Link to={`/house/${id}`}>
                                <img src={house_image} width={80} height={80} />
                            </Link>
                        </div>
                        <div className="col-1">
                            ${price}
                        </div>
                        <div className="col-3">
                            {country} {address}
                        </div>
                        <div className="col-7" style={{ "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap" }}>
                            {description}
                        </div>
                    </div>
                    <hr />
                </div>
            </>

        );
    }
);

export default HouseProfile;
