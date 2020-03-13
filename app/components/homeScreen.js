import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { connect } from 'react-redux'
import {Navigation} from "react-native-navigation";
import {selectSitting} from "../navigation/navigationController";

class Home extends Component {
    static options() {
        return {
            topBar: {
                title: {
                    text: 'home'
                }
            },
            rightButtons: [
                {
                    title: 'edit',
                    id: 'edit',
                }
            ]
        }
    };

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    onNavigatorEvent(event) {
        if (event.id === 'edit') {
            this.editSitting();
        }
    }

    editSitting() {
        this.props.navigator.push({
            title: "Sitting List",
            screen: "justsit.SittingList",
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
                <TouchableOpacity onPress={() => selectSitting() }>
                    <View style={styles.sittingSelection}>
                        <Text style={styles.sittingName}>{this.props.name}</Text>
                        <Text style={styles.sittingDescription}>{this.props.description}</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity disabled={!this.props.isSittingSelected} onPress={this.goToZendo.bind(this)}>
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
    sittingName: {
        paddingLeft: 20,
        textAlign: 'left',
        fontSize: 25,
        color: 'lightgrey',
    },
    sittingDescription: {
        paddingLeft: 20,
        textAlign: 'left',
        fontSize: 10,
        color: 'lightgrey',
    },
    zendoButton: {
        marginTop: 50,
        padding: 20,
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        backgroundColor: '#2583ba',
    }
});

function mapStateToProps(state) {
    return {
        name: state.homeReducer.chosenSittingName,
        description: state.homeReducer.chosenSittingDescription,
        isSittingSelected: state.homeReducer.isSittingSelected,
    };
}

export default connect(mapStateToProps)(Home)