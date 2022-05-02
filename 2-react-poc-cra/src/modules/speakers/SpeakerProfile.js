import React from "react";
import { Link } from "react-router-dom";

const SpeakerProfile = React.memo(
    ({ speakerRec }) => {
        const { id, firstName, lastName, bio, favorite, imagePath } = speakerRec;
        console.log(`SpeakerProfile:${id} ${firstName} ${lastName} ${favorite}`);

        const speaker_image = `https://react-data-api/${imagePath}`;

        return (
            <div className="container">
                <div className="row" style={{ "marginTop": "10px", "marginBottom": "10px" }}>
                    <div className="col-1" style={{ "padding": "0" }}>
                        <Link to={`/speaker/${id}`}>
                            <img src={speaker_image} width={80} height={80} />
                        </Link>
                    </div>
                    <div className="col-3">
                        {firstName} {lastName}
                    </div>
                    <div className="col-8" style={{ "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap" }}>
                        {bio}
                    </div>
                </div>
                <hr />
            </div>
        );
    }
);

export default SpeakerProfile;
