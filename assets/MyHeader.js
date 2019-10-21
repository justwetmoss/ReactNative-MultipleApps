import React from 'react'
import {
    View,
    StatusBar,
    Text,
} from 'react-native';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'BLΛƆKPIИK MEMBERS'
        }
    }

    render() {
        return(
            <View style={{
                height: 70, 
                backgroundColor: '#F7A6B9',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                
                <Text style={{
                    fontSize: 25, 
                    color: '#000', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                }}>{this.state.title}</Text>
            </View>
        )
    }

}