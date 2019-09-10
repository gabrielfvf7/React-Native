import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgServico = require('./../imgs/detalhe_servico.png');

export default class CenaServico extends Component {
  render() {
    const { nClientes, tClientes, vCliente, tCliente, view } = styles;
    return ( 
    <View style={view} >
        <StatusBar backgroundColor='#19D1C8' />
        <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#19D1C8' />

        <View style={nClientes} >
          <Image source={imgServico} />          
          <Text style={tClientes} >Nossos Clientes</Text>
        </View>

        <View style={vCliente} >
          <Text style={tCliente} >-Consultoria</Text>
          <Text style={tCliente} >-Processos</Text>
          <Text style={tCliente} >-Acompanhamento de Projetos</Text>
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
    color: '#19D1C8',
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
