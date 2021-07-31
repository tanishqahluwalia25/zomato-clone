import "react-native-gesture-handler";
import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";
import Favorites from "./screens/favorites/Favorites";
import CustomTabIcon from "./components/Tabs/CustomTabIcon";
import { useDispatch, useSelector } from "react-redux";
import restaurantsActions from "./redux/restaurants/restaurantsActions";
import Colors from "./resources/Colors";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  const dispatch = useDispatch();
  const { isLoading, isLoadSuccess, loadResponse } = useSelector(
    (state: any) => state.restaurantsReducer
  );

  useEffect(() => {
    dispatch(restaurantsActions());
  }, []);

  useEffect(() => {
    console.log(loadResponse);
  }, [loadResponse]);

  const { count } = useSelector((state: any) => state.likesReducer);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        // showLabel: false,
        allowFontScaling: true,
        labelStyle: {
          textTransform: "none",
        },
        style: styles.bottomTabOptions,
        showIcon: true,
        tabStyle: {
          overflow: "hidden",
        },
        bounces: true,
        activeTintColor: Colors.primary,
        indicatorStyle: {
          backgroundColor: Colors.primary,
          margin: 0,
        },
        pressOpacity: 0.2,

        inactiveTintColor: Colors.secondary,
        renderBadge: ({ route }) => (
          <>
            {(route as any).name === "Favorites" && (
              <View
                style={{
                  backgroundColor: Colors.primary,
                  height: 20,
                  width: 20,
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  right: 10,
                  top: 5,
                  padding: 1,
                }}
              >
                <Text
                  style={{
                    color: Colors.white,
                  }}
                >
                  {(route as any).name === "Favorites" && count}
                </Text>
              </View>
            )}
          </>
        ),
      }}
      swipeEnabled={true}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon focused={focused} icon="home" text="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon focused={focused} icon="heart" text="Favorite" />
          ),

          // tabBarBadge: count,
          // tabBarColor: "pink",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon focused={focused} icon="user" text="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  bottomTabOptions: {
    // height: 70,
    position: "absolute",
    bottom: 5,
    left: 10,
    right: 10,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    backfaceVisibility: "hidden",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#00000071",
    shadowRadius: 50,
    shadowOpacity: 0.2,
    elevation: 5,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
