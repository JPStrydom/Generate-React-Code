import React from 'react';
import { shallow } from 'enzyme';

import TEMPLATE_UPPER_CAMEL_CASE_NAMEView from '../TEMPLATE_KEBAB_CASE_NAME.view';

describe('TEMPLATE_UPPER_CAMEL_CASE_NAMEView - DOES IT RENDER', () => {
    /*
    Here you can mock out any view function props not needed for rendering
    (i.e. state read/write functions from the reducer) so as to only test the view.

    These mocks may be omitted if no function props need to be mocked.
    */
    const exampleVariableMock = 'some string';

    it('should render without crashing', () => {
        shallow(<TEMPLATE_UPPER_CAMEL_CASE_NAMEView exampleVariable={exampleVariableMock} />);
    });
});
