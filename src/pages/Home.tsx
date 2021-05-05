import React from 'react'
import { Link } from 'react-router-dom'

/* ------------------------------- Componentes---------------- */
import Teste from '../components/teste'


import conteudo from '../conteudo.json'

const Home = () => {
    function showConsole() {
        console.log('oi')
    }

    return (
        <div>
            <Link to="/exemplo">
                <button onClick={showConsole}>oi</button>
            </Link>
            {conteudo.videos.map(item => {
                return (
                    <Teste nome="joao" />
                )
            })}
        </div>
    )
}

export default Home;