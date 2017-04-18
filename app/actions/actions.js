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
    id: sittingId,
    formData: formData
});
