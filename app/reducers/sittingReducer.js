import {
    SITTING_CHOSEN,
} from '../actions/sittingActions';


const INITIAL_STATE = {
    selectedSitting: { id: 0, name: "Please choose sitting" },
    sittings: [
        { id: 1, name: "JustSit" },
        { id: 2, name: "Zazen" },
        { id: 3, name: "Zazen + Kishin" }
    ],
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SITTING_CHOSEN":
            return {
                ...state,
                selectedSitting: action.sitting
            };
        default:
            return state;
    }
}