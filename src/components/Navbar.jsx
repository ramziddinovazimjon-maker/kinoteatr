
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/authSlice'
import { clearTickets } from '../store/ticketsSlice'

function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state) => state.auth.user)

    function handleLogout() {
        dispatch(logout())
        dispatch(clearTickets())
        navigate('/')
    }

    return (
        <nav className="navbar">

            <Link to="/" className="navbar-logo">
                <span className="logo-icon">🎬</span>
                <span>Kinoteatr</span>
            </Link>

            <div className="navbar-links">
                <Link to="/">Bosh sahifa</Link>
                <Link to="/">Afisha</Link>
            </div>

            <div className="navbar-actions">
                {user ? (
                    <>
                        <Link to="/tickets" className="navbar-tickets">
                            Biletlarim
                        </Link>

                        <span className="navbar-user">
                            <span className="user-icon">👤</span>
                            {user.username}
                        </span>

                        <button
                            className="navbar-logout"
                            onClick={handleLogout}
                        >
                            Chiqish
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="navbar-login">
                        Kirish
                    </Link>
                )}
            </div>

        </nav>
    )
}

export default Navbar
