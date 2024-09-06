import {React, useState} from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
    const [color, setColor] = useState("#000000");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        addColor(color);
        navigate("/colors");
    };

    return (
        <form onSubmit={submit}>
            <div>
                <div>
                    <label htmlFor="color">Pick a color!</label>
                </div>
                <input 
                    id="color" 
                    name="color" 
                    type="color" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)} 
                    required />  
            </div>
            <button>Add Color</button>
        </form>
    );
};

export default NewColorForm
