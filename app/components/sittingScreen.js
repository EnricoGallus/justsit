import React, { Component } from 'react'
import { StyleSheet, View, ListView } from 'react-native'
import { connect } from 'react-redux'

import { SittingRow } from './sittingRow'
import * as sittingActions from '../actions/sittingActions'

class Sitting extends Component {
    static navigatorButtons = {
        rightButtons: [
            {
                title: 'create',
                id: 'create',
            }
        ]
    };

    constructor(props) {
        super(props);
        this._selectSitting = this._selectSitting.bind(this);
        this._editSitting = this._editSitting.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        if (event.id === 'create') {
            this._createSitting();
        }
    }

    componentWillMount() {
        const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(this.props.sittings);
        this.setState({ dataSource });
    }

    _createSitting() {
        this.props.navigator.push({
            title: "Create Sitting",
            screen: "justsit.CreateSitting"
        });
    }

    _selectSitting(sitting) {
        this.props.sittingChosen(sitting)
        this.props.navigator.pop();
    }

    _editSitting(sitting) {
        this.props.navigator.push({
            title: "Edit Sitting",
            screen: "justsit.EditSitting",
            passProps: { sitting: sitting }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections
                    dataSource={this.state.dataSource}
                    renderRow={rowData =>
                        <SittingRow
                            info={rowData}
                            isEdit={this.props.isEdit}
                            edit={this._editSitting}
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

export default connect(mapStateToProps, {...sittingActions})(Sitting)