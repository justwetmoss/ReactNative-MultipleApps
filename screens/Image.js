/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  ImageBackground,
  StatusBar,
} from 'react-native';

const anyImages =[
  {
    uri: require('../assets/images/adolf_hitler.jpg'),
    caption: "Adolf Hitler"
  },

  {
    uri: require("../assets/images/benito_mussolini.jpg"),
    caption: "Benito Mussolini"
  },

  {
    uri: require("../assets/images/joseph_stalin.jpg"),
    caption: "Joseph Stalin"
  },

  {
    uri: require("../assets/images/mao_zedong.jpg"),
    caption: "Mao Zedong"
  },

  {
    uri: require("../assets/images/winston_churchill.jpg"),
    caption: "Winston Churchill"
  }
];

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      imageWidth: null
    }
  }
  render() {
     const image = anyImages[this.state.index];

     return (
      <>
       <View>
        <StatusBar backgroundColor="#ff8eb7" barStyle="light-content" />
        {/* <MyHeader /> */}
       </View>

       <View style={styles.container}>
         <View style={styles.empty} />

          {/* Image Caption */}
          <Text style={styles.imageCaption}>{image.caption}</Text>

          <View style={styles.hr} />

          <TouchableHighlight onPress={this.newImage.bind(this)} style={styles.image}>
            <ImageBackground source={ image.uri } style={styles.image} resizeMode="contain" onLayout={this.onNewLayout.bind(this)}>
            </ImageBackground>
          </TouchableHighlight>
          <View style={styles.empty} />
       </View>

      </>
     );
  }

  newImage(event) {
    const { index, imageWidth } = this.state,
    X = event.nativeEvent.locationX,
    touchCalc = (X < imageWidth / 2) ? -1 : +1;

    let newIndex = (index + touchCalc) % anyImages.length;

    if (newIndex < 0 ){
        newIndex = anyImages.length - Math.abs(newIndex);
    }

    this.setState({
        index: newIndex
    });
  }

  onNewLayout(event) {
      this.setState({
          imageWidth: event.nativeEvent.layout.width
      });
  }
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

  image: {
    flex: 2,
    width: 320,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: -10
  },
  imageBg: {
    resizeMode: "contain"
  },
  imageCaption: {
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Damascus',
    color: '#ff8eb7',
    top: -50
  },
  empty: {
    flex: 1
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(203,203,200,0.4)',
    width: width,
    marginBottom: 10,
    top: -45
  }
});

