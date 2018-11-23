/*
NOTE: Remember to add this reducer to the root reducer found in 'src/redux/root-reducer.js'.
*/

/*
NOTE: The CreateAction directory my change based on your module's desired location.
*/
import CreateAction from '../../redux/action-creator/action-creator';
/*
Import all local modules here.
*/

const reducerName = 'TEMPLATE_KEBAB_CASE_NAME';

/*
Here you can create all your actions with the CreateAction action factory (See example below).

NOTE: It's important to use this factory to create standard actions so that all actions will be
consistent - this will also eliminate duplicate code.
*/
const example = new CreateAction(reducerName, 'EXAMPLE_ACTION');
export const exampleAction = example.action;

/*
Add all Asynchronous actions here. These are used when the action needs to access state or when multiple
actions need to be dispatched (See example below).

NOTE: It's important to note that 'getState()' returns a shallow copy of state - so if you mutate it,
your state will change along with it. Be careful of this!
*/
export function exampleAsyncAction() {
    return (dispatch, getState) => {
        const { exampleReducer } = getState();
        dispatch(exampleAction(!exampleReducer.exampleVariable));
    };
}

export const initialState = {
    exampleVariable: true
    /*
    Add your reducer's initial state here.
    */
};

export default function TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer(state = initialState, action) {
    switch (action.type) {
        case example.actionType:
            return { ...state, exampleVariable: action.payload };
        default:
            return state;
    }
}
