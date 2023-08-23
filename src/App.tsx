import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import Beranda from "./pages/Beranda";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
