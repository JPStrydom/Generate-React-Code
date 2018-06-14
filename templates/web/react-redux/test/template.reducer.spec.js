/*
Add mocking setup here such as in the example:

jest.mock('../../../service/some-api');
import SomeApi from '../../../service/some-api';
*/

import TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer, {
    exampleAction,
    exampleAsyncAction
    /*
    Add all the actions you wish to test here.
    */
} from '../TEMPLATE_KEBAB_CASE_NAME.reducer';

describe('TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer - Unit Test', () => {
    function stateBefore() {
        return {
            exampleVariable: false
            /*
            Setup your initial state for testing here.
            */
        };
    }

    it('should return initial state when action is undefined', () => {
        const action = {};

        const actual = TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer(undefined, action);

        const expected = {
            ...stateBefore()
        };

        expect(actual).toEqual(expected);
    });

    it('should return current state when unknown action is dispatched', () => {
        const action = { type: 'SOME_UNKNOWN_ACTION' };

        const currentState = {
            ...stateBefore()
        };

        const actual = TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer(currentState, action);

        const expected = {
            ...stateBefore()
        };

        expect(actual).toEqual(expected);
    });

    /*
    Add all your action tests here. Add each action in its own 'describe' and test
    each of the action's scenarios in its own 'it'. Remember to test happy and sad cases.
    "Every bug is a test that wasn't written"
    */
    describe('exampleAction', () => {
        it('should send humans to Mars to recolonise', () => {
            const action = exampleAction(false);

            const actual = TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer(stateBefore(), action);

            const expected = {
                ...stateBefore(),
                exampleVariable: false
            };

            expect(actual).toEqual(expected);
        });
    });

    /*
    Add all your asynchronous action tests here. Add each asynchronous action in its own 'describe' and test
    each of the asynchronous action's scenarios in its own 'it'. Remember to test happy and sad cases.
    If you have no asynchronous actions, this code may be omitted.
    */
    describe('exampleAsyncAction', () => {
        it('should dispatch exampleAction', () => {
            /*
             Mock dispatch and getState
             */
            const getState = jest.fn(() => ({
                TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer: { exampleVariable: false }
            }));
            const dispatch = jest.fn();

            /*
             Test Async Action Using mocked dispatch and getState
             */
            exampleAsyncAction()(dispatch, getState);

            expect(dispatch.mock.calls[0][0]).toEqual(exampleAction(true));
        });
    });
});
