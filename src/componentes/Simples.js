import React, { Component } from 'react';
import {Text} from 'react-native';

import Padrao from '../estilo/Padrao';

//TIPOS DE COMPONENTES FUNCIONAIS (Componentes baseados em funções)

/*
export default function(props){
    return <Text>Simples Component {props.texto}</Text>
}
*/

//ARROW FUCTIONS

/*
export default (props) =>{
    return <Text>Arrow: {props.texto}</Text>
}
*/

/*
export default props =>{
    return <Text>Arrow: {props.texto}</Text>
}
*/

export default props => <Text style={[Padrao.ex]}>Arrow: {props.texto}</Text>
