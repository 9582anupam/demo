import React from 'react'
import BgVideo from "../../../../assets/earth-bg.mp4";

const Earth = () => {
    return (
        <div>
            <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-screen w-full object-cover z-[-1]"
            >
            <source src={BgVideo} type="video/mp4" />
        </video>
        </div>
    )
}

export default Earth