import Accordion from "react-bootstrap/Accordion";

function Summary()
{
    return (
        <div>
            <h1>Summary</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Flight</Accordion.Header>
                    <Accordion.Body>
                        <h5>Departing</h5>
                        <p>Airlines:</p>
                        <p>Day:</p>
                        <p>Flight time:</p>
                        <p>Gate:</p>
                        <h5>Arriving</h5>
                        <p>Airlines:</p>
                        <p>Day:</p>
                        <p>Flight time:</p>
                        <p>Gate:</p>
                        <h5>Cost</h5>
                        <p>Flight tickets:</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Hotel</Accordion.Header>
                    <Accordion.Body>
                        <h5>Hotel Name</h5>
                        <p>Address</p>
                        <p>Check-In Day:</p>
                        <p>Check-In Time:</p>
                        <p>Check-Out Day:</p>
                        <p>Check-Out Time:</p>
                        <h5>Cost</h5>
                        <p>Hotel reservations:</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Transportation</Accordion.Header>
                    <Accordion.Body>
                        <h5>Airport Pick-up</h5>
                        <p>Time:</p>
                        <h5>Airport Drop-off</h5>
                        <p>Time:</p>
                        <h5>Other modes</h5>
                        <p>Time:</p>
                        <h5>Cost</h5>
                        <p>Transporation cost:</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Food</Accordion.Header>
                    <Accordion.Body>
                        <h5>Restaurant1</h5>
                        <p>Reservation Location:</p>
                        <p>Reservation Day:</p>
                        <p>Reservation Time:</p>
                        <h5>Restaurant2</h5>
                        <p>Reservation Location:</p>
                        <p>Reservation Day:</p>
                        <p>Reservation Time:</p>
                        <h5>Cost</h5>
                        <p>Foods cost:</p> 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Activities</Accordion.Header>
                    <Accordion.Body>
                        <h5>Activity1</h5>
                        <p>Location:</p>
                        <p>Day:</p>
                        <p>Time:</p>
                        <h5>Acitivty2</h5>
                        <p>Location:</p>
                        <p>Day:</p>
                        <p>Time:</p>
                        <h5>Cost</h5>
                        <p>Activities cost:</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Shopping</Accordion.Header>
                    <Accordion.Body>
                        <h5>Location1</h5>
                        <p>Day:</p>
                        <p>Time:</p>
                        <h5>Location2</h5>
                        <p>Day:</p>
                        <p>Time:</p>
                        <h5>Cost</h5>
                        <p>Shopping cost:</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Misc</Accordion.Header>
                    <Accordion.Body>
                        <h5>Misc1</h5>
                        <p>Day:</p>
                        <p>Time:</p>
                        <h5>Misc2</h5>
                        <p>Day:</p>
                        <p>Time:</p>
                        <h5>Cost</h5>
                        <p>Misc cost:</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
export default Summary