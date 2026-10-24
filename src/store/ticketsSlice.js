import { createSlice } from '@reduxjs/toolkit'

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: { items: [] },
    reducers: {
        addTicket: (state, action) => {
            state.items.push(action.payload)
        },

        removeTicket: (state, action) => {
            const { ticketId, id, seat, index } = action.payload

            if (ticketId) {
                state.items = state.items.filter(
                    (ticket) => ticket.ticketId !== ticketId
                )
            } else {
                state.items = state.items.filter((ticket, i) => {
                    if (i !== index) return true
                    return false
                })
            }
        },

        clearTickets: (state) => {
            state.items = []
        }
    }
})

export const { addTicket, removeTicket, clearTickets } = ticketsSlice.actions
export default ticketsSlice.reducer