import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TelaAddPeca = ({ navigation, stock, setStock }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [code, setCode] = useState('');

  const handleAdd = () => {
    if (!name || !quantity || !code) return alert('Preencha todos os campos');
    setStock([...stock, { name, quantity: Number(quantity), code }]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" style={styles.input} onChangeText={setName} />
      <TextInput placeholder="Quantidade" style={styles.input} onChangeText={setQuantity} keyboardType="numeric" />
      <TextInput placeholder="Código" style={styles.input} onChangeText={setCode} />
      <Button title="Salvar" onPress={handleAdd} />
    </View>
  );
};

export default TelaAddPeca;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor:'rgb(194, 194, 210)' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
});
