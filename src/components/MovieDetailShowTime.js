import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import moment from "moment";

const contentWrapperWidth = wp("90%");

export default class Index extends Component {
  state = {
    dateIndex: 0,
    clicked: false
  };
  componentDidMount() {
    this.EasingIn(300);
  }
  componentDidUpdate() {
    this.EasingIn(0);
  }
  _cardOpacity = new Animated.Value(0);
  _transferY = new Animated.Value(10);

  EasingIn(delay) {
    Animated.timing(this._cardOpacity, {
      toValue: 1,
      duration: 500,
      delay: delay,
      easing: Easing.cubic
    }).start();
    Animated.timing(this._transferY, {
      toValue: 0,
      duration: 500,
      delay: delay,
      easing: Easing.linear
    }).start();
  }

  handleOnclick = index => {
    this._cardOpacity = new Animated.Value(0);
    this._transferY = new Animated.Value(10);
    this.setState({
      dateIndex: index === 3 ? 0 : index,
      clicked: index === 3 ? true : false
    });
  };

  render() {
    const item = this.props.item;
    const labelColor = this.props.item.posterPrimaryColor;
    return (
      <View style={[styles.contentWrapper]}>
        <View style={[styles.datesWrapper]}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.handleOnclick(0)}
          >
            <View style={[styles.dateContainer]}>
              <Text
                style={
                  this.state.dateIndex === 0
                    ? styles.activeDate
                    : styles.inactiveDate
                }
              >
                Today
              </Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.dateDivider]}>
            <Text style={[styles.inactiveDate]}>|</Text>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.handleOnclick(1)}
          >
            <View style={[styles.dateContainer]}>
              <Text
                style={
                  this.state.dateIndex === 1
                    ? styles.activeDate
                    : styles.inactiveDate
                }
              >
                Tomorrow
              </Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.dateDivider]}>
            <Text style={[styles.inactiveDate]}>|</Text>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.handleOnclick(2)}
          >
            <View style={[styles.dateContainer]}>
              <Text
                style={
                  this.state.dateIndex === 2
                    ? styles.activeDate
                    : styles.inactiveDate
                }
              >
                Thu, Mar 19
              </Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.dateDivider]}>
            <Text style={[styles.inactiveDate]}>|</Text>
          </View>

          <TouchableOpacity
            activeOpacity={3}
            onPress={() => this.handleOnclick(3)}
          >
            <View style={[styles.dateContainer]}>
              <Text
                style={
                  this.state.clicked ? styles.activeDate : styles.inactiveDate
                }
              >
                Fri, Mar 20
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Divider */}
        <View style={[styles.divider, { opacity: 0.6 }]} />

        {item.showtimes[this.state.dateIndex].map((theater, idex) => (
          <Animated.View
            style={[
              styles.theaterListWrapper,
              { opacity: this._cardOpacity, top: this._transferY }
            ]}
          >
            <View style={[styles.theaterWrapper]}>
              <View style={styles.theater}>
                <Text style={[styles.theaterText, { fontWeight: "600" }]}>
                  {theater.theater}
                </Text>
              </View>
              <View style={styles.theater}>
                <Text style={[styles.normalText, { opacity: 0.6 }]}>·</Text>
              </View>
              <View style={styles.theater}>
                <Text style={[styles.normalText, { opacity: 0.6 }]}>
                  {theater.distance}
                </Text>
              </View>
            </View>

            <View style={[styles.showTimesWrapper]}>
              <View style={styles.standard}>
                <Text style={[styles.normalText]}>Standard</Text>
              </View>

              <View style={styles.showtimes}>
                {theater.showtimes.standard.map((t, i) => (
                  <Text
                    style={[styles.showtime, { backgroundColor: labelColor }]}
                  >
                    {moment(t).format("LT")}
                  </Text>
                ))}
              </View>
            </View>
            <View style={[styles.divider, { opacity: 0.2 }]} />
          </Animated.View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    marginTop: 5,
    alignItems: "center",
    flexDirection: "column",
    width: contentWrapperWidth
  },
  divider: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: contentWrapperWidth
  },
  datesWrapper: {
    flexDirection: "row",
    paddingBottom: 20,
    paddingTop: 20,
    justifyContent: "flex-start",
    width: contentWrapperWidth
  },
  dateDivider: {
    marginLeft: 10,
    marginRight: 10
  },
  inactiveDate: {
    fontSize: 14,
    opacity: 0.4,
    color: "#fff"
  },
  activeDate: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff"
  },
  normalText: {
    fontSize: 14,
    color: "#FFF"
  },
  theaterListWrapper: {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: contentWrapperWidth,
    marginTop: 20
  },
  theaterWrapper: {
    flexDirection: "row"
  },
  theaterText: {
    fontSize: 14,
    color: "#FFF"
  },
  theater: {
    paddingRight: 5
  },
  showTimesWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: contentWrapperWidth,
    marginTop: 10,
    marginBottom: 20
  },
  standard: {
    marginRight: 15
  },
  showtimes: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  showtime: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 5,
    borderRadius: 10,
    height: 25,
    fontSize: 12,
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 5,
    color: "#2C2C2C",
    textAlignVertical: "center",
    includeFontPadding: false
  }
});
