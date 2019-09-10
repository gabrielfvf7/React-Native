import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

export default class App extends Component<Props> {  

  constructor(props) {
    super(props);

    this.state = { escolhaUser: '', escolhaPC: '', result: '' };
  }

  jokenpo(escolhaUser) {
    const randN = Math.floor(Math.random() * 3);
    let escolhaComputador = '';
    let escolhaUsuario = '';
    let resultado = '';

    switch (escolhaUser) {
      case 0: escolhaUsuario = 'Pedra';
        break;
      case 1: escolhaUsuario = 'Papel';
        break;
      case 2: escolhaUsuario = 'Tesoura';
        break;
      default: break;
    }
    switch (randN) {
      case 0: escolhaComputador = 'Pedra';
        break;
      case 1: escolhaComputador = 'Papel';
        break;
      case 2: escolhaComputador = 'Tesoura';
        break;
      default: break;
    }    

    if (escolhaUser === randN) {
      resultado = 'Empate!';
    } else if (escolhaUser === (randN + 1)) {
      resultado = 'Você ganhou!';
    } else if (escolhaUser === (randN - 1)) {
      resultado = 'Você perdeu!';
    } else if (escolhaUser === (randN + 2)) {
      resultado = 'Você perdeu!';
    } else if (escolhaUser === (randN - 2)) {
      resultado = 'Você ganhou!';
    }    
    this.setState({
      escolhaUser: escolhaUsuario,
      escolhaPC: escolhaComputador,
      result: resultado
    }); 
  }

  render() {
    const { palco, txtResultado, painelAcoes, btnEscolha } = styles;

    return (      
      <View>
        <StatusBar hidden />
        <Topo />

        <View style={painelAcoes} >
          <View style={btnEscolha} >
            <Button title="pedra" onPress={() => { this.jokenpo(0); }} />
          </View>

          <View style={btnEscolha} >
            <Button title="papel" onPress={() => { this.jokenpo(1); }} />
          </View>
          
          <View style={btnEscolha} >
            <Button title="tesoura" onPress={() => { this.jokenpo(2); }} />
            </View>
        </View>

        <View style={palco} >
          <Text style={txtResultado} > {this.state.result} </Text> 

          <Icone escolha={this.state.escolhaPC} jogador='Computador' />

          <Icone escolha={this.state.escolhaUser} jogador='Você' />               
        </View>       
      </View>
    );
  }
}

const styles = StyleSheet.create({

  btnEscolha: {
    width: 90,
  },

  painelAcoes: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  palco: {
    alignItems: 'center',
    padding: 10,
  },

  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 50,
  },
  
});
