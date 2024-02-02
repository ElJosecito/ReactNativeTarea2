import { Button, Pressable, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        {/*  */}
        <Pressable onPress={() => navigation.navigate("Details")}>
          <View style={styles.buttonsBase}>
            <Text style={styles.buttonText}>Usuario</Text>
          </View>
        </Pressable>
        {/*  */}

        <Pressable onPress={() => navigation.navigate("Sumadora")}>
          <View style={styles.buttonsBase}>
            <Text style={styles.buttonText}>Calculadora</Text>
          </View>
        </Pressable>

        {/*  */}
        <Pressable onPress={() => navigation.navigate("Tabla")}>
          <View style={styles.buttonsBase}>
            <Text style={styles.buttonText}>Tabla</Text>
          </View>
        </Pressable>

        {/*  */}
        <Pressable onPress={() => navigation.navigate("Traductor")}>
          <View style={styles.buttonsBase}>
            <Text style={styles.buttonText}>traductor</Text>
          </View>
        </Pressable>
        {/*  */}
        <Pressable onPress={() => navigation.navigate("Video")}>
          <View style={styles.buttonsBase}>
            <Text style={styles.buttonText}>Video</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonsBase: {
    width: 150,
    height: 50,
    backgroundColor: "#67AAF9",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
