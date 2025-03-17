import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native'; // Importa StyleSheet para estilo

class MeuComponente extends Component {
  constructor(props) {
    super(props);
    // Inicializa o estado com mensagem, contador e controle de exibição
    this.state = { mensagem: 'Oi!', contador: 0, exibirComponente: true };
    console.log('construtor: Componente montado!'); // Log de montagem
  }

  componentDidMount() {
    // Chamado após o componente ser renderizado pela primeira vez
    console.log('componentDidMount: Componente montado!');
  }

  componentDidUpdate(prevProps, prevState) {
    // Chamado após o componente ser atualizado
    console.log('componentDidUpdate: Componente atualizado', prevState, this.state);
  }

  componentWillUnmount() {
    // Chamado antes do componente ser desmontado
    console.log('componentWillUnmount: Componente desmontado!');
  }

  alteraMensagem = () => {
    // Atualiza o estado para alterar a mensagem
    this.setState({ mensagem: 'Nova mensagem!' });
  };

  incrementaContador = () => {
    // Atualiza o estado para incrementar o contador
    this.setState({ contador: this.state.contador + 1 });
    console.log('Oi meu nome não é João')
  };

  exibirOcultarComponente = () => {
    // Atualiza o estado para alterar a exibição do componente
    this.setState({ exibirComponente: !this.state.exibirComponente });
  };

  shouldComponentUpdate(nextProps, nextState) {
    // Condicional renderiza apenas se o contador mudar
    if (this.state.contador !== nextState.contador) {
      console.log('shouldComponentUpdate: Contador mudou, renderizando');
      return true;
    }
    console.log('shouldComponentUpdate: Contador não mudou, ignorando renderização');
    return false;
  }

  render() {
    // Condicional para não renderizar se exibirComponente for falso
    if (!this.state.exibirComponente) {
      return null;
    }

    // Renderiza o componente com mensagem, contador e botões
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.mensagem}</Text>
        <Text style={styles.text}>Contador: {this.state.contador}</Text>
        <Button
          title="Alterar Mensagem"
          onPress={this.alteraMensagem}
          style={styles.button}
        />
        <Button
          title="Exibir/Ocultar Componente"
          onPress={this.exibirOcultarComponente}
          style={styles.button}
        />
        <Button
        title="Adicionar Contador"
        onPress={this.incrementaContador}
        style={styles.button}
        />
      </View>
    );
  }
}
// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cor de fundo leve
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#00bfff', // Cor de fundo do botão
    color: '#fff', // Cor do texto do botão
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default MeuComponente;