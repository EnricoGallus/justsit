import * as types from '../constants/actionTypes'

export const sittingChosen = sitting => ({
    type: types.SITTING_CHOSEN,
    sitting: sitting,
});

export const editSitting = sittingId => ({
    type: types.EDIT_SITTING,
    id: sittingId,
});

export const createSitting = () =>  ({
    type: types.CREATE_SITTING,
    id: undefined,
});

export const saveChanges = (formData, sittingId) => ({
    type: types.SAVE_SITTING_CHANGES,
    formData: formData,
    id: sittingId,
});

export const createStep = () =>  ({
    type: types.CREATE_STEP,
    id: undefined,
});

export const editStep = stepId => ({
    type: types.EDIT_STEP,
    id: stepId,
});

export const saveStepChanges = (formData, stepId) =>  ({
    type: types.SAVE_STEP_CHANGES,
    formData: formData,
    id: stepId,
});
