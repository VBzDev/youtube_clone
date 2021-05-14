import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import MenuBar from '../components/MenuBar'
import "../styles/pages/Home.css"

/* ------------------------------- Componentes---------------- */
import Teste from '../components/teste'

import conteudo from '../conteudo.json'

const Home = () => {
    function showConsole() {
        console.log('oi')
    }

    return (
        <div className="homePage">

            <Header />
            <MenuBar />

        </div>
    )
}

export default Home;
