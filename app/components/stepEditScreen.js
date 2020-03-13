import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    ScrollView,
} from 'react-native';

import {
    Form,
    Separator,
    InputField,
    CountDownField
} from 'react-native-form-generator';

import * as actions from '../actions/actions'
import {Navigation} from "react-native-navigation";

class EditStep extends Component {
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
                id: 'done',
            }
        ]
    };

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    onNavigatorEvent(event) {
        if (event.id === 'cancel') {
            this.props.navigator.dismissModal();
        }
        else if (event.id === 'done') {
            this.props.saveStepChanges(this.state.formData, this.props.currentStep.id);
            this.props.navigator.pop();
        }
    }

    handleFormChange(formData){
        this.setState({formData:formData})
        this.props.onFormChange && this.props.onFormChange(formData);
    }

    render(){
        const { currentStep } = this.props;
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200}}>
                <Form
                    ref='editStepForm'
                    onChange={this.handleFormChange.bind(this)}
                    label="Edit Step">
                    <Separator />
                    <CountDownField
                        ref='step_time'
                        placeholder='Steptime'
                        value={currentStep.time} />
                    <InputField
                        ref='step_name'
                        label='Name'
                        placeholder='Name'
                        value={currentStep.name} />
                </Form>
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentStep: state.sittingReducer.currentStep
    };
}

export default connect(mapStateToProps, {...actions})(EditStep)