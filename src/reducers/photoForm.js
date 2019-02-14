import {
    PHOTO_CREATE,
    PHOTO_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    photo: '',
    caption: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PHOTO_CREATE:
            return INITIAL_STATE;
        case PHOTO_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
