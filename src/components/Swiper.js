import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";
import movieList from "../mockdata/movieList.json";
import SwiperContent from "./SwiperContent";
import SwiperHeader from "../components/SwiperHeader";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const width = wp("100%");

export default class Swiper extends Component {
  _scrollX = new Animated.Value(0);
  render() {
    let position = Animated.divide(this._scrollX, width);
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <SwiperHeader navigation={this.props.navigation} />
        </View>

        {/* The content of scroll view */}
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

        {/* Indicator */}
        <View style={styles.indicatorWrapper}>
          {movieList.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={i}
                style={[
                  styles.indicator,
                  {
                    opacity
                  }
                ]}
              />
            );
          })}
        </View>
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
  },
  indicatorWrapper: {
    flexDirection: "row",
    zIndex: 1,
    position: "absolute",
    top: hp("8%"),
    left: 0,
    right: 0,
    justifyContent: "center"
  },
  indicator: {
    height: 8,
    width: 8,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 4
  }
});
