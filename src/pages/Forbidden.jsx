
import { useNavigate } from 'react-router-dom'

function Forbidden() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>403 — Ruxsat yo‘q!</h1>

            <p>
                Sizda bu sahifaga kirish huquqi mavjud emas.
            </p>

            <button onClick={() => navigate('/')}>
                Afishaga qaytish
            </button>
        </div>
    )
}

export default Forbidden
