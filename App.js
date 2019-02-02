import React from "react";
import { AppRegistry, Image, View, Text } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText
        })),
      1000
    );
  }
  render() {
    return (
      <View>
        {this.state.isShowingText ? <Text /> : <Text>Blinking Text</Text>}
      </View>
    );
  }
}
