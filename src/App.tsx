import React, { useState } from 'react';

const App = () => {
  const [ count, setCount ] = useState(120);

  return (
    <div className="counter">
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  )
}

export default App;
