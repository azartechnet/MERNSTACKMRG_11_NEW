//importing event
const EventEmitter=require('events')
//Initializing the event emitter instances
var e2=new EventEmitter()
//listening to event
e2.on('myEvent',function(){
    console.log('Event received')
    })
    //emitting event
e2.emit('myEvent')


