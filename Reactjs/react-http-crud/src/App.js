
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [user,setUser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setUser(data))
  })
  return (
    <div className="App">
     <table className='bp4-html-table modifier'>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Website</th>
        <th>Action</th>
      </thead>
      <tbody>
        {user.map((user,index)=>(
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>Edit Delete</td>
          </tr>
        ))}
      </tbody>
     </table>
    </div>
  );
}

export default App;
