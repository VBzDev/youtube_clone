import React from 'react';


interface Props {
    nome: string
}

export default function Teste(props: Props) {
    return <h1>{props.nome}</h1>
}