import React, { Component } from 'react'
import { StyleSheet, View, ListView } from 'react-native'
import { connect } from 'react-redux'

import { SittingRow } from './sittingRow'
import * as actions from '../actions/actions'

class SittingSelect extends Component {
    static navigatorButtons = {
        leftButtons: [
            {
                title: 'cancel',
                id: 'cancel',
            }
        ]
    };

    constructor(props) {
        super(props);
        this._selectSitting = this._selectSitting.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        if (event.id === 'cancel') {
            this.props.navigator.dismissModal();
        }
    }

    componentWillMount() {
        const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(this.props.sittings);
        this.setState({ dataSource });
    }

    _selectSitting(sitting) {
        this.props.sittingChosen(sitting);
        this.props.navigator.dismissModal();
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections
                    dataSource={this.state.dataSource}
                    renderRow={rowData =>
                        <SittingRow
                            isEdit={false}
                            info={rowData}
                            select={this._selectSitting} />}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />} />
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