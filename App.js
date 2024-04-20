import React, { useState, useEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native"

export default function App() {
  const [tempo, definirTempo] = useState(60)

  useEffect(function () {
    const temporizador = tempo > 0 && setInterval(function () {
      definirTempo(tempo - 1)
    }, 1000)

    return function () {
      clearInterval(temporizador)
    }
  }, [tempo])

  return( <View>
    <StatusBar barStyle="light-content" backgroundColor="#1C2229" />
    <Text> { tempo } </Text>
    <Text> { tempo } </Text>
    <Text> { tempo } </Text>
  </View>
  );
}

