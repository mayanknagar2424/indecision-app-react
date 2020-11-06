import React from 'react';

//Stateless functional component
const Action = (props)=>(
    <div>
        <button className="big-button"
        onClick={props.handlePick} disabled = {!props.hasOptions} >What's next ??</button>
    </div>
);
export default Action;

