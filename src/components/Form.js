import React from 'react';

const Form = props => (
    // this keyword only works for class based componets, not statless based compontents like this one.
    // get the property name, not the function, but the property name attribute within the Form tag on App.
    <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
        <input className="form__input" type='text' name="recipeName" />
        <button className="form__button">Search</button>
    </form>
)

export default Form;