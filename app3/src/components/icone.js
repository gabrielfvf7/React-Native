import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class Icone extends Component {
    render() {
      if (this.props.escolha === 'Pedra') {
        return (
          <View style={styles.palco} >
            <Text>{this.props.jogador}</Text>
            <Image source={require('../../imgs/pedra.png')} />
          </View>
        );
      } else if (this.props.escolha === 'Papel') {
        return (
          <View style={styles.palco} >
            <Text>{this.props.jogador}</Text>
            <Image source={require('../../imgs/papel.png')} />
          </View>
        );
      } else if (this.props.escolha === 'Tesoura') {
        return (
          <View style={styles.palco} >
            <Text>{this.props.jogador}</Text>
            <Image source={require('../../imgs/tesoura.png')} />
          </View>
        );
      } return false; 
    }
  }

  const styles = StyleSheet.create({
  
    palco: {
      alignItems: 'center',
      padding: 10,
    },
    
  });

  export default Icone;
