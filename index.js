import {Navigation} from 'react-native-navigation';
import {persistStore as persistStoreRaw} from 'redux-persist';
import configureStore from './app/store/configureStore';
import {registerScreens} from './app/navigation/screens';
import {setRootRoute} from './app/navigation/navigationController';
import {loadIcons} from "./app/store/iconLoader";
import {Provider} from "react-redux";


/**
 * Wait till our store is persisted
 * @param {store} storeToPersist - The redux store to persist
 * @returns {Promise} - Promise that resolves when the store is rehydrated
 */
const persistStore = storeToPersist => new Promise((resolve) => {
    persistStoreRaw(storeToPersist, undefined, () => {
        resolve();
    });
});

/**
 * We register screen then we wait for
 *    - Store to be rehydrated
 * and then we finally initialize layout accordingly.
 */
async function bootstrap() {
    const store = configureStore();
    registerScreens(store, Provider);
    // Add any more promises that must be resolved before layout is set
    await Promise.all([persistStore(store), loadIcons]);

    setRootRoute();
}

/**
 * The initial listener of our app,
 * this will get triggered on app start or when
 * the Android activity is recreated.
 * (For example by pressing back button on the
 * root screen)
 */
Navigation.events().registerAppLaunchedListener(() => {
    bootstrap();
});