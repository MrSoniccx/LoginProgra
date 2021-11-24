import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      contra: '',
      usuarioError: undefined,
      contraError: undefined,
    };
  }
  getLogin = () => {
    const { usuario, contra } = this.state;
    const usuario_valido = usuario !== '';
    const contra_valida = contra !== '';
    this.setState({
      ...this.state,
      usuarioError: usuario_valido ? undefined : 'El usuario es necesario',
      contraError: contra_valida
        ? undefined
        : 'La contraseña es necesaria',
    });
    if (usuario_valido && contra_valida) {
      Actions.home({ usuario: this.state.usuario });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.icono}
          source={require('./blog-wp-login-1200x400.png')}
        />
        <View style={styles.cajaTexto}>
          <Text>Usuario</Text>
          <TextInput
            style={styles.input}
            value={this.state.usuario}
            onChangeText={(text) =>
              this.setState({ ...this.state, usuario: text })
            }
          />
          {this.state.usuarioError && (
            <Text style={styles.error}>{this.state.usuarioError}</Text>
          )}
        </View>
        <View style={styles.cajaTexto}>
          <Text>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={this.state.contra}
            onChangeText={(text) =>
              this.setState({ ...this.state, contra: text })
            }
          />
          {this.state.contraError && (
            <Text style={styles.error}>{this.state.contraError}</Text>
          )}
        </View>
        {this.state.errorMessage && (
          <Text style={styles.error}>{this.state.errorMessage}</Text>
        )}
        <Button
          onPress={this.getLogin}
          title='Iniciar sesión'
          color='#6B0197'
          accessibilityLabel='Login button'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaTexto: {
    marginBottom: 10,
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  input: {
    borderRadius: 5,
    padding: 10,
    height: 40,
    width: '100%',
    borderColor: '#085CE0',
    borderWidth: 1,
  },
  icono: {
    width: 300,
    height: 100,
  },
  error: {
    marginBottom: 10,
    marginTop: 10,
    color: 'red',
  },
});
