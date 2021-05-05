import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home'
import Exemplo from './pages/Exemplo'


export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/home" component={Home} />
            <Route path="/exemplo" component={Exemplo} />
        </BrowserRouter>
    )
}