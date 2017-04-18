import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet
} from 'react-native';

class SittingStepRow extends Component {

    render() {
        const { step, edit } = this.props;
        return (
            <TouchableHighlight
                onPress={edit.bind(this, step)}
                style={styles.button}>
                <View style={styles.content}>
                    <Text style={styles.stepText}>{step.name}</Text>
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
    stepText: {
        textAlign: 'center',
        fontSize: 25
    }
});

export { SittingStepRow }