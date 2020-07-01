import * as React from 'react';
import {Text} from 'react-native';

import Padrao from '../estilo/Padrao';

/*
export default function( {route} ){
  //Ao adicionar o parametro automaticamente já é convertido para js
  const { texto } = route.params;
  return <Text style={Padrao.ex}>{JSON.stringify(texto)}</Text>
}
*/

/*
export default function({ route }) {
  //Ao adicionar o parametro automaticamente já é convertido para js
  const { itemId } = route.params;
  const { otherParam } = route.params;

  //Antes de retornar e necessario converter novamente para Json
  return (
    <View  style={Padrao.ex}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    </View>
  );
}
 */
 
//ARROW Function
export default ({ route }) => {
  //Ao adicionar o parametro automaticamente já é convertido para js
  const { texto } = route.params;
  return <Text style={Padrao.ex}>Arrow function: {JSON.stringify(texto)}</Text>
}