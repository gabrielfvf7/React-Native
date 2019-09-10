import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

    constructor(props) {
        super(props);

        this.state = { listaItens: [] };
    }

    componentWillMount() {
        //http request:
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
          .then(response => { this.setState({ listaItens: response.data }); })
          .catch(() => { console.log('Erro ao recuperar os dados'); });
        }

  render() {
      const { fundo } = styles;
    return (      
        <ScrollView style={fundo}>
            { this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />)) }       
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

    fundo: {
        backgroundColor: '#69D2E7',
    }
  
});
