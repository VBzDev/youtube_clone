import react from 'react';
import logoImg from "../public/images/youtube-logo-7-2.png";
import Menu from "./icons/menu"

import "../styles/components/header.css"

export default function headers() {
    return (
        <div className="container">
            <div className="logo">
                <Menu/>
                <img className="logoImg" src={logoImg} />
                Youtube
            </div>

            <div className="pesquisa">
                pesquisa
            </div>

            <div className="conta">
                conta
            </div>
        </div>
    )
}
