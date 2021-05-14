<<<<<<< HEAD
import React, { useState } from 'react';
import iconLogo from "../public/images/youtube-logo-7-2.png";
import iconSearch from "../public/images/search.png";
import { faVideo, faBell, faTh } from "@fortawesome/free-solid-svg-icons"
=======
/* eslint-disable */
import React, { useState } from 'react';
import iconLogo from "../public/images/youtube-logo-7-2.png";
import Menu from "./icons/menu"
import { faVideo, faBell, faTh, faSearch } from "@fortawesome/free-solid-svg-icons"
>>>>>>> 969c53c92ceb6a74e832a7e24a0ad5e5d2c0ccb7
import imgConta from "../public/images/lucasinutil.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/components/header.css"
import PerfilCard from '../components/PerfilCard'

export default function Headers() {



    return (
        <div className="container">
            <div className="leftHeader">
                <img className="iconLogo" src={iconLogo} />
                Youtube
            </div>

            <div className="centerHeader">
                <input placeholder="Pesquisar" className="search"type="text"/>
                <button className="buttonSearch" >
                    <FontAwesomeIcon className="iconSearch" icon={faSearch} />
                </button>
            </div>

            <div className="rightHeader">
                <FontAwesomeIcon className="rightIcons" icon={faVideo} />
                <FontAwesomeIcon className="rightIcons" icon={faTh} />
                <FontAwesomeIcon className="rightIcons" icon={faBell} />
                <img className="imgConta" src={ imgConta } alt="Imagem da conta" onClick={() => setShowPerfilCard(!showPerfilCard)} />
            </div>

            {showPerfilCard && <PerfilCard />}
        </div>
    )
}
