import React from 'react';

export default ({input, label, meta: {error, touched}, size='s12', type = 'text'}) => (
    <div className= {`input-field col ${size}`}>
        <input type={type} {...input} id={input.name}/>
        <label htmlFor={input.name}>{label}</label>


    </div>
)