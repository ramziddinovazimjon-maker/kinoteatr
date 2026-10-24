
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { login } from '../store/authSlice'

function Login() {
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from || '/'
    const showMessage = location.state?.from?.startsWith('/booking/')

    function handleLogin(e) {
        e.preventDefault()

        if (!username.trim()) {
            alert('Ismingizni kiriting!')
            return
        }

        const role = username.trim().toLowerCase() === 'admin'
            ? 'admin'
            : 'user'

        dispatch(login({
            username: username,
            role: role
        }))

        navigate(from, { replace: true })
    }

    return (
        <div>
            <h1>Kinoteatrga kirish</h1>

            {showMessage && (
                <p>Bilet olish uchun avval kiring!</p>
            )}

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Ismingizni kiriting"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button type="submit">Kirish</button>
            </form>
        </div>
    )
}

export default Login
