// styles.js
import { Platform, StyleSheet, StatusBar } from "react-native";

// Cria um objeto StyleSheet para definir os estilos
// Estilos para o container principal
export default StyleSheet.create({
    container: {
        flex: 1, // Preenche todo o espaço disponível
        flexDirection: "column", // Organiza os elementos em coluna
        alignment: "center", // Define o centro do alinhamento
        justifyContent: "space-around", // Distribui o espaço igualmente entre os elementos
        // Aplica um padding top diferente dependendo da plataforma
        ...Platform.select({
            ios: { paddingTop: 40 }, // Padding top para iOS
            android: { paddingTop: StatusBar.currentHeight }, // Padding top para Android, considerando a altura da barra de status
        }),
    },
    
    // Estilos para as caixas
    box: {
        height: 100, // Altura da caixa
        width: "100%", // Largura da caixa
        justifyContent: "center", // Centraliza o conteúdo verticalmente
        alignItems: "center", // Centraliza o conteúdo horizontalmente
        borderWidth: 1, // Largura da borda
        borderStyle: "dashed", // Estilo da borda (tracada)
        borderColor: "darkslategrey", // Cor da borda
        backgroundColor: "lightgray", // Cor de fundo da caixa
    },
    
    // Estilos para o texto dentro das caixas
    boxText: {
        color: "darkslategrey", // Cor do texto
        fontWeight: "bold", // Peso da fonte (negrito)
    },
    
    // Estilos para as linhas
    row: {
        flex: 1, // Preenche todo o espaço disponível
        flexDirection: "row", // Organiza os elementos em linha
        justifyContent: "space-around", // Distribui o espaço igualmente entre os elementos
        alignSelf: "stretch", // Estica a linha para ocupar toda a largura do container pai
    },
    
    // Estilos para as colunas
    column: {
        flex: 1, // Preenche todo o espaço disponível
        flexDirection: "column", // Organiza os elementos em coluna
        justifyContent: "space-around", // Distribui o espaço igualmente entre os elementos
        alignSelf: "stretch", // Estica a coluna para ocupar toda a altura do container pai
    },
});