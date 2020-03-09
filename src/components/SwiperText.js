import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Assets from "../mockdata/Assets";

const windowWidth = wp("100%");
const contentWrapperWidth = (hp("60%") * 2) / 3;

export default class SwiperText extends Component {
  render() {
    const item = this.props.item;
    console.log("imagee: " + Assets.icon["star"]);
    return (
      <Animated.View
        style={[styles.textWrapper, { opacity: this.props.imageOpacity }]}
      >
        <Text style={[styles.title]}>{item.title}</Text>
        <View style={styles.info}>
          <View style={styles.basic}>
            <View style={styles.ratingWrapper}>
              <View style={styles.rating}>
                <Text style={[styles.normalText]}>{item.rating}</Text>
              </View>
              <View style={styles.rating}>
                <Text style={[styles.normalText]}>
                  {Math.floor(item.runtimeMinutes / 60)}h{" "}
                  {item.runtimeMinutes % 60}min
                </Text>
              </View>
            </View>
            <View style={styles.labels}>
              {item.labels.map((label, i) => (
                <Text
                  style={[
                    styles.label,
                    { backgroundColor: item.posterPrimaryColor }
                  ]}
                >
                  {label}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.averageRating}>
            <View style={styles.iconWrapper}>
              <Image style={styles.icon} source={Assets.icon["star"]} />
            </View>
            <View style={styles.averageRatingNum}>
              <Text style={[styles.displayText]}>{item.averageRating}</Text>
              <Text style={styles.displayTextSmall}>/10</Text>
            </View>
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  textWrapper: {
    flex: 1,
    alignItems: "flex-start",
    width: contentWrapperWidth
  },
  info: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  basic: {
    width: contentWrapperWidth * 0.8,
    alignItems: "flex-start",
    flexDirection: "column"
  },
  ratingWrapper: {
    flexDirection: "row"
  },
  rating: {
    paddingRight: 15
  },
  labels: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row"
  },
  label: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    marginRight: 5,
    borderRadius: 10,
    height: 20,
    fontSize: 12,
    textAlign: "center",
    color: "#2C2C2C",
    textAlignVertical: "center",
    includeFontPadding: false
  },
  averageRating: {
    width: contentWrapperWidth * 0.2,
    flexDirection: "column",
    alignItems: "center"
  },
  averageRatingNum: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontFamily: "rockwell",
    fontSize: 30,
    color: "#FFF",
    textAlign: "left"
  },
  normalText: {
    fontSize: 14,
    color: "#FFF"
  },
  displayText: {
    fontSize: 24,
    fontFamily: "din",
    color: "#FFF"
  },
  displayTextSmall: {
    fontSize: 12,
    fontFamily: "din",
    color: "#FFF"
  },
  iconWrapper: {
    marginBottom: 10,
    width: 25,
    height: 25
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain"
  }
});
