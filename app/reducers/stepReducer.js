const INITIAL_STATE = {
    step: {
        name: undefined,
        time: undefined,
    }
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}