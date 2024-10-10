import React from "react";
import './Button.css'

function Button({value,color,onClick}){
    return(
        <div className="Button">
            <button className="btn" style={{backgroundColor:color}} onClick = {onClick}>{value}</button>
        </div>
        
    )
    
}
export default Button;