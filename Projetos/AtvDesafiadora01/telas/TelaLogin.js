// Tela de login que valida usuário e senha
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const TelaLogin = ({ navigation, setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const USER = 'admin'; // Usuário padrão
  const PASS = '1234';  // Senha padrão

  const handleLogin = () => {
    if (username === USER && password === PASS) {
      setAuthenticated(true); // Autentica o usuário se as credenciais estiverem corretas
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    //View da tela
    <View style={styles.container}>
        <Text>Usuário</Text>
        <TextInput style={styles.input} onChangeText={setUsername} />
        <Text>Senha</Text>
        <TextInput style={styles.input} secureTextEntry onChangeText={setPassword} />
        <Button title="Entrar" onPress={handleLogin} />
        <Text onPress={() => navigation.navigate('Recuperar Senha')} style={styles.link}>
            Esqueci minha senha
        </Text>
    </View>
  );
};

export default TelaLogin;

// Estilização da tela de login
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor:'rgb(194, 194, 210)' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  link: { color: 'black', marginTop: 10 },
});
