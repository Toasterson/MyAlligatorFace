import {ADD_FRIEND_ACTION} from "./types";

import {combineReducers} from 'redux';

const INITIAL_STATE = {
    current: [],
    possible: [
        'Allie',
        'Gator',
        'Lizzie',
        'Reptar',
    ],
};

const friendReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_FRIEND_ACTION:
            // Pulls current and possible out of previous state
            // We do not want to alter state directly in case
            // another action is altering it at the same time
            const {
                current,
                possible
            } = state;
            // Pull friend out of friends.possible
            // Note that action.payload === friendIndex
            const addedFriend = possible.splice(action.payload, 1);

            // And put friend in friends.current
            current.push(addedFriend);

            // Finally, update our redux state
            return {current, possible};
        default:
            return state
    }
};

export default combineReducers({
    friends: friendReducer,
})