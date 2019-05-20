/*
Import all local modules here.
*/

export const actionType = 'TEMPLATE_UPPER_CAMEL_CASE_NAME';

export const exampleAction = (payload) => {
    return {
        type: actionType,
        payload
    }
}

/*
Add all Asynchronous actions here. These are used when the action needs to access state or when multiple
actions need to be dispatched (See example below).

NOTE: It's important to note that 'getState()' returns a shallow copy of state - so if you mutate it,
your state will change along with it. Be careful of this!
*/

export const exampleAsyncAction = () => {
    return (dispatch, getState) => {
        const { TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer } = getState();
        dispatch(exampleAction(!TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer.exampleVariable));
    };
}