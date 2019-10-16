import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>Hello</Text>
                <Text>{this.props.navigation.getParam('value', 0)}</Text>
            </View>
        );
    }
}

export default DetailScreen;