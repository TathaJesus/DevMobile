import React, { useState } from 'react';
// Importa bibliotecas necessárias do React e React Native

import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// Importa componentes visuais e StyleSheet para estilização

const App = () => {
  // Declara o componente funcional principal
  const [nome, setNome] = useState(''); // Estado para armazenar o nome digitado
  const [mensagem, setMensagem] = useState(''); // Estado para armazenar a mensagem exibida

  const lidarComClique = () => {
    // Função executada ao clicar no botão
    if (nome) {
      // Verifica se o nome foi preenchido
      setMensagem(`Olá, ${nome}!`); // Exibe mensagem de saudação com o nome
    } else {
      setMensagem('Por favor, digite seu nome.'); // Mensagem de erro caso o nome esteja vazio
    }
  };

  return (
    <View style={styles.container}>
      {' '}
      {/* Contêiner principal com estilo aplicado */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} // Imagem com URI externa
        style={styles.logo} // Estilização da imagem
      />
      <Text style={styles.titulo}>Exemplo de App Interativo</Text>{' '}
      {/* Título estilizado */}
      <TextInput
        style={styles.input} // Campo de entrada de texto
        placeholder="Digite seu nome" // Texto de instrução dentro do campo
        onChangeText={setNome} // Atualiza o estado "nome" ao digitar
        value={nome} // Valor atual do campo de entrada
      />
      <Button title="Enviar" onPress={lidarComClique} />{' '}
      {/* Botão que aciona a função "lidarComClique" */}
      <TouchableOpacity style={styles.botao}>
        {' '}
        {/* Botão customizado com opacidade */}
        <Text style={styles.textoBotao}>Clique Aqui!</Text>{' '}
        {/* Texto dentro do botão */}
      </TouchableOpacity>
      {/* Exibe a mensagem somente se estiver preenchida */}
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // O contêiner ocupa todo o espaço disponível
    justifyContent: 'center', // Alinha o conteúdo no centro verticalmente
    alignItems: 'center', // Alinha o conteúdo no centro horizontalmente
    padding: 20, // Adiciona preenchimento interno ao contêiner
  },
  logo: {
    width: 150, // Largura da imagem
    height: 150, // Altura da imagem
    marginBottom: 20, // Espaçamento inferior
  },
  titulo: {
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: 'bold', // Define a fonte como negrito
    marginBottom: 20, // Espaçamento inferior
  },
  input: {
    width: '100%', // Largura total disponível
    height: 40, // Altura do campo de entrada
    borderColor: 'gray', // Cor da borda
    borderWidth: 1, // Espessura da borda
    marginBottom: 20, // Espaçamento inferior
    paddingHorizontal: 10, // Preenchimento interno horizontal
  },
  botao: {
    backgroundColor: 'blue', // Cor de fundo do botão
    padding: 10, // Preenchimento interno
    borderRadius: 5, // Bordas arredondadas
  },
  textoBotao: {
    color: 'white', // Cor do texto
    fontWeight: 'bold', // Fonte em negrito
  },
  mensagem: {
    marginTop: 20, // Espaçamento superior
    fontSize: 16, // Tamanho da fonte
  },
});

export default App; // Exporta o componente para ser utilizado em outros arquivos
