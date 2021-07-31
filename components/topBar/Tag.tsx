import React, { Children, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../resources/Colors";

const Tag = ({ children }: { children: string }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setPressed(!pressed);
      }}
      style={[styles.wrapper, pressed && { backgroundColor: Colors.white }]}
    >
      <Text style={[styles.text, pressed && { color: Colors.black }]}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Tag;

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
  wrapper: {
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "white",
    margin: 5,
  },
});
