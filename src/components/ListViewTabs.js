import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Animated,
  TouchableOpacity
} from "react-native";

const WHITE = "#fff";
const GREY = "#707070";
const IN_THEATER_POSITION = 0;
const COMING_SOON_POSITION = 129;
const FONT_BOLD = 600;
const FONT_NORMAL = 500;

export default class Index extends Component {
  _animatedX = new Animated.Value(0);

  tabBarOnClick = isInTheater => {
    if (isInTheater != this.props.isInTheater) {
      this.props.handleTabIndexChange();
      this.animateIndicator(isInTheater);
    }
  };
  animateIndicator = isInTheater => {
    Animated.timing(this._animatedX, {
      toValue: isInTheater ? IN_THEATER_POSITION : COMING_SOON_POSITION
    }).start();
  };

  render() {
    const inputRangeX = [IN_THEATER_POSITION, COMING_SOON_POSITION];
    const tabColor0 = this._animatedX.interpolate({
      inputRange: inputRangeX,
      outputRange: [WHITE, GREY]
    });
    const tabColor1 = this._animatedX.interpolate({
      inputRange: inputRangeX,
      outputRange: [GREY, WHITE]
    });
    const tabFontWeight0 = this._animatedX.interpolate({
      inputRange: inputRangeX,
      outputRange: [FONT_BOLD, FONT_NORMAL]
    });
    const tabFontWeight1 = this._animatedX.interpolate({
      inputRange: inputRangeX,
      outputRange: [FONT_NORMAL, FONT_BOLD]
    });
    return (
      <View style={styles.container}>
        <View style={styles.tabText}>
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => this.tabBarOnClick(true)}>
              <Animated.Text
                style={[
                  styles.tab,
                  {
                    color: tabColor0,
                    fontWeight: tabFontWeight0
                  }
                ]}
              >
                IN THEATERS
              </Animated.Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => this.tabBarOnClick(false)}>
              <Animated.Text
                style={[
                  styles.tab,
                  {
                    color: tabColor1,
                    fontWeight: tabFontWeight1
                  }
                ]}
              >
                COMING SOON
              </Animated.Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.indicatorContainer}>
          <Animated.View
            style={[styles.indicator, { left: this._animatedX }]}
          ></Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    height: 60,
    width: 300
  },
  tabText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  tab: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Roboto",
    textAlignVertical: "center"
  },
  indicatorContainer: {
    paddingTop: 8,
    paddingLeft: 35
  },
  indicator: {
    width: 95,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#fff"
  }
});
