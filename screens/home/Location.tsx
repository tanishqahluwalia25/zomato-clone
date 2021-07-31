import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import Colors from "../../resources/Colors";

const Location = ({ navigation }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.primary,
        paddingHorizontal: 10,
        // position: "absolute",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Icon name="map-pin" color="white" />
        <Text
          style={{
            color: "white",
            borderBottomWidth: 1,
            borderBottomColor: "white",
            paddingBottom: 2,
            borderStyle: "dashed",
            borderRadius: 5,
          }}
        >
          {" "}
          Home - 124/A MIG Flats, Delhi
        </Text>
      </View>
      <Pressable onPress={() => navigation.navigate("Profile")}>
        <Image
          source={{ uri: "https://source.unsplash.com/random?face" }}
          resizeMode="cover"
          style={{
            height: 25,
            width: 25,
            borderRadius: 45,
          }}
        />
      </Pressable>
    </View>
  );
};

export default Location;
