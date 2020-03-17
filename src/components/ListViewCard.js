import React, { Component } from "react";
import { StyleSheet, View, Animated, Image, Text, Easing } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import moment from "moment";
import Assets from "../mockdata/Assets";

const contentWrapperWidth = wp("90%");

export default class Index extends Component {
  componentDidMount() {
    this.EasingIn();
  }
  _cardOpacity = new Animated.Value(0);
  _transferY = new Animated.Value(20);

  EasingIn() {
    Animated.timing(this._cardOpacity, {
      toValue: 1,
      duration: 500,
      delay: 300,
      easing: Easing.cubic
    }).start();
    Animated.timing(this._transferY, {
      toValue: 0,
      duration: 500,
      delay: 300,
      easing: Easing.linear
    }).start();
  }
  render() {
    const item = this.props.item;
    return (
      <Animated.View
        style={[
          styles.card,
          { opacity: this._cardOpacity, top: this._transferY }
        ]}
      >
        <View style={[styles.cardContainer]}>
          <View style={styles.info}>
            {/* Poster */}
            <View style={[styles.moviePosterWrapper]}>
              <Image
                style={[styles.moviePoster]}
                source={Assets.posters[item.poster]}
              />
            </View>

            {/* Other info */}
            <View style={styles.basic}>
              <Text style={[styles.title]}>{item.title}</Text>
              <View style={styles.averageRating}>
                {item.inTheater ? (
                  <Text style={[styles.displayText]}>
                    {item.averageRating}/10
                  </Text>
                ) : (
                  <Text style={[styles.displayText]}>
                    {moment(item.showtimes).format("ll")}
                  </Text>
                )}
              </View>
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
            </View>
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    marginBottom: 18,
    justifyContent: "center",
    backgroundColor: "#4B4B4B"
  },
  cardContainer: {
    paddingLeft: 12,
    height: 150,
    justifyContent: "center",
    alignContent: "center"
  },
  info: {
    flexDirection: "row"
  },
  basic: {
    width: contentWrapperWidth - 128,
    flexDirection: "column",
    justifyContent: "center"
  },
  ratingWrapper: {
    marginTop: 8,
    flexDirection: "row"
  },
  rating: {
    paddingRight: 15
  },
  averageRating: {
    alignItems: "flex-start"
  },
  title: {
    fontFamily: "rockwell",
    fontSize: 20,
    color: "#FFF",
    textAlign: "left",
    height: 60
  },
  normalText: {
    fontSize: 14,
    color: "#A5A5A5"
  },
  displayText: {
    fontSize: 16,
    fontFamily: "din",
    color: "#FFF"
  },
  moviePosterWrapper: {
    height: 126,
    width: 85,
    marginRight: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: "center",
    overflow: "hidden"
  },
  moviePoster: {
    height: 126,
    width: 85,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center"
  }
});
