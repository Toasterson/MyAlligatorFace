import {ADD_FRIEND_ACTION} from "./types";

export const addFriend = function (friendIndex) {
    return {
        type: ADD_FRIEND_ACTION,
        payload: friendIndex,
    };
}