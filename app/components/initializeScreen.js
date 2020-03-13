import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native'

import { goToAuth, goHome } from '../navigation/navigationController'

import { USER_KEY } from '../config/config'

export default class Initialising extends React.Component {
    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY)
            console.log('user: ', user)
            if (user) {
                await goHome()
            } else {
                await goToAuth()
            }
        } catch (err) {
            console.log('error: ', err)
            await goToAuth()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})