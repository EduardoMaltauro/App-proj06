import React, { useState, useEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native"


import Temporizador from "./src/components/Temporizador.js"
import CaixaTempo from "./src/components/CaixaTempo.js"

export default function App() {
  const [tempo, definirTempo] = useState(60)
  const [entrada, definirEntrada] = useState(null)

  useEffect(function () {
    const temporizador = tempo > 0 && setInterval(function () {
      definirTempo(tempo - 1)
    }, 1000)

    return function () {
      clearInterval(temporizador)
    }
  }, [tempo])

  return (<View style={{ alignItems: "center", backgroundColor: "#20262E", flex: 1, justifyContent: "center" }}>
    <StatusBar barStyle="light-content" backgroundColor="#1C2229" />
    <Temporizador tempo={tempo} />
    <CaixaTempo entrada={entrada} definirEntrada={definirEntrada} definirTempo={definirTempo} />
  </View>
  )
}

