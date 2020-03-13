import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SwiperHeader from "../components/SwiperHeader";
import ListViewTab from "../components/ListViewTabs";

const { width } = Dimensions.get("window");

export default class Index extends Component {
  state = {
    isInTheater: true
  };
  handleTabIndexChange = () => {
    console.log("Gets to handleTabIndexChange");
    this.setState({
      isInTheater: !this.state.isInTheater
    });
  };
  render() {
    console.log("isInTheater after: " + this.state.isInTheater);
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <SwiperHeader navigation={this.props.navigation} />
        </View>
        <View style={styles.tabContainer}>
          <ListViewTab
            handleTabIndexChange={this.handleTabIndexChange}
            isInTheater={this.state.isInTheater}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>List View!</Text>
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
    zIndex: 1,
    backgroundColor: "#2C2C2C",
    height: 60,
    width: width
  },
  tabContainer: {
    backgroundColor: "#2C2C2C",
    height: 50,
    width: width,
    justifyContent: "center",
    alignItems: "center"
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
