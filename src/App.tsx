import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import Beranda from "./pages/Beranda";
import Dashboard from "./pages/Dashboard";
import Settings from "./contents/Settings";
import Create from "./contents/CreateApplication";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
