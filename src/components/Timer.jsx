import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false)
  const [delay, setDelay] = useState(1000);

  const savedCallback = useRef();


  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);
  }




  return (
    <div>
      <p>{count}</p>
      <button onClick={useInterval}>Start</button>
      <button >Stop</button>
    </div >
  )
}


export default Timer
