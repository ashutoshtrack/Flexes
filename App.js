/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

export default class App extends Component {
  render() {
    const Cell = () => (
      <View
        style={{
          height: 20,
          flexBasis: `${100 / 10}%`,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>1</Text>
      </View>
    );

    return (
      <View style={{ flex: 1, borderWidth: 1, backgroundColor: "orange" }}>
        <View
          style={{
            flex: 0,
            borderRadius: 30,
            marginLeft: 10,
            marginRight: 10,
            //  borderWidth: 1,
            elevation: 7,
            backgroundColor: "skyblue",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              height: 56,
              //   borderRadius: 7,

              justifyContent: "center"
            }}
          >
            <Text>Playground one</Text>
          </View>
        </View>
        <View style={{ flex: 0 /* backgroundColor: "cyan" */ }}>
          <Text>Playground two</Text>

          <View
            style={{
              alignItems: "flex-start",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            /*    backgroundColor: "green", */
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              /*  backgroundColor: "#dddddd", */
              elevation: 10,
              shadowColor: "black",

              shadowOffset: { width: 200, height: 0 },
              shadowOpacity: 1,
              borderWidth: 5,
              borderColor: "beige",
              height: 300,
              width: 300
            }}
          >
            <Image
              source={{ uri: "https://placekitten.com/g/800/600" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
