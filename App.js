import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import Feed from "./src/Feed";
import Detail from "./src/Detail";

import Screen1 from "./src/drawer/Screen1";
import Screen2 from "./src/drawer/Screen2";
import Screen3 from "./src/drawer/Screen3";

import Tab1 from "./src/tabs/Tab1";
import Tab2 from "./src/tabs/Tab2";
import Tab3 from "./src/tabs/Tab3";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const createHomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Feed"
      options={{
        title: "My Feed",
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
      component={Feed}
    />
    <Stack.Screen name="Detail" component={Detail} />
    <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
    <Stack.Screen name="Top Tabs" children={createTopTabs} />
  </Stack.Navigator>
);

const createTopTabs = (props) => {
  console.log(props);
  return (
    <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen
        name="Tab 1"
        options={{
          title: props.route.params.name,
        }}
        component={Tab1}
        h={props.route.params.name}
      />
      <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
      <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialTopTabs.Navigator>
  );
};

const createBottomTabs = (props) => {
  console.log(props);
  return (
    <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} />
      <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
      <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialBottomTabs.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Screen1} />
        <Drawer.Screen name="Favourites" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>
      {/* <Stack.Navigator
        // screenOptions={{
        //   header: () => null,
        // }}
        initialRouteName="Register"
      >
        <Stack.Screen
          name="Login"
          options={{
            headerTitle: "Sign In",
          }}
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerTitle: "Sign Up",
          }}
          component={Register}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
