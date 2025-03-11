import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import OlaPerfilFuncao from "./OlaPerfilFuncao.js";
import OlaPerfilClasse from "./OlaPerfilClasse.js";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <OlaPerfilFuncao 
          nome="João Silva" 
          endereco="Rua das Flores, 123" 
          telefone="(11) 98765-4321" 
        />
        <OlaPerfilClasse 
          nome="Maria Oliveira" 
          endereco="Avenida Brasil, 456" 
          telefone="(21) 99876-5432" 
        />
      </ScrollView>
    </SafeAreaView>
  );
}
