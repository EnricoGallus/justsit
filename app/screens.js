import { Navigation } from 'react-native-navigation';

import Home from './components/homeScreen';
import SittingScreen from './components/sittingScreen';
import EditSittingScreen from './components/editSittingScreen';
import ZendoScreen from './components/zendoScreen';


// register all screens of the app (including internal ones)
export function registerScreens(store, provider) {
    Navigation.registerComponent('justsit.Home', () => Home, store, provider);
    Navigation.registerComponent('justsit.Sitting', () => SittingScreen, store, provider);
    Navigation.registerComponent('justsit.EditSitting', () => EditSittingScreen, store, provider);
    Navigation.registerComponent('justsit.Zendo', () => ZendoScreen, store, provider);
}