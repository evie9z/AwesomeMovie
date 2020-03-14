import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import moment from "moment";

const contentWrapperWidth = wp("90%");

export default class Index extends Component {
  render() {
    const item = this.props.item;
    return (
      <View style={[styles.contentWrapper]}>
        <View style={[styles.showtimeWrapper]}>
          <Text style={styles.title}>Release Date</Text>
          <View style={styles.dateWrapper}>
            <Text style={styles.date}>
              {moment(item.showtimes[0].showtimes[0]).format("ll")}
            </Text>
          </View>
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
    flexDirection: "column",
    backgroundColor: "#545454",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  title: {
    fontFamily: "rockwell",
    fontSize: 18,
    color: "#FFF",
    textAlign: "left"
  },
  dateWrapper: {
    height: 20,
    justifyContent: "center",
    marginTop: 10
  },
  date: {
    fontSize: 14,
    fontWeight: 600,
    color: "#FFF",
    marginRight: 10,
    justifyContent: "center"
  }
});
