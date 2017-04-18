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
        rightButtons: [
            {
                title: 'save',
                id: 'save',
            }
        ]
    };

    constructor(props) {
        super(props);
        this._editStep = this._editStep.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        if (event.id === 'cancel') {
            this.props.navigator.dismissModal();
        } else if (event.id == 'save') {
            this.props.saveChanges(this.state.formData, this.props.currentSitting.id);
            this.props.navigator.pop();
        }
    }

    componentWillMount() {
        const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(this.props.currentSitting.steps);
        this.setState({ dataSource });
    }

    _editStep(step) {
        step ? this.props.editStep(step.id) : this.props.createStep();
        this.props.navigator.push({
            title: "Edit Step",
            screen: "justsit.EditStep",
        });
    }

    handleFormChange(formData){
        /*
         formData will contain all the values of the form,
         in this example.

         formData = {
         first_name:"",
         last_name:"",
         gender: '',
         birthday: Date,
         has_accepted_conditions: bool
         }
         */

        this.setState({formData:formData})
        this.props.onFormChange && this.props.onFormChange(formData);
    }

    handleFormFocus(e, component){

    }

    render(){
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200}}>
                <Form
                    ref='editSittingForm'
                    onFocus={this.handleFormFocus.bind(this)}
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
                        renderFooter={() => <Footer command={this._editStep} /> } />
                </Form>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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