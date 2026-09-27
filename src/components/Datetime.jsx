import React, { useEffect, useState } from 'react'

const Datetime = () => {

    const [time, settime] = useState('')

function dateDikhao(){
const now = new Date();

const date = now.toLocaleDateString("en-IN", {
  weekday: "long",
  day: "2-digit",
  month: "long"
}).replace(/,/g, "");

const time = now.toLocaleTimeString("en-IN", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true
});

settime(`${date} ${time}`);
}

useEffect(()=>{
  dateDikhao();
  let timer = setInterval(dateDikhao,1000)
  return ()=> clearInterval(timer)
},[])

    


  

  return (
    <p>{time}</p>
   
  )
}

export default Datetime
