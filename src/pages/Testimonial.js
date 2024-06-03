import React from "react";
import asset6 from "../assets/asset6.png"
import asset7 from "../assets/asset7.png"

export const Testimonial=()=>{
    return(
        <>
            <div className="testimonial" >
                <div className="top-text" style={{color:"#000", marginbottom: "10px" }}>testimonial</div>
                <div className="main-heading" style={{color:"#000", marginbottom: "10px"}}>what our users say about us?
                </div>
            </div>
            <div className="adv">
                <img src={asset6} />
                <div>
                <div className="heading2" style={{margin:"20px"}}>the best financial accounting app ever!</div>
                <div className="subtext" style={{margin:"20px"}}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</div>
                <img src={asset7} style={{margin:"20px"}}/>
                <h3 style={{margin:"20px"}}>Nick Jonas</h3>
                </div>
            </div>
        </>
    )
}