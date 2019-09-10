import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('./../imgs/logo.png');
const menuCliente = require('./../imgs/menu_cliente.png');
const menuContato = require('./../imgs/menu_contato.png');
const menuEmpresa = require('./../imgs/menu_empresa.png');
const menuServico = require('./../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
      const { logoS, menu, menuGrupo, imgS, view } = styles;
    return ( 
    <View style={view} >
        <StatusBar backgroundColor='#CCC' />
        <BarraNavegacao />

            <View style={logoS}>
                <Image source={logo} />
            </View>

            <View style={menu} >
                <View style={menuGrupo} >
                    <TouchableHighlight
                    underlayColor={'#B9C941'}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigator.push({ id: 'cliente' });
                    }}
                    >
                        <Image style={imgS} source={menuCliente} />
                    </TouchableHighlight>

                    <TouchableHighlight
                    underlayColor={'#61BD8C'}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigator.push({ id: 'contato' });
                    }}
                    >
                        <Image style={imgS} source={menuContato} />
                    </TouchableHighlight>
                </View>
                
                <View style={menuGrupo} >
                    <TouchableHighlight
                    underlayColor={'#EC7148'}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigator.push({ id: 'empresa' });
                    }}
                    >
                        <Image style={imgS} source={menuEmpresa} />
                    </TouchableHighlight>

                    <TouchableHighlight
                    underlayColor={'#19D1C8'}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigator.push({ id: 'servico' });
                    }}
                    >
                        <Image style={imgS} source={menuServico} />
                    </TouchableHighlight>
                </View>
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

    logoS: {
        marginTop: 30,
        alignItems: 'center',
    },
    
    menu: {
        alignItems: 'center',
    },

    menuGrupo: {
        flexDirection: 'row',
    },

    imgS: {
        margin: 15,
    },
  
});
