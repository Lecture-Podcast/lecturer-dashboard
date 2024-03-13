import React from "react";
import "./Inputfield.css"
const TextArea = ({label, type, placeholder}) => {
    return ( 
        <div className="inputfield">
            <label>{label}</label>
            <textarea
                type={type}
                placeholder={placeholder}
            ></textarea>
        </div>
    );
}
 
export default TextArea;