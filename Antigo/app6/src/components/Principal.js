import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobreJogo = require('../imgs/sobre_jogo.png');
const btnOutrosJogos = require('../imgs/outros_jogos.png');

export default class Principal extends Component {
  render() {
    const { principal, apresentacao, rodape } = styles;
    return (
      <View style={principal} >

        <View style={apresentacao} >
          <Image source={logo} />
          <TouchableHighlight
            onPress={() => { Actions.resultado(); }}
          >
            <Image source={btnJogar} />
          </TouchableHighlight>
        </View>

        <View style={rodape} >
          <TouchableHighlight
            onPress={() => { Actions.sobrejogo(); }}
          >
            <Image source={btnSobreJogo} />
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => { Actions.outrosjogos(); }}
          >
            <Image source={btnOutrosJogos} />
          </TouchableHighlight>
        </View>
      
      </View>      
    );
  }
}

const styles = StyleSheet.create({

  principal: {
    backgroundColor: '#61BD8C',
    flex: 1,
  },

  apresentacao: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
  
});
