const clock = document.getElementById('clock');

let date= new Date()
console.log(date.toLocaleTimeString('en-IN',{
    hour12:true,
    timeZone:'Asia/Kolkata'
}))
setInterval(function(){
    let date= new Date()
    clock.innerHTML=date.toLocaleTimeString()
    
    
},1000)