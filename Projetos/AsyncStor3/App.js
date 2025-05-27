import React, { useState } from 'react'; // Importa React e o hook useState, que permite
// gerenciar o estado em componentes funcionais.
import { View, Text, Button, StyleSheet } from 'react-native'; // Importa componentes
// essenciais do React Native para construir a interface do usuário.
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage,
// uma API para armazenamento persistente de dados simples no dispositivo.

export default function App() { // Define o componente principal da aplicação, chamado App.
  const [mensagem, setMensagem] = useState(''); // Declara uma variável de estado 'mensagem' e
// sua função 'setMensagem' para exibir mensagens ao usuário. O valor inicial é uma string vazia.

  const removerNome = async () => { // Define uma função assíncrona chamada 'removerNome' para
// remover o nome do AsyncStorage.
    try { // Inicia um bloco try-catch para lidar com possíveis erros durante a operação de remoção.
      await AsyncStorage.removeItem('nomeusuario'); // Tenta remover o item associado à chave
// 'nomeusuario' do AsyncStorage. Await garante que a operação seja concluída antes de prosseguir.
      setMensagem('Nome removido com sucesso!'); // Se a remoção for bem-sucedida, atualiza a mensagem de sucesso.
    } catch (error) { // Captura qualquer erro que ocorra durante a execução do bloco try.
      setMensagem('Erro ao remover o nome: ' + error); // Atualiza a mensagem com a descrição do erro, se houver.
    }
  };

  return ( // Inicia a seção de renderização do componente, que define a estrutura da interface do usuário.
    <View style={styles.container}>
      <Text style={styles.mensagem}>{mensagem}</Text>
      <Button title="Remover Nome Salvo" onPress={removerNome} />
    </View>
  );
}

const styles = StyleSheet.create({ // Cria um objeto de estilos usando StyleSheet.create, que otimiza os
// estilos para o React Native.
  container: { // Define estilos para o contêiner principal da aplicação.
    flex: 1, // Faz com que o contêiner ocupe todo o espaço disponível.
    justifyContent: 'center', // Centraliza o conteúdo verticalmente.
    alignItems: 'center', // Centraliza o conteúdo horizontalmente.
    padding: 20, // Adiciona um preenchimento de 20 unidades em todos os lados.
  },
  mensagem: { // Define estilos para a mensagem de status.
    marginTop: 10, // Adiciona uma margem superior de 10 unidades.
    fontWeight: 'bold', // Define a fonte da mensagem como negrito.
  },
});
