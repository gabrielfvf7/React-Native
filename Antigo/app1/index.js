import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumRand = () => (alert(Math.floor(Math.random() * 10)));

const App = () => (
    <View>
    <Text>Meu primeiro APP</Text>
    <Button
      title="Descrição: Gera numero aleatorio"
      onPress={geraNumRand}
    />
    </View>
  );

AppRegistry.registerComponent('app1', () => App);
