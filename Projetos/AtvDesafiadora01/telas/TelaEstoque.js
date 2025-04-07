import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';

const TelaEstoque = ({ navigation, stock }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={stock}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Editar Peça', { piece: item })}>
            <Text style={styles.item}>
              {item.name} - {item.quantity} un - Código: {item.code}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Adicionar Nova Peça" onPress={() => navigation.navigate('Adicionar Peça')} />
    </View>
  );
};

export default TelaEstoque;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor:'rgb(194, 194, 210)' },
  item: { padding: 10, borderBottomWidth: 1 },
});
