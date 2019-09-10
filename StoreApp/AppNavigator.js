import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Catagory from './screen/Category';
import Catagorys from './screen/Categorys';
import Cart from './screen/Cart';
import Order from './screen/Order';
import Setting from './screen/Setting';
import Icon from 'react-native-vector-icons/Ionicons';

const CategoryStack = createStackNavigator({
    Catagorys:{
        screen: Catagorys
    },
    Catagory:{
        screen: Catagory
    },
});
CategoryStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => {
        return <Icon name="md-woman"
            sise ={46}
            color={focused?'black':'red'}
            />
    }
}

const CartStack = createStackNavigator({Cart})
CartStack.navigationOptions = {
    tabBarLabel: 'Cart'
}

const OrderStack = createStackNavigator({Order})
OrderStack.navigationOptions = {
    tabBarLabel: 'Order'
}

const SettingStack = createStackNavigator({Setting})
SettingStack.navigationOptions = {
    tabBarLabel: 'Setting'
}

const AppNavigator = createBottomTabNavigator({
    CategoryStack,
    CartStack,
    OrderStack,
    SettingStack
})
export default AppNavigator