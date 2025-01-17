import React from "react";
import { Button, View, Text } from "react-native";
import styles from "../styles";

const Feed = (props) => {
  const { navigation, route } = props;
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>{route.params ? route.params.data : "Navigation Drawer"}</Text>
      <Button
        title="Go to feed Item"
        onPress={() =>
          navigation.navigate("Detail", {
            from: "Feed",
            to: "Details",
          })
        }
      />
    </View>
  );
};

export default Feed;
