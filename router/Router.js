import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//
const Stack = createNativeStackNavigator();

// components
import HomeScreen from "../src/components/HomeScreen";
import DetailsScreen from "../src/components/DetailsScreen";
import SumadoraScreen from "../src/components/SumadoraScreen";
import TablaScreen from "../src/components/TablaScreen";
import VideoPage from "../src/components/VideoPage";
import TraductorScreen from "../src/components/TraductorScreen";


const Router = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#67AAF9",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShown: true,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Sumadora" component={SumadoraScreen} />
        <Stack.Screen name="Tabla" component={TablaScreen} />
        <Stack.Screen name="Traductor" component={TraductorScreen} />
        <Stack.Screen name="Video" component={VideoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
