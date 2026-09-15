import { useState } from 'react'
import './App.css'

import Dialog from './components/dialog/dialog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Dialog>
          <h1>Dialog</h1>
          <p>This is a dialog component.</p>
        </Dialog>
      </main>
    </>
  )
}

export default App
