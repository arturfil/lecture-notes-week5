import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const id = setInterval(() => { 
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(id)
    }
  }, [])

  useEffect(() => {
    setTitle(count)
  }, [count])

  return (
    <div style={{textAlign: 'center'}}>
      <h4>Timer Component</h4>
      <h3>{title}</h3>
    </div>
  )
}

export default Timer;