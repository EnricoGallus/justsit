import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SittingRow extends Component {

    render() {
        const { info, select, edit } = this.props;
        return (
            <TouchableHighlight
                onPress={this.props.isEdit ? edit.bind(this, info) : select.bind(this, info)}
                style={styles.button}>
                <View style={styles.content}>
                    <Text style={styles.periodText}>{info.name}</Text>
                    <Icon name="ios-arrow-forward" size={30} color="black" />
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 100,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: "row",
    },
    periodText: {
        textAlign: 'center',
        fontSize: 25
    }
});

export { SittingRow }