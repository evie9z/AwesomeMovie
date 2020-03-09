import React, { Component } from "react";
import { StyleSheet, Animated } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Svg, { Circle, LinearGradient, Defs, Stop } from "react-native-svg";

const windowWidth = wp("100%");

export default class BackgroundCircle extends Component {
  render() {
    const inputRange = this.props.inputRange;
    const rotate = this.props._scrollX.interpolate({
      inputRange,
      outputRange: ["0deg", "-90deg", "0deg", "90deg"]
    });
    const translateX = this.props._scrollX.interpolate({
      inputRange,
      outputRange: [-wp("27%"), windowWidth, -wp("27%"), -windowWidth]
    });
    const opacity = this.props._scrollX.interpolate({
      inputRange,
      outputRange: [1, 0, 1, 0]
    });
    const scale = this.props._scrollX.interpolate({
      inputRange,
      outputRange: [1.5, 0.5, 1.5, 0.5]
    });

    return (
      <Animated.View
        style={[
          styles.bgLinearGradientCircle,
          {
            transform: [
              {
                rotate
              },
              {
                translateX
              },
              {
                translateY: -hp("33%")
              },
              {
                scale
              }
            ],
            opacity
          }
        ]}
      >
        <Svg height={hp("100%")} width={hp("100%")}>
          <Defs>
            <LinearGradient id={this.props.movie} x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={this.props.color1} stopOpacity="1" />
              <Stop offset="1" stopColor={this.props.color2} stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Circle
            cx={hp("50%")}
            cy={hp("50%")}
            r={hp("40%")}
            fill={`url(#${this.props.movie})`}
          />
        </Svg>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  bgLinearGradientCircle: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1
  }
});
