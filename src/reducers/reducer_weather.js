import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            console.log("StateBefore",state);
            //return state.concat([action.payload.data]);
            let newState=[action.payload.data, ...state];
            console.log("StateAfter",newState);
            return newState;
    }
    return state;
}
