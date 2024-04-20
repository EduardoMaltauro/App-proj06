import { StyleSheet } from "react-native";

export default StyleSheet.create({
    tempoContagem:{
        color: "#f1d968",
        fontSize: 64,
        textAlign: "center"
    },

    tempoUnidade: {
        color: "#c79452",
        fontSize: 24,
        marginBottom: 32,
        textAlign: "center"
    },

    tempoCaixa: {
        flexDirection: "row"
    },

    tempoEntrada: {
        backgroundColor: "#1C2229",
        color: "#c79452",
        fontSize: 24,
        height: 48,
        textAlign: "center",
        width: 128
    },
    tempoBotao: {
        alignItems: "center",
        backgroundColor: "#1C2229",
        justifyContent: "center",
        height: 48,
        textAlign: "center"
    },

    tempoBotaoTexto: {
        color: "#c79452",
        fontSize: 24,
    }
})