import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotColor="#FFF"
        activeDotColor="#080808"
      >
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={0}
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Movie 1</Text>
          </View>
          <View style={styles.slide1}>
            <Text style={styles.text}>Details</Text>
          </View>
        </Swiper>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={0}
          autoplay={true}
        >
          <View style={styles.slide2}>
            <Text style={styles.text}>Movie 2</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Details</Text>
          </View>
        </Swiper>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={0}
        >
          <View style={styles.slide3}>
            <Text style={styles.text}>Movie 3</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Details</Text>
          </View>
        </Swiper>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
