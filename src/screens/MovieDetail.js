import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import MovieDetailHeader from "../components/MovieDetailHeader";
import MovieDetailBasicInfo from "../components/MovieDetailBasicInfo";
import MovieDetailShowTime from "../components/MovieDetailShowTime";
import MovieDetailReleaseDate from "../components/MovieDetailRelaseDate";
import MovieDetailTabs from "../components/MovieDetailTabs";
import MovieDetailCast from "../components/MovieDetailCast";
import movieList from "../mockdata/movieList.json";
import comingSoon from "../mockdata/comingSoon.json";

const { width } = Dimensions.get("window");

export default class MovieDetail extends Component {
  state = {
    isShowtime: true
  };
  handleTabIndexChange = () => {
    this.setState({
      isShowtime: !this.state.isShowtime
    });
  };
  render() {
    const itemId = this.props.navigation.getParam("itemId", "NO-ID");
    const itemFromMovieList = movieList[itemId];
    const itemFromComingSoon = comingSoon[itemId - 5];
    console.log("itemId: " + itemId);
    console.log("it: " + itemFromMovieList.id);
    console.log("name: " + itemFromMovieList.title);
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <MovieDetailHeader navigation={this.props.navigation} />
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.contentWrapper}>
            <View>
              <MovieDetailBasicInfo
                item={itemId > 4 ? itemFromComingSoon : itemFromMovieList}
              />
            </View>
            <View style={styles.tabContainer}>
              <MovieDetailTabs
                handleTabIndexChange={this.handleTabIndexChange}
                isShowtime={this.state.isShowtime}
              />
            </View>
            <View>
              {this.state.isShowtime ? (
                <View>
                  {itemId > 4 ? (
                    <MovieDetailReleaseDate item={itemFromComingSoon} />
                  ) : (
                    <MovieDetailShowTime item={itemFromMovieList} />
                  )}
                </View>
              ) : (
                <View>
                  <MovieDetailCast
                    item={itemId > 4 ? itemFromComingSoon : itemFromMovieList}
                  />
                </View>
              )}
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
  },
  tabContainer: {
    backgroundColor: "#2C2C2C",
    height: 50,
    width: width,
    justifyContent: "center",
    alignItems: "center"
  }
});
