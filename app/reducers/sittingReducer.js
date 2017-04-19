import {
    CREATE_SITTING,
    EDIT_SITTING,
    SAVE_SITTING_CHANGES,
    CREATE_STEP,
    EDIT_STEP,
    SAVE_STEP_CHANGES
} from '../constants/actionTypes';


const INITIAL_STATE = {
    sittings: [
        { id: 1, name: "JustSit", description: "endless sitting", steps: [
            { id: 1, time: new Date(2017, 1, 1, 0, 5, ), name: "Preparation" },
            { id: 2, time: new Date(2017, 1, 1, 23, 59), name: "Zazen" }
            ] },
        { id: 2, name: "Zazen", description: "only zazen", steps: [] },
        { id: 3, name: "Zazen + Kinhin", description: "saturday morning circle", steps: [] },
    ]
};

function getNextId(array) {
    let currentId = array.length === 0 ? 0 : array.reduce(function(prev, current) {
        return (prev.id > current.id) ? prev.id : current.id
    });

    return currentId + 1;
}

export default function sittings(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_SITTING:
            return {
                ...state,
                currentSitting: {
                    id: getNextId(state.sittings),
                    name: "",
                    description: "",
                    steps: []
                }
            };
        case EDIT_SITTING:
            return {
                ...state,
                currentSitting: state.sittings.find(x => x.id === action.id)
            };
        case SAVE_SITTING_CHANGES:
            let newOrUpdatedSitting = state.sittings.find(x => x.id == action.id);
            if (!newOrUpdatedSitting) {
                newOrUpdatedSitting = Object.assign({}, {
                    id: action.id,
                    name: action.formData.name,
                    description: action.formData.description,
                    steps: {}
                });
                state.sittings.push(newOrUpdatedSitting);
            }
            else {
                newOrUpdatedSitting = Object.assign({}, newOrUpdatedSitting, {
                    name: action.formData.name || newOrUpdatedSitting.name,
                    description: action.formData.description || newOrUpdatedSitting.description,
                });
            }

            return {
                ...state,
                sittings: Object.assign([], state.sittings.map((sitting) => {
                    if (sitting.id == action.id) {
                        return newOrUpdatedSitting;
                    }
                    return sitting
                })),
                currentSitting: newOrUpdatedSitting,
            };
        case CREATE_STEP: {
            return {
                ...state,
                currentStep: {
                    id: getNextId(state.currentSitting.steps),
                    name: "test",
                    time: new Date()
                }
            };
        }
        case EDIT_STEP: {
            return {
                ...state,
                currentStep: state.currentSitting.steps.find(x => x.id === action.id)
            };
        }
        case SAVE_STEP_CHANGES: {
            let newOrUpdatedStep = state.currentSitting.steps.find(x => x.id == action.id);
            if (!newOrUpdatedStep) {
                newOrUpdatedStep = Object.assign({}, {
                    id: action.id,
                    name: action.formData.step_name,
                    description: action.formData.step_time,
                });
                state.currentSitting.steps.push(newOrUpdatedStep);
            }
            else {
                newOrUpdatedStep = Object.assign({}, newOrUpdatedStep, {
                    name: state.currentStep.name || action.formData.step_name,
                    time: state.currentStep.time || action.formData.step_time
                });
            }

            return {
                ...state,
                currentSitting: Object.assign({}, state.currentSitting),
                currentStep: newOrUpdatedStep,
            };
        }
        default:
            return state;
    }
}