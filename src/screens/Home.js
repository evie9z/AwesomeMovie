import { FluidNavigator } from "react-navigation-fluid-transitions";
import Swiper from "../components/Swiper";
import MovieDetail from "./MovieDetail";
import ListView from "./ListView";
import React, { Component } from "react";

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
  static router = Navigator.router;

  render() {
    return <Navigator navigation={this.props.navigation} />;
  }
}
