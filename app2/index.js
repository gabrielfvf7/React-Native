import React from 'react';
import { AppRegistry, View, Image, TouchableOpacity, Text, Alert } from 'react-native';

const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 7,
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

const gerarFrase = () => {
  const randNum = Math.floor(Math.random() * 5);

  const frases = [
   'Hakuna Matata',
   'Faça ou não faça, tentativa não há',
   'Que a força esteja com você',
   'Hello World',
   'Insira frase criativa aqui'];

  Alert.alert(frases[randNum]);  
};

const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal} >

      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity 
      onPress={gerarFrase}
      style={botao}
      >
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>

    </View>
  
  );
};

AppRegistry.registerComponent('app2', () => App);
