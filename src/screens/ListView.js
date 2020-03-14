import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import SwiperHeader from "../components/SwiperHeader";
import ListViewTab from "../components/ListViewTabs";
import ListViewContent from "../components/ListViewContent";
import movieList from "../mockdata/movieList.json";
import comingSoon from "../mockdata/comingSoon.json";

const { width } = Dimensions.get("window");

export default class Index extends Component {
  state = {
    isInTheater: true
  };
  handleTabIndexChange = () => {
    this.setState({
      isInTheater: !this.state.isInTheater
    });
  };
  render() {
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
        <View style={styles.scrollViewContainer}>
          <ListViewContent
            items={this.state.isInTheater ? movieList : comingSoon}
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
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
  scrollViewContainer: {
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
