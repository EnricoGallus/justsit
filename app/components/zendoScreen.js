import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

class Zendo extends Component {

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(Zendo)