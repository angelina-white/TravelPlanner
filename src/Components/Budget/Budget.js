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

    return (
        <div className="budget">
            <h1>Budget</h1>
            <div className="budgetInput">
                <h2>Budget Input</h2>
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
                        </tbody>
                    </Table>
                </form>
            </div>
            <BudgetChart travelBudget={ travelBudget }/>
        </div>
    )
}
export default Budget