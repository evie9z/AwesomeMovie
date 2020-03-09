import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const windowWidth = wp("100%");

export default class SwiperText extends Component {
  render() {
    const item = this.props.item;

    return (
      <Animated.View style={[{ opacity: this.props.imageOpacity }]}>
        <Text style={[styles.font, styles.title]}>{item.title}</Text>
        <Text style={[styles.font, styles.normalText]}>{item.rating}</Text>
        <Text style={[styles.font, styles.normalText]}>
          {item.runtimeMinutes}
        </Text>
        <Text style={[styles.font, styles.displayText]}>
          {item.averageRating}
        </Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "monospace",
    color: "#222"
  },
  metaContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    padding: 15
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FFF"
  },
  normalText: {
    fontSize: 14,
    marginVertical: 15,
    textAlign: "center",
    color: "#FFF"
  },
  displayText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#FFF"
  }
});
