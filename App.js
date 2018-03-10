/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Repo from './components/Repo';

type Props = {};
export default class App extends Component<Props> {
state = {
    repos: [
      {
        id: 1,
        thumbnail: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
        title: 'Repo 1',
        author: 'João',
      },
      {
        id: 2,
        thumbnail: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
        title: 'Repo 2',
        author: 'Lucas',
      },
    ],
};

  render() { //todo componente precisa de um render, que retorna jsx, tipo um xml/html
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Repositorios</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map(repo => <Repo key={repo.id} style={styles.repo} data={repo} />) }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({ //editar os estilos, igual css
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70: 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  repoList: {
    padding: 20,
  },

  repo: {
    padding: 20,
    backgroundColor: '#FFF',
    height: 120,
    marginBottom: 20,
    borderRadius: 5,
  }

});
