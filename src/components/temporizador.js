import React from "react";
import { View, Text } from "react-native";

//Importando o estilo
import estilo from "../styles/temporizador.js"


export default function Temporizador(props) {
    return <View>
        <Text style={estilo.tempoContagem}>{props.tempo}</Text>
        <Text style={estilo.tempoUnidade}>segundos</Text>
    </View>

}