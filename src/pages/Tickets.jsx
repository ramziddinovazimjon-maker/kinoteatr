
import { useDispatch, useSelector } from 'react-redux'
import { removeTicket, clearTickets } from '../store/ticketsSlice'
import Navbar from '../components/Navbar'

function Tickets() {
    const dispatch = useDispatch()
    const tickets = useSelector((state) => state.tickets.items)

    const totalPrice = tickets.reduce(
        (sum, ticket) => sum + Number(ticket.price),
        0
    )

    function handleRemove(ticket, index) {
        dispatch(removeTicket({
            ticketId: ticket.ticketId,
            id: ticket.id,
            seat: ticket.seat,
            index
        }))
    }

    return (
        <div>
            <Navbar />

            <h1>Mening biletlarim</h1>

            {tickets.length === 0 ? (
                <p>Sizda hozircha bilet yo‘q</p>
            ) : (
                <>
                    {tickets.map((ticket, index) => (
                        <div key={ticket.ticketId || `${ticket.id}-${index}`}>
                            <h3>{ticket.title}</h3>
                            <p>Narxi: {ticket.price} so'm</p>
                            <p>O‘rindiq: {ticket.seat || 'Tanlanmagan'}</p>

                            <button onClick={() => handleRemove(ticket, index)}>
                                O‘chirish
                            </button>

                            <hr />
                        </div>
                    ))}

                    <h2>Umumiy narx: {totalPrice} so'm</h2>

                    <button onClick={() => dispatch(clearTickets())}>
                        Hammasini tozalash
                    </button>
                </>
            )}
        </div>
    )
}

export default Tickets
