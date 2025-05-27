import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [equipamento, setEquipamento] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [todosEquipamentos, setTodosEquipamentos] = useState([]);

  useEffect(() => {
    carregarTodosEquipamentos();
  }, []);

  const limparCampos = () => {
    setId('');
    setNome('');
    setLocal('');
    setEquipamento(null);
  };

  const carregarTodosEquipamentos = async () => {
    try {
      const todasChaves = await AsyncStorage.getAllKeys();
      const equipamentos = await AsyncStorage.multiGet(todasChaves);
      
      const equipamentosFormatados = equipamentos.map(([key, value]) => {
        return { id: key, ...JSON.parse(value) };
      });
      
      setTodosEquipamentos(equipamentosFormatados);
    } catch (error) {
      console.error('Erro ao carregar equipamentos:', error);
      setMensagem('Erro ao carregar lista de equipamentos');
    }
  };

  const salvarEquipamento = async () => {
    if (!id || !nome || !local) {
      setMensagem('Preencha todos os campos!');
      return;
    }

    try {
      const novoEquipamento = {
        nome,
        local
      };

      await AsyncStorage.setItem(id, JSON.stringify(novoEquipamento));
      setMensagem('Equipamento salvo com sucesso!');
      limparCampos();
      carregarTodosEquipamentos();
    } catch (error) {
      console.error('Erro ao salvar equipamento:', error);
      setMensagem('Erro ao salvar equipamento');
    }
  };

  const carregarEquipamento = async () => {
    if (!id) {
      setMensagem('Informe o ID do equipamento');
      return;
    }

    try {
      const equipamentoSalvo = await AsyncStorage.getItem(id);
      
      if (equipamentoSalvo) {
        const equipamentoObj = JSON.parse(equipamentoSalvo);
        setEquipamento({ id, ...equipamentoObj });
        setNome(equipamentoObj.nome);
        setLocal(equipamentoObj.local);
        setMensagem('Equipamento carregado com sucesso!');
      } else {
        setMensagem('Equipamento não encontrado');
        limparCampos();
      }
    } catch (error) {
      console.error('Erro ao carregar equipamento:', error);
      setMensagem('Erro ao carregar equipamento');
    }
  };

  const removerEquipamento = async () => {
    if (!id) {
      setMensagem('Informe o ID do equipamento');
      return;
    }

    try {
      await AsyncStorage.removeItem(id);
      setMensagem('Equipamento removido com sucesso!');
      limparCampos();
      carregarTodosEquipamentos();
    } catch (error) {
      console.error('Erro ao remover equipamento:', error);
      setMensagem('Erro ao remover equipamento');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Gerenciador de Equipamentos</Text>
      
      <Text style={styles.label}>ID do equipamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o ID"
        placeholderTextColor="#B39DDB"
        value={id}
        onChangeText={setId}
      />
      
      <Text style={styles.label}>Nome do equipamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        placeholderTextColor="#B39DDB"
        value={nome}
        onChangeText={setNome}
      />
      
      <Text style={styles.label}>Local de instalação</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o local"
        placeholderTextColor="#B39DDB"
        value={local}
        onChangeText={setLocal}
      />
      
      <View style={styles.botoesContainer}>
        <TouchableOpacity style={[styles.botao, styles.botaoSalvar]} onPress={salvarEquipamento}>
          <Text style={styles.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.botao, styles.botaoCarregar]} onPress={carregarEquipamento}>
          <Text style={styles.botaoTexto}>Carregar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.botao, styles.botaoRemover]} onPress={removerEquipamento}>
          <Text style={styles.botaoTexto}>Remover</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.botao, styles.botaoLimpar]} onPress={limparCampos}>
          <Text style={styles.botaoTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>
      
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
      
      {equipamento && (
        <View style={styles.equipamentoInfo}>
          <Text style={styles.equipamentoTitulo}>Equipamento Carregado:</Text>
          <Text style={styles.equipamentoTexto}>ID: {equipamento.id}</Text>
          <Text style={styles.equipamentoTexto}>Nome: {equipamento.nome}</Text>
          <Text style={styles.equipamentoTexto}>Local: {equipamento.local}</Text>
        </View>
      )}
      
      <View style={styles.listaContainer}>
        <Text style={styles.listaTitulo}>Todos os Equipamentos:</Text>
        {todosEquipamentos.length > 0 ? (
          todosEquipamentos.map((eq) => (
            <View key={eq.id} style={styles.equipamentoItem}>
              <Text style={styles.equipamentoTexto}>ID: {eq.id}</Text>
              <Text style={styles.equipamentoTexto}>Nome: {eq.nome}</Text>
              <Text style={styles.equipamentoTexto}>Local: {eq.local}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.equipamentoTexto}>Nenhum equipamento cadastrado</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#D1C4E9',
  },
  label: {
    color: '#B39DDB',
    marginBottom: 5,
    marginTop: 10,
    fontSize: 14,
  },
  input: {
    height: 45,
    borderColor: '#7E57C2',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#1E1E1E',
    color: '#EDE7F6',
    fontSize: 16,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: 'wrap',
    gap: 10,
  },
  botao: {
    flex: 1,
    minWidth: 80,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  botaoSalvar: {
    backgroundColor: '#7C4DFF',
  },
  botaoCarregar: {
    backgroundColor: '#9575CD',
  },
  botaoRemover: {
    backgroundColor: '#B71C1C',
  },
  botaoLimpar: {
    backgroundColor: '#424242',
  },
  mensagem: {
    marginTop: 10,
    marginBottom: 20,
    color: '#BA68C8',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  equipamentoInfo: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#7C4DFF',
  },
  equipamentoTitulo: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#D1C4E9',
    fontSize: 16,
  },
  equipamentoTexto: {
    color: '#EDE7F6',
    marginBottom: 4,
  },
  listaContainer: {
    marginTop: 20,
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 8,
  },
  listaTitulo: {
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#D1C4E9',
    fontSize: 18,
  },
  equipamentoItem: {
    backgroundColor: '#2D2D2D',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
});