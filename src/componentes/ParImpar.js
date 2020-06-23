import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Padrao from '../estilo/Padrao';

function parImpar(numero){
    /*
    if(numero % 2 ==0){
        return <Text style={Padrao.ex}>Par</Text>
    }else{
        return <Text style={Padrao.ex}>Impar</Text>
    }
    */
    const valor = numero % 2 == 0 ? 'Par' : 'Impar';
    return <Text style={Padrao.ex}> {valor} </Text>
}

export default props =>
    <View>
        {parImpar(props.numero)}
        {
            //props.numero % 2 == 0 ? <Text style={Padrao.ex}>Par</Text> : <Text style={Padrao.ex}>Impar</Text>

        }
    </View>