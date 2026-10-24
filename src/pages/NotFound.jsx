
import { useLocation, useNavigate } from 'react-router-dom'

function NotFound() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div>
      <h1>404 — Sahifa topilmadi!</h1>

      <p>Bunday sahifa mavjud emas:</p>

      <h3>{location.pathname}</h3>

      <button onClick={() => navigate('/')}>
        Afishaga qaytish
      </button>
    </div>
  )
}

export default NotFound
