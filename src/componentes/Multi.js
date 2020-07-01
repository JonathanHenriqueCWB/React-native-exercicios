import * as React from 'react';
import { View, Text } from 'react-native';

import Padrao from '../estilo/Padrao';


export default ({ route }) => {

    //Converte o Json em javascript
    const { texto } = route.params;

    return (
        <View style={Padrao.ex}>
            <Text> { texto } </Text>
        </View>
    );
}