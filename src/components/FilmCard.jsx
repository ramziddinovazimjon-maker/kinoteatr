
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function FilmCard({ film }) {
  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()

  function handleBooking() {
    if (!user) {
      navigate('/login', {
        state: { from: `/booking/${film.id}` }
      })
      return
    }

    navigate(`/booking/${film.id}`)
  }

  return (
    <div>
      <img
        src={film.poster}
        alt={film.title}
        width="200"
      />

      <h2>{film.title}</h2>
      <p>{film.genre}</p>
      <p>{film.duration}</p>
      <p>{film.price} so'm</p>

      <button onClick={handleBooking}>
        Bilet olish
      </button>
    </div>
  )
}

export default FilmCard
