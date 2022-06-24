import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import ListGroup from 'react-bootstrap/ListGroup';

function BudgetChart({ travelBudget })
{
    const {flight, hotel, transportation, food, activities, shopping, misc} = travelBudget

    const data = [
    { name: 'flight', value: parseInt(flight) },
    { name: 'hotel', value: parseInt(hotel) },
    { name: 'transportation', value: parseInt(transportation) },
    { name: 'food', value: parseInt(food) },
    { name: 'activities', value: parseInt(activities) },
    { name: 'shopping', value: parseInt(shopping) },
    { name: 'misc', value: parseInt(misc) }
    ];

    console.log(data)

    const COLORS = ['#ff0000', '#FFA500', '#FFFF00', '#00FF00', "#ADD8E6", "#0000FF", "#6a0dad"];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN); }

    return (
        <div className="">
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    data={data}
                    isAnimationActive={false}
                    cx="200"
                    cy="200"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>

            <ListGroup>
                <ListGroup.Item>
                    <div className="budgetChartBox" id="flightBox"></div>
                    Flight
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="budgetChartBox" id="hotelBox"></div>
                    Hotel
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="budgetChartBox" id="transpoBox"></div>
                    Transportation
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="budgetChartBox" id="foodBox"></div>
                    Food
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="budgetChartBox" id="activitiesBox"></div>
                    Activities
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="budgetChartBox" id="shoppingBox"></div>
                    Shopping
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="budgetChartBox" id="miscBox"></div>
                    Misc
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default BudgetChart