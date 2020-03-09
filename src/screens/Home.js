import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";
import movieList from "../mockdata/data";
import SwiperContent from "../components/SwiperContent";
import * as Font from "expo-font";

export default class Home extends Component {
  componentDidMount() {
    Font.loadAsync({
      rockwell: require("../assets/fonts/Rockwell.ttc"),
      din: require("../assets/fonts/DINBold.ttf")
    });
  }
  _scrollX = new Animated.Value(0);
  render() {
    return (
      <View style={styles.container}>
        <Animated.ScrollView
          pagingEnabled
          scrollEventThrottle={16}
          horizontal
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this._scrollX } } }],
            { useNativeDriver: true }
          )}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {movieList.map((item, i) => (
            <SwiperContent item={item} i={i} _scrollX={this._scrollX} />
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#2C2C2C"
  },
  scrollViewContainier: {
    alignItems: "center",
    justifyContent: "center"
  }
});
