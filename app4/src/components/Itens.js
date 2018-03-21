import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Itens extends Component {

  render() {
      const { view, img, titulo, valor, detalhes, vImg, vTxt } = styles;
    return (            
        <View style={view}>   
            <View style={vImg}>         
                <Image style={img} source={{ uri: this.props.item.foto }} />
            </View>
            <View style={vTxt}>
                <Text style={titulo}>{this.props.item.titulo}</Text>
                <Text style={valor}>R$ {this.props.item.valor}</Text>
                <Text style={detalhes}>Local: {this.props.item.local_anuncio}</Text>
                <Text style={detalhes}>Data: {this.props.item.data_publicacao}</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    view: {
        backgroundColor: '#FFFFFD',
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
    },

    img: {
        height: 100,
        width: 100,
    },

    vImg: {
        width: 102,
        height: 102,
    },

    vTxt: {
        flex: 1,
        paddingLeft: 20,
    },

    titulo: {
        fontSize: 18,
        color: 'blue',
        paddingBottom: 5,
    },

    valor: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
    },

    detalhes: {
        fontSize: 14,
    },
  
});
