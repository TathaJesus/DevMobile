import React, { useState } from "react";
import { View, TextInput, Button, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import OlaPerfilFuncao from "./OlaPerfilFuncao";
import OlaPerfilClasse from "./OlaPerfilClasse";

export default function App() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dadosEnviados, setDadosEnviados] = useState(false);

  const handleEnviar = () => {
    setDadosEnviados(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
        <Button title="Enviar" onPress={handleEnviar} />

        {dadosEnviados && (
          <>
            <OlaPerfilFuncao nome={nome} endereco={endereco} telefone={telefone} />
            <OlaPerfilClasse nome={nome} endereco={endereco} telefone={telefone} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#800080",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

