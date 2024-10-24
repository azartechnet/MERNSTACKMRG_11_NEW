import React from  'react';
import ReactDOM from 'react-dom/client';

//Basic Rendering
/*const App=()=>
{
    return(
      
        <>
        
        <h1>Welcome to the Application</h1>
        <h2>Welcome to the Heading-2</h2>
        </>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Function Rendering

function Sample()
{
    return(
        <>
           <form>
            <label>UserName</label>
            <input type="text"/>
            <br/>
            <input type='submit' value='Login'/>
           </form>
        </>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)
