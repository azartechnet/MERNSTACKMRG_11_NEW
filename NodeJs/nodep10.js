// setInterval(()=>{
//     console.log("Hello")

// },1000)

const intervalid=setInterval(()=>{
    console.log("Hello")
},1000)
setTimeout(()=>{
    clearTimeout(intervalid)
    console.log("Interval cleared")
},4000)
