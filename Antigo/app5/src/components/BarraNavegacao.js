import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const voltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    const { barraTitulo, titulo } = styles;

    if (this.props.voltar) {
      return (
        <View style={[barraTitulo, { backgroundColor: this.props.corFundo }]}>
          <TouchableHighlight
          underlayColor={this.props.corFundo}
          activeOpacity={0.5} 
           onPress={() => {
             this.props.navigator.pop();
           }}
          >
            <Image source={voltar} />
          </TouchableHighlight>
          <Text style={titulo}>ATM Consultoria</Text>
        </View>
      );
    }
    return (
      <View style={barraTitulo}>
        <Text style={titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({  

  barraTitulo: {
    flexDirection: 'row',
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
  },

  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  
});
