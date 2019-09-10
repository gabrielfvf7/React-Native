import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const imgContatos = require('./../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    const { nClientes, tClientes, vContatos, tContatos, view } = styles;
    return ( 
    <View style={view} >
        <StatusBar backgroundColor='#61BD8C' />
        <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#61BD8C' />

        <View style={nClientes} >
          <Image source={imgContatos} />          
          <Text style={tClientes} >Contatos</Text>
        </View>

        <View style={vContatos} >
          <Text style={tContatos} >TEL: (11) 1234-5678</Text>
          <Text style={tContatos} >CEL: (11) 91234-1234</Text>
          <Text style={tContatos} >EMAIL: leonardopovilha@hotmail.com</Text>
        </View>        
    </View>
    );
  }
}

const styles = StyleSheet.create({

  view: {
    flex: 1,
    backgroundColor: 'white',
  },

  nClientes: {
    flexDirection: 'row',
    marginTop: 20,
  },

  tClientes: {
    color: '#61BD8C',
    fontSize: 30,
    paddingTop: 20,
    paddingLeft: 10,
  },

  vContatos: {
    marginTop: 20,
    padding: 20,
  },

  tContatos: {
    fontSize: 18,
  },
  
});
