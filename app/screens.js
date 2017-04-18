import { Navigation } from 'react-native-navigation';

import Home from './components/homeScreen';
import ChooseSittingScreen from './components/chooseSittingScreen';
import ZendoScreen from './components/zendoScreen';


// register all screens of the app (including internal ones)
export function registerScreens(store, provider) {
    Navigation.registerComponent('justsit.Home', () => Home, store, provider);
    Navigation.registerComponent('justsit.ChooseSitting', () => ChooseSittingScreen, store, provider);
    Navigation.registerComponent('justsit.Zendo', () => ZendoScreen, store, provider);
}