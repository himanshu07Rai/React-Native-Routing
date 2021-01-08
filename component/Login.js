import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import styles from "../styles";
const Login = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>route name : {route.name}</Text>
      <Text>I am login screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};

export default Login;
