import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Assets from "../mockdata/Assets";

const contentWrapperWidth = wp("90%");

export default class Index extends Component {
  titleFontSize = titleLen => {
    return titleLen > 15 ? 20 : 24;
  };
  render() {
    const item = this.props.item;
    return (
      <View style={[styles.textWrapper]}>
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
            <Text
              style={[
                styles.title,
                { fontSize: this.titleFontSize(item.title.length) }
              ]}
            >
              {item.title}
            </Text>
            <View style={styles.averageRating}>
              <Text style={[styles.displayText]}>{item.averageRating}/10</Text>
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
            <View style={styles.labels}>
              {item.labels.map((label, i) => (
                <Text style={[styles.label]}>{label}</Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: contentWrapperWidth
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: "#464646",
    borderRadius: 8
  },
  basic: {
    width: contentWrapperWidth - 128,
    alignItems: "flex-start",
    flexDirection: "column"
  },
  ratingWrapper: {
    marginTop: 10,
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
    paddingBottom: 2,
    marginRight: 5,
    borderRadius: 10,
    height: 20,
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    textAlignVertical: "center",
    includeFontPadding: false
  },
  averageRating: {
    marginTop: 30,
    alignItems: "flex-start"
  },
  title: {
    fontFamily: "rockwell",
    color: "#FFF",
    textAlign: "left"
  },
  normalText: {
    fontSize: 14,
    color: "#FFF"
  },
  displayText: {
    fontSize: 14,
    fontFamily: "din",
    color: "#FFF"
  },
  moviePosterWrapper: {
    height: 151,
    width: 103,
    marginRight: 15,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    alignItems: "center",
    overflow: "hidden"
  },
  moviePoster: {
    height: 151,
    width: 103,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center"
  },
  introduction: {
    width: contentWrapperWidth
  },
  directorInfo: {
    marginBottom: 10,
    flexDirection: "row"
  },
  directorTitle: {
    width: 70,
    textAlign: "left",
    fontSize: 14,
    color: "#FFF",
    fontWeight: "600"
  },
  directorName: {
    textAlign: "left"
  }
});
