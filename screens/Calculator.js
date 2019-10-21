import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Alert,
    StatusBar,
    TouchableHighlight,
} from 'react-native'

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            first: '',
            second: '',
            key: '',
        }
    }

    _handlePress(event) {
        if (this.state.first === '' || this.state.first === ''){
            msg = 'Input a number!';
            Alert.alert('Error',msg.toString());
        }else{
            result = eval(this.state.first+event+this.state.second);
            Alert.alert('Total', result.toString());
        }
    }

    render() {
      return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#ff8eb7" barStyle="light-content" />
            <View style={styles.calccontainer}>

                <View style={styles.empty} />
                <Text style={styles.welcome}>Input Numbers...</Text>
                <View style={styles.hr} />

                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter First Number"
                    placeholderTextColor="#fff"
                    returnKeyLabel={"next"}
                    onChangeText={(text) => this.setState({ first: parseInt(text) })}
                    keyboardType='numeric'
                />
                
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter Second Number"
                    placeholderTextColor="#fff"
                    returnKeyLabel={"next"}
                    onChangeText={(text) => this.setState({ second: parseInt(text) })}
                    keyboardType='numeric'
                />


                <View style={{flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
                    <TouchableHighlight 
                        title='+'
                        onPress={() => this._handlePress('+')}
                        style={styles.btnoperand}
                    >
                        <Text style={styles.optext}>+</Text>
                    </TouchableHighlight>

                    <TouchableHighlight 
                        title='+'
                        onPress={() => this._handlePress('-')}
                        style={styles.btnoperand}
                    >
                        <Text style={styles.optext}>-</Text>
                    </TouchableHighlight>

                    <TouchableHighlight 
                        title='+'
                        onPress={() => this._handlePress('*')}
                        style={styles.btnoperand}
                    >
                        <Text style={styles.optext}>x</Text>
                    </TouchableHighlight>

                    <TouchableHighlight 
                        title='+'
                        onPress={() => this._handlePress('/')}
                        style={styles.btnoperand}
                    >
                        <Text style={styles.optext}>/</Text>
                    </TouchableHighlight>
                </View>
                

                <View style={styles.empty} />
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    calccontainer: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20,
        marginHorizontal: 10,
    },
    welcome: {
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: "bold",
        color: '#fff'
    },
    btnoperand:{
        width: 70,
        height: 70,
        backgroundColor: '#ff8eb7',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 5,
    },
    optext: {
        color: '#000',
        fontSize: 40
    },
    textInputStyle:{
        color: '#fff',
        borderColor: '#fff',
    },
    empty: {
        flex: 1
    },
    hr: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(100, 100, 100, 0.4)',
        marginBottom: 10
    }
})