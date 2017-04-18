import * as types from '../constants/ActionTypes'
import * as actions from './actions'

describe('sitting actions', () => {
    it('sittingChosen should create SITTING_CHOSEN action', () => {
        let expectedSitting = { id: 1, name: 12 };
        expect(actions.sittingChosen(expectedSitting)).toEqual({
            type: types.SITTING_CHOSEN,
            sitting: expectedSitting
        })
    });

    it('editSitting should create EDIT_SITTING action', () => {
        let expectedSittingId = 1123;
        expect(actions.editSitting(expectedSittingId)).toEqual({
            type: types.EDIT_SITTING,
            id: expectedSittingId
        })
    });

    it('createSitting should create CREATE_SITTING action', () => {
        expect(actions.createSitting()).toEqual({
            type: types.CREATE_SITTING,
            id: undefined,
        })
    });

    it('saveChanges should create SAVE_SITTING_CHANGES action', () => {
        let expectedFormDate = {};
        let expectedSittingId = 123;
        expect(actions.saveChanges(expectedFormDate, expectedSittingId)).toEqual({
            type: types.SAVE_SITTING_CHANGES,
            id: expectedSittingId,
            formData: expectedFormDate
        })
    });

});