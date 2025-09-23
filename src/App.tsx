import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FeaturesApp from './features/FeaturesApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <FeaturesApp />
      </div> 
    </>
  )
}

export default App
