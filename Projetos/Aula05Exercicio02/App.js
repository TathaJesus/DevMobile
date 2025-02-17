// Importa os módulos necessários do React e React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

// Define o componente funcional principal do aplicativo
const App = () => {
  // Estado para armazenar o texto digitado pelo usuário
  const [text, setText] = useState('');

  // Estado para armazenar a lista de itens, começando com três itens iniciais
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  // Função chamada ao pressionar o botão TouchableOpacity
  const handlePress = () => {
    alert('Botão pressionado!');
  };

  // Função que adiciona um novo item à lista quando o botão "Adicionar Item" é pressionado
  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), name: text }]); // Adiciona um novo item com ID único
    setText(''); // Limpa o campo de entrada após adicionar o item
  };

  return (
    // Permite a rolagem do conteúdo da tela
    <ScrollView style={styles.container}>
      {/* Cabeçalho do aplicativo */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} // Imagem do logo do React Native
          style={styles.image}
        />
        <Text style={styles.title}>Exemplo de App React Native</Text>
      </View>

      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText} // Atualiza o estado conforme o usuário digita
      />

      {/* Botão para adicionar um item à lista */}
      <Button title="Adicionar Item" onPress={addItem} />

      {/* Lista de itens exibida com FlatList */}
      <FlatList
        data={items} // Define a lista de dados a ser exibida
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id} // Define a chave única de cada item
      />

      {/* Botão personalizável usando TouchableOpacity */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela disponível
    padding: 20, // Adiciona espaçamento interno
  },
  header: {
    alignItems: 'center', // Centraliza os elementos dentro do cabeçalho
    marginBottom: 20, // Adiciona margem inferior
  },
  image: {
    width: 100, // Define a largura da imagem
    height: 100, // Define a altura da imagem
    marginBottom: 10, // Adiciona espaçamento abaixo da imagem
  },
  title: {
    fontSize: 24, // Define o tamanho da fonte do título
    fontWeight: 'bold', // Define a fonte como negrito
  },
  input: {
    height: 40, // Define a altura do campo de entrada
    borderColor: 'gray', // Define a cor da borda
    borderWidth: 1, // Define a largura da borda
    marginBottom: 10, // Adiciona espaçamento abaixo do campo
    paddingHorizontal: 10, // Adiciona espaçamento interno lateral
  },
  item: {
    backgroundColor: '#eee', // Define um fundo cinza claro para os itens da lista
    padding: 10, // Adiciona espaçamento interno
    marginBottom: 5, // Adiciona espaçamento entre os itens
  },
  button: {
    backgroundColor: 'blue', // Define a cor de fundo do botão como azul
    padding: 10, // Adiciona espaçamento interno
    alignItems: 'center', // Centraliza o texto dentro do botão
  },
  buttonText: {
    color: 'white', // Define a cor do texto do botão como branco
    fontSize: 16, // Define o tamanho da fonte do botão
  },
});

export default App;
