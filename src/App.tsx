import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FeaturesApp from './features/FeaturesApp';
import ExampleOfUseLayoutEffect from './features/ExampleOfUseLayoutEffect';

import ExampleOfUseContext from './features/ExampleOfUseContext';
import TestContextApp from './features/useContextExample/TestContextApp';
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         {/* <FeaturesApp /> */}
         {/* <ExampleOfUseLayoutEffect/> */}
         {/* <ExampleOfUseContext/> */}

         <TestContextApp/>
      </div> 
    </>
  )
}

export default App
