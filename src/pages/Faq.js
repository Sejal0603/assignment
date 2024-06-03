import React from "react";

export const Faq=()=>{
    return(
        <>
            <div>
                <div className="top-text">faq</div>
                <div className="main-heading">Frequently asked questions</div>
            </div>
            <div className="container">
                {/* Rectangular box with text inside */}
                <div className="flex-container rectangular-box">
                    <div className="heading2" style={{color:"#fff"}}>the best financial accounting app ever!</div>
                    <div className="subtext" style={{color:"#fff"}}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
                </div>

                {/* Display heading and subtext without the rectangle in flex */}
                <div className="flex-container">
                    <div className="heading2">the best financial accounting app ever!</div>
                    <div className="subtext">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
                </div>
               </div>
                <div className="container">

                    {/* Display heading and subtext without the rectangle in flex */}
                <div className="flex-container">
                    <div className="heading2">the best financial accounting app ever!</div>
                    <div className="subtext">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
                </div>
                {/* Rectangular box with text inside */}
                <div className="flex-container rectangular-box">
                    <div className="heading2" style={{color:"#fff"}}>the best financial accounting app ever!</div>
                    <div className="subtext" style={{color:"#fff"}}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
                </div>

                </div>
                
                <div className="container">
                {/* Rectangular box with text inside */}
                <div className="flex-container rectangular-box">
                    <div className="heading2" style={{color:"#fff"}}>the best financial accounting app ever!</div>
                    <div className="subtext" style={{color:"#fff"}}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
                </div>

                {/* Display heading and subtext without the rectangle in flex */}
                <div className="flex-container">
                    <div className="heading2">the best financial accounting app ever!</div>
                    <div className="subtext">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
                </div>
            </div>
        
        </>
    )
}