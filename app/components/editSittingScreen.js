import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    ListView,
    View,
    ScrollView
} from 'react-native';
import { Form,
    Separator,InputField,
    SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';
import { SittingStepRow } from './sittingStepRow'
import { Footer} from './listViewFooter'

class EditSitting extends Component {
    constructor(props){
        super(props);
        this._addStep = this._addStep.bind(this);
        this.state = {
            formData:{ }
        }
    }

    componentWillMount() {
        const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(this.props.sitting.steps);
        this.setState({ dataSource });
    }

    _addStep(sitting) {
        this.props.navigator.push({
            title: "Add Step",
            screen: "justsit.EditStep",
            passProps: { sitting: sitting }
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
        const { sitting } = this.props;
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200}}>
                <Form
                    ref='editSittingForm'
                    onFocus={this.handleFormFocus.bind(this)}
                    onChange={this.handleFormChange.bind(this)}
                    label="Edit Sitting">
                    <Separator />
                    <InputField
                        ref='sitting_name'
                        label='Name'
                        placeholder='Name'
                        value={sitting.name} />
                    <InputField
                        ref='sitting_description'
                        label='Description'
                        placeholder='Description'
                        value={sitting.description} />

                    <ListView
                        enableEmptySections
                        dataSource={this.state.dataSource}
                        renderRow={rowData =>
                            <SittingStepRow
                                info={rowData}
                                edit={this._editSitting} />}
                        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                        renderFooter={() => <Footer element={this.props.sitting} command={this._addStep} /> } />

                    <SwitchField label='I accept Terms & Conditions'
                                 ref="has_accepted_conditions"
                                 helpText='Please read carefully the terms & conditions'/>
                    <PickerField ref='gender'
                                 label='Gender'
                                 options={{
                                     "": '',
                                     male: 'Male',
                                     female: 'Female'
                                 }}/>
                    <DatePickerField ref='birthday'
                                     minimumDate={new Date('1/1/1900')}
                                     maximumDate={new Date()}
                                     placeholder='Birthday'/>
                    <TimePickerField ref='alarm_time'
                                     placeholder='Set Alarm'/>
                    <DatePickerField ref='meeting'
                                     minimumDate={new Date('1/1/1900')}
                                     maximumDate={new Date()} mode="datetime" placeholder='Meeting'/>
                </Form>
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(EditSitting)