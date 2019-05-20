import React from 'react';

/*
Import all external modules here.
*/

/*
Import all local modules here.
*/

const renderTextExample = () => {
  const message = "Welcome to our template view '( ͡° ͜ʖ ͡°)'";
  return <h1>{message}</h1>;
}

const TEMPLATE_UPPER_CAMEL_CASE_NAMEView = (props) => {
   
        return <div className="TEMPLATE_KEBAB_CASE_NAME-wrapper">{renderTextExample()}</div>;
    
}

/*
Add all the props (variables and functions) being passe through to this component (by redux or inline).
This will make code completion and IDE inspection possible, and will make it easy to see what data is relevant
in this module.
*/

export default TEMPLATE_UPPER_CAMEL_CASE_NAMEView;