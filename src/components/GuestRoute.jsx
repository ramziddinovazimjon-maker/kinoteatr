
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function GuestRoute({ children }) {
  const user = useSelector((state) => state.auth.user)
  const location = useLocation()

  if (user) {
    const from = location.state?.from || '/'
    return <Navigate to={from} replace />
  }

  return children
}
