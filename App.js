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
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

import Repo from './components/Repo';
import NewRepoModal from './components/NewRepoModal';

type Props = {};
export default class App extends Component<Props> {
state = {
    modalVisible: false,
    repos: [],
};

async componentDidMount() {
  const repos = JSON.parse(await AsyncStorage.getItem('repositorios')) || [];

  this.setState({ repos });
};

_addRepository = async (NewRepoText) => {
    const repoCall = await fetch(`http://api.github.com/repos/${NewRepoText}`);
    const response = await repoCall.json();

    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login,
    };

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository,
      ],
    });

    await AsyncStorage.setItem('repositorios', JSON.stringify(this.state.repos));

};

  render() { //todo componente precisa de um render, que retorna jsx, tipo um xml/html
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Repositorios</Text>
          <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map(repo => <Repo key={repo.id} style={styles.repo} data={repo} />) }
        </ScrollView>

        <NewRepoModal
          onCancel={() => this.setState({modalVisible: false})}
          visible={this.state.modalVisible}
          onAdd={this._addRepository}
        />
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
