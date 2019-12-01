import { ADD_RETAILER } from "../actions/Retailer/retailerActionTypes";

const initialState =[];

const retailerReducer = function (state = initialState, action) {
    switch (action.type) {
        case ADD_RETAILER: {
            return [
                ...state,
                action.payload
            ];
        }

        default:
            return state;
    }
}

export default retailerReducer;