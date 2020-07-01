import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Padrao from '../estilo/Padrao';

//Arrow function padão que recebera o argumento no route
export default ({ route }) => {
    const { numero } = route.params;
    return (
        <View style={Padrao.ex}>
            {parImpar(numero)}
        </View>
    );
}

//Função js, verefica se e par ou impar e retora JSX
function parImpar(valor){
    const v = (valor % 2 == 0) ? 'Par' : 'Impar';
    return <Text>{JSON.stringify(v)}</Text>
}