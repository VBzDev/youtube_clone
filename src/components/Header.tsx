import react from 'react';
import iconLogo from "../public/images/youtube-logo-7-2.png";
import Menu from "./icons/menu"
import iconSearch from "../public/images/search.png";
import { faVideo, faBell, faTh } from "@fortawesome/free-solid-svg-icons"
import imgConta from "../public/images/lucasinutil.png"



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <FontAwesomeIcon className="rightIcons" icon={faVideo} />
                <FontAwesomeIcon className="rightIcons" icon={faTh} />
                <FontAwesomeIcon className="rightIcons" icon={faBell} />
                <img className="imgConta" src={ imgConta } alt="Imagem da conta" />
            </div>
        </div>
    )
}
