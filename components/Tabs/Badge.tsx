import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../resources/Colors";

const Badge = ({ route, count }: any) => (
  <>
    <View style={styles.badgeWrapper}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  </>
);

export default Badge;

const styles = StyleSheet.create({
  badgeText: {
    color: Colors.white,
  },
  badgeWrapper: {
    backgroundColor: Colors.primary,
    height: 20,
    width: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    right: 10,
    top: 5,
    padding: 1,
  },
});
