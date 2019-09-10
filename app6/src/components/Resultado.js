import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {
    constructor(props) {
        super(props);
        
        this.state = { resultado: '' };
    }

    componentWillMount() {
        const randNum = Math.floor(Math.random() * 2);
        let caraOuCoroa = '';

        if (randNum === 0) {
            caraOuCoroa = 'cara';
        } else {
            caraOuCoroa = 'coroa';
        }

        this.setState({ resultado: caraOuCoroa });
    }

  render() {
    const { resultado } = styles;

    if (this.state.resultado === 'cara') {
        return (
            <View style={resultado} >
                <Image source={cara} />
            </View>
        );  
    }
    return (
        <View style={resultado} >
            <Image source={coroa} />
        </View>
    );
  }
}

const styles = StyleSheet.create({

    resultado: {
        flex: 1,
        backgroundColor: '#61BD8C',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
});
