import React from 'react';
import { Navigation } from 'react-native-navigation';

import Home from '../components/homeScreen';
import SittingListScreen from '../components/sittingListScreen';
import SittingSelectScreen from '../components/sittingSelectScreen';
import SittingEditScreen from '../components/sittingEditScreen';
import StepEditScreen from '../components/stepEditScreen';
import ZendoScreen from '../components/zendoScreen';
import InitializeScreen from "../components/initializeScreen";
import SignInScreen from "../components/signInScreen";
import SignUpScreen from "../components/signUpScreen";

// register all screens of the app (including internal ones)
export function registerScreens(store, provider) {
    Navigation.registerComponentWithRedux('justSit.Initialize', () => InitializeScreen, provider, store);
    Navigation.registerComponentWithRedux('justSit.SignIn', () => SignInScreen, provider, store);
    Navigation.registerComponentWithRedux('justSit.SignUp', () => SignUpScreen, provider, store);
    Navigation.registerComponentWithRedux('justSit.Home', () => Home, provider, store);
    Navigation.registerComponentWithRedux('justSit.SittingSelect', () => SittingSelectScreen, provider, store);
    Navigation.registerComponentWithRedux('justSit.SittingList', () => SittingListScreen, provider, store);
    Navigation.registerComponentWithRedux('justSit.SittingEdit', () => SittingEditScreen, provider, store);
    Navigation.registerComponentWithRedux('justSit.StepEdit', () => StepEditScreen, provider, store);
    Navigation.registerComponentWithRedux('justSit.Zendo', () => ZendoScreen, provider, store);
}