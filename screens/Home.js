import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native'

export default class Home extends React.Component {
    render() {
      return (
        <>
        <StatusBar backgroundColor="#012D3A" barStyle="light-content" />
        <View style={styles.container}>
          <ImageBackground source={require('../assets/images/bg2.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.txtcontainer}>
              <Text style={styles.txt}>HELLO</Text>
            </View>
          </ImageBackground>
        </View>
        </>
      )
    }
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#012D3A'
  },
  txt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "Chunq",
    paddingTop: 20,
    paddingBottom: 0,
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(100, 100, 100, 0.4)',
    marginBottom: 10
  }
})