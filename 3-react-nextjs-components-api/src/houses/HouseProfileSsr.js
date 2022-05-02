import React from "react";
import Link from 'next/link';

const HouseProfileSsr = React.memo(
    ({ houseRec }) => {
        const { id, country, address, description, price, imagePath } = houseRec;
        console.log(`HouseProfile:${id} ${country} ${address} ${description} ${price} ${imagePath}`);

        const house_image = `https://react-nginx-api//${imagePath}`;

        return (
            <>
                <div className="container">
                    <div className="row" style={{ "marginTop": "10px", "marginBottom": "10px" }} >

                        <div className="col-1" style={{ "padding": "0" }}>
                            <Link href={`/ssr/house-ssr/${id}`} passHref prefetch={false}>
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

export default HouseProfileSsr;
