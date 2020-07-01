import * as React from 'react';
import { View, Button } from 'react-native';

//Será o primeiro componente a ser renderizado por conter o navigation
export default function({navigation}) {
    return (
      <View>
        <Button
          title="Multi Componentes"
          onPress={() => {
            navigation.navigate('Multi', {
              texto: 'vai tomar no cu',
            });
          }}
        />
        <Button
          title="Componente Par ou Impar"
          onPress={() => {
            navigation.navigate('ParImpar', {
              numero: 21,
            });
          }}
        />
        <Button
          title="Componente Simples"
          onPress={() => {
            navigation.navigate('Simples', {
              texto: 'Texto passado em formato de JSON',
            });
          }}
        />        
      </View>
    );
  }