import sittingsReducer from './sittingReducer'
import * as types from '../constants/actionTypes'

describe('sittings reducer', () => {
    it('should handle initial state', () => {
        expect(
            sittingsReducer(undefined, {})
        ).toEqual([
            {
                selectedId: undefined,
                sittings: [
                    {id: 1, name: "JustSit", steps: []},
                    {id: 2, name: "Zazen", steps: []},
                    {id: 3, name: "Zazen + Kinhin", steps: []},
                ]
            }
        ])
    });

    it('should handle EDIT_SITTING', () => {
        let state = { selectedId: undefined };
        let expectedSelectedId = 142;
        expect(
            sittingsReducer(state, {
                type: types.EDIT_SITTING,
                id: expectedSelectedId
            })
        ).toEqual(
            {
                selectedId: expectedSelectedId,
            }
        )
    });
});