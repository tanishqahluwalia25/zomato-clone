import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../resources/Colors";
import withSafeArea from "../../utils/withSafeArea";
import { Feather as Icon } from "@expo/vector-icons";

const Profile = () => {
  return (
    <>
      <Text style={styles.header}>Profile</Text>
      <View style={{ height: 50 }} />
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.detailsWrapper}>
          <View style={styles.ImageWrapper}>
            <Image
              source={{
                uri: "https://www.placementhansraj.com/images/Tanishq.jpg",
              }}
              style={styles.imageStyles}
            />
          </View>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.label}>Name </Text>
            <Text style={styles.value}>Tanishq Ahluwalia</Text>
            <Text style={styles.label}>Contact Number</Text>
            <Text style={styles.value}>+91 89200 24356</Text>

            <Pressable
              onPress={() => {
                Linking.openURL(
                  "https://www.linkedin.com/in/tanishqahluwalia/"
                );
              }}
            >
              <Text
                style={[styles.label, { fontSize: 20, color: Colors.primary }]}
              >
                Linked
                <Icon name="linkedin" size={20} color={Colors.primary} />
              </Text>
            </Pressable>
          </View>
        </View>
        <Pressable
          onPress={() => {
            Linking.openURL(
              "https://fonddefenselessatom.tanishqwalia25.repl.co/static/TANISHQ%20AHLUWALIA.pdf"
            );
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Download CV</Text>
        </Pressable>
      </ScrollView>
    </>
  );
};

export default withSafeArea(Profile);

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  button: {
    alignSelf: "center",
    marginVertical: 100,
    backgroundColor: Colors.primary,
    padding: 20,
  },
  detailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    padding: 10,
    fontSize: 25,
    fontWeight: "600",
    color: "white",
    backgroundColor: Colors.primary,
    marginBottom: -10,
  },
  ImageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 150,
    borderColor: Colors.primary,
    borderWidth: 5,
    height: 120,
    width: 120,
  },
  imageStyles: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  value: {
    color: Colors.primary,
    fontSize: 20,
    paddingBottom: 10,
  },
  label: {
    color: Colors.secondary,
  },
});
