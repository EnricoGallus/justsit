import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Text,
} from 'react-native';

class EditStep extends Component {

    render() {
        return (
            <Text>test</Text>
        )
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(EditStep)