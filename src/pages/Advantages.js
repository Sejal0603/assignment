import React from "react";
import asset4 from  "../assets/asset4.png"
import asset5 from  "../assets/asset5.png"
import bell from "../assets/bell.png"
import star from "../assets/star.png"


export const Advantages=()=>{
    return(
        <>
            <div className="adv" style={{ display: "flex", padding: "20px" }}>
                <div>
                    <div>
                        <h3 className="top-text">ADVANTAGES</h3>
                        <h1 className="main-heading">Why choose Uifry?</h1>
                        <div className="subheading">
                            <div>
                                <img src={bell} alt="bell-icon" style={{ marginRight: '10px' }}/>
                            </div>
                            <h1 className="heading2">Clever notifications </h1>
                        </div>

                        <h3 className="subtext">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</h3>
                    </div>
                    </div>

                    <div>
                        <img src={asset4} alt="asset4" />
                    </div>
            </div>
            
            <div className="adv" >
                    <div>
                        <img src={asset5} alt="asset5" />
                    </div>
                    <div>
                    <div>
                        <div className="subheading" style={{marginTop:"200px", alignItems:"center"}}>
                            <div>
                                <img src={star} alt="bell-icon" style={{ marginRight: '10px' }}/>
                            </div>
                            <h1 className="heading2">fully customizable</h1>
                        </div>

                        <h3 className="subtext">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</h3>
                    </div>
                    </div>

                
            </div>
        
        </>
    )

}