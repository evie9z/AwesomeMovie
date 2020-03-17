import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableOpacity
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Assets from "../mockdata/Assets";
import moment from "moment";

const contentWrapperWidth = (hp("60%") * 2) / 3;

export default class SwiperText extends Component {
  // Decrease the title font size if title is too long
  titleFontSize = titleLen => {
    return titleLen > 15 ? 24 : 30;
  };

  render() {
    const item = this.props.item;
    return (
      <Animated.View
        style={[styles.textWrapper, { opacity: this.props.imageOpacity }]}
      >
        <TouchableOpacity
          key={item.id}
          activeOpacity={1}
          onPress={() =>
            this.props.navigation.navigate("MovieDetail", {
              itemId: item.id
            })
          }
        >
          <Text
            style={[
              styles.title,
              { fontSize: this.titleFontSize(item.title.length) }
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>

        <View style={styles.info}>
          <View style={styles.basic}>
            <View style={styles.ratingWrapper}>
              <View style={styles.rating}>
                <Text style={[styles.normalText, { opacity: 0.6 }]}>
                  {item.rating}
                </Text>
              </View>
              <View style={styles.rating}>
                <Text style={[styles.normalText, { opacity: 0.6 }]}>·</Text>
              </View>
              <View style={styles.rating}>
                <Text style={[styles.normalText, { opacity: 0.6 }]}>
                  {Math.floor(item.runtimeMinutes / 60)}h{" "}
                  {item.runtimeMinutes % 60}min
                </Text>
              </View>
              <View style={styles.rating}>
                <Text style={[styles.normalText, { opacity: 0.6 }]}>·</Text>
              </View>
              <View style={styles.rating}>
                <Text
                  style={[
                    styles.normalText,
                    { fontWeight: "600", opacity: 0.6 }
                  ]}
                >
                  {item.averageRating}/10
                </Text>
              </View>
            </View>
            <View style={styles.ratingWrapper}>
              <View style={styles.rating}>
                <Text style={[styles.normalText, { fontWeight: "600" }]}>
                  {item.showtimes[0][0].theater}
                </Text>
              </View>
              <View style={styles.rating}>
                <Text style={[styles.normalText, { opacity: 0.6 }]}>·</Text>
              </View>
              <View style={styles.rating}>
                <Text style={[styles.normalText, { opacity: 0.6 }]}>
                  {item.showtimes[0][0].distance}
                </Text>
              </View>
            </View>
            <View style={styles.labels}>
              {item.showtimes[0][0].showtimes.standard.map((t, i) => (
                <Text
                  style={[
                    styles.label,
                    { backgroundColor: item.posterPrimaryColor }
                  ]}
                >
                  {moment(t).format("LT")}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  textWrapper: {
    flex: 1,
    alignItems: "flex-start",
    width: contentWrapperWidth
  },
  info: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  basic: {
    width: contentWrapperWidth * 0.8,
    alignItems: "flex-start",
    flexDirection: "column"
  },
  ratingWrapper: {
    flexDirection: "row",
    marginTop: 8
  },
  rating: {
    paddingRight: 5
  },
  labels: {
    marginTop: 10,
    flexDirection: "row"
  },
  label: {
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
    color: "#2C2C2C",
    textAlignVertical: "center",
    includeFontPadding: false
  },
  averageRating: {
    width: contentWrapperWidth * 0.2,
    flexDirection: "column",
    alignItems: "center"
  },
  averageRatingNum: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontFamily: "rockwell",
    color: "#FFF",
    textAlign: "left"
  },
  normalText: {
    fontSize: 14,
    color: "#FFF"
  },
  displayText: {
    fontSize: 24,
    fontFamily: "din",
    color: "#FFF"
  },
  displayTextSmall: {
    fontSize: 12,
    fontFamily: "din",
    color: "#FFF"
  },
  iconWrapper: {
    marginBottom: 10,
    width: 25,
    height: 25
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain"
  }
});
