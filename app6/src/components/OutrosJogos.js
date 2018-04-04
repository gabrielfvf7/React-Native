import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export default class OutrosJogos extends Component{
  render() {
    const { texto } = styles;
    return (
        <Text style={texto} >
            Aqui contém informações sobre outros jogos
        </Text>
     
    );
  }
}

const styles = StyleSheet.create({

    texto: {
        flex: 1,
        backgroundColor: '#61BD8C',
    },
  
});
