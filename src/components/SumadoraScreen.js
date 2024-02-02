import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useState } from "react";

const SumadoraScreen = () => {

  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  //handlers
  const handleNumero1 = (numero) => {
  
    console.log(numero);
    setNumero1(Number(numero));
  };

  const handleNumero2 = (numero) => {
    setNumero2(Number(numero));
  }


  const sumar = () => {
    const resultado = numero1 + numero2;
    setResultado(resultado);
  }



  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Primer Numero"
            onChangeText={handleNumero1}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Segundo Numero"
            onChangeText={handleNumero2}
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>Resultado:</Text>
          <Text style={styles.text}>{resultado}</Text>
        </View>

        <Pressable
          style={{
            backgroundColor: "#67AAF9",
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
          
          }}
          onPress={sumar}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Sumar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SumadoraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
    width: "100%",
    height: "100%",
  },

  subContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },

  input: {
    width: "100%",
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
});
