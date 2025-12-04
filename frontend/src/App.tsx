import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={
            <div className="flex items-center justify-center h-screen">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                  SmartKYC
                </h1>
                <p className="text-gray-600">
                  Le Badge de Confiance du B2B Africain
                </p>
                <p className="text-sm text-gray-400 mt-8">
                  Frontend en cours de développement...
                </p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
