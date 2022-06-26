import Form from 'react-bootstrap/Form';
import DateTimePicker from 'react-datetime-picker';
import Dropdown from 'react-bootstrap/Dropdown';

function PlanningHelper()
{
    return (
        <div>
            <h1>Planning Helper</h1>
            <Form>
                <h3>Add general information</h3>
                <label>
                    Start day/time:
                    <DateTimePicker disableClock />
                </label>
                <label>
                    End day/time:
                    <DateTimePicker disableClock />
                </label>
                <label>
                    How many hours for breakfast?
                    <input type="text" name="breakfast" />
                </label>
                <label>
                    How many hours for lunch?
                    <input type="text" name="lunch" />
                </label>
                <label>
                    How how many hours for dinner?
                    <input type="text" name="dinner" />
                </label>
                <button>Submit</button>
            </Form>

            <Form>
                <h3>Add event</h3>
                <label>
                    Name:
                    <input type="text" name="eventName" />
                </label>
                <Dropdown>
                    <h5 id="name">Category:</h5>
                    <Dropdown.Toggle variant="success" id="catDropdown">
                        Category
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Activity</Dropdown.Item>
                        <Dropdown.Item>Restaurant</Dropdown.Item>
                        <Dropdown.Item>Shopping</Dropdown.Item>
                        <Dropdown.Item>Misc</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <label>
                    Neighborhood:
                    <input type="text" name="eventNeighborhood" />
                </label>
                <label>
                    How many hours?
                    <input type="number" name="eventHours" />
                </label>
                <button>Submit</button>
            </Form>
        </div>
    )
}
export default PlanningHelper