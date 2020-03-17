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
        <Text style={styles.title}>Release Date</Text>
        <View style={styles.dateWrapper}>
          <Text style={styles.date}>{moment(item.showtimes).format("ll")}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    marginTop: 30,
    alignItems: "flex-start",
    flexDirection: "column",
    width: contentWrapperWidth
  },
  title: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "600",
    textAlign: "left"
  },
  dateWrapper: {
    height: 20,
    justifyContent: "center",
    marginTop: 10
  },
  date: {
    fontSize: 14,
    color: "#FFF",
    marginRight: 10,
    justifyContent: "center"
  }
});
