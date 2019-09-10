import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgEmpresa = require('./../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    const { nClientes, tClientes, vCliente, tCliente, view } = styles;
    return ( 
    <View style={view} >
        <StatusBar backgroundColor='#EC7148' />
        <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#EC7148' />

        <View style={nClientes} >
          <Image source={imgEmpresa} />          
          <Text style={tClientes} >A Empresa</Text>
        </View>

        <View style={vCliente} >
          <Text style={tCliente} >Lore impsum dolorem aaaaaaaaaaaaaaaaaaaaaaa</Text>
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
    color: '#EC7148',
    fontSize: 30,
    paddingTop: 20,
    paddingLeft: 10,
  },

  vCliente: {
    padding: 20,
    marginTop: 10,
  },

  tCliente: {
    fontSize: 18,
    marginLeft: 5,
  },
  
});
