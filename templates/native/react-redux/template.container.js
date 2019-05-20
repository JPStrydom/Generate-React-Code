import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TEMPLATE_UPPER_CAMEL_CASE_NAMEView from './TEMPLATE_KEBAB_CASE_NAME.view';
import {
    exampleAction,
    exampleAsyncAction
    /*
    Import all the actions you wish to expose to the view here.
    */
} from './TEMPLATE_KEBAB_CASE_NAME.action';

export const mapStateToProps = ({ TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer }) => {
    return {
        exampleVariable: TEMPLATE_LOWER_CAMEL_CASE_NAMEReducer.exampleVariable
        /*
        Add all the state variables you wish to expose to the view here.
        */
    };
}

export const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            exampleAction,
            exampleAsyncAction
            /*
            Add all the actions you wish to expose to the view here.
            */
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(TEMPLATE_UPPER_CAMEL_CASE_NAMEView);
