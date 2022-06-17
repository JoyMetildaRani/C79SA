import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';
import axios from 'axios';

export default class MeteorScreen extends Component {
constructor(props){
    super(props);
    this.state ={
        meteors : {}
    }

}

componentDidMount(){
    this.getMeteors()
}

getMeteors = () =>{
    axios
    .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=gHXKqJLJu6FVa4ac3u6nts9fCA91ojjLOV4IIVXE")
    .then(response =>
        {
            this.setState({ meteors: response.data.near_earth_objects})
        })
        .catch(error =>{
            Alert.alert(error.message)
        })
}


    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Meteor Screen!</Text>
            </View>
        )
    }
}