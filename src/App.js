import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './Menu';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import Multi from './componentes/Multi';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />    
        <Stack.Screen name="Simples" component={Simples} />
        <Stack.Screen name="ParImpar" component={ParImpar} />
        <Stack.Screen name="Multi" component={Multi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

/**
 * O que define qual será a primeira rota a carregar será a primeira
 * stack.Screen, ou seja, a primeira rota a ser comfigurada, sendo que
 * essa obrigatoriamente deverá receber o argumento navigatio: {navigation}
 */