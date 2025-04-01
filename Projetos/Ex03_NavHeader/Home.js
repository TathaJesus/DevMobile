import React from "react";
import { View, Button, StatusBar } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RoutesParams, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Botão que navega para a tela Details, passando parâmetros 'title', 'content' e 'stock'. */}
      <Button
        title="First Item"
        onPress={() => {
          navigation.navigate("Details", {
            title: "First Item",
            content: "First Item Content",
            stock: 0,
          });
        }}
      />
      <Button
        title="Second Item"
        onPress={() => {
          navigation.navigate("Details", {
            title: "Second Item",
            content: "Second Item Content",
            stock: 0,
          });
        }}
      />
      {/* Botão que navega para a tela Details, passando parâmetros 'title', 'content' e 'stock'. */}
      <Button
        title="Third Item"
        onPress={() => {
          navigation.navigate("Details", {
            title: "Third Item",
            content: "Third Item Content",
            stock: 200,
          });
        }}
      />
    </View>
  );
}