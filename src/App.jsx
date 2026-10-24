
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Tickets from './pages/Tickets'
import GuestRoute from './components/GuestRoute'
import ProtectedRoute from './components/ProtectedRoute'
import Booking from './pages/Booking'
import NotFound from './pages/NotFound'
import Forbidden from './pages/Forbidden'
import Admin from './pages/Admin'
import AdminRoute from './components/AdminRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />


      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />

      <Route
        path="/tickets"
        element={
          <ProtectedRoute>
            <Tickets />
          </ProtectedRoute>
        }
      />

      <Route
        path="/booking/:id"
        element={
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      />

      <Route path="/403" element={<Forbidden />} />

      <Route path="*" element={<NotFound />} />


    </Routes>
  )
}

export default App
