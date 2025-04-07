import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TelaEditPeca = ({ route, navigation, stock, setStock }) => {
  const { piece } = route.params;
  const [quantity, setQuantity] = useState(String(piece.quantity));

  const handleSave = () => {
    const updatedStock = stock.map((p) =>
      p.code === piece.code ? { ...p, quantity: Number(quantity) } : p
    );
    setStock(updatedStock);
    navigation.goBack();
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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor:'rgb(194, 194, 210)' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
});
