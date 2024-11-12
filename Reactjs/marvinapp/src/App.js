import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import User from "./User";
import Home from "./Home";

function App()
{
    return (
        <Router>
            <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:username" element={<User />} />
                
            </Routes>
            </div>
        </Router>
    )
}

export default App;
