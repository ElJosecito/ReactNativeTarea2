import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";

import { useState } from "react";

const TraductorScreen = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const translateNumberToWords = (num) => {
    const units = [
      "",
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis",
      "siete",
      "ocho",
      "nueve",
    ];
    const teens = [
      "diez",
      "once",
      "doce",
      "trece",
      "catorce",
      "quince",
      "dieciséis",
      "diecisiete",
      "dieciocho",
      "diecinueve",
    ];
    const tens = [
      "",
      "diez",
      "veinte",
      "treinta",
      "cuarenta",
      "cincuenta",
      "sesenta",
      "setenta",
      "ochenta",
      "noventa",
    ];
    const hundreds = [
      "",
      "ciento",
      "doscientos",
      "trescientos",
      "cuatrocientos",
      "quinientos",
      "seiscientos",
      "setecientos",
      "ochocientos",
      "novecientos",
    ];

    if (num === 0) return "cero";
    if (num < 10) return units[num];
    if (num < 20) return teens[num - 10];
    if (num < 100)
      return (
        tens[Math.floor(num / 10)] +
        (num % 10 !== 0 ? " y " + units[num % 10] : "")
      );
    if (num < 1000)
      return (
        hundreds[Math.floor(num / 100)] +
        (num % 100 !== 0 ? " " + translateNumberToWords(num % 100) : "")
      );
    if (num === 1000) return "mil";
    return "Número no soportado";
  };

  const handleTranslate = () => {
    const num = parseInt(number);
    if (!isNaN(num) && num >= 0 && num <= 1000) {
      setResult(translateNumberToWords(num));
    } else {
      setResult("Por favor, introduce un número válido del 0 al 1000.");
    }
  };

  return (
    <View style={{padding: 10}}>
      <View>
        <Text style={styles.textBig}>Traductor</Text>
        <TextInput
          onChangeText={setNumber}
          value={number}
          style={styles.input}
          placeholder="Ingrese numero"
          keyboardType="numeric"
        />
        <Pressable onPress={handleTranslate} style={styles.button}>
          <Text style={{ color: "white", textAlign: "center" }}>Traducir</Text>
        </Pressable>
      </View>

      <View>
        <Text style={{fontSize: 20, fontWeight: "bold", marginTop: 20}}>Resultado:</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
    </View>
  );
};

export default TraductorScreen;

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#67AAF9",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  textBig: {
    fontWeight: "bold",
    fontSize: 48,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
