import React, { Component } from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import movieList from "../mockdata/data";
import * as Font from "expo-font";
import MovieDetailHeader from "../components/MovieDetailHeader";
import MovieDetailBasicInfo from "../components/MovieDetailBasicInfo";
import MovieDetailShowTime from "../components/MovieDetailShowTime";

export default class MovieDetail extends Component {
  componentDidMount() {
    Font.loadAsync({
      rockwell: require("../assets/fonts/Rockwell.ttc"),
      din: require("../assets/fonts/DINBold.ttf")
    });
  }
  _scrollX = new Animated.Value(0);
  render() {
    const itemId = this.props.navigation.getParam("itemId", "NO-ID");
    const item = movieList[itemId];
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <MovieDetailHeader navigation={this.props.navigation} />
        </View>
        <View style={styles.contentWrapper}>
          <View>
            <MovieDetailBasicInfo item={item} />
          </View>
          <View>
            <MovieDetailShowTime item={item} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#2C2C2C"
  },
  headerContainer: {
    zIndex: 1
  },
  contentWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 80,
    flexDirection: "column"
  }
});
