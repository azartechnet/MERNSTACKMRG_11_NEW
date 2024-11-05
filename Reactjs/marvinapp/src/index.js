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

/*const x=20;
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
r1.render(<MyElem1/>)*/

//importing css and bootstrap

/*import './index.css';
const App=()=>
{
    return(
        <div>
            <h1>Hello World</h1>
            <button type='button' className='btn btn-primary'>ClickHere</button>
        </div>
    )

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//React function Component

/*function Sample()
{
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//class Component

/*class  Sample1 extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>This is Class Component</h1>
            </div>
        )
    }
}
const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(<Sample1/>)*/

//Props using function to passing arguments

/*function Sample(props)
{
    return(
        <>
        
        <h1>Hello {props.name}</h1>
        <h2>{props.age}</h2>
       </>
        
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="Rahul" age="34"/>)*/

//React Component in Component

/*function Component1()
{
    return(
    <div>
        <h1>Hello World</h1>
    </div>
    )
}
function Component2()
{
    return(
        <div>
            <h1>Component2</h1>
            <Component1/>
        </div>
        )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component2/>)*/

//Constructor using super

/*class Sample extends React.Component
{
    constructor()
    {
        super();
        this.state={name:"Rahul",age:34}
    }
    render()
    {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h2>{this.state.age}</h2>
            </div>
            )
            }

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//constructor using props

/*class Sample extends  React.Component
{
    constructor(props)
    {
        super(props);
        this.state={name:this.props.name,age:this.props.age}
    }
    render()
    {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h2>{this.state.age}</h2>
            </div>
            )
            }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="Rahul" age={34}/>)*/

//React State

/*class Sample extends React.Component
{
    constructor(props)
    {
       super(props);
       this.state={
        brand:"Ford",
        model:"Mustang",
        year:2020
       }
    }
    render()
    {
        return(
            <div>
                 <h1>Brand: {this.state.brand}</h1>
                 <h2>Model: {this.state.model}</h2>
                 <h3>Year: {this.state.year}</h3>
            </div>
        )
        }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Changing the state object

/*class Sample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            brand:"Ford",
            model:"Mustang",
            year:2020
            }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {
        this.setState({
            brand:"Toyota",
            model:"Camry",
            year:2019
            })
    
            }
            render()
            {
                return(
                    <div>
                        <h1>Brand: {this.state.brand}</h1>
                        <h2>Model: {this.state.model}</h2>
                        <h3>Year: {this.state.year}</h3>
                        <button onClick={this.handleClick}>Change</button>
                    </div>
                    )
                    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Changing the state object

/*class Sample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            emp:{
                name:"John",
                age:30,
                city:"nkl"
            },
            showData:false
        }
    }
    showData()
    {
         this.setState({
            showData:true
            })
    }
    hideData()
    {
        this.setState({
            showData:false
            })
    }
    render()
    {
        let data;
        if(this.state.showData==true)
        {
              data=<div>
                <h1>Name: {this.state.emp.name}</h1>
                 <h2>Age: {this.state.emp.age}</h2>
                 <h3>City: {this.state.emp.city}</h3>
                 <button onClick={this.hideData.bind(this)}>Hide</button>
              </div>
        }
            else
            {
                 data=<button onClick={this.showData.bind(this)}>Show</button>
            }
               
        
        return(
            <div>
                
                 {data}
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Event

/*function Football()
{
    const shoot=()=>{
        alert("Goal Scored")
    }
    return(
        <div>
          <button  onClick={shoot}>Shoot</button>

        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React Event Argument passing

/*function Football()
{
    const shoot=(year)=>{
        alert(`Goal Scored by ${year}`)
        }
        return(
            <div>
                <button  onClick={()=>shoot("2024")}>Shoot</button>
            </div>
            )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//conditional Rendering

/*function MissedGoal()
{
     return<h1>MissedGoal</h1>
}
function MadeGoal()
{
    return<h1>Goal Made</h1>
}
function Football(props)
{
     const shoot=()=>{
        const random=Math.floor(Math.random()*2)
        //console.log("inside")
        
        if(random===0)
            {
                 console.log("inside")
                return <MissedGoal/>
            }
            else
            {
                return <MadeGoal/>
             }
              
        }
        return(
            <div>
                <button onClick={()=>shoot()}>Shoot</button>
            </div>
        )
        
        

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

function MissedGoal()
{
    return<h1>Missed</h1>
}
function MadeGoal()
{
    return<h1>MadeGoal</h1>
}
function Football(props)
{
    const isGoal=props.isGoal;
    if(isGoal)
    {
        return<MadeGoal/>
    }
    else
    {
        return<MissedGoal/>
    }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>)



