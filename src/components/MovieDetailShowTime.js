import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Assets from "../mockdata/Assets";
import moment from "moment";

const contentWrapperWidth = wp("90%");

export default class Index extends Component {
  render() {
    const item = this.props.item;
    return (
      <View style={[styles.contentWrapper]}>
        <View style={[styles.showtimeWrapper]}>
          <Text style={styles.title}>Showtime</Text>
          <View style={styles.select}>
            <Text style={styles.selectText}>{item.showtimes[0].theater}</Text>
            <View style={styles.selectIconWrapper}>
              <Image style={styles.selectIcon} source={Assets.icon["select"]} />
            </View>
          </View>
          <View style={styles.select}>
            <Text style={styles.selectText}>Today</Text>
            <View style={styles.selectIconWrapper}>
              <Image style={styles.selectIcon} source={Assets.icon["select"]} />
            </View>
          </View>
          <View style={styles.times}>
            {item.showtimes[0].showtimes.map((t, i) => (
              <Text style={[styles.time]}>{moment(t).format("LT")}</Text>
            ))}
          </View>
        </View>
        <View style={[styles.buttonWrapper]}>
          <Text style={styles.buttonText}>GET TICKET</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
    width: contentWrapperWidth
  },
  showtimeWrapper: {
    width: contentWrapperWidth,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
    backgroundColor: "#545454",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  times: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row"
  },
  time: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    marginRight: 5,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
    height: 20,
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
    textAlignVertical: "center",
    includeFontPadding: false
  },
  title: {
    fontFamily: "rockwell",
    fontSize: 18,
    color: "#FFF",
    textAlign: "left"
  },
  select: {
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  selectText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#FFF",
    marginRight: 10,
    justifyContent: "center"
  },
  selectIconWrapper: {
    marginTop: 5,
    width: 13,
    height: 8
  },
  selectIcon: {
    width: 13,
    height: 8,
    resizeMode: "contain",
    justifyContent: "center"
  },
  buttonWrapper: {
    width: contentWrapperWidth,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#2C2C2C",
    textAlign: "center"
  }
});
