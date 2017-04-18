import {
    SITTING_CHOSEN,
} from '../actions/actions';

const INITIAL_STATE = {
        chosenSittingName: "Please choose sitting",
        chosenSittingDescription: "",
        isSittingSelected: false
    };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SITTING_CHOSEN:
            return {
                ...state,
                chosenSittingName: action.sitting.name,
                chosenSittingDescription: action.sitting.description,
                isSittingSelected: true
            };
        default:
            return state;
    }
}