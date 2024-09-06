import {React, useEffect} from "react";
import { useParams, useSearchParams, Link, Navigate } from "react-router-dom";

const Color = ({ colors }) => {
    let { name } = useParams();

    // if the ColorPicker identifies the color as a hex code
    // we need to add the # to the value since it was stripped
    // from the URL in the Link. This is because in a URL the
    // # is a special character that refences a fragment. If
    // present in the URL it is not sent to the server.
    const [searchParams, _] = useSearchParams();
    const hex = searchParams.get("hex")
    if (hex === "true") {
        name = `#${name}`
    }

    useEffect(() => {
        document.body.style.backgroundColor = `${name}`;
        return () => {
            // reset to default when component unmounts
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <>
        {colors.find(color => color.name === name) ? (
            <>
                <div style={{paddingTop: '200px', fontSize: '50px'}}>
                    This is the color {name}
                </div>
                <div style={{paddingTop: '50px', fontSize: '20px'}}>
                    <Link to="/colors">Pick another color</Link>
                </div>
            </>
        ) : <Navigate to="/colors" />}
        </>
    )
};

export default Color
