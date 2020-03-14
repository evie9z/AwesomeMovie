import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";
import movieList from "../mockdata/movieList.json";
import SwiperContent from "./SwiperContent";
import SwiperHeader from "../components/SwiperHeader";

export default class Swiper extends Component {
  _scrollX = new Animated.Value(0);
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <SwiperHeader navigation={this.props.navigation} />
        </View>
        <Animated.ScrollView
          pagingEnabled
          scrollEventThrottle={16}
          horizontal
          showsHorizontalScrollIndicator={true}
          indicatorStyle={"white"}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this._scrollX } } }],
            { useNativeDriver: true }
          )}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {movieList.map((item, i) => (
            <SwiperContent
              item={item}
              i={i}
              _scrollX={this._scrollX}
              navigation={this.props.navigation}
            />
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
  headerContainer: {
    flexGrow: 1,
    zIndex: 1
  },
  scrollViewContainier: {
    alignItems: "center",
    width: 310,
    justifyContent: "center"
  }
});
