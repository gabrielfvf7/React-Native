import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ListaItens from './src/components/ListaItens';

export default class App extends Component {  

  render() {
    return (  
      <View>    
        <ListaItens />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
