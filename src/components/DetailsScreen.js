import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Josecito.png")}
        style={styles.Image}
      />
      <View>
        <View>
          <Text style={styles.title}>Nombre:</Text>
          <Text style={styles.text}>José Miguel</Text>
        </View>
        <View>
          <Text style={styles.title}>Apellidos:</Text>
          <Text style={styles.text}>Martinez Florimon</Text>
        </View>
        <View>
          <Text style={styles.title}>Correo:</Text>
          <Text style={styles.text}>20220521@itla.edu.do</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  Image: {
    width: 180,
    height: 180,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 100,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  text: {
    fontSize: 20,
  },
});
