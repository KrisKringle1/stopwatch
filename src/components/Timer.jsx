import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  const secondIncrease = () => {
    setCount(count + 1)

  }

  const stopTime = () => {
    clearInterval()
    console.log('time stopped')
  }
  useEffect(() => {
    const startTime = setInterval(() => {
      setCount(count => count + 1);

    }, 1000)




  })
  return (
    <div>
      <p>{count}</p>
      <button onClick={useEffect}>Start</button>
      <button onClick={stopTime}>Stop</button>
    </div>
  )
}


export default Timer
