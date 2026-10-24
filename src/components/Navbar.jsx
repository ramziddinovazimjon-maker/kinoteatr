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
        <nav>
            <Link to="/">Kinoteatr</Link>

            <Link to="/">Afisha</Link>

            {user ? (
                <>
                    <Link to="/tickets">Biletlarim</Link>
                    <button onClick={handleLogout}>Chiqish</button>
                </>
            ) : (
                <Link to="/login">Kirish</Link>
            )}
        </nav>
    )
}

export default Navbar