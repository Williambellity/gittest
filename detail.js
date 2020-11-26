import React from 'react';
import { Button, Text, View } from 'react-native';

import {styles} from './styles/styles'

export default class Detail extends React.Component {
    render() {
        /*
        this.props result
          "route": Object {
    "key": "Detail-Uxyp8ANd37s-Libp1xcAT",
    "name": "Detail",
    "params": Object {
      "screenName": "My Detail Screen",
    },
  },    */
        return(
            <View style={styles.center}>
                <Text style={styles.title}>{this.props.route.params.screenName}</Text>
                <Button
                    title='View Bottom Tabs'
                    onPress={() => this.props.navigation.navigate('Bottom Tabs', {name: "param 1"})}
                />
                <Button
                    title='View Top Tabs'
                    onPress={() => this.props.navigation.navigate('Top Tabs', {name: "param 2"})}
                />
                <Button
                    title='Pass Data Back'
                    onPress={() => this.props.navigation.navigate('Feed', {data: "Hello"})}
                />
            </View>
        )
    }
}