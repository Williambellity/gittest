import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import {styles} from './styles/styles'
/*
export default class Feed extends React.Component {
    render() {
        console.log(this.props)
        return(
            <View style={styles.center}>
                <Text style={styles.title}>Navigation Drawer</Text>
                <Button
                    title='Go to Feed item'
                    onPress={() => this.props.navigation.navigate('Detail', {screenName: "My Detail Screen"}) /*The name have to match with what you put in app.js*//*}
                />
            </View>
        )
    }
}
*/

export default Feed = () => {
    const navigation = useNavigation()
    // const route = useRoute()

    return(
        <View style={styles.center}>
            <Text style={styles.title}>Navigation Drawer</Text>
            <Button
                title='Go to Feed item'
                onPress={() => navigation.navigate('Detail', {screenName: "My Detail Screen"}) /*The name have to match with what you put in app.js*/}
            />
        </View>
    )
    
}