import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

/* ------------------------------- Componentes---------------- */
import Teste from '../components/teste'

import conteudo from '../conteudo.json'

const Home = () => {
    function showConsole() {
        console.log('oi')
    }

    return (
        <div className="header">
            <Header />
        </div>
    )
}

export default Home;
