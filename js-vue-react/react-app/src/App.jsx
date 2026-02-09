import { useState } from 'react'

function App() {
  const btnStyle = {
    margin: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer'
  }
  
  const [name, setName] = useState('React.js Application')
  const [isVisible, setIsVisible] = useState(true)

  const changeName = () => {
    setName('React.js is a JavaScript framework')
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <main style={{textAlign: 'center'}}>
      {isVisible && <h1 style={{color: '#007bff'}}>{name}</h1>}
      <button onClick={changeName} style={btnStyle}>Change Name</button>
      <button onClick={toggleVisibility} style={btnStyle}>Show/Hide</button>
    </main>
  )
}

export default App
