import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgCliente = require('./../imgs/detalhe_cliente.png');
const cliente1 = require('./../imgs/cliente1.png');
const cliente2 = require('./../imgs/cliente2.png');

export default class CenaCliente extends Component {
  render() {
    const { nClientes, tClientes, vCliente, tCliente, view } = styles;
    return ( 
    <View style={view} >
        <StatusBar backgroundColor='#B9C941' />
        <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#B9C941' />

        <View style={nClientes} >
          <Image source={imgCliente} />          
          <Text style={tClientes} >Nossos Clientes</Text>
        </View>

        <View style={vCliente} >
          <Image source={cliente1} />
          <Text style={tCliente} >Lorem ipsum dolorem</Text>
        </View>

        <View style={vCliente} >
          <Image source={cliente2} />
          <Text style={tCliente} >Lorem ipsum dolorem</Text>
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
    color: '#B9C941',
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

