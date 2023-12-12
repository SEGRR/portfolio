import React from 'react';
import { useState, useEffect, useRef } from 'react';


export default function Timer(){

    const timing = {
        day: (1000 * 60 * 60 * 24),
        hour : (1000 * 60 * 60),
        minute : (1000 * 60),
        second : 1000
    }

    const day = (time)=>{
        return Math.floor(time / timing.day );
    }

    const hour = (time)=>{
        return Math.floor((time % timing.day) / timing.hour);
    }

    const minute = (time)=>{
        return Math.floor(((time % timing.day) % timing.hour) / timing.minute);
    }

    const second = (time)=>{
        return Math.floor((((time % timing.day)% timing.hour) % timing.minute) / timing.second)
    }

    const timer = useRef();

    const rollout_time =  Date.parse("01/01/2024");
    const default_value = rollout_time - Date.now(); 

   const [time , setTime] = useState(default_value);

//    {
//     day: day(default_value),
//     hour: hour(default_value),
//     minute: minute(default_value),
//     second: second(default_value)
//    }
     
    useEffect(()=>{
       timer.current =  setInterval(()=>{
            setTime(prev => {
                return prev - 1;
            })
        }, 1000);

     //   return ()=> clearInterval(timer.current);
      
    });


    return (
        <div>
            
            <div><h1>{ day(time) }</h1></div>
            <div><h1>{ hour(time) }</h1></div>
            <div><h1>{ minute(time) }</h1></div>
            <div><h1>{ second(time)  }</h1></div>
        </div>
    )
}