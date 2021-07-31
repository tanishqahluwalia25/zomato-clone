import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";
import Colors from "../../resources/Colors";
import { useDispatch, useSelector } from "react-redux";
import { likeAction, unlikeAction } from "../../redux/likes/likesActions";
// import { detailsInterface } from "react-bootstrap/esm/Image";

export interface detailsInterface {
  name: string;
  description: string;
  rating: number;
  price: number;
  cuisine: string;
  location: string;
  id: number;
  reviews?: any[];
}

const RestaurantCard = ({
  name,
  description,
  rating,
  price,
  cuisine,
  location,
  reviews,
  id,
}: detailsInterface) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const { likedList } = useSelector((state: any) => state.likesReducer);
  //   const [likedList, setLikedList] = useState(likes.liked);

  const like = (data: any) => {
    dispatch(likeAction(data));
  };
  const unlike = (id: number) => {
    dispatch(unlikeAction(id));
  };

  useEffect(() => {
    if (
      likedList.filter((item: detailsInterface) => item.id === id).length !== 0
    ) {
      setLiked(true);
    } else setLiked(false);
  }, [likedList]);

  return (
    <View
      style={{
        borderRadius: 15,
        overflow: "hidden",
        margin: 10,
        borderColor: "#0000001c",
        borderWidth: 0.2,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "#00000039",
        shadowRadius: 10,
        shadowOpacity: 0.5,
        elevation: 3,
        maxWidth: 400,
        width: "95%",
        // marginHorizontal: "auto",
      }}
    >
      <Image
        source={{
          uri:
            "https://source.unsplash.com/random?" +
            cuisine +
            ",food," +
            "location",
        }}
        style={{
          resizeMode: "cover",
          width: "100%",
          height: 200,
        }}
      />

      <Pressable
        onPress={() => {
          if (liked) {
            unlike(id);
          } else
            like({
              name,
              description,
              rating,
              price,
              cuisine,
              location,
              reviews,
              id,
            });
        }}
        style={{
          position: "absolute",
          right: 10,
          top: 10,
          borderRadius: 55,
          backgroundColor: "white",
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          name={liked ? "heart" : "hearto"}
          size={18}
          color={liked ? Colors.primary : "black"}
        />
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View>
          <Text>{name}</Text>
          <Text>{description}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text
            style={{
              backgroundColor: "darkgreen",
              paddingHorizontal: 8,
              paddingVertical: 2,
              borderRadius: 5,
              color: "white",
            }}
          >
            {rating} <Icon name="staro" size={15} />
          </Text>
          <Text>₹{price} for two</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({});
