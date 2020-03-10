import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SwiperHeader from "../components/SwiperHeader";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <SwiperHeader navigation={this.props.navigation} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Profile page!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#2C2C2C"
  },
  headerContainer: {
    zIndex: 1
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: "rockwell",
    fontSize: 30,
    color: "#FFF",
    textAlign: "center"
  }
});
