import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
     <TodoForm />
    </div>
  )
}

export default App
