import * as React from 'react';
import { View, Button } from 'react-native';

export default function({navigation}) {
    return (
      <View>

        <Button
          title="MULTI - Mega Sena"
          onPress={() => {
            navigation.push('Mega', {
              numero: 6,
            });
          }}
        />

        <Button
          title="MULTI - Inverter"
          onPress={() => {
            navigation.navigate('Inverter', {
              texto: 'Multi Componentes',
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