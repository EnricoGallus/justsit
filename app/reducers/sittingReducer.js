import {
    EDIT_SITTING,
    CREATE_SITTING,
    SAVE_SITTING_CHANGES
} from '../constants/actionTypes';


const INITIAL_STATE = {
    selectedId: undefined,
    sittings: [
        { id: 1, name: "JustSit", steps: [] },
        { id: 2, name: "Zazen", steps: [] },
        { id: 3, name: "Zazen + Kinhin", steps: [] },
    ]
};

export default function sittings(state = INITIAL_STATE, action) {
    switch (action.type) {
        case EDIT_SITTING:
            return {
                ...state,
                selectedId: action.id
            };
        case CREATE_SITTING:
            return {
                ...state,
            };
        case SAVE_SITTING_CHANGES:
            return {
                sittings: Object.assign([], state.sittings.map((sitting) => {
                    if (sitting.id === action.id) {
                        return Object.assign({}, sitting, {
                            name: action.formData.name || sitting.name,
                            description: action.formData.description || sitting.description
                        })
                    }
                    return sitting
                }))};
        default:
            return state;
    }
}