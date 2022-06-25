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
              end: new Date(2022, 6, 25),
              isFlight: true
          },
          {
              title: "Vacation",
              start: new Date(2022,6,27),
              end: new Date(2022, 6, 30),
              isTranspo: true
          },
          {
              title: "Conference",
              start: new Date(2022,6,28),
              end: new Date(2022, 6, 28)
          }
      ]

    //color flights
    function eventStyleGetter(event, start, end, isSelected) 
    {
        var backgroundColor = "#FFC0CB"
        var style = {
            backgroundColor: backgroundColor,
            // borderRadius: '0px',
            // opacity: 0.8,
            // color: 'black',
            // border: '0px',
            // display: 'block'
        };
        if (event.isFlight)
        {
            style.backgroundColor = '#ff0000'
        }
        else if (event.isHotel)
        {
            style.backgroundColor = '#FFA500'
        }
        else if (event.isTranspo)
        {
            style.backgroundColor = '#FFFF00'
        }
        else if (event.isFood)
        {
            style.backgroundColor = '#00FF00'
        }
        else if (event.isActivity)
        {
            style.backgroundColor = "#ADD8E6"
        }
        else if (event.isShopping)
        {
            style.backgroundColor = "#0000FF"
        }
        else if (event.isMisc)
        {
            style.backgroundColor = "#6a0dad"
        }


        return {
            style: style
        }
    }
    
    //all events
    const [allEvents, setAllEvents] = useState(events)

    //add flight
    const [isFlight, setIsFlight] = useState(false)
    function handleAddFlight()
    {
        setIsFlight((isFlight) => isFlight = !isFlight)
    }
    const [newFlight, setNewFlight] = useState({ title: "", start: "", end: "", isFlight: true})
    function handleSubmitFlight()
    {
        setAllEvents([...allEvents, newFlight])
    }

    //add hotel
    const [isHotel, setIsHotel] = useState(false)
    function handleAddHotel()
    {
        setIsHotel((isHotel) => isHotel = !isHotel)
    }
    const [newHotel, setNewHotel] = useState({ title: "", start: "", end: "", isHotel: true})
    function handleSubmitHotel()
    {
        setAllEvents([...allEvents, newHotel])
    }

    //add transpo
    const [isTranspo, setIsTranspo] = useState(false)
    function handleAddTranspo()
    {
        setIsTranspo((isTranspo) => isTranspo = !isTranspo)
    }
    const [newTranspo, setNewTranspo] = useState({ title: "", start: "", end: "", isTranspo: true})
    function handleSubmitTranspo()
    {
        setAllEvents([...allEvents, newTranspo])
    }

    //add food
    const [isFood, setIsFood] = useState(false)
    function handleAddFood()
    {
        setIsFood((isFood) => isFood = !isFood)
    }
    const [newFood, setNewFood] = useState({ title: "", start: "", end: "", isFood: true})
    function handleSubmitFood()
    {
        setAllEvents([...allEvents, newFood])
    }

    //add activity
    const [isActivity, setIsActivity] = useState(false)
    function handleAddActivity()
    {
        setIsActivity((isActivity) => isActivity = !isActivity)
    }
    const [newActivity, setNewActivity] = useState({ title: "", start: "", end: "", isActivity: true})
    function handleSubmitActivity()
    {
        setAllEvents([...allEvents, newActivity])
    }

    //add shopping
    const [isShopping, setIsShopping] = useState(false)
    function handleAddShopping()
    {
        setIsShopping((isShopping) => isShopping = !isShopping)
    }
    const [newShopping, setNewShopping] = useState({ title: "", start: "", end: "", isShopping: true})
    function handleSubmitShopping()
    {
        setAllEvents([...allEvents, newShopping])
    }

    //add misc
    const [isMisc, setIsMisc] = useState(false)
    function handleAddMisc()
    {
        setIsMisc((isMisc) => isMisc = !isMisc)
    }
    const [newMisc, setNewMisc] = useState({ title: "", start: "", end: "", isMisc: true})
    function handleSubmitMisc()
    {
        setAllEvents([...allEvents, newMisc])
    }

    return (
        <div>
            <h1>Itinerary</h1>
            <button onClick={ handleAddFlight }>Add Flight</button>
            { isFlight ? 
                <div>
                    <input type="text" placeholder="Add Title" value={newFlight.title} onChange={(e) => setNewFlight({...newFlight, title: e.target.value})} />
                    <DatePicker placeholderText="Start Date" selected={newFlight.start} onChange={(e) => setNewFlight({...newFlight, start: e})} />
                    <DatePicker placeholderText="End Date" selected={newFlight.end} onChange={(e) => setNewFlight({...newFlight, end: e})} />
                    <button onClick={ handleSubmitFlight }>Submit</button>
                </div>
                :
                <div></div>
            }

            <button onClick={ handleAddHotel }>Add Hotel</button>
            { isHotel ? 
                <div>
                    <input type="text" placeholder="Add Title" value={newHotel.title} onChange={(e) => setNewHotel({...newHotel, title: e.target.value})} />
                    <DatePicker placeholderText="Start Date" selected={newHotel.start} onChange={(e) => setNewHotel({...newHotel, start: e})} />
                    <DatePicker placeholderText="End Date" selected={newHotel.end} onChange={(e) => setNewHotel({...newHotel, end: e})} />
                    <button onClick={ handleSubmitHotel }>Submit</button>
                </div>
                :
                <div></div>
            }

            <button onClick={ handleAddTranspo }>Add Transportation</button>
            { isTranspo ? 
                <div>
                    <input type="text" placeholder="Add Title" value={newTranspo.title} onChange={(e) => setNewTranspo({...newTranspo, title: e.target.value})} />
                    <DatePicker placeholderText="Start Date" selected={newTranspo.start} onChange={(e) => setNewTranspo({...newTranspo, start: e})} />
                    <DatePicker placeholderText="End Date" selected={newTranspo.end} onChange={(e) => setNewTranspo({...newTranspo, end: e})} />
                    <button onClick={ handleSubmitTranspo }>Submit</button>
                </div>
                :
                <div></div>
            }

            <button onClick={ handleAddFood }>Add Restaurant</button>
            { isFood ? 
                <div>
                    <input type="text" placeholder="Add Title" value={newFood.title} onChange={(e) => setNewFood({...newFood, title: e.target.value})} />
                    <DatePicker placeholderText="Start Date" selected={newFood.start} onChange={(e) => setNewFood({...newFood, start: e})} />
                    <DatePicker placeholderText="End Date" selected={newFood.end} onChange={(e) => setNewFood({...newFood, end: e})} />
                    <button onClick={ handleSubmitFood }>Submit</button>
                </div>
                :
                <div></div>
            }

            <button onClick={ handleAddActivity }>Add Activity</button>
            { isActivity ? 
                <div>
                    <input type="text" placeholder="Add Title" value={newActivity.title} onChange={(e) => setNewActivity({...newActivity, title: e.target.value})} />
                    <DatePicker placeholderText="Start Date" selected={newActivity.start} onChange={(e) => setNewActivity({...newActivity, start: e})} />
                    <DatePicker placeholderText="End Date" selected={newActivity.end} onChange={(e) => setNewActivity({...newActivity, end: e})} />
                    <button onClick={ handleSubmitActivity }>Submit</button>
                </div>
                :
                <div></div>
            }    

            <button onClick={ handleAddShopping }>Add Shopping</button>
            { isShopping ? 
                <div>
                    <input type="text" placeholder="Add Title" value={newShopping.title} onChange={(e) => setNewShopping({...newShopping, title: e.target.value})} />
                    <DatePicker placeholderText="Start Date" selected={newShopping.start} onChange={(e) => setNewShopping({...newShopping, start: e})} />
                    <DatePicker placeholderText="End Date" selected={newShopping.end} onChange={(e) => setNewShopping({...newShopping, end: e})} />
                    <button onClick={ handleSubmitShopping }>Submit</button>
                </div>
                :
                <div></div>
            }       

            <button onClick={ handleAddMisc }>Add Misc</button>
            { isMisc ? 
                <div>
                    <input type="text" placeholder="Add Title" value={newMisc.title} onChange={(e) => setNewMisc({...newMisc, title: e.target.value})} />
                    <DatePicker placeholderText="Start Date" selected={newMisc.start} onChange={(e) => setNewMisc({...newMisc, start: e})} />
                    <DatePicker placeholderText="End Date" selected={newMisc.end} onChange={(e) => setNewMisc({...newMisc, end: e})} />
                    <button onClick={ handleSubmitMisc }>Submit</button>
                </div>
                :
                <div></div>
            }    

            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                eventPropGetter={(eventStyleGetter)}
            />
        </div>
    )
}
export default Itinerary