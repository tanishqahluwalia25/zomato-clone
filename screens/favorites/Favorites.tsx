import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import RestaurantCard, {
  detailsInterface,
} from "../../components/cards/RestaurantCard";
import Colors from "../../resources/Colors";
import withSafeArea from "../../utils/withSafeArea";
import Header from "../home/Header";

const Favorites = () => {
  const { likedList } = useSelector((state: any) => state.likesReducer);
  const [searchString, setSearchString] = useState("");
  return (
    <>
      <Text
        style={{
          padding: 10,
          fontSize: 25,
          fontWeight: "600",
          color: "white",
          backgroundColor: Colors.primary,
          marginBottom: -10,
        }}
      >
        Favorites
      </Text>
      <Header value={searchString} onChangeText={setSearchString} />
      <ScrollView>
        {likedList.length === 0 && (
          <View>
            <Text
              style={{
                textAlign: "center",
                paddingVertical: 10,
                fontWeight: "600",
                color: Colors.secondary,
                fontSize: 20,
              }}
            >
              No Favorites Added
            </Text>
          </View>
        )}
        {likedList
          .filter(
            (item: any) =>
              item.name.toLowerCase().search(searchString.toLowerCase()) >= 0 ||
              searchString.length === 0
          )
          .map((item: detailsInterface) => (
            <RestaurantCard {...item} key={item.id} />
          ))}
        <View style={{ height: 120 }} />
      </ScrollView>
    </>
  );
};

export default withSafeArea(Favorites);
