import { useState } from 'react'
import './App.css'

import Dialog from './components/dialog/dialog'
import DialogHeader from './components/dialog/DialogHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Dialog>
          <DialogHeader>This is a test header</DialogHeader>
          This is some content inside the dialog with no header.
        </Dialog>
      </main>
    </>
  )
}

export default App
