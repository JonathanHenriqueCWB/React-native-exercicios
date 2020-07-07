import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './Menu';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';

//Esse import é para classes com mais de um componente, onde o mesmo não é importado como default
import {Inverter, MegaSena} from './componentes/Multi'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />    
        <Stack.Screen name="Simples" component={Simples} />
        <Stack.Screen name="ParImpar" component={ParImpar} />
        
        <Stack.Screen name="Inverter" component={Inverter} />
        <Stack.Screen name="Mega" component={MegaSena} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

/**
 * O que define qual será a primeira tela será a primeira rota carregar
 *  será a primeira stack.Screen, ou seja, a primeira rota a ser comfigurada, 
 * sendo que essa obrigatoriamente deverá receber o argumento 
 * navigatio: {navigation} caso tenha mais rotas
 */