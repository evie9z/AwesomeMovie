import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import ListViewCard from "./ListViewCard";

const contentWrapperWidth = wp("90%");

export default class Index extends Component {
  render() {
    const items = this.props.items;
    return (
      <ScrollView
        style={styles.scrollListView}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {items.map((item, i) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={1}
            onPress={() =>
              this.props.navigation.navigate("MovieDetail", {
                itemId: item.id
              })
            }
          >
            <ListViewCard item={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollListView: {
    flex: 1,
    marginTop: 10,
    width: contentWrapperWidth
  }
});
