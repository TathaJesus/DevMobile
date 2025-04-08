// Tela de recuperação de senha 
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TelaRecup = ({ navigation }) => {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Text>Digite seu nome de usuário:</Text>
      <TextInput style={styles.input} onChangeText={setUsername} />
      <Text style={styles.output}>Senha para {username}: 1234</Text>
      <Button title="Voltar ao Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TelaRecup;

// Estilização da tela
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor:'rgb(194, 194, 210)' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  output: { marginVertical: 10, fontWeight: 'bold' },
});
