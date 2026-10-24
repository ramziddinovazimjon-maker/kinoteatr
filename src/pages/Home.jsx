
import { useSelector } from 'react-redux'
import FilmCard from '../components/FilmCard'
import Navbar from '../components/Navbar'

export default function Home() {
    const films = useSelector((state) => state.films.items)

    return (
        <div>
            <Navbar />

            <div className="films-grid">
                {films.map((film) => (
                    <FilmCard key={film.id} film={film} />
                ))}
            </div>
        </div>
    )
}
