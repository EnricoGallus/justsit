import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { SittingRow } from './sittingRow'
import * as actions from '../actions/actions'
import {Navigation} from "react-native-navigation";

class SittingSelect extends Component {

    constructor(props) {
        super(props);
        this._selectSitting = this._selectSitting.bind(this);
        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed({ buttonId }) {
        if (buttonId === 'cancelSitting') {
            Navigation.dismissModal(this.props.componentId);
        }
    }

    _selectSitting(sitting) {
        this.props.sittingChosen(sitting);
        Navigation.dismissModal(this.props.componentId);
    }

    renderRow(sitting) {
        return (
            <SittingRow isEdit={false} info={sitting} select={this._selectSitting} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.sittings}
                    renderItem={({ item }) => this.renderRow(item)}
                    keyExtractor={(item) => item.id.toString()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E'
    },
});

function mapStateToProps(state) {
    return {
        sittings: state.sittingReducer.sittings,
    };
}

export default connect(mapStateToProps, {...actions})(SittingSelect)