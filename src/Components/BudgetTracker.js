import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import ListGroup from 'react-bootstrap/ListGroup';

function BudgetTracker()
{

    return (
        <div>
            <h1>Budget Tracker</h1>
            <h3>How much you actually spent</h3>
            <Form>
                <Dropdown>
                    <h5 id="name">Choose category:</h5>
                    <Dropdown.Toggle variant="success" id="catDropdown">
                        Category
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Flight</Dropdown.Item>
                        <Dropdown.Item>Hotel</Dropdown.Item>
                        <Dropdown.Item>Transportation</Dropdown.Item>
                        <Dropdown.Item>Activity</Dropdown.Item>
                        <Dropdown.Item>Restaurant</Dropdown.Item>
                        <Dropdown.Item>Shopping</Dropdown.Item>
                        <Dropdown.Item>Misc</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <label>
                    How much?
                    <input type="number" name="cost" />
                </label>
                <button>Add to total</button>
            </Form>

            <Table className="orderInputTable" striped bordered hover size="sm">
                <thead>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Flight</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>Hotel</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>Transportation</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>Activity</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>Restaurant</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>Shopping</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>$0.00</td>
                    </tr>
                </tbody>
            </Table>

            {/* there is a pie chart you can add both in one, add that */}
            
        </div>
    )
}
export default BudgetTracker