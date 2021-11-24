import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {getMusicData} from './api-client'
import ArtistList from './ArtistList';

export default class HomeView extends Component {
  state = {
    artists: null
  }

  componentDidMount() {
    getMusicData().then(data => this.setState({artists: data}))
  }

  render() {
    const artists = this.state.artists

    return (
      <View style={styles.container}>
        {artists && <ArtistList artists={artists} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
