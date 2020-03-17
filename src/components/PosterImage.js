import React, { Component } from "react";
import { StyleSheet, View, Animated, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class PosterImage extends Component {
  render() {
    const CurrId = this.props.item.id;
    return (
      <View style={[styles.moviePosterWrapper]}>
        <TouchableOpacity
          key={CurrId}
          activeOpacity={1}
          onPress={() =>
            this.props.navigation.navigate("MovieDetail", {
              itemId: CurrId
            })
          }
        >
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
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  moviePosterWrapper: {
    marginTop: hp("12%"),
    marginBottom: 30,
    height: hp("55%"),
    width: (hp("55%") * 2) / 3,
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
    width: (hp("55%") * 2) / 3,
    height: hp("55%"),
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center"
  }
});
