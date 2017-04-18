const SITTING_CHOSEN = "SITTING_CHOSEN";
const EDIT_SITTING = "EDIT_SITTING";
const CREATE_SITTING = "CREATE_SITTING";
const SAVE_SITTING_CHANGES = "SAVE_SITTING_CHANGES";

export { SITTING_CHOSEN, EDIT_SITTING, CREATE_SITTING, SAVE_SITTING_CHANGES }

export function sittingChosen(sitting) {
    return {
        type: SITTING_CHOSEN,
        sitting: sitting,
    };
}

export function editSitting(sitting) {
    return {
        type: EDIT_SITTING,
        id: sitting,
    };
}

export function createSitting() {
    return {
        type: CREATE_SITTING,
        id: undefined,
    };
}

export function saveChanges(formData, sittingId) {
    return {
        type: SAVE_SITTING_CHANGES,
        id: sittingId,
        formData: formData
    };
}
