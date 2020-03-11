import { FluidNavigator } from "react-navigation-fluid-transitions";
import Swiper from "../components/Swiper";
import MovieDetail from "./MovieDetail";
import ListView from "./ListView";
import React, { Component } from "react";
import * as Font from "expo-font";

const Navigator = FluidNavigator(
  {
    MovieSwiper: { screen: Swiper },
    MovieDetail: { screen: MovieDetail },
    ListView: { screen: ListView }
  },
  {
    duration: 1000
  }
);

export default class Home extends Component {
  componentDidMount() {
    Font.loadAsync({
      rockwell: require("../assets/fonts/Rockwell.ttc"),
      din: require("../assets/fonts/DINBold.ttf")
    });
  }

  static router = Navigator.router;

  render() {
    return <Navigator navigation={this.props.navigation} />;
  }
}
