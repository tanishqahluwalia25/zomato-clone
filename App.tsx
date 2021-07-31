import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";
import Favorites from "./screens/favorites/Favorites";
// import { Fabicons as Icon } from "@expo/vector-icons";
import { Feather as Icon } from "@expo/vector-icons";
import Colors from "./resources/Colors";
import CustomTabIcon from "./components/Tabs/CustomTabIcon";
import Tabs from "./tabs";
import { Provider } from "react-redux";
import store from "./redux/store";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
}
