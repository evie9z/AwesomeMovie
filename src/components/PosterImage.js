import React, { Component } from "react";
import { StyleSheet, View, Image, Animated } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class PosterImage extends Component {
  render() {
    return (
      <View style={[styles.moviePosterWrapper]}>
        <Animated.Image
          style={[
            styles.moviePoster,
            {
              transform: [
                {
                  scale: this.props.imageScale
                }
              ],
              opacity: this.props.imageOpacity
            }
          ]}
          source={this.props.poster}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  moviePosterWrapper: {
    marginTop: 97,
    marginBottom: 50,
    height: hp("60%"),
    width: (hp("60%") * 2) / 3,
    // Border radius
    borderTopLeftRadius: hp("2%"),
    borderTopRightRadius: hp("2%"),
    borderBottomLeftRadius: hp("2%"),
    borderBottomRightRadius: hp("2%"),
    alignItems: "center",
    overflow: "hidden",
    // Image shadow
    shadowOffset: { width: 5, height: 7 },
    shadowColor: "#2C2C2C",
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 2
  },
  moviePoster: {
    flex: 1,
    width: (hp("60%") * 2) / 3,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center"
  }
});
