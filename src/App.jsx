import { useState } from 'react'
import AppRouter from './router/AppRouter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div data-theme="dim" className='rounded-lg mt-70 py-25 px-50 h-full flex flex-col items-center justify-center w-full'>
      <AppRouter/>
    </div>
  )
}

export default App
