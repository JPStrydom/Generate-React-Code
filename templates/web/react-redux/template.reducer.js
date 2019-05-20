import {actionType} from './TEMPLATE_KEBAB_CASE_NAME.action';

/*
NOTE: Remember to add this reducer to the root reducer found in 'src/redux/root-reducer.js'.
*/

export const initialState = {
    exampleVariable: false
    /*
    Add your reducer's initial state here.
    */
};

const TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType:
            return { ...state, exampleVariable: action.payload };
        default:
            return state;
    }
}

export default TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer;
