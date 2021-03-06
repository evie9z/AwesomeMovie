import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Assets from "../mockdata/Assets";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SwiperHeader extends Component {
  render() {
    const currentPage = this.props.navigation.state.routeName;
    return (
      <View>
        <View style={styles.menuIconWrapper}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image style={styles.icon} source={Assets.icon["menu"]} />
          </TouchableOpacity>
        </View>
        <View style={styles.cityWrapper}>
          <Text style={styles.city}>98005</Text>
        </View>
        <View style={styles.cityBackground} />
        <View style={styles.viewIconWrapper}>
          <TouchableOpacity
            onPress={() => {
              currentPage == "MovieSwiper"
                ? this.props.navigation.navigate("ListView")
                : this.props.navigation.navigate("MovieSwiper");
            }}
          >
            <Image style={styles.icon} source={Assets.icon["changeView"]} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchIconWrapper}>
          <Image style={styles.icon} source={Assets.icon["search"]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuIconWrapper: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 25,
    height: 25
  },
  viewIconWrapper: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 25,
    height: 25
  },
  searchIconWrapper: {
    position: "absolute",
    top: 20,
    right: 58,
    width: 25,
    height: 25
  },
  icon: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain"
  },
  cityWrapper: {
    position: "absolute",
    top: 20,
    left: 60,
    borderRadius: 5,
    width: 60,
    height: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  cityBackground: {
    position: "absolute",
    top: 20,
    left: 60,
    borderRadius: 5,
    height: 25,
    width: 60,
    backgroundColor: "#fff",
    opacity: 0.3
  },
  city: {
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    opacity: 1,
    textAlignVertical: "center"
  }
});
