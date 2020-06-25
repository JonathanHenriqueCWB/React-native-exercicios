import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Multi';

export default class App extends Component{

  //Funão responsavel por renderiza uma tela
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.f20}>App Component!</Text>
        <Simples texto='Propriedade'></Simples>
        <ParImpar numero='11'></ParImpar>
        <Inverter texto='React Native'></Inverter>
        <MegaSena numero={9}></MegaSena>
      </View>
    );
  }

}

//Estilização
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  f20: {
    fontSize: 20
  }

});