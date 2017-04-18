import React, { Component } from 'react'
import { StyleSheet, View, ListView } from 'react-native'
import { connect } from 'react-redux'

import { SittingRow } from './sittingRow'
import * as sittingActions from '../actions/actions'

class SittingList extends Component {
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
        this._editSitting = this._editSitting.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sittings !== this.props.sittings) {
            this.setState({dataSource: this.state.dataSource.cloneWithRows(nextProps.sittings)
            })
        }
    }

    onNavigatorEvent(event) {
        if (event.id === 'create') {
            this._editSitting();
        }
    }

    componentWillMount() {
        const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(this.props.sittings);
        this.setState({ dataSource });
    }

    _editSitting(sitting) {
        sitting ? this.props.editSitting(sitting.id) : this.props.createSitting();
        this.props.navigator.push({
            title: "Edit Sitting",
            screen: "justsit.SittingEdit",
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
                            isEdit={true}
                            edit={this._editSitting} />}
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

export default connect(mapStateToProps, {...sittingActions})(SittingList)