// Importa a imagem local para ser utilizada no aplicativo
import logox from './assets/NativeLogo.png';

// Importa os módulos necessários do React e React Native
import React, { useState } from 'react';
import {
  View, // Contêiner para agrupar elementos
  Text, // Exibe textos na tela
  Image, // Exibe imagens
  TextInput, // Campo de entrada de texto
  Button, // Botão padrão
  TouchableOpacity, // Botão personalizável
  ScrollView, // Permite rolagem na tela
  FlatList, // Lista otimizada para grandes quantidades de dados
  SectionList, // Lista com cabeçalhos de seções
  StyleSheet, // Define estilos para os componentes
} from 'react-native';

// Componente principal do aplicativo
const App = () => {
  // Estado para armazenar o texto digitado pelo usuário
  const [text, setText] = useState('');

  // Estado que armazena uma lista de itens
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  // Estrutura de dados para a SectionList, separando itens em seções
  const sections = [
    {
      title: 'Seção 1', // Título da seção
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    {
      title: 'Seção 2',
      data: [
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
  ];

  // Função chamada ao pressionar os botões
  const handlePress = () => {
    alert('Botão pressionado!');
  };

  return (
    // Permite rolagem da tela para visualizar todos os elementos
    <ScrollView style={styles.container}>
      {/* Bloco contendo um texto e uma imagem */}
      <View style={styles.view}>
        <Text style={styles.text}>Texto de exemplo</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} // Imagem remota
          style={styles.image}
        />
      </View>

      {/* Exibição da imagem local */}
      <Image source={logox} style={styles.logo} />

      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.textInput}
        placeholder="Digite algo" // Texto de dica
        value={text} // Define o valor atual
        onChangeText={setText} // Atualiza o estado quando o usuário digita
      />

      {/* Botão simples que dispara um alerta ao ser pressionado */}
      <Button title="Clique aqui" onPress={handlePress} />

      {/* Botão personalizável com TouchableOpacity */}
      <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
        <Text style={styles.touchableOpacityText}>Toque aqui</Text>
      </TouchableOpacity>

      {/* Lista de itens utilizando FlatList */}
      <FlatList
        data={items} // Dados da lista
        renderItem={({ item }) => <Text>{item.name}</Text>} // Como cada item será exibido
        keyExtractor={(item) => item.id.toString()} // Chave única para cada item
      />

      {/* Lista organizada por seções utilizando SectionList */}
      <SectionList
        sections={sections} // Dados da lista organizados por seções
        renderItem={({ item }) => <Text>{item.name}</Text>} // Como cada item será exibido
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text> // Cabeçalho da seção
        )}
        keyExtractor={(item) => item.id.toString()} // Chave única para cada item
      />
    </ScrollView>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    padding: 20, // Adiciona espaçamento interno
  },
  view: {
    marginBottom: 20, // Adiciona margem inferior
  },
  text: {
    fontSize: 20, // Define o tamanho da fonte
    marginBottom: 10, // Adiciona espaço abaixo do texto
  },
  image: {
    width: 100, // Define a largura da imagem
    height: 100, // Define a altura da imagem
    marginBottom: 10, // Adiciona espaçamento abaixo da imagem
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Mantém a proporção da imagem
  },
  textInput: {
    height: 40, // Altura do campo de entrada
    borderColor: 'gray', // Cor da borda
    borderWidth: 1, // Largura da borda
    marginBottom: 10, // Espaçamento inferior
    paddingHorizontal: 10, // Espaçamento interno lateral
  },
  touchableOpacity: {
    backgroundColor: 'blue', // Cor de fundo do botão
    padding: 10, // Espaçamento interno
    borderRadius: 5, // Borda arredondada
    marginBottom: 20, // Espaçamento inferior
  },
  touchableOpacityText: {
    color: 'white', // Cor do texto do botão
    textAlign: 'center', // Centraliza o texto
  },
  sectionHeader: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
    marginTop: 20, // Espaçamento superior
    marginBottom: 10, // Espaçamento inferior
  },
});

// Exporta o componente para ser usado em outros arquivos
export default App;
