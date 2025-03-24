import React from "react";
import { Text, View } from 'react-native'; // Importa os componentes Text e View do react-native
import styles from "./style.js"; // Importa os estilos definidos no arquivo styles.js

// Componente funcional App
export default function App() {
    // Retorna a estrutura JSX do componente
    return (
        <View style={styles.container}> {/* View principal que utiliza o estilo 'container' */}
            <View style={styles.box}> {/* View interna que representa a caixa, utilizando o estilo 'box' */}
                <Text style={styles.boxText}>Isto é uma caixa</Text> {/* Texto dentro da caixa, utilizando o estilo 'boxText' */}
            </View>
        </View>
    );
};