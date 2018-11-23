import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*
Import all external modules here.
*/

/*
Import all local modules here.
*/

export default class TEMPLATE_UPPER_CAMEL_CASE_NAMEView extends Component {
    constructor(props) {
        super(props);

        /*
        Add all required function binding here. If no binding is required, the constructor may be omitted.
        */
        this.renderHeaderExample = this.renderHeaderExample.bind(this);
        this.renderButtonExample = this.renderButtonExample.bind(this);

        /*
        NOTE: Do NOT use 'this.state'! State management is wat Redux is used for.
        */
    }

    componentDidMount() {
        /*
         If your screen needs to load data via the API immediately after rendering,
         call the load functions here in the `componentDidMount` function (See example below) -
         else, the `componentDidMount` function may be omitted.
         */
        this.props.exampleAsyncAction();
    }

    render() {
        return (
            <div className="TEMPLATE_KEBAB_CASE_NAME-wrapper">
                {this.renderHeaderExample()}
                {this.renderButtonExample()}
            </div>
        );
    }

    /*
    Add all helper functions here. Remember to 'bind' functions where 'this'
    needs to be used (See examples below). If 'this' does not need to be accessed,
    the function may be made static.
    */
    renderHeaderExample() {
        if (!this.props.exampleVariable) {
            return <h1>{"You've now fiddled with the template ( ͡° ͜ʖ ͡°)"}</h1>;
        }
        return <h1>{'Welcome to our template (ง •̀_•́)ง'}</h1>;
    }

    renderButtonExample() {
        return (
            <button className="button" onClick={this.props.exampleAsyncAction}>
                {'Click Me'}
            </button>
        );
    }
}

/*
Add all the props (variables and functions) being passe through to this component (by redux or inline).
This will make code completion and IDE inspection possible, and will make it easy to see what data is relevant
in this module.
*/
TEMPLATE_UPPER_CAMEL_CASE_NAMEView.propTypes = {
    exampleVariable: PropTypes.bool,

    exampleAction: PropTypes.func,
    exampleAsyncAction: PropTypes.func
};
