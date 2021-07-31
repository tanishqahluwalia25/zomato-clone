import React, { useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Colors from "../../resources/Colors";
import { Feather as Icon } from "@expo/vector-icons";
import Location from "./Location";
import Tag from "./Tag";

const Header = ({ value, onChangeText }: any) => {
  const textInput = useRef(null);
  return (
    <View style={styles.wrapper}>
      <View style={styles.searchBar}>
        <Pressable
          onPress={() => {
            (textInput?.current as any)?.focus();
          }}
        >
          <Icon name="search" size={20} color={Colors.secondary} />
        </Pressable>
        <TextInput
          placeholder="Search.."
          style={styles.input}
          placeholderTextColor={Colors.secondary}
          value={value}
          onChangeText={(text) => {
            onChangeText(text);
          }}
          ref={textInput}
        />
      </View>
      <ScrollView
        horizontal
        bounces={true}
        showsHorizontalScrollIndicator={false}
      >
        <Tag>Indian</Tag>
        <Tag>Continental</Tag>
        <Tag>Italian</Tag>
        <Tag>Chinese</Tag>
        <Tag>Budget</Tag>
        <Tag>Home Cooked</Tag>
        <Tag>Party</Tag>
      </ScrollView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginLeft: 10,
  },
  searchBar: {
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
  },
  wrapper: {
    backgroundColor: Colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 0,
    width: "100%",
  },
});
