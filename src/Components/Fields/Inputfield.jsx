import React from "react";
import "./Inputfield.css"
const Inputfield = ({label, type, placeholder}) => {
    return ( 
        <div className="inputfield">
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
            ></input>
        </div>
    );
}
 
export default Inputfield;