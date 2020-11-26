
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './feed'
import Detail from './detail'
import Screen1 from './screens/drawer/screen1'
import Screen2 from './screens/drawer/screen2'
import Screen3 from './screens/drawer/screen3'

import Tab1 from './screens/tabs/Tab1'
import Tab2 from './screens/tabs/Tab2'
import Tab3 from './screens/tabs/Tab3'
import {Appearance, AppearanceProvider, useColorScheme} from 'react-native-appearance'

import 'react-native-gesture-handler';

import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

App = () => {

  // A hook can communicate with the phone
    const colorScheme = useColorScheme()

    const MyTheme = {
      dark: false,
      colors: {
        primary: 'purple',
        background: '#cccccc',
        card: 'red',
        text: 'white',
        border: 'green'
      }
    }

    createHomeStack = () =>
      <Stack.Navigator>
        <Stack.Screen 
          name="Feed" 
          component= {Feed}
          options={{
            title: "My Feed",
            headerStyle: {backgroundColor: "black"},
            headerTintColor: "white"
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component= {Detail}
          options={{
            title: "Detail Screen",
            headerStyle: {backgroundColor: "blue"},
            headerTintColor: "white"
          }} 
        />
        <Stack.Screen name="Bottom Tabs" children= {createBottomTabs}/>
        <Stack.Screen name="Top Tabs" children= {createTopTabs}/>
      </Stack.Navigator>


    createTopTabs = (props) => {
      //We have to add props to use params which are pass to the navigation (in details)
      // console.log(props)
      return (<MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen 
          name="Tab 1" 
          component={Tab1}
          options={{title: props.route.params.name}} />
        <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialTopTabs.Navigator>)
    }

    createBottomTabs = () => {
      return (<MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} />
        <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialBottomTabs.Navigator>)
    }
      // Drawer : On the side I can pick any of the screen
      // Component for a simple screen
      // children if there are multiple screens such as a stack
    return (
      <AppearanceProvider>
        <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : MyTheme}>
          <Drawer.Navigator>
            <Drawer.Screen name ="Home" children={createHomeStack}/>
            <Drawer.Screen name ="Contact" component={Screen1}/>
            <Drawer.Screen name ="Favorites" component={Screen2}/>
            <Drawer.Screen name ="Settings" component={Screen3}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
  );
  // J'aime les pates
}

export default App
