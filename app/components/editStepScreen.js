import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    ScrollView,
} from 'react-native';

import {
    Form,
    Separator,
    InputField,
    TimePickerField
} from 'react-native-form-generator';

class EditStep extends Component {
    static navigatorButtons = {
        rightButtons: [
            {
                title: 'cancel',
                id: 'cancel',
            }
        ]
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        if (event.id === 'cancel') {
            this.props.navigator.dismissModal();
        }
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
        const { step } = this.props;
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200}}>
                <Form
                    ref='editSittingForm'
                    onFocus={this.handleFormFocus.bind(this)}
                    onChange={this.handleFormChange.bind(this)}
                    label="Edit Sitting">
                    <Separator />
                    <TimePickerField
                        ref='step_time'
                        placeholder='Steptime'
                        value={step.time} />
                    <InputField
                        ref='step_name'
                        label='Name'
                        placeholder='Name'
                        value={step.name} />
                </Form>
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        sittingForEdit: state.sittingReducer.sittingForEdit,
        step: state.stepReducer.step
    };
}

export default connect(mapStateToProps)(EditStep)