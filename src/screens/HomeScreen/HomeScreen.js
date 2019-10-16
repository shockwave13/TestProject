import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

//Connect store to screen
import {connect} from 'react-redux';

import {incrementValue, decrementValue, setNewValue} from '../../action/action';

import styles from './styles';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    

    componentDidMount(){
        console.log("State", this.props.value)
    }

    render() {
        
        return (
            <View style={styles.container} >
               
                
                <View style={{alignItems: 'center', width: '100%', paddingHorizontal: 10 }}>
                    <Button title="+" onPress={()=>{this.props.increment()}} style={{width: '100%'}} />
                    <Button title="-" onPress={()=>{this.props.decrement()}} style={{width: '100%'}}/>
                </View>
                <Button title="Show Detail" onPress={()=>this.props.navigation.navigate('Detail')}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.home.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
       increment: () => {
           dispatch(incrementValue())
       },
       decrement: () => {
           dispatch(decrementValue())
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);