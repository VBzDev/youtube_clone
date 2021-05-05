import react from 'react';
import iconLogo from "../public/images/youtube-logo-7-2.png";
import Menu from "./icons/menu"
import iconSearch from "../public/images/search.png";

import "../styles/components/header.css"

export default function headers() {
    return (
        <div className="container">
            <div className="leftHeader">
                <Menu/>
                <img className="iconLogo" src={iconLogo} />
                Youtube
            </div>

            <div className="centerHeader">
                <input placeholder="Pesquisar" className="search"type="text"/>
                <button className="buttonSearch" >
                    <img className="iconSearch" src={iconSearch} />
                </button>
            </div>

            <div className="rightHeader">
                conta
            </div>
        </div>
    )
}
