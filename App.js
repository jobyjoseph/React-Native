import React from "react";
import { AppRegistry, Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  green: {
    color: "green"
  },
  red: {
    color: "red"
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>Red Text</Text>
        <Text style={styles.green}>Green Text</Text>
      </View>
    );
  }
}
