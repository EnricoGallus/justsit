import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { connect } from 'react-redux'

class Home extends Component {
    static navigatorButtons = {
        rightButtons: [
            {
                title: 'edit',
                id: 'edit',
                passProps: {
                    isEdit: true
                }
            }
        ]
    };

    constructor(props) {
        super(props);
        // if you want to listen on navigator events, set this up
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        if (event.id === 'edit') {
            this.editSitting();
        }
    }

    editSitting() {
        this.props.navigator.push({
            title: "Sitting",
            screen: "justsit.Sitting",
            passProps: { isEdit: true }
        });
    }

    selectSitting() {
        this.props.navigator.push({
            title: "Choose Sitting",
            screen: "justsit.Sitting",
            passProps: { isEdit: false }
        });
    }

    goToZendo() {
        this.props.navigator.push({
            title: "Zendo",
            screen: "justsit.Zendo"
        });
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image resizeMode="contain" source={require('../img/enso.jpg')} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={ this.selectSitting.bind(this) }>
                    <Text style={styles.sittingButton}>{this.props.selectedSitting.name}</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity disabled={!this.props.selectedSitting.isStep} onPress={ this.goToZendo.bind(this) }>
                        <Text style={styles.zendoButton}>Go to Zendo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    imageContainer: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "column",
        padding:50,
    },
    sittingButton: {
        marginTop: 20,
        marginBottom: 40,
        textAlign: 'center',
        fontSize: 25,
        color: 'lightgrey',
    },
    zendoButton: {
        padding: 20,
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        backgroundColor: '#2583ba',
    }
});

function mapStateToProps(state) {
    return {
        selectedSitting: state.sittingReducer.selectedSitting,
    };
}

export default connect(mapStateToProps)(Home)