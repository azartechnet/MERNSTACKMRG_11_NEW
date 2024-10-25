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

/*function Sample()
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
r1.render(<Sample/>)*/

//Dynamic Rendering

/*const App=()=>{
    const username="sdlc";
    return(
        <div>
            <h1>Welcome to the Application</h1>
            <h2>{username}</h2>
            <p>Todays Date is::{new Date().toLocaleDateString()}</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//React without JSX
/*const myelm1=React.createElement('h1',null,'Welcome')
const myelm2=React.createElement('h2',null,'Welcome to Heading-2')
const r1=ReactDOM.createRoot(document.getElementById('root'))
//r1.render(myelm1)
//r1.render(myelm2)

//React with JSX
const App=<h1>Welcome to Application</h1>
const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(App)*/

//React List

/*const MyElem1=()=>{
    return(
        <div>
            <h1 style={{color:'red'}}>Welcome</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem1/>)*/

//Conditional Rendering
//Nested if else,else if ladder,switch case

const x=20;
let text="";
if(x>10){
    text="Greater than 10"
}
else if(x==10)
{
    text="Equal to 10"
}
else{
    text="Less than 10"
}
const MyElem1=()=>
{
    return(
        <div>
            <h1>Your Result is::{text}</h1>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem1/>)
