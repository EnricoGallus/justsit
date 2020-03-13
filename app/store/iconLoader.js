import Ionicons from 'react-native-vector-icons/Ionicons';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
    'ios-time': [30],
    'ios-time-outline': [30],
    'ios-calendar': [30],
    'ios-calendar-outline': [30],
    'ios-stats': [30],
    'ios-stats-outline': [30],
    'ios-settings': [30],
    'ios-settings-outline': [30],
};

const iconsMap = {};

const loadIcons = new Promise((resolve, reject) => {
    new Promise.all(
        Object.keys(icons).map(iconName =>
            // IconName--suffix--other-suffix is just the mapping name in iconsMap
            Ionicons.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                icons[iconName][1]
            ))
    ).then(sources => {
        Object.keys(icons)
            .forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

        // Call resolve (and we are done)
        resolve(true);
    });
});

export { loadIcons, iconsMap }