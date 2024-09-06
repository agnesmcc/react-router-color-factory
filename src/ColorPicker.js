import React from "react";

const ColorPicker = ({colors}) => {
    return (
        <div>
            <h1>Welcome to the color factory</h1>
            <h3>Please select a color</h3>
            <div>
                {colors.map(color => (
                    <div key={color.id}>{color.name}</div>
                ))}
            </div>
        </div>
    )
};  

export default ColorPicker