import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Assets from "../mockdata/Assets";

const contentWrapperWidth = wp("90%");

export default class Index extends Component {
  render() {
    const item = this.props.item;
    return (
      <View style={[styles.textWrapper]}>
        <View style={styles.introduction}>
          <View style={styles.trailerWrapper}>
            <View style={styles.playIconWrapper}>
              <Image style={styles.icon} source={Assets.icon["play"]} />
            </View>
            <Text style={[styles.normalText]}>Watch Trailer</Text>
          </View>
          <View style={styles.directorInfo}>
            <View style={[styles.directorTitleWrapper]}>
              <Text style={styles.directorTitle}>Director</Text>
            </View>
            <View style={[styles.directorNameWrapper]}>
              <Text style={[styles.directorName, styles.normalText]}>
                {item.director.map((director, i) => `${director}`)}
              </Text>
            </View>
          </View>
          <View style={styles.directorInfo}>
            <View style={[styles.directorTitleWrapper]}>
              <Text style={styles.directorTitle}>Stars</Text>
            </View>
            <View style={[styles.directorNameWrapper]}>
              <Text style={[styles.directorName, styles.normalText]}>
                {item.actors.map((actor, i) =>
                  i == 0 ? `${actor}` : `, ${actor}`
                )}
              </Text>
            </View>
          </View>
          <View style={styles.briefWrapper}>
            <Text style={styles.normalText}>{item.brief}</Text>
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
    marginTop: 15,
    width: contentWrapperWidth
  },
  trailerWrapper: {
    width: contentWrapperWidth,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#464646",
    flexDirection: "row",
    alignItems: "centers",
    justifyContent: "flex-start"
  },
  normalText: {
    fontSize: 14,
    color: "#FFF"
  },
  introduction: {
    width: contentWrapperWidth
  },
  directorInfo: {
    marginBottom: 8,
    flexDirection: "row"
  },
  directorTitleWrapper: {
    justifyContent: "flex-start",
    width: 65
  },
  directorTitle: {
    textAlign: "left",
    fontSize: 14,
    color: "#FFF",
    fontWeight: "600"
  },
  directorNameWrapper: {
    justifyContent: "flex-start",
    width: contentWrapperWidth - 65
  },
  directorName: {
    textAlign: "left"
  },
  briefWrapper: {
    marginTop: 12
  },
  playIconWrapper: {
    marginRight: 10,
    width: 19,
    height: 19
  },
  icon: {
    width: 19,
    height: 19,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain"
  }
});
