import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars, faHome, faCompass, faBoxes, faHeadphones, faSwatchbook } from "@fortawesome/free-solid-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

import "../styles/components/menuBar.css"

export default function MenuBar() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <div className="menuBar">
                <div className="iconBars">
                    <FontAwesomeIcon className="menuIcons" icon={faBars} onClick={ () => setShowMenu(!showMenu) } />
                </div>
                <div className="menuBarIcons">
                    <FontAwesomeIcon className="menuIcons" icon={faHome} />
                    <div className="txt">Inicio</div>
                </div>
                <div className="menuBarIcons">
                    <FontAwesomeIcon className="menuIcons" icon={faCompass} />
                    <div className="txt">Explorar</div>
                </div>
                <div className="menuBarIcons">
                    <FontAwesomeIcon className="menuIcons" icon={faBoxes} />
                    <div className="txt">Inscrições</div>
                </div>
                <div className="menuBarIcons">
                    <FontAwesomeIcon className="menuIcons" icon={faYoutube} />
                    <div className="txt">Originais</div>
                </div>
                <div className="menuBarIcons">
                    <FontAwesomeIcon className="menuIcons" icon={faHeadphones} />
                    <div className="txt">YouTube Music</div>
                </div>
                <div className="menuBarIcons">
                    <FontAwesomeIcon className="menuIcons" icon={faSwatchbook} />
                    <div className="txt">Detalhes</div>
                </div>





            </div>
        </div>
    )
}
