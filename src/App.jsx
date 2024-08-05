import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserRouter from './Routes/UserRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' element={<UserRouter/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
