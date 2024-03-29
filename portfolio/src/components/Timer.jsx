import React from 'react';
import { useState, useEffect, useRef } from 'react';


export default function Timer(){

    const rollout_time = new Date("28/02/2024").getTime();
    const default_value = rollout_time - new Date().getTime(); 
    const [time , setTime] = useState(default_value);
    const timer = useRef();

    const second = 1000;
    const minute = second * 60;
    const hour =  minute * 60;
    const day =   hour * 24;

   const calculatetime = () =>  rollout_time - new Date().getTime()

  
    useEffect(()=>{
       timer.current =  setInterval(()=>{
            setTime(calculatetime())
        }, 1000);
        return ()=> clearInterval(timer.current);
    }, []);


    useEffect(()=>{
        if(time <= 0 ){
            clearInterval(timer.current);
        }
    }, [time]);



    console.log(time);

    return (
      
        <div className='countdown-container'>
            <div className='countdown-inner'><div className='time'><h1>{ Math.floor( time / day) }</h1></div><p>Day</p></div>
            <div className='countdown-inner'><div className='time'><h1>{ Math.floor( (time % day) / hour) }</h1></div><p>Hour</p></div>
            <div className='countdown-inner'><div className='time'><h1>{ Math.floor( (time % hour) / minute) }</h1></div><p>Minute</p></div>
            <div className='countdown-inner'><div className='time'><h1>{ Math.floor( (time % minute) / second)  }</h1></div><p>Second</p></div>
        </div>
    );
}