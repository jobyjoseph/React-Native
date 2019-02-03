import React from "react";
import { AppRegistry, View, Button, Alert } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Button
          onPress={() => {
            Alert.alert("You tapped the button!");
          }}
          title="Press Me"
        />
      </View>
    );
  }
}
