
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const AppNavigation = createStackNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions:{
            title: 'Home'
        }
    },
    Detail:{
        screen: DetailScreen,
        navigationOptions:{
            title: 'SomeTitle'
        }
    }
});


export default createAppContainer(AppNavigation);