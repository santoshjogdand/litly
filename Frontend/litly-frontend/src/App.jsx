import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PublicLayout from './Layout/PublicLayout';
import PrivateLayout from './Layout/PrivateLayout';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Links from './pages/Links';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes >
            <Route element={<PublicLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/About' element={<About />} />
            </Route>
              <Route element={<PrivateLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/links" element={<Links />} />
                <Route path="/dashboard/analytics" element={<Analytics />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App
