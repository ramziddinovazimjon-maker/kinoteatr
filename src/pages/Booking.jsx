
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { films } from '../films'
import { addTicket } from '../store/ticketsSlice'
import Navbar from '../components/Navbar'

function Booking() {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const film = films.find((item) => item.id === Number(id))
    const tickets = useSelector((state) => state.tickets.items)

    const [selectedSeats, setSelectedSeats] = useState([])

    if (!film) return <h1>Film topilmadi</h1>

    // Shu film uchun band qilingan joylar
    const bookedSeats = tickets
        .filter((ticket) => ticket.id === film.id)
        .map((ticket) => ticket.seat)

    // O'rindiq tanlash
    function selectSeat(seat) {
        if (bookedSeats.includes(seat)) return

        setSelectedSeats((prev) =>
            prev.includes(seat)
                ? prev.filter((item) => item !== seat)
                : [...prev, seat]
        )
    }

    // Bilet sotib olish
    function buyTickets() {
        if (selectedSeats.length === 0) {
            alert('Avval o‘rindiq tanlang!')
            return
        }

        selectedSeats.forEach((seat) => {
            dispatch(addTicket({
                ...film,
                seat,
                ticketId: `${film.id}-${seat}`
            }))
        })

        navigate('/tickets')
    }

    return (
        <div>
            <Navbar />

            <h1>Bilet bron qilish</h1>
            <h2>{film.title}</h2>
            <p>Narxi: {film.price} so'm</p>

            <h3>O'rindiqni tanlang:</h3>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(8, 45px)',
                gap: '10px'
            }}>
                {Array.from({ length: 40 }, (_, index) => {
                    const row = String.fromCharCode(65 + Math.floor(index / 8))
                    const seat = `${row}${(index % 8) + 1}`

                    const isBooked = bookedSeats.includes(seat)
                    const isSelected = selectedSeats.includes(seat)

                    return (
                        <button
                            key={seat}
                            disabled={isBooked}
                            onClick={() => selectSeat(seat)}
                            style={{
                                background: isBooked
                                    ? 'red'
                                    : isSelected
                                    ? 'green'
                                    : 'lightgray',
                                padding: '12px',
                                border: 'none',
                                cursor: isBooked ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {seat}
                        </button>
                    )
                })}
            </div>

            <p>Tanlangan joylar: {selectedSeats.join(', ') || 'Yo‘q'}</p>

            <button onClick={buyTickets}>
                Sotib olish
            </button>
        </div>
    )
}

export default Booking
