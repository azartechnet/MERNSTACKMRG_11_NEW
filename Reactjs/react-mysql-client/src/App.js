import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import NavigationBar from "./Navbar";
import CreatePost from "./CreatePost";
import Home from "./home";
const App=()=>{
  return (
    <Router>
      <div>
        <NavigationBar />
        <div className="container">
        
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/create" element={<CreatePost />} />
       
        </Routes>
        </div>
      </div>
    </Router>
  )
}
export default App;
