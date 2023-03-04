// siempre tenemos que agregar este import o sino crashea la app
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
// importar el nuevo componente
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTab";

export default function App() {
  return (
    <NavigationContainer>
      {/*<NavigationStack></NavigationStack>*/}
      <NavigationTab></NavigationTab>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
