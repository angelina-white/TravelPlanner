import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { useState } from "react"
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

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
            allDay: false,
            start: new Date(2022,5,25, 13, 30),
            end: new Date(2022, 5, 25, 17, 30),
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
    const [newFlight, setNewFlight] = useState({ title: "", start: "", end: "", isFlight: true})
    function handleSubmitFlight()
    {
        setAllEvents([...allEvents, newFlight])
    }

    //add hotel
    const [newHotel, setNewHotel] = useState({ title: "", start: "", end: "", isHotel: true})
    function handleSubmitHotel()
    {
        setAllEvents([...allEvents, newHotel])
    }

    //add transpo
    const [newTranspo, setNewTranspo] = useState({ title: "", start: "", end: "", isTranspo: true})
    function handleSubmitTranspo()
    {
        setAllEvents([...allEvents, newTranspo])
    }

    //add activity
    const [newActivity, setNewActivity] = useState({ title: "", start: "", end: "", isActivity: true})
    function handleSubmitActivity()
    {
        setAllEvents([...allEvents, newActivity])
    }

    //add food
    const [newFood, setNewFood] = useState({ title: "", start: "", end: "", isFood: true})
    function handleSubmitFood()
    {
        setAllEvents([...allEvents, newFood])
    }

    //add shopping
    const [newShopping, setNewShopping] = useState({ title: "", start: "", end: "", isShopping: true})
    function handleSubmitShopping()
    {
        setAllEvents([...allEvents, newShopping])
    }

    //add misc
    const [newMisc, setNewMisc] = useState({ title: "", start: "", end: "", isMisc: true})
    function handleSubmitMisc()
    {
        setAllEvents([...allEvents, newMisc])
    }


    //show category form
    const [showFlight, setShowFlight] = useState(false);
    const handleCloseFlight = () => setShowFlight(false);
    const handleShowFlight = () => setShowFlight(true);

    const [showHotel, setShowHotel] = useState(false);
    const handleCloseHotel = () => setShowHotel(false);
    const handleShowHotel = () => setShowHotel(true);

    const [showTranspo, setShowTranspo] = useState(false);
    const handleCloseTranspo = () => setShowTranspo(false);
    const handleShowTranspo = () => setShowTranspo(true);

    const [showActivity, setShowActivity] = useState(false);
    const handleCloseActivity = () => setShowActivity(false);
    const handleShowActivity = () => setShowActivity(true);

    const [showFood, setShowFood] = useState(false);
    const handleCloseFood = () => setShowFood(false);
    const handleShowFood = () => setShowFood(true);

    const [showShopping, setShowShopping] = useState(false);
    const handleCloseShopping = () => setShowShopping(false);
    const handleShowShopping = () => setShowShopping(true);

    const [showMisc, setShowMisc] = useState(false);
    const handleCloseMisc = () => setShowMisc(false);
    const handleShowMisc = () => setShowMisc(true);


    //add costs
    const [isAddFlightCost, setIsAddFlightCost] = useState(false)
    function handleAddFlightCost()
    {
        setIsAddFlightCost((isAddFlightCost) => isAddFlightCost = true)
    }
    function handleNoAddFlightCost()
    {
        setIsAddFlightCost((isAddFlightCost) => isAddFlightCost = false)
    }

    const [isAddHotelCost, setIsAddHotelCost] = useState(false)
    function handleAddHotelCost()
    {
        setIsAddHotelCost((isAddHotelCost) => isAddHotelCost = true)
    }
    function handleNoAddHotelCost()
    {
        setIsAddHotelCost((isAddHotelCost) => isAddHotelCost = false)
    }

    const [isAddTranspoCost, setIsAddTranspoCost] = useState(false)
    function handleAddTranspoCost()
    {
        setIsAddTranspoCost((isAddTranspoCost) => isAddTranspoCost = true)
    }
    function handleNoAddTranspoCost()
    {
        setIsAddTranspoCost((isAddTranspoCost) => isAddTranspoCost = false)
    }

    const [isAddActivityCost, setIsAddActivityCost] = useState(false)
    function handleAddActivityCost()
    {
        setIsAddActivityCost((isAddActivityCost) => isAddActivityCost = true)
    }
    function handleNoAddActivityCost()
    {
        setIsAddActivityCost((isAddActivityCost) => isAddActivityCost = false)
    }

    const [isAddRestaCost, setIsAddRestaCost] = useState(false)
    function handleAddRestaCost()
    {
        setIsAddRestaCost((isAddRestaCost) => isAddRestaCost = true)
    }
    function handleNoAddRestaCost()
    {
        setIsAddRestaCost((isAddRestaCost) => isAddRestaCost = false)
    }

    const [isAddShoppingCost, setIsAddShoppingCost] = useState(false)
    function handleAddShoppingCost()
    {
        setIsAddShoppingCost((isAddShoppingCost) => isAddShoppingCost = true)
    }
    function handleNoAddShoppingCost()
    {
        setIsAddShoppingCost((isAddShoppingCost) => isAddShoppingCost = false)
    }

    const [isAddMiscCost, setIsAddMiscCost] = useState(false)
    function handleAddMiscCost()
    {
        setIsAddMiscCost((isAddMiscCost) => isAddMiscCost = true)
    }
    function handleNoAddMiscCost()
    {
        setIsAddMiscCost((isAddMiscCost) => isAddMiscCost = false)
    }

    //add location to map
    const [isAddFlightLocation, setIsAddFlightLocation] = useState(false)
    function handleAddFlightLocation()
    {
        setIsAddFlightLocation((isAddFlightLocation) => isAddFlightLocation = true)
    }
    function handleNoAddFlightLocation()
    {
        setIsAddFlightLocation((isAddFlightLocation) => isAddFlightLocation = false)
    }

    const [isAddHotelLocation, setIsAddHotelLocation] = useState(false)
    function handleAddHotelLocation()
    {
        setIsAddHotelLocation((isAddHotelLocation) => isAddHotelLocation = true)
    }
    function handleNoAddHotelLocation()
    {
        setIsAddHotelLocation((isAddHotelLocation) => isAddHotelLocation = false)
    }

    const [isAddActivityLocation, setIsAddActivityLocation] = useState(false)
    function handleAddActivityLocation()
    {
        setIsAddActivityLocation((isAddActivityLocation) => isAddActivityLocation = true)
    }
    function handleNoAddActivityLocation()
    {
        setIsAddActivityLocation((isAddActivityLocation) => isAddActivityLocation = false)
    }

    const [isAddRestaLocation, setIsAddRestaLocation] = useState(false)
    function handleAddRestaLocation()
    {
        setIsAddRestaLocation((isAddRestaLocation) => isAddRestaLocation = true)
    }
    function handleNoAddRestaLocation()
    {
        setIsAddRestaLocation((isAddRestaLocation) => isAddRestaLocation = false)
    }

    const [isAddShoppingLocation, setIsAddShoppingLocation] = useState(false)
    function handleAddShoppingLocation()
    {
        setIsAddShoppingLocation((isAddShoppingLocation) => isAddShoppingLocation = true)
    }
    function handleNoAddShoppingLocation()
    {
        setIsAddShoppingLocation((isAddShoppingLocation) => isAddShoppingLocation = false)
    }

    const [isAddMiscLocation, setIsAddMiscLocation] = useState(false)
    function handleAddMiscLocation()
    {
        setIsAddMiscLocation((isAddMiscLocation) => isAddMiscLocation = true)
    }
    function handleNoAddMiscLocation()
    {
        setIsAddMiscLocation((isAddMiscLocation) => isAddMiscLocation = false)
    }

    return (
        <div>
            <h1>Itinerary</h1>

            <button variant="primary" onClick={handleShowFlight}>
                Add Flight
            </button>
            <Modal show={showFlight} onHide={handleCloseFlight}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Flight</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <input type="text" placeholder="Add Title" value={newFlight.title} onChange={(e) => setNewFlight({...newFlight, title: e.target.value})} />
                            <DateTimePicker disableClock value={newFlight.start} selected={newFlight.start} onChange={(e) =>    setNewFlight({...newFlight, start: e})} />
                            <DateTimePicker disableClock value={newFlight.end} selected={newFlight.end} onChange={(e) => setNewFlight({...newFlight, end: e})} />

                            <h3>Details</h3>
                            <Form.Check
                                inline
                                label="Departing"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="Arriving"
                                name="group1"
                                type="radio"
                            />
                            <label>
                                Airline:
                                <input type="text" name="airline" />
                            </label>
                            <label>
                                Gate:
                                <input type="number" min="0" name="gate" />
                            </label>

                            <h6>Want to add location to map?</h6>
                            <Form.Check
                                inline
                                label="Yes"
                                name="group1"
                                type="radio"
                                onClick={ handleAddFlightLocation }
                            />
                            <Form.Check
                                inline
                                label="No"
                                name="group1"
                                type="radio"
                                onClick={ handleNoAddFlightLocation }
                            />

                            {isAddFlightLocation ?
                                <div>
                                    <label>
                                        Address:
                                        <input type="test" name="flightAddress" />
                                    </label>
                                    <label>
                                        City:
                                        <input type="test" name="flightCity" />
                                    </label>
                                    <label>
                                        State:
                                        <input type="test" name="flightState" />
                                    </label>
                                    <label>
                                        Zipcode:
                                        <input type="test" name="flightZipcode" />
                                    </label>
                                </div>
                                :
                                <div></div>
                            }

                            <h6>Want to add cost?</h6>
                            <Form.Check
                                inline
                                label="Yes"
                                name="group1"
                                type="radio"
                                onClick={ handleAddFlightCost }
                            />
                            <Form.Check
                                inline
                                label="No"
                                name="group1"
                                type="radio"
                                onClick={ handleNoAddFlightCost }
                            />

                            {isAddFlightCost ?
                                <label>
                                    Cost:
                                    <input type="number" min="0" name="flightCost" />
                                </label>
                                :
                                <div></div>
                            }

                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={handleCloseFlight}>
                            Close
                        </button>
                        <button onClick={ handleSubmitFlight }>Submit</button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <button variant="primary" onClick={handleShowHotel}>
                Add Hotel
            </button>
            <Modal show={showHotel} onHide={handleCloseHotel}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Hotel</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" placeholder="Add Title" value={newHotel.title} onChange={(e) => setNewHotel({...newHotel, title: e.target.value})} />
                        <DateTimePicker disableClock value={newHotel.start} selected={newHotel.start} onChange={(e) => setNewHotel({...newHotel, start: e})} />
                        <DateTimePicker disableClock value={newHotel.end} selected={newHotel.end} onChange={(e) => setNewHotel({...newHotel, end: e})} />

                        <Form.Check
                            label="Check-in"
                            name="group1"
                            type="radio"
                        />
                        <Form.Check
                            // inline
                            label="Check-out"
                            name="group1"
                            type="radio"
                        />

                        <label>
                            Hotel Name:
                            <input type="text" name="airline" />
                        </label>

                        <h6>Want to add location to map?</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                            onClick={ handleAddHotelLocation }
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            onClick={ handleNoAddHotelLocation }
                        />

                        {isAddHotelLocation ?
                            <div>
                                <label>
                                    Address:
                                    <input type="test" name="hotelAddress" />
                                </label>
                                <label>
                                    City:
                                    <input type="test" name="hotelCity" />
                                </label>
                                <label>
                                    State:
                                    <input type="test" name="hotelState" />
                                </label>
                                <label>
                                    Zipcode:
                                    <input type="test" name="hotelZipcode" />
                                </label>
                            </div>
                            :
                            <div></div>
                        }

                        <h6>Want to add cost?</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                            onClick={ handleAddHotelCost }
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            onClick={ handleNoAddHotelCost }
                        />

                        {isAddHotelCost ?
                            <label>
                                Cost:
                                <input type="number" min="0" name="hotelCost" />
                            </label>
                            :
                            <div></div>
                        } 

                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={handleCloseHotel}>
                            Close
                        </button>
                        <button onClick={ handleSubmitHotel }>Submit</button>
                    </Modal.Footer>
                </Form>
            </Modal>


            <button variant="primary" onClick={handleShowTranspo}>
                Add Transportation
            </button>
            <Modal show={showTranspo} onHide={handleCloseTranspo}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Transportation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" placeholder="Add Title" value={newTranspo.title} onChange={(e) => setNewTranspo({...newTranspo, title: e.target.value})} />
                        <DateTimePicker disableClock value={newTranspo.start} selected={newTranspo.start} onChange={(e) => setNewTranspo({...newTranspo, start: e})} />
                        <DateTimePicker disableClock value={newTranspo.end} selected={newTranspo.end} onChange={(e) => setNewTranspo({...newTranspo, end: e})} />

                        <Form.Check
                            label="Airport Pick-up"
                            name="group1"
                            type="radio"
                        />
                        <Form.Check
                            label="Airport Drop-off"
                            name="group1"
                            type="radio"
                        />
                        <Form.Check
                            label="Other"
                            name="group1"
                            type="radio"
                        />

                        <h6>Want to add cost?</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                            onClick={ handleAddTranspoCost }
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            onClick={ handleNoAddTranspoCost }
                        />

                        {isAddTranspoCost ?
                            <label>
                                Cost:
                                <input type="number" min="0" name="hotelCost" />
                            </label>
                            :
                            <div></div>
                        } 
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={handleCloseTranspo}>
                            Close
                        </button>
                        <button onClick={ handleSubmitTranspo }>Submit</button>
                    </Modal.Footer>
                </Form>
            </Modal>


            <button variant="primary" onClick={handleShowActivity}>
                Add Activity
            </button>
            <Modal show={showActivity} onHide={handleCloseActivity}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Activity</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <input type="text" placeholder="Add Title" value={newActivity.title} onChange={(e) => setNewActivity({...newActivity, title: e.target.value})} />
                        <DateTimePicker disableClock value={newActivity.start} selected={newActivity.start} onChange={(e) => setNewActivity({...newActivity, start: e})} />
                        <DateTimePicker disableClock value={newActivity.end} selected={newActivity.end} onChange={(e) => setNewActivity({...newActivity, end: e})} />

                        <label>
                            Location:
                            <input type="text" name="activityLocation" />
                        </label>

                        <h6>Want to add location to map?</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                            onClick={ handleAddActivityLocation }
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            onClick={ handleNoAddActivityLocation }
                        />

                        {isAddActivityLocation ?
                            <div>
                                <label>
                                    Address:
                                    <input type="test" name="activityAddress" />
                                </label>
                                <label>
                                    City:
                                    <input type="test" name="activityCity" />
                                </label>
                                <label>
                                    State:
                                    <input type="test" name="activityState" />
                                </label>
                                <label>
                                    Zipcode:
                                    <input type="test" name="activityZipcode" />
                                </label>
                            </div>
                            :
                            <div></div>
                        }

                        <h6>Want to add cost?</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                            onClick={ handleAddActivityCost }
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            onClick={ handleNoAddActivityCost }
                        />

                        {isAddActivityCost ?
                            <label>
                                Cost:
                                <input type="number" min="0" name="restaCost" />
                            </label>
                            :
                            <div></div>
                        } 
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={handleCloseActivity}>
                            Close
                        </button>
                        <button onClick={ handleSubmitActivity }>Submit</button>
                    </Modal.Footer>
                </Form>
            </Modal>


            <button variant="primary" onClick={handleShowFood}>
                Add Restaurant
            </button>
            <Modal show={showFood} onHide={handleCloseFood}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Restaurant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" placeholder="Add Title" value={newFood.title} onChange={(e) => setNewFood({...newFood, title: e.target.value})} />
                        <DateTimePicker disableClock value={newFood.start} selected={newFood.start} onChange={(e) => setNewFood({...newFood, start: e})} />
                        <DateTimePicker disableClock value={newFood.end} selected={newFood.end} onChange={(e) => setNewFood({...newFood, end: e})} />

                        <label>
                            Restaurant Name:
                            <input type="text" name="restaurantName" />
                        </label>
                        <label>
                            Restaurant Location:
                            <input type="text" name="restaurantLocation" />
                        </label>

                        <h6>Want to add location to map?</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                            onClick={ handleAddRestaLocation }
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            onClick={ handleNoAddRestaLocation }
                        />

                        {isAddRestaLocation ?
                            <div>
                                <label>
                                    Address:
                                    <input type="test" name="restaAddress" />
                                </label>
                                <label>
                                    City:
                                    <input type="test" name="restaCity" />
                                </label>
                                <label>
                                    State:
                                    <input type="test" name="restaState" />
                                </label>
                                <label>
                                    Zipcode:
                                    <input type="test" name="restaZipcode" />
                                </label>
                            </div>
                            :
                            <div></div>
                        }

                        <h6>Want to add cost?</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                            onClick={ handleAddRestaCost }
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            onClick={ handleNoAddRestaCost }
                        />

                        {isAddRestaCost ?
                            <label>
                                Cost:
                                <input type="number" min="0" name="restaCost" />
                            </label>
                            :
                            <div></div>
                        } 
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={handleCloseFood}>
                            Close
                        </button>
                        <button onClick={ handleSubmitFood }>Submit</button>
                    </Modal.Footer>
                </Form>
            </Modal>


            <button variant="primary" onClick={handleShowShopping}>
                Add Shopping
            </button>
            <Modal show={showShopping} onHide={handleCloseShopping}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Shopping</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" placeholder="Add Title" value={newShopping.title} onChange={(e) => setNewShopping({...newShopping, title: e.target.value})} />
                        <DateTimePicker disableClock value={newShopping.start} selected={newShopping.start} onChange={(e) => setNewShopping({...newShopping, start: e})} />
                        <DateTimePicker disableClock value={newShopping.end} selected={newShopping.end} onChange={(e) => setNewShopping({...newShopping, end: e})} />

                        <label>
                            Location:
                            <input type="text" name="shoppingLocation" />
                        </label>

                        <h6>Want to add location to map?</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                            onClick={ handleAddShoppingLocation }
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            onClick={ handleNoAddShoppingLocation }
                        />

                        {isAddShoppingLocation ?
                            <div>
                                <label>
                                    Address:
                                    <input type="test" name="shoppingAddress" />
                                </label>
                                <label>
                                    City:
                                    <input type="test" name="shoppingCity" />
                                </label>
                                <label>
                                    State:
                                    <input type="test" name="shoppingState" />
                                </label>
                                <label>
                                    Zipcode:
                                    <input type="test" name="shoppingZipcode" />
                                </label>
                            </div>
                            :
                            <div></div>
                        }

                        <h6>Want to add cost?</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                            onClick={ handleAddShoppingCost }
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            onClick={ handleNoAddShoppingCost }
                        />

                        {isAddShoppingCost ?
                            <label>
                                Cost:
                                <input type="number" min="0" name="restaCost" />
                            </label>
                            :
                            <div></div>
                        } 
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={handleCloseShopping}>
                            Close
                        </button>
                        <button onClick={ handleSubmitShopping }>Submit</button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <button variant="primary" onClick={handleShowMisc}>
                Add Misc
            </button>
            <Modal show={showMisc} onHide={handleCloseMisc}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Misc</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" placeholder="Add Title" value={newMisc.title} onChange={(e) => setNewMisc({...newMisc, title: e.target.value})} />
                        <DateTimePicker disableClock value={newMisc.start} selected={newMisc.start} onChange={(e) => setNewMisc({...newMisc, start: e})} />
                        <DateTimePicker disableClock value={newMisc.end} selected={newMisc.end} onChange={(e) => setNewMisc({...newMisc, end: e})} />

                        <label>
                            Misc:
                            <input type="text" name="misc" />
                        </label>

                        <h6>Want to add location to map?</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                            onClick={ handleAddMiscLocation }
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            onClick={ handleNoAddMiscLocation }
                        />

                        {isAddMiscLocation ?
                            <div>
                                <label>
                                    Address:
                                    <input type="test" name="miscAddress" />
                                </label>
                                <label>
                                    City:
                                    <input type="test" name="miscCity" />
                                </label>
                                <label>
                                    State:
                                    <input type="test" name="miscState" />
                                </label>
                                <label>
                                    Zipcode:
                                    <input type="test" name="miscZipcode" />
                                </label>
                            </div>
                            :
                            <div></div>
                        }

                        <h6>Want to add cost?</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                            onClick={ handleAddMiscCost }
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                            onClick={ handleNoAddMiscCost }
                        />

                        {isAddMiscCost ?
                            <label>
                                Cost:
                                <input type="number" min="0" name="restaCost" />
                            </label>
                            :
                            <div></div>
                        } 
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={handleCloseMisc}>
                            Close
                        </button>
                        <button onClick={ handleSubmitMisc }>Submit</button>
                    </Modal.Footer>
                </Form>
            </Modal> 

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