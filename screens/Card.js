import React from 'react'
import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet,
} from 'react-native'

export default class Card extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#ff8eb7" barStyle="light-content" />
                <View style={styles.cardcontent}>
                    <View
                        style={{
                            flex:1.1,
                        }}
                    >
                        <View style={styles.imageContainer} >
                            <Image source={require('../assets/images/kim_jong_il.jpg')} style={styles.image}/>
                        </View>
                    </View>
                    <View
                        style={{
                            flex:2,
                            flexWrap: 'wrap',
                            marginTop: 20,
                            alignSelf: 'center',
                        }}
                    >
                        <Text style={{fontSize: 20, color: 'green', textAlign: 'center'}}>
                            HELLO, KIM!
                        </Text>

                        <View style={{
                            marginTop: 20
                        }}>
                            <Text>
                                Name: Kim Jong-il {"\n"}
                                Nationality: North Korea {"\n"}
                                Title: 2nd Glorious Supreme Leader of North Korea

                            </Text>
                        </View>
                        <View style={styles.hr} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000',
    },

    cardcontent: {
        flex: 1,
        width: '95%',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#E9E9EE',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#ff8eb7'
    },
    imageContainer: {
        height: 170,
        width: 170,
        backgroundColor: '#DDDDDD',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 170,
        marginTop: 10,
    },
    image: {
        width: 170,
        height:170,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 170,
    },

})