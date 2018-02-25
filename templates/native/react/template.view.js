import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text /*Add other React Native components here*/ } from 'react-native';
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
        this.exampleHelper = this.exampleHelper.bind(this);
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
        return <View>{this.exampleHelper()}</View>;
    }

    /*
    Add all helper functions here. Remember to 'bind' functions where 'this'
    needs to be used (See example below).
    */
    exampleHelper() {
        this.props.exampleAction(true);
        if (!this.props.exampleVariable) {
            return <Text style={styles.text}>My template has been fiddled with</Text>;
        }
        return <Text style={styles.text}>Hello World! Welcome to my template</Text>;
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

/*
Add all the component styling here.
*/
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: colors.nightHawk
    }
});
