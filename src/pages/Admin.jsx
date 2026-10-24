
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilm, removeFilm } from '../store/filmsSlice'

function Admin() {
    const dispatch = useDispatch()
    const films = useSelector((state) => state.films.items)

    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [duration, setDuration] = useState('')
    const [price, setPrice] = useState('')
    const [poster, setPoster] = useState('')

    function handleAddFilm(e) {
        e.preventDefault()

        if (!title.trim() || !genre.trim() || !duration || !price || !poster.trim()) {
            alert('Barcha maydonlarni to‘ldiring!')
            return
        }

        const newFilm = {
            id: Date.now(),
            title,
            genre,
            duration: Number(duration),
            price: Number(price),
            poster
        }

        dispatch(addFilm(newFilm))

        setTitle('')
        setGenre('')
        setDuration('')
        setPrice('')
        setPoster('')
    }

    return (
        <div>
            <h1>Admin Panel</h1>
            <h2>Yangi film qo‘shish</h2>

            <form onSubmit={handleAddFilm}>
                <input
                    placeholder="Film nomi"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    placeholder="Janri"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Davomiyligi (daqiqa)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Narxi"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input
                    placeholder="Poster rasmi URL"
                    value={poster}
                    onChange={(e) => setPoster(e.target.value)}
                />

                <button type="submit">Film qo‘shish</button>
            </form>

            <hr />

            <h2>Barcha filmlar</h2>

            {films.map((film) => (
                <div key={film.id}>
                    <h3>{film.title}</h3>
                    <p>{film.genre}</p>
                    <button onClick={() => dispatch(removeFilm(film.id))}>
                        O‘chirish
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Admin
