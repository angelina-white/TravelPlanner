import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { useState } from "react"
import DatePicker from "react-datepicker"



function Itinerary()
{
    const locales = {
        'en-US': enUS,
      }
      
      const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
      })
      
      const events = [
          {
              title: "Big Meeting",
              allDay: true,
              start: new Date(2022,6,25),
              end: new Date(2022, 6, 25)
          },
          {
              title: "Vacation",
              start: new Date(2022,6,27),
              end: new Date(2022, 6, 30)
          },
          {
              title: "Conference",
              start: new Date(2022,6,28),
              end: new Date(2022, 6, 28)
          }
      ]

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent()
    {
        setAllEvents([...allEvents, newEvent])
    }
    console.log(allEvents)

    return (
        <div>
            <h1>Itinerary</h1>
            <h2>Add event</h2>
            <div>
                <input type="text" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />
                <DatePicker placeholderText="Start Date" selected={newEvent.start} onChange={(e) => setNewEvent({...newEvent, start: e})} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(e) => setNewEvent({...newEvent, end: e})} />
                <button onClick={ handleAddEvent }>Submit</button>
            </div>

            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}
export default Itinerary