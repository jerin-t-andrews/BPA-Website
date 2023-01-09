import React from 'react'
import {useLocation} from 'react-router-dom'
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom'

const CarPage = () => {
    const location = useLocation();
    return (
        <div className='carPage'>
            <div className='carPage-content'>
                <div className='car-text-content'>
                    <h1>{location.state.make} {location.state.model}</h1>
                    <p>{location.state.year}</p>
                </div>
                <br/>
                <br/>
                <h1>Car Specs</h1>
                <br/>
                <br/>
                <table>
                    <tr>
                        <td>
                            <img src={location.state.path} alt='interiorpic'/>
                        </td>
                        <td>
                            <p><strong>Make: </strong> {location.state.make}</p>
                            <p><strong>Model: </strong> {location.state.model}</p>
                            <p><strong>Year: </strong> {location.state.year}</p>
                            <p><strong>Build: </strong> Placeholder</p>
                            <p><strong>Quality: </strong> Placeholder</p>
                            <p><strong>Mileage: </strong> Placeholder</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>Loan Estimator</h1>
                            <table className='estimatorTable'>
                                <tr>
                                    <td>
                                        <p>Price</p>
                                        <input className='estimator' type="number" name="price" id="Price" placeholder="Change this to price"/>
                                        <p>Down Payment</p>
                                        <input className='estimator' type="number" name="down_payment" id="user_name" placeholder="Make this 20% of price"/>
                                        <p>Loan Term</p>
                                        <input className='estimator' type="number" name="loan_term" id="loan_term" placeholder="72 Months"/>
                                        <p>Credit Score</p>
                                        <input className='estimator' type="number" name="credit_score" id="credit_score" placeholder="700"/>
                                    </td>
                                    <td>
                                        <h1>Calculated Price:</h1>
                                        <p>Price Placeholder that Updates</p>
                                    </td>
                                </tr>
                            </table>
                            <br/>
                            <br/>
                            <Link to="/Contact" className='ConLink'>
                                <button type='button' className='btn'>Request a Quote</button>
                            </Link>
                        </td>
                        <td>
                            <img src={location.state.path} alt='extraexteriorpic'/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default CarPage