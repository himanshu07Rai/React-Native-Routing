import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import styles from "../styles";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>I am Register screen</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};

export default Login;
