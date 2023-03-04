import React from "react";
import { Button, Text, View } from "react-native";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToHome = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>this is a test</Text>
      <Button onPress={() => goToHome("Home")} title="Ir a Home" />
    </View>
  );
}
