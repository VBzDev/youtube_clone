/* eslint-disable */
import React from 'react';
import '../styles/components/perfilCard.css'
import imgConta from "../public/images/lucasinutil.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign, faCog, faUsers, faAngleRight, faSignOutAlt, faSun, faOm, faGlobe, faShieldAlt, faQuestionCircle, faCommentAlt, faKeyboard } from '@fortawesome/free-solid-svg-icons';

export default function PerfilCard() {
    return (
        <div className="perfilCardContainer">
            <div className="perfilCardHeader">
                <img className="imgConta" src={ imgConta } alt="Imagem da conta" style={{ marginRight: '16px', fontWeight: 800 }} />
                <div className="perfilCardHeaderText">
                    <p>jonka susaki</p>
                    <p style={{ fontSize: '15px', color: '#3EA5FD' }}>Gerenciar sua Conta do Google</p>
                </div>
            </div>
            <div className="hr" />

            <div className="perfilCardBody">
                <ul>
                    <li className="li">
                        <div>
                            <FontAwesomeIcon icon={faUser} className="perfilCardBodyIcon" />
                            Seu canal

                        </div>
                    </li>
                    <li className="li">
                        <div>
                            <FontAwesomeIcon icon={faDollarSign} className="perfilCardBodyIcon" />
                            Compras e assinaturas

                        </div>
                    </li>
                    <li className="li">
                        <div>
                            <FontAwesomeIcon icon={faCog} className="perfilCardBodyIcon" />
                            Youtube Studio

                        </div>
                    </li>
                    <li className="li">
                        <div>
                            <FontAwesomeIcon icon={faUsers} className="perfilCardBodyIcon" />
                            Alternar conta
                        </div>
                        <FontAwesomeIcon icon={faAngleRight} className="perfilCardAngle" />
                    </li>
                    <li className="li">
                        <div>
                            <FontAwesomeIcon icon={faSignOutAlt} className="perfilCardBodyIcon" />
                            Sair

                        </div>
                    </li>
                </ul>

                <div className="hr" />

                <ul>
                    <li className="li">
                        <div style={{ maxWidth: '80%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <FontAwesomeIcon icon={faSun} className="perfilCardBodyIcon" />
                            Aparência: tema do dispositivo
                        </div>
                        <FontAwesomeIcon icon={faAngleRight} className="perfilCardAngle" />
                    </li>
                    <li className="li">
                        <div>
                            <FontAwesomeIcon icon={faOm} className="perfilCardBodyIcon" />
                            Idioma: Português
                        </div>
                        <FontAwesomeIcon icon={faAngleRight} className="perfilCardAngle" />
                    </li>
                    <li className="li">
                        <div>
                            <FontAwesomeIcon icon={faGlobe} className="perfilCardBodyIcon" />
                            Local: Brasil
                        </div>
                        <FontAwesomeIcon icon={faAngleRight} className="perfilCardAngle" />
                    </li>
                    <li className="li">
                        <div>
                            <FontAwesomeIcon icon={faCog} className="perfilCardBodyIcon" />
                            Configurações
                        </div>
                    </li>
                    <li className="li">
                        <div>
                            <FontAwesomeIcon icon={faShieldAlt} className="perfilCardBodyIcon" />
                            Seus dados no YouTube
                        </div>
                    </li>
                    <li className="li">
                        <div>
                            <FontAwesomeIcon icon={faCommentAlt} className="perfilCardBodyIcon" />
                            Enviar feedback
                        </div>
                    </li>
                    <li className="li">
                        <div>
                            <FontAwesomeIcon icon={faKeyboard} className="perfilCardBodyIcon" />
                            Atalhos do teclado
                        </div>
                    </li>
                </ul>

                <div className="hr"></div>

                <div className="li">
                    Modo restrito: desativado
                </div>
            </div>
        </div>
    )
}