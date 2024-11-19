import React from "react";
import ReactDOM from 'react-dom/client';
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Route>
     </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)