import {Navigation} from "react-native-navigation";

export function setRootRoute() {
    Navigation.setRoot({
        root: {
            component: {
                name: 'justSit.Initialize'
            }
        },
    });
}

export const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    component: {
                        name: 'justSit.SignIn',
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                backgroundColor: '#fff',
                                text: 'Sign In'
                            }
                        }
                    },
                },
                {
                    component: {
                        name: 'justSit.SignUp',
                        options: {
                            bottomTab: {
                                text: 'Sign Up',
                                fontSize: 12
                            }
                        }
                    },
                },
            ],
        }
    }
});

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'justSit.Home',
                    }
                }
            ],
        }
    }
})

export const selectSitting = () => Navigation.showModal({
    stack: {
        children: [{
            component: {
                name: 'justSit.SittingSelect',
                options: {
                    topBar: {
                        title: {
                            text: 'Choose Sitting'
                        },
                        leftButtons: [{
                            id: 'cancelSitting',
                            text: 'Cancel'
                        }]
                    }
                }
            }
        }]
    }
});