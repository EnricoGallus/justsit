import React, {Component} from 'react'
import { Navigation } from 'react-native-navigation'

import { storeLoaded } from './store/storeLoader'

const navigatorStyle = {
    navBarBackgroundColor: "lightgrey",
};

class App extends Component {
    constructor() {
        super();
        storeLoaded.then(() => this.startApp());
    }

    startApp() {
        Navigation.startSingleScreenApp({
            screen: {
                    label: 'Just Sit',
                    screen: 'justsit.Home',
                    title: 'Just Sit',
                    //icon: iconsMap['ios-time-outline'],
                    //selectedIcon: iconsMap['ios-time'],
                    navigatorStyle,
                }
        });
    }
}

export default App