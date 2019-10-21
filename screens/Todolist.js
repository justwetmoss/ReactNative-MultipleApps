import React from 'react'
import {
    View,
    Text,
} from 'react-native'

export default class Todolist extends React.Component {
    constructor(){
        super()
        this.state = {
            input:'',
            todosArr: [],
        }
    }
    render () {
        return (
            <View>
                <Text>To Do List</Text>
            </View>
        )
    }
}