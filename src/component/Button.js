import React from 'react';

const Button = ({buttonDisplayName, clickHandler}) => (
   <div>
       <button className="btn background-random" id="new-quote" onClick={clickHandler}>{buttonDisplayName}</button>
   </div> 
)

export default Button