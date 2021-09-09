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
    <>
      <h4>Timer Component</h4>
      <h3>{title}</h3>
    </>
  )
}

export default Timer;