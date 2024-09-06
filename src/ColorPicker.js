import React from "react";
import { Link } from "react-router-dom";

const ColorPicker = ({colors}) => {
    return (
        <div>
            <h1>Welcome to the color factory</h1>
            <Link to="/colors/new">Add a color</Link>
            <h3>Please select a color</h3>
            <div>
                {colors.map(color => {
                    // check if the color is a hex code
                    // if it is, set hex to true
                    let hex = false
                    if (color.name.includes("#")) {
                        hex = true
                    }
                    // remove the # from the color name
                    return <div key={color.id}><Link to={`/colors/${color.name.replace("#", "")}?hex=${hex}`}>{color.name}</Link></div>
                })}
            </div>
        </div>
    )
};  

export default ColorPicker