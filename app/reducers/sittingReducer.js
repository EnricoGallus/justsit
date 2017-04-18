import {
    EDIT_SITTING,
    CREATE_SITTING,
    SAVE_SITTING_CHANGES
} from '../constants/actionTypes';


const INITIAL_STATE = {
    sittings: [
        { id: 1, name: "JustSit", description: "endless sitting", steps: [
            { time: 20, name: "Preparation" },
            { time: undefined, name: "Zazen" }
            ] },
        { id: 2, name: "Zazen", description: "only zazen", steps: [] },
        { id: 3, name: "Zazen + Kinhin", description: "saturday morning circle", steps: [] },
    ]
};

export default function sittings(state = INITIAL_STATE, action) {
    switch (action.type) {
        case EDIT_SITTING:
            return {
                ...state,
                currentSitting: state.sittings.find(x => x.id === action.id)
            };
        case CREATE_SITTING:
            return {
                ...state,
                currentSitting: { id: state.sittings.reduce(function(prev, current) {
                    return (prev.id > current.id) ? prev.id : current.id
                }) + 1, name: "", steps: []}
            };
        case SAVE_SITTING_CHANGES:
            let currentSitting = undefined;
            return {
                sittings: Object.assign([], state.sittings.map((sitting) => {
                    if (sitting.id == action.id) {
                        currentSitting = Object.assign({}, sitting, {
                            name: action.formData.name || sitting.name,
                            description: action.formData.description || sitting.description
                        })
                        return currentSitting;
                    }
                    return sitting
                })),
                currentSitting: currentSitting,
            };
        default:
            return state;
    }
}