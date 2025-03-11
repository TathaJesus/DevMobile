import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class OlaPerfilClasse extends Component {
  render() {
    const { nome, endereco, telefone } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Olá, {nome}!</Text>
        <Text style={styles.text}>Endereço: {endereco}</Text>
        <Text style={styles.text}>Telefone: {telefone}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(90, 30, 80, 0.5)',
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});

export default OlaPerfilClasse;
