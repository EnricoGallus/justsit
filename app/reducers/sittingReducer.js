import {
    SITTING_CHOSEN,
} from '../actions/sittingActions';


const INITIAL_STATE = {
    selectedSitting: { id: 0, name: "Please choose sitting", isStep: false },
    sittings: [
        { id: 1, name: "JustSit", isStep: true },
        { id: 2, name: "Zazen", isStep: true },
        { id: 3, name: "Zazen + Kinhin", isStep: true }
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