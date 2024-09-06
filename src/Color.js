import {React, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

const Color = () => {
    const params = useParams();

    useEffect(() => {
        document.body.style.backgroundColor = params.name;
        return () => {
            // reset to default when component unmounts
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <>
            <div style={{paddingTop: '200px', fontSize: '50px'}}>
                This is the color {params.name}
            </div>
            <div style={{paddingTop: '50px', fontSize: '20px'}}>
                <Link to="/">Pick another color</Link>
            </div>
        </>
    )
};

export default Color
