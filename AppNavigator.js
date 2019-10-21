import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet 
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from './screens/Home';
import Image from './screens/Image';
import Calculator from './screens/Calculator';
import Todolist from './screens/Todolist';
import Card from './screens/Card';

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render (){
        return (
            <>
            <Home />
            <View style={styles.btnbtmcont}>
                <TouchableOpacity 
                    style={styles.btnbtm} 
                    onPress={() => this.props.navigation.navigate('Calculator')}>
                    <Text style={styles.btntxt}>CALCULATOR</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.btnbtm} 
                    onPress={() => this.props.navigation.navigate('Image')}>
                    <Text style={styles.btntxt}>IMAGE GENERATOR</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.btnbtmcont}>
                <TouchableOpacity 
                    style={styles.btnbtm} 
                    onPress={() => this.props.navigation.navigate('ToDoList')}>
                    <Text style={styles.btntxt}>TO DO LIST</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btnbtm} 
                    onPress={() => this.props.navigation.navigate('Card')}>
                    <Text style={styles.btntxt}>PROFILE CARD</Text>
                </TouchableOpacity>
            </View>
            </>
        )
    }
}

class ImageScreen extends React.Component {
    static navigationOptions = {
        title: 'Image Generator',
        headerStyle: { backgroundColor: '#ff8eb7' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
    }

    render (){
        return(
            <Image />
        )
    }
}

class CalcScreen extends React.Component {
    static navigationOptions = {
        title: 'Simple Calculator',
        headerStyle: { backgroundColor: '#ff8eb7' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold', },
    }

    render() {
        return (
            <Calculator />
        )
    }
}

class ToDoScreen extends React.Component {
    render() {
        return (
        <>
            <Todolist />
        </>
        )
    }
}

class CardScreen extends React.Component {
    static navigationOptions ={
        title : 'Profile Card',
        headerStyle: { backgroundColor: '#ff8eb7' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold', },
    }
    render() {
        return(
            <Card />
        )
    }
}

const AppNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Calculator: {screen: CalcScreen},
    Image: {screen: ImageScreen},
    ToDoList: {screen: ToDoScreen},
    Card: {screen: CardScreen},
},{ initialRouteName: 'Home', });

const styles = StyleSheet.create({
    btnbtmcont: {
        width: '100%', flexDirection: 'row',
    },
    btnbtm: {
        height: 55,
        width: '50%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#012D3A",
        borderTopWidth: .5,
        borderBottomWidth: .5,
        borderRightWidth: .5,
        borderLeftWidth: .5,
        borderColor: 'rgba(100, 100, 100, 0.4)',
    },
    btntxt: {
        color: '#ff8eb7', fontWeight: 'bold', fontSize: 13
    }

});


export default createAppContainer(AppNavigator);
