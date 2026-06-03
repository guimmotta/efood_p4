import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurant />} />
      </Routes>

      <Cart />
    </BrowserRouter>
  )
}

export default App
