import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Assets from "../mockdata/Assets";
import PosterImage from "./PosterImage";
import BackgroundCircle from "./BackgoundCircle";
import SwiperText from "./SwiperText";

const windowWidth = wp("100%");

export default class SwiperContent extends Component {
  render() {
    const item = this.props.item;
    const i = this.props.i;
    const inputRange = [
      (i - 2) * windowWidth,
      (i - 1) * windowWidth,
      i * windowWidth,
      i + 2 * windowWidth
    ];

    const imageScale = this.props._scrollX.interpolate({
      inputRange,
      outputRange: [1, 0.4, 1, 0.4]
    });

    const imageOpacity = this.props._scrollX.interpolate({
      inputRange,
      outputRange: [1, 0.2, 1, 0.2]
    });

    return (
      <View key={item.id} style={[styles.contentWrapper]}>
        <PosterImage
          poster={Assets.posters[item.poster]}
          imageScale={imageScale}
          imageOpacity={imageOpacity}
          navigation={this.props.navigation}
          item={item}
        />
        <BackgroundCircle
          color1={item.posterPrimaryColor}
          color2={item.posterSecondaryColor}
          movie={item.poster}
          inputRange={inputRange}
          _scrollX={this.props._scrollX}
        />
        <SwiperText
          item={item}
          imageOpacity={imageOpacity}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentWrapper: {
    flexGrow: 1,
    height: hp("100%"),
    width: wp("100%"),
    alignItems: "center"
  }
});
