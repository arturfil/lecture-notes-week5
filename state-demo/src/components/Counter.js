import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(10);

  const substract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const add = () =>{ 
    if (count < 20) {
      setCount(count + 1);
    }
  }

  const greet = (name) => {
    alert("Hello " + name);
  }

  return (
    <div className="Counter">
      <h2>Counter Component</h2>

      <p>You clicked {count} times</p>

      <button onClick={add}> + </button>
      <button onClick={() => substract()}>-</button>

      {/* Right way */}
      {/* <button onClick={() => greet('Alvin')}>Greet with value passed on</button> */}
      {/* Wrong way */}
      {/* <button onClick={greet('Alvin')}>Greet with value passed on</button> */}
    </div>
  )
}

export default Counter;