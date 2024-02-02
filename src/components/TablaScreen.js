import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Keyboard,
} from "react-native";
import React from "react";
import { useState } from "react";

const TablaScreen = () => {
  const [numero, setNumero] = useState(0);
  const [tabla, setTabla] = useState(0);

  const handleNumero = (numero) => {
    setNumero(Number(numero));
  };

  handleBtn = () => {
    if (tabla === 0) {
      setTabla(12);
      Keyboard.dismiss();
    } else {
      setTabla(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Tabla de Multiplicar</Text>
        <TextInput
          onChangeText={handleNumero}
          style={styles.input}
          placeholder="Ingrese un numero"
          keyboardType="numeric"
        />
        {/* <Pressable style={styles.btn} onPress={handleBtn}>
          <Text style={{ color: "white", textAlign: "center" }}>
            Generar Tabla
          </Text>
        </Pressable> */}
        {
          tabla === 0 ? (
            <Pressable style={styles.btn} onPress={handleBtn}>
              <Text style={{ color: "white", textAlign: "center" }}>Generar Tabla</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.btnDelete} onPress={() => setTabla(0)}>
              <Text style={{ color: "white", textAlign: "center" }}>Borrar</Text>
            </Pressable>
          )
        }

        <View style={styles.text}>
          <Text style={styles.title}>Resultado:</Text>
          {Array(tabla)
            .fill(1)
            .map((item, index) => {
              return (
                <Text style={styles.text} key={index}>
                  {numero} x {index + 1} = {numero * (index + 1)}
                </Text>
              );
            })}
        </View>
      </View>
    </View>
  );
};

export default TablaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    marginTop: 5,
  },
  btn: {
    backgroundColor: "#67AAF9",
    padding: 10,
    borderRadius: 10,
  },
  btnDelete: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
});
