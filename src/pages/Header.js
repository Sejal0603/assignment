import React from "react";
import Logo from '../assets/Logo.png';
import {Nav} from 'react-bootstrap'
const menuItem=[
    {
        "text":"Home",
        "url":"#homePage"

    },
    {
        "text":"About Us",
        "url":"#home"
    },
    {
        "text":"Pricing",
        "url":"#home"
    },
    {
        "text":"Features",
        "url":"#features"
    },
    {
        "text":"Download",
        "url":"#download"
    }
]
export const Header=()=>{
    return(
        <>

            <div className="header">
                <div  className="navbar">
                <nav className="">
                    <img src={Logo} alt="Logo" className="logo"/>
                    
                    <div className="nav-links">
                       
                        {
                            menuItem.map((item, i) => {
                                return (
                                    <li>
                                    <Nav.Link href={item?.url}>
                                        <span>{item?.text}</span>
                                    </Nav.Link>
                                    </li>
                                )
                            })
                        }
                        

                    </div>

                    <div className="button">
                        <div className="button-text">
                             Download
                        </div>
                    </div>

                </nav>
</div>
            </div>
        
        
        </>
    )
}