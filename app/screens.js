import { Navigation } from 'react-native-navigation';

import Home from './components/homeScreen';
import SittingListScreen from './components/sittingListScreen';
import SittingSelectScreen from './components/sittingSelectScreen';
import SittingEditScreen from './components/sittingEditScreen';
import StepEditScreen from './components/stepEditScreen';
import ZendoScreen from './components/zendoScreen';


// register all screens of the app (including internal ones)
export function registerScreens(store, provider) {
    Navigation.registerComponent('justsit.Home', () => Home, store, provider);
    Navigation.registerComponent('justsit.SittingSelect', () => SittingSelectScreen, store, provider);
    Navigation.registerComponent('justsit.SittingList', () => SittingListScreen, store, provider);
    Navigation.registerComponent('justsit.SittingEdit', () => SittingEditScreen, store, provider);
    Navigation.registerComponent('justsit.StepEdit', () => StepEditScreen, store, provider);
    Navigation.registerComponent('justsit.Zendo', () => ZendoScreen, store, provider);
}