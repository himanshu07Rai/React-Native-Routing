import React from "react";
import { Button, View, Text } from "react-native";
import styles from "../styles";

const Detail = (props) => {
  const { navigation, route } = props;
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Text>from : {route.params.from}</Text>
      <Text>to : {route.params.to}</Text>
      <Button
        title="View Bottom Tabs"
        onPress={() => navigation.navigate("Bottom Tabs", { name: "param 1" })}
      />
      <Button
        title="View Top Tabs"
        onPress={() => navigation.navigate("Top Tabs", { name: "param 2" })}
      />
      <Button
        title="Pass data back"
        onPress={() =>
          navigation.navigate("Feed", { data: "data from details" })
        }
      />
    </View>
  );
};

export default Detail;
