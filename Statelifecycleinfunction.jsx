import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Count updated');
  }, [count]);

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }
  function IncrementCount() {
    setCount(prevCount => prevCount + 2);
  }
 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={IncrementCount}>Increment</button>
    </div>
  );
}
export default MyComponent;