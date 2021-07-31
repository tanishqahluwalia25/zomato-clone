// import {  } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { useSelector } from "react-redux";
import RestaurantCard from "../../components/cards/RestaurantCard";
// import Animated from "react-native-reanimated";
import withSafeArea from "../../utils/withSafeArea";
import Header from "../../components/topBar/Header";
import Location from "../../components/topBar/Location";

const LOCATION_HEIGHT = 40;
const Home = ({ navigation }: any) => {
  const screenRef = useRef(null);
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, LOCATION_HEIGHT);
  const headerY = diffClampScrollY.interpolate({
    inputRange: [0, LOCATION_HEIGHT],
    outputRange: [LOCATION_HEIGHT, 0],
  });

  const { isLoading, loadResponse } = useSelector(
    (state: any) => state.restaurantsReducer
  );

  const [searchString, setSearchString] = useState<string>("");

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.locationStyles, { height: headerY }]}>
        <Location navigation={navigation} />
      </Animated.View>

      <Animated.View style={{ flex: 1 }}>
        <Header value={searchString} onChangeText={setSearchString} />
        <Animated.ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: scrollY } },
              },
            ],
            { useNativeDriver: false }
          )}
        >
          <View>
            {loadResponse.restaurants &&
              loadResponse.restaurants
                .filter(
                  (item: any) =>
                    item.name
                      .toLowerCase()
                      .search(searchString.toLowerCase()) >= 0 ||
                    searchString.length === 0
                )
                .map((item: any) => {
                  return (
                    <RestaurantCard
                      name={item.name}
                      description={item.cuisine_type + ", " + item.neighborhood}
                      key={item.id}
                      rating={4.4}
                      price={100}
                      id={item.id}
                      cuisine={item.cuisine_type}
                      location={item.neighborhood}
                      reviews={[]}
                    />
                  );
                })}
            <View style={{ height: 120 }} />
          </View>
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
};

export default withSafeArea(Home);

const styles = StyleSheet.create({
  locationStyles: {
    left: 0,
    right: 0,
    top: 0,
    marginBottom: -1,
  },
});
