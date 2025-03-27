// styles.js
import { Platform, StyleSheet, StatusBar } from "react-native";

// Cria um objeto StyleSheet para definir os estilos
export default StyleSheet.create({
    // Estilos para o container principal
    container: {
        flex: 1, // Preenche todo o espaço disponível
        flexDirection: "column", // Organiza os elementos em coluna
        backgroundColor: "white", // Define a cor de fundo
        justifyContent: "center", // Centraliza os elementos verticalmente
        justifyContent: "space-around", // Distribui o espaço igualmente entre os elementos
        // Aplica um padding top diferente dependendo da plataforma
        ...Platform.select({
            ios: { paddingTop: 20 }, // Padding top para iOS
            android: { paddingTop: StatusBar.currentHeight }, // Padding top para Android, considerando a altura da barra de status
        }),
    },

    // Estilos para as caixas
    box: {
        height: 100, // Altura da caixa
        justifyContent: "center", // Centraliza o conteúdo verticalmente
        alignSelf: "stretch", // Faz a caixa esticar para o tamanho do container pai
        alignItems: "center", // Centraliza o conteúdo horizontalmente
        backgroundColor: "lightgrey", // Cor de fundo da caixa
        borderColor: "lightgray", // Cor da borda
        borderWidth: 1, // Largura da borda
        borderStyle: "dashed", // Estilo da borda (tracejada)
    },

    // Estilos para o texto dentro das caixas
    boxText: {
        color: "darkslategrey", // Cor do texto
        fontWeight: "bold", // Peso da fonte (negrito)
    },
});