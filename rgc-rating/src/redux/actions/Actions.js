import * as actionType from '../constants/consts';

export const ratingClicked = (id, rate) => {
    return ({
        type: actionType.RATING_CLICKED,
        payload: { id, rate }
    });
}