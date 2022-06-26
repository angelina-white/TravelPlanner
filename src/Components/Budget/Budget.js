import BudgetChart from "./BudgetChart"
import Table from 'react-bootstrap/Table';
import CurrencyInput from 'react-currency-input-field';
import { useState } from "react";

function Budget()
{
    const [travelBudget, setTravelBudget] = useState(
        {
            flight: "0",
            hotel: "0",
            transportation:"0",
            food: "0",
            activities: "0",
            shopping: "0",
            misc: "0"
        }
    )

    function handleChange(event)
    {
        setTravelBudget({
            ...travelBudget, [event.target.name]: event.target.value
        })
    }

    const budgetTotal = (parseFloat(travelBudget.flight) + parseFloat(travelBudget.hotel) + parseFloat(travelBudget.transportation) + parseFloat(travelBudget.food) + parseFloat(travelBudget.activities) + parseFloat(travelBudget.shopping) + parseFloat(travelBudget.misc)).toFixed(2)

    return (
        <div className="budget">
            <h1>Budget</h1>
            <div className="budgetInput">
                <h3>Planning how much you'll spend</h3>
                <form>
                    <Table className="orderInputTable" striped bordered hover size="sm">
                        <thead>
                            <th scope="col">Type</th>
                            <th scope="col">Price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Flight</td>
                                <td>
                                    <CurrencyInput
                                    id="input-example"
                                    name="flight"
                                    placeholder="Please enter a number"
                                    defaultValue= "0.00"
                                    decimalsLimit={2}
                                    onChange={ handleChange }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Hotel</td>
                                <td>
                                    <CurrencyInput
                                        id="input-example"
                                        name="hotel"
                                        placeholder="Please enter a number"
                                        defaultValue= "0.00"
                                        decimalsLimit={2}
                                        onChange={ handleChange }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Transportation</td>
                                <td>
                                    <CurrencyInput
                                        id="input-example"
                                        name="transportation"
                                        placeholder="Please enter a number"
                                        defaultValue= "0.00"
                                        decimalsLimit={2}
                                        onChange={ handleChange }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Food</td>
                                <td>
                                    <CurrencyInput
                                        id="input-example"
                                        name="food"
                                        placeholder="Please enter a number"
                                        defaultValue= "0.00"
                                        decimalsLimit={2}
                                        onChange={ handleChange }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Activities</td>
                                <td>
                                    <CurrencyInput
                                        id="input-example"
                                        name="activities"
                                        placeholder="Please enter a number"
                                        defaultValue= "0.00"
                                        decimalsLimit={2}
                                        onChange={ handleChange }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Shopping</td>
                                <td>
                                    <CurrencyInput
                                        id="input-example"
                                        name="shopping"
                                        placeholder="Please enter a number"
                                        defaultValue= "0.00"
                                        decimalsLimit={2}
                                        onChange={ handleChange }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Misc</td>
                                <td>
                                    <CurrencyInput
                                        id="input-example"
                                        name="misc"
                                        placeholder="Please enter a number"
                                        defaultValue= "0.00"
                                        decimalsLimit={2}
                                        onChange={ handleChange }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>
                                    ${ budgetTotal }
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <button>Save</button>
                </form>
            </div>
            <BudgetChart travelBudget={ travelBudget }/>
        </div>
    )
}
export default Budget