import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';

const SpeakerProfileCsr = React.memo(
    ({ speakerRec }) => {
        const imageRef = useRef(null);

        const { id, firstName, lastName, bio, favorite, imagePath } = speakerRec;
        console.log(`SpeakerProfile:${id} ${firstName} ${lastName} ${favorite}`);

        const speaker_image = `https://react-nginx-api${imagePath}`;
        const bw_speaker_image = speaker_image.replace("/speakers/", "/speakers/bw/");
    
        return (
            <div className="container">
                <div className="row" style={{ "marginTop": "10px", "marginBottom": "10px" }}>
                    <div className="col-1" style={{ "padding": "0" }}>
                        <Link href={`/csr/speaker-csr/${id}`} passHref prefetch={false}>
                            {/* <img src={speaker_image} width={80} height={80} /> */}
                        <img width={80} height={80} onMouseOver={() => {
                            imageRef.current.src = bw_speaker_image;
                        }} onMouseOut={() => {
                            imageRef.current.src = speaker_image;
                        }}
                        src={speaker_image} 
                        ref={imageRef} 
                        />

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

export default SpeakerProfileCsr;
