import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoForm from './components/TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <TodoForm />
    </div>
  )
}

export default App
