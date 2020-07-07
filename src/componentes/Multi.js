import * as React from 'react';
import { View, Text } from 'react-native';

import Padrao from '../estilo/Padrao';

//Classes não retornadas como padrão deverá ser importada entre {} from 'NomeClasse'
//Nesse caso import {Inverter} from '../caminho/Multi'
//Casso retirar o export da função obrigatoriamente deverá ser exportado abaixo
export const Inverter = ({route}) => {
    const {texto} = route.params;
    const inverter = texto.split('').reverse().join('');
    return (
        <View style={Padrao.ex}>
            <Text> {JSON.stringify(inverter)} </Text>
        </View>
    );
}
//Casso queira exportar como default
//export default Inverter


export const MegaSena = ({route}) =>{
    const{numero} = route.params;
    const [minimo, maximo] = [1, 60];
    const numeros = Array(numero || 6).fill(0);

    for(let i=0; i<numeros.length; i++){
        let novo = 0;
        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (maximo - minimo+1)) + minimo;
        }
        numeros[i] = novo;
    }
    numeros.sort((a,b) => a-b);
    return <Text style={Padrao.ex}>{JSON.stringify(numeros)}</Text>
}


