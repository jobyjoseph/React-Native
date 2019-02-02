import React from "react";
import { AppRegistry, Image, View } from "react-native";

export default class App extends React.Component {
  render() {
    let pic = {
      uri:
        "https://s3.caradvice.com.au/wp-content/uploads/2016/04/2016_mercedes-benz_gls_showroom2.jpg"
    };
    return (
      <View>
        <Image source={pic} style={{ width: 300, height: 150 }} />
      </View>
    );
  }
}
