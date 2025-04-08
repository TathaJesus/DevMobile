// Tela para editar a quantidade de uma peça existente
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TelaEditPeca = ({ route, navigation, stock, setStock }) => {
  const { piece } = route.params; // Recebe a peça selecionada
  const [quantity, setQuantity] = useState(String(piece.quantity));

  const handleSave = () => {
    const updatedStock = stock.map((p) =>
      p.code === piece.code ? { ...p, quantity: Number(quantity) } : p
    );
    setStock(updatedStock); // Atualiza o estoque
    navigation.goBack(); // Retorna à tela anterior
  };

  return (
    <View style={styles.container}>
      <Text>Nome: {piece.name}</Text>
      <Text>Código: {piece.code}</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

export default TelaEditPeca;

// Estilo da tela
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor:'rgb(194, 194, 210)' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
});
