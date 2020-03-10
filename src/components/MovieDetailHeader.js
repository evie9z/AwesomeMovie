import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Assets from "../mockdata/Assets";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class MovieDetailHeader extends Component {
  render() {
    return (
      <View>
        <View style={styles.menuIconWrapper}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image style={styles.icon} source={Assets.icon["menu"]} />
          </TouchableOpacity>
        </View>
        <View style={styles.cityWrapper}>
          <Text style={styles.city}>Seattle, WA</Text>
        </View>
        <View style={styles.viewIconWrapper}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
            <Image style={styles.icon} source={Assets.icon["close"]} />
          </TouchableOpacity>
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
    width: 100,
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
    width: 100,
    backgroundColor: "#fff",
    opacity: 0.3
  },
  city: {
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
    fontWeight: 600,
    opacity: 1,
    textAlignVertical: "center"
  }
});
