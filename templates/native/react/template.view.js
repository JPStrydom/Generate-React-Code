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
        this.renderTextExample = this.renderTextExample.bind(this);
    }

    componentDidMount() {
        /*
         If your screen needs to load data via the API immediately after rendering,
         call the load functions here in the `componentDidMount` function (See example below) -
         else, the `componentDidMount` function may be omitted.
         */
    }

    render() {
        return <View>{this.renderTextExample()}</View>;
    }

    /*
    Add all helper functions here. Remember to 'bind' functions where 'this'
    needs to be used (See example below).
    */
    renderTextExample() {
        const message = `Welcome to our template view ${this.props.exampleVariable || '( ͡° ͜ʖ ͡°)'}`;
        return <Text style={styles.text}>{message}</Text>;
    }
}

/*
Add all the props (variables and functions) being passe through to this component (by redux or inline).
This will make code completion and IDE inspection possible, and will make it easy to see what data is relevant
in this module.
*/
TEMPLATE_UPPER_CAMEL_CASE_NAMEView.propTypes = {
    exampleVariable: PropTypes.string
};

/*
Add all the component styling here.
*/
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
});
