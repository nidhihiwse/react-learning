import './home.css';
import React, { useState } from 'react';

function HomePage() {
  const [count, setCount] = useState(0);

  function counterHandler() {
    setCount(count + 1);
  }

  return (
  <section class="counter">
    <h1><i>Welcome..</i></h1>
    <div>
      <p>{count}</p>
      <button onClick={counterHandler}>
        Click me
      </button>
    </div>
  </section>
  )
}

export default HomePage;