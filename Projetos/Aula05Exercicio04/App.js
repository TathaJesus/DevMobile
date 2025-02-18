//Importação de modulos
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, ActivityIndicator, StyleSheet } from 'react-native';

const App = () => {

  //Definição de estados
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //Função executada ao clicar no botão
  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Botão pressionado!');
    }, 2000);
  };

  //Informações da lista
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  //Lista de seções
  const sections = [
    {
      title: 'Seção 1',
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
  //Estrutura da interface
  return (
    <ScrollView style={styles.container}>

      {/*Estilização de texto e imagem */}
      <View style={styles.view}>
        <Text style={styles.text}>Olá, mundo!</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />
        {/*Estilização do input do texto */}
        <TextInput
          style={styles.textInput}
          placeholder="Digite algo"
          value={text}
          onChangeText={setText}
        />

        {/*Botão e indicador de carregamento */}
        <Button title="Clique aqui" onPress={handlePress} />
        <Text style={styles.toudableOpacityText}>Clique aqui!</Text>
        <ActivityIndicator animating={isLoading} />
      </View>

      {/*Lista simples */}
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />

      {/*Lista seccionada */}
      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};
//Estilização do site
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  toudableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  toudableOpacityText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;