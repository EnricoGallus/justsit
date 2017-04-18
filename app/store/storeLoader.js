import { Provider } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'

import configureStore from './configureStore'
import { registerScreens } from '../screens'
import { iconsLoaded } from './iconLoader'

const store = configureStore();

// this is where you register all of your app's screens
registerScreens(store, Provider);

const storeLoaded = new Promise((resolve, reject) => {
        persistStore(
            store,
            { storage: AsyncStorage },
            () => iconsLoaded.then(resolve(true)));
});

export { storeLoaded };