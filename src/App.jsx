import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incrementar = () => {
    setCount(count + 1);
  };

    const decrementar = () => {
    setCount(count - 1);
  };
  return (
   <>
  <h1 class="text-3xl font-bold underline">
    Hello world! {count}
  </h1>
<button onClick={incrementar}>
  Incrementar
</button>
<button onClick={decrementar}>
  Decrementar
</button>
    </>
  )
}

export default App
