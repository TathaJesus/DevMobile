import React, { useState } from 'react';
// Importa os componentes necessários do React Native e a função useState para gerenciar estados.

import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
// Importa componentes de interface gráfica do React Native.

const App = () => {
  // Define o componente principal do aplicativo.

  const [nome, setNome] = useState('');
  // Declara o estado "nome" com valor inicial vazio e a função "setNome" para atualizá-lo.

  const [mensagem, setMensagem] = useState('');
  // Declara o estado "mensagem" com valor inicial vazio e a função "setMensagem" para atualizá-lo.

  const lidarComClique = () => {
    // Função que trata o evento de clique no botão.
    if (nome) {
      // Se o nome não estiver vazio:
      setMensagem(`Olá, ${nome}!`);
      // Atualiza a mensagem com uma saudação personalizada.
    } else {
      setMensagem('Por favor, digite seu nome.');
      // Exibe uma mensagem pedindo ao usuário para preencher o nome.
    }
  };

  return (
    <View style={styles.container}>
      {/* Componente principal que envolve os demais elementos e aplica o estilo contêiner */}

      <Image
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
        style={styles.logo}
      />
      {/* Exibe uma imagem usando uma URL remota e aplica o estilo logo */}

      <Text style={styles.titulo}>Exemplo Interativo</Text>
      {/* Exibe o título da aplicação com o estilo personalizado */}

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        // Exibe um texto placeholder no campo de entrada
        onChangeText={setNome}
        // Atualiza o estado "nome" com o valor digitado pelo usuário
        value={nome}
        // Define o valor atual do campo como o estado "nome"
      />

      <Button title="Enviar" onPress={lidarComClique} />
      {/* Botão que, ao ser pressionado, chama a função "lidarComClique" */}

      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
      {/* Condicional que exibe a mensagem apenas se ela não for vazia */}
    </View>
  );
};

const styles = StyleSheet.create({
  // Define os estilos para os componentes do aplicativo.

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // Contêiner com layout flex, centralização de conteúdo e espaçamento interno.
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    // Define largura, altura e margem inferior para a imagem.
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    // Estiliza o título com tamanho de fonte grande, negrito e espaçamento inferior.
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    // Estiliza o campo de entrada com largura total, altura fixa, borda cinza e espaçamento interno.
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
    // Define espaçamento superior e tamanho de fonte para a mensagem.
  },
});

export default App;
// Exporta o componente "App" como padrão para ser utilizado em outros arquivos.
