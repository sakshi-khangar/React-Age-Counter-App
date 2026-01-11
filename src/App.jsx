import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import UserInput from './components/UserInput'
import Age from './components/Age'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Counter/>
      <UserInput/> */}
      <Age/>
    </div>
  )
}

export default App
