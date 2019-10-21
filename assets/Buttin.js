import React from 'react'
import{
    Alert,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'

export default class App extends React.Component {
    constructor (){
        super();
        this.state = {
            btntitle: 'Calculator'
        }
    }

    render() {
        return(
            <View>
                <Button 
                        title="Back to home" 
                        onPress={() => this.props.navigation.navigate('Home')} 
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnbtm: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F7A6B9"
    },
    
    btntext: {
        color: '#000', 
        fontWeight: 'bold'
    }
})