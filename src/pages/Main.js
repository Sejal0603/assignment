import React from "react";
import asset2 from "../assets/asset2.png"
import asset1 from "../assets/asset1.png"
import asset3 from "../assets/asset3.png"


export const Home=()=>{
    return(
        <>
        <div className="home" id="homePage">
            <div>
            <div className="text">
                <h1>
                    Make  The Best Financial Decisions
                </h1>
                <h3>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </h3>

            </div>
            
            
            <div className="links">
            <div className="button" style={{display:"flex"}}>
                <div className="button-text" style={{marginRight:"8px"}}>
                    Get Started 
                    </div>
                    <div className="arrowicon" style={{color:"fff" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="8" viewBox="0 0 25 8" fill="none">
                            <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" fill="white" />
                        </svg>
                    </div>
                
            </div>
            <div className="video-link" style={{display:"flex" , alignItems:"center"}}>
                <div className="icon" style={{margin:"8px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                        <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                        <path d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z" fill="black" stroke="black" />
                    </svg>
                </div>
                <div>
                    <h2>
                        Watch Video
                    </h2>
                </div>
            </div>
            </div>

            <div className="image">
                <img src={asset2} alt="asset2" />
            </div>
            </div>
            <div className="asset1">
                <img src={asset1} alt="asset1" />
            </div>
            </div>



            <div className="page2" style={{display:"flex"}} id="features">
                <div>
                    <img src={asset3} alt="asset3"/>
                </div>
                <div className="text">
                    <h3 style={{ color: '#F55', fontSize: '18px', fontWeight: '500', lineHeight: '28px',fontfamily: "Clash Display" }}>FEATURES</h3>
                    <h1 style={{ color: '#000', fontSize: '48px', fontWeight: '700', lineHeight: '48px',fontfamily: "Clash Display" }}>Uifry Premium</h1>
                    <div className="subheading" style={{display:"flex"}}>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
                </div>
                <h1 style={{ color: '#000', fontSize: '18px', fontWeight: '600', lineHeight: '28px',fontfamily: "Clash Display" }}>budgeting intervals </h1>
                </div>

                <h3 style={{ color: '#000', fontSize: '18px', fontWeight: '500', lineHeight: '28px',fontfamily: "Clash Display", opacity: "0.5" }}>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</h3>

                <div className="subheading" style={{display:"flex"}}>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 2.50002V12M12 12L20.5 7.27773M12 12L3.5 7.27773M12 12V21.5M20.5 16.7222L12.777 12.4317C12.4934 12.2741 12.3516 12.1954 12.2015 12.1645C12.0685 12.1371 11.9315 12.1371 11.7986 12.1645C11.6484 12.1954 11.5066 12.2741 11.223 12.4317L3.5 16.7222M21 16.0586V7.94147C21 7.59883 21 7.4275 20.9495 7.27471C20.9049 7.13953 20.8318 7.01545 20.7354 6.91076C20.6263 6.79242 20.4766 6.70922 20.177 6.54282L12.777 2.43171C12.4934 2.27415 12.3516 2.19537 12.2015 2.16448C12.0685 2.13715 11.9315 2.13715 11.7986 2.16448C11.6484 2.19537 11.5066 2.27415 11.223 2.43171L3.82297 6.54282C3.52345 6.70922 3.37369 6.79242 3.26463 6.91076C3.16816 7.01545 3.09515 7.13953 3.05048 7.27471C3 7.42751 3 7.59883 3 7.94147V16.0586C3 16.4012 3 16.5725 3.05048 16.7253C3.09515 16.8605 3.16816 16.9846 3.26463 17.0893C3.37369 17.2076 3.52345 17.2908 3.82297 17.4572L11.223 21.5683C11.5066 21.7259 11.6484 21.8047 11.7986 21.8356C11.9315 21.8629 12.0685 21.8629 12.2015 21.8356C12.3516 21.8047 12.4934 21.7259 12.777 21.5683L20.177 17.4572C20.4766 17.2908 20.6263 17.2076 20.7354 17.0893C20.8318 16.9846 20.9049 16.8605 20.9495 16.7253C21 16.5725 21 16.4012 21 16.0586Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <h1 style={{ color: '#000', fontSize: '18px', fontWeight: '600', lineHeight: '28px',fontfamily: "Clash Display" }}>budgeting intervals </h1>
                </div>
                <h3 style={{ color: '#000', fontSize: '18px', fontWeight: '500', lineHeight: '28px',fontfamily: "Clash Display", opacity: "0.5" }}>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</h3>

                <div className="subheading" style={{display:"flex"}}>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.5 16H8M8 16V3.5M8 16L3.5 20.5M3.5 8H16M16 8V20.5M16 8L20.5 3.5M21 15.3373V3.8C21 3.51997 21 3.37996 20.9455 3.273C20.8976 3.17892 20.8211 3.10243 20.727 3.0545C20.62 3 20.48 3 20.2 3H8.66274C8.41815 3 8.29586 3 8.18077 3.02763C8.07873 3.05213 7.98119 3.09253 7.89172 3.14736C7.7908 3.2092 7.70432 3.29568 7.53137 3.46863L3.46863 7.53137C3.29568 7.70432 3.2092 7.7908 3.14736 7.89172C3.09253 7.98119 3.05213 8.07873 3.02763 8.18077C3 8.29586 3 8.41815 3 8.66274V20.2C3 20.48 3 20.62 3.0545 20.727C3.10243 20.8211 3.17892 20.8976 3.273 20.9455C3.37996 21 3.51997 21 3.8 21H15.3373C15.5818 21 15.7041 21 15.8192 20.9724C15.9213 20.9479 16.0188 20.9075 16.1083 20.8526C16.2092 20.7908 16.2957 20.7043 16.4686 20.5314L20.5314 16.4686C20.7043 16.2957 20.7908 16.2092 20.8526 16.1083C20.9075 16.0188 20.9479 15.9213 20.9724 15.8192C21 15.7041 21 15.5818 21 15.3373Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <h1 style={{ color: '#000', fontSize: '18px', fontWeight: '600', lineHeight: '28px',fontfamily: "Clash Display" }}>budgeting intervals </h1>
                </div>

                <h3 style={{ color: '#000', fontSize: '18px', fontWeight: '500', lineHeight: '28px',fontfamily: "Clash Display", opacity: "0.5" }}>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</h3>
                </div>
            </div>
        </>
    )
}