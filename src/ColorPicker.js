import React from "react";
import { Link } from "react-router-dom";

const ColorPicker = ({colors}) => {
    return (
        <div>
            <h1>Welcome to the color factory</h1>
            <h3>Please select a color</h3>
            <div>
                {colors.map(color => (
                    <div key={color.id}><Link to={`/color/${color.name}`}>{color.name}</Link></div>
                ))}
            </div>
        </div>
    )
};  

export default ColorPicker