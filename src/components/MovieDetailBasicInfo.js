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
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Introduction */}
        <View style={styles.introduction}>
          <View style={styles.directorInfo}>
            <Text style={styles.directorTitle}>Director</Text>
            <Text style={[styles.directorName, styles.normalText]}>
              {item.director.map((director, i) => `${director}`)}
            </Text>
          </View>
          <View style={styles.directorInfo}>
            <Text style={styles.directorTitle}>Stars</Text>
            <Text style={[styles.directorName, styles.normalText]}>
              {item.actors.map((actor, i) =>
                i == 0 ? `${actor}` : `, ${actor}`
              )}
            </Text>
          </View>
          <Text style={styles.normalText}>{item.brief}</Text>
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
    justifyContent: "center"
  },
  basic: {
    width: contentWrapperWidth - 133,
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
    fontSize: 16,
    fontFamily: "din",
    color: "#FFF"
  },
  moviePosterWrapper: {
    height: 151,
    width: 103,
    marginRight: 20,
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
  divider: {
    marginTop: 30,
    marginBottom: 30,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: contentWrapperWidth
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
    fontWeight: 600
  },
  directorName: {
    textAlign: "left"
  }
});
