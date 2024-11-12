import React from "react";
import { Link } from "react-router-dom";
function Home()
{
    return(
        <div>
            <h1>Welcome to Home Page</h1>
            <ul>
                 <li><Link to="/user/azar">AzarProfile</Link></li>
                 <li><Link to="/user/mohamed">MohamedProfile</Link></li>
            </ul>
        </div>
    )
}
export default Home;