import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    ListView,
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import {
    Form,
    Separator,
    InputField,
} from 'react-native-form-generator';

import * as actions from '../actions/actions'

import { SittingStepRow } from './sittingStepRow'
import { Footer} from './listViewFooter'

class EditSitting extends Component {
    static navigatorButtons = {
        leftButtons: [
            {
                title: 'cancel',
                id: 'cancel',
            }
        ],
        rightButtons: [
            {
                title: 'done',
                id: 'save',
            }
        ]
    };

    constructor(props) {
        super(props);
        this._editStep = this._editStep.bind(this);
        this._createStep = this._createStep.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        if (event.id === 'cancel') {
            this.props.navigator.pop();
        } else if (event.id === 'save') {
            this.props.saveChanges(this.state.formData, this.props.currentSitting.id);
            this.props.navigator.pop();
        }
    }

    componentWillMount() {
        const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(this.props.currentSitting.steps);
        this.setState({ dataSource });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentSitting.steps !== this.props.currentSitting.steps) {
            this.setState({dataSource: this.state.dataSource.cloneWithRows(nextProps.currentSitting.steps)
            })
        }
    }

    _createStep() {
        this._editStep();
    }

    _editStep(step) {
        step ? this.props.editStep(step.id) : this.props.createStep();
        this.props.navigator.push({
            title: "Edit Step",
            screen: "justsit.StepEdit",
        });
    }

    handleFormChange(formData){
        this.setState({formData:formData});
        this.props.onFormChange && this.props.onFormChange(formData);
    }

    render(){
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={styles.scrollview}>
                <Form
                    ref='editSittingForm'
                    onChange={this.handleFormChange.bind(this)}
                    label="Edit Sitting">
                    <Separator />
                    <InputField
                        ref='name'
                        label='Name'
                        placeholder='Name'
                        value={this.props.currentSitting.name} />
                    <InputField
                        ref='description'
                        label='Description'
                        placeholder='Description'
                        value={this.props.currentSitting.description} />
                    <ListView
                        enableEmptySections
                        dataSource={this.state.dataSource}
                        renderRow={rowData =>
                            <SittingStepRow
                                step={rowData}
                                edit={this._editStep} />}
                        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                        renderFooter={() => <Footer command={this._createStep} /> } />
                </Form>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollview: {
        paddingLeft:10,
        paddingRight:10,
        height:200
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E'
    },
});

function mapStateToProps(state) {
    return {
        currentSitting: state.sittingReducer.currentSitting,
    };
}

export default connect(mapStateToProps, {...actions})(EditSitting)