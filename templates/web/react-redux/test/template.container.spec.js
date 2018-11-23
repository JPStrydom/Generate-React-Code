jest.mock('redux');

import { bindActionCreators } from 'redux';
import { mapStateToProps, mapDispatchToProps } from '../TEMPLATE_KEBAB_CASE_NAME.container';
import {
    exampleAction,
    exampleAsyncAction,
    /*
    Import all the actions you wish to expose to the view here.
    */
    initialState
} from '../TEMPLATE_KEBAB_CASE_NAME.reducer';

describe('TEMPLATE_LOWER_CAMEL_CASE_NAMEContainer - Unit test', () => {
    function stateBefore() {
        return {
            TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer: {
                ...initialState
                /*
                Setup your initial state for testing here.
                */
            }
        };
    }

    it('should map state to props', () => {
        const actual = mapStateToProps(stateBefore());

        const expected = {
            ...initialState
            /*
            Setup your initial state for verification here.
            */
        };

        expect(actual).toEqual(expected);
    });

    it('should map dispatch to props', () => {
        const dispatch = jest.fn();

        mapDispatchToProps(dispatch);

        expect(bindActionCreators).toHaveBeenCalledWith(
            {
                exampleAction,
                exampleAsyncAction
                /*
                Import all the actions you wish to expose to the view here.
                */
            },
            dispatch
        );
    });
});
