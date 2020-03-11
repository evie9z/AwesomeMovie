import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import movieList from "../mockdata/data";
import MovieDetailHeader from "../components/MovieDetailHeader";
import MovieDetailBasicInfo from "../components/MovieDetailBasicInfo";
import MovieDetailShowTime from "../components/MovieDetailShowTime";
const { width } = Dimensions.get("window");

export default class MovieDetail extends Component {
  render() {
    const itemId = this.props.navigation.getParam("itemId", "NO-ID");
    const item = movieList[itemId];
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <MovieDetailHeader navigation={this.props.navigation} />
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.contentWrapper}>
            <View>
              <MovieDetailBasicInfo item={item} />
            </View>
            <View>
              <MovieDetailShowTime item={item} />
            </View>
          </View>
        </ScrollView>
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
  scrollViewContainier: {
    alignItems: "center",
    justifyContent: "center"
  },
  headerContainer: {
    zIndex: 1,
    backgroundColor: "#2C2C2C",
    height: 60,
    width: width
  },
  contentWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    flexDirection: "column"
  }
});
