import {
    SITTING_CHOSEN,
} from '../constants/actionTypes';

const INITIAL_STATE = {
        chosenSittingName: "Please choose sitting",
        chosenSittingDescription: "",
        isSittingSelected: false
    };

export default function home(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SITTING_CHOSEN:
            return {
                chosenSittingName: action.sitting.name,
                chosenSittingDescription: action.sitting.description,
                isSittingSelected: true
            };
        default:
            return state;
    }
}