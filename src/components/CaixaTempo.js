import React from "react";
import { View, TextInput, Pressable, Image } from "react-native";

//Importando os estilos
import estilo from "../styles/temporizador.js"

export default function CaixaTexto() {
    return (
        <View style={estilo.tempoCaixa}>
            <TextInput style={estilo.tempoEntrada} keyboardType="number-pad" maxLength={3} placeholder="120s" value={props.entrada} onChangeText={props.definirEntrada}/>

            <Pressable  onPress={() => props.definirEntrada(props.entrada > 0 ? props.entrada : 60)}>    
                <View style={estilo.tempoBotao}>
                    <Image source={{uri: "https://i.ibb.co/LtggQ4L/icone.png"}} style={{height: 32, width: 32}}/>
                </View>
            </Pressable>
        </View>
    )
}