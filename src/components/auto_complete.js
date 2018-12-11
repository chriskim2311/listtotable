import React from 'react';


export default ({input, id, label, meta: {error, touched}, size='s12', type = 'text'}) => (
    <div  className= {`input-field col ${size}`}>
        <input type={type} {...input} id={id} placeholder= " "/>
        <label htmlFor={id}>{label}</label>
        <p className="red-text text-darken-2">{touched && error}</p>

    </div>
)