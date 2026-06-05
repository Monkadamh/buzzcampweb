import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">BuzzCampus</h1>
        <p className="text-gray-600 mb-6">An empowering digital platform for teens to share and read compelling stories and opinions.</p>
        <div className="bg-purple-100 rounded-lg p-4 text-center">
          <p className="text-purple-900 font-semibold">Welcome to BuzzCampus</p>
        </div>
      </div>
    </div>
  )
}

export default App
