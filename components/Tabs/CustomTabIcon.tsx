import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../resources/Colors";
import { Feather as Icon } from "@expo/vector-icons";

const CustomTabIcon = ({ focused, icon, text }: any) => {
  return (
    <View style={styles.bottomTab}>
      <Icon
        color={focused ? Colors.primary : Colors.secondary}
        name={icon}
        size={focused ? 24 : 24}
      />
      {/* <Text
        style={{
          color: focused ? Colors.primary : Colors.secondary,
          fontWeight: focused ? "700" : "500",
        }}
      >
        {text}
      </Text> */}
    </View>
  );
};

export default CustomTabIcon;

const styles = StyleSheet.create({
  bottomTab: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
  },
});
