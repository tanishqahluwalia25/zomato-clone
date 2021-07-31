import React, { useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../../resources/Colors";
import { Feather as Icon } from "@expo/vector-icons";
import Location from "./Location";

const Header = ({ value, onChangeText }: any) => {
  const textInput = useRef(null);
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        paddingVertical: 5,
        paddingHorizontal: 10,
        // position: "absolute",
        top: 0,
        width: "100%",
      }}
    >
      {/* <Text style={{ color: "white", fontWeight: "600", fontSize: 28 }}>
        Browse
      </Text> */}

      <View
        style={{
          backgroundColor: "#fefefe",
          width: "100%",
          margin: "auto",
          borderRadius: 5,
          height: 28,
          marginVertical: 5,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => {
            (textInput?.current as any)?.focus();
          }}
        >
          <Icon name="search" size={20} color={Colors.secondary} />
        </Pressable>
        <TextInput
          placeholder="Search.."
          style={{ width: "100%", marginLeft: 10 }}
          placeholderTextColor={Colors.secondary}
          value={value}
          onChangeText={(text) => {
            onChangeText(text);
          }}
          ref={textInput}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
