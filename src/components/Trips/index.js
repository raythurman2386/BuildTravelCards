import React, {useState} from 'react'
import response from '../../response/response'
import Card from '../Card'

const Trips = () => {
    const [trips, setTrips] = useState(response)

    // Handle change for the filter functionality
    const handleChange = e => {
        setTrips(trips.filter(item => item.category === e.target.value))
    }

    return (
        <div className="trips-wrap">
            <h4 className="heading">view latest trips</h4>
            <select name="trips" onChange={e => handleChange(e)}>
                <option value="">filter</option>
                <option value="adventure">Adventure</option>
                <option value="family">Family</option>
                <option value="weekend break">Weekend Break</option>
            </select>
            <div className="trips-cards-wrap">
                {trips.map(trip => (
                    <Card props={trip} />
                ))}
            </div>
        </div>
    )
}

export default Trips
