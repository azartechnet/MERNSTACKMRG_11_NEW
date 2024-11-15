import React from "react";
import { useNavigate } from "react-router-dom";
function About()
{
    const navigate=useNavigate();
    return(
        <div>
            <h2>AboutUS</h2>
            <button onClick={()=>navigate("/")}>Go to Home</button>
        </div>
    )
}
export default About;