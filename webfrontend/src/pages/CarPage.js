import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom'

const CarPage = () => {
    const location = useLocation();

    let [sPrice, setPrice] = useState();
    let [sDP, setDP] = useState();
    let [sLoan, setLoan] = useState();
    let [sCredit, setCredit] = useState();

    function calculate(price, dp, loan, credit) {
        var x = price-dp;
        var monthly_i = ((credit)/loan) * x
        return monthly_i;
    }   
    
    const credits = [
        {
            credit_score: "300-500",
            interest: .1459
        },
        {
            credit_score: "501-600",
            interest: .1103
        },
        {
            credit_score: "601-660",
            interest: .0661
        },
        {
            credit_score: "661-780",
            interest: .0348
        },
        {
            credit_score: "781-850",
            interest: .0234
        }
    ]

    console.log(sLoan);
    
    return (
        <div className='carPage'>
            <div className='carPicture'>
                <Parallax strength={200} bgImage={location.state.path}>
                    <div className='content'>
                        <div className='text-content'>
                            <h1>{location.state.make} {location.state.model}</h1>
                            <p>{location.state.year}</p>
                        </div>
                    </div>
                </Parallax>
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
                                    <input value={sPrice} onChange={e=>setPrice(e.target.value)} className='estimator' type="number" name="price" id="Price" placeholder="Change this to price"/>
                                    <p>Down Payment</p>
                                    <input value={sDP} onChange={e=>setDP(e.target.value)}  className='estimator' type="number" name="down_payment" id="user_name" placeholder="Make this 20% of price"/>
                                    <p>Loan Term</p>
                                    <input value={sLoan} onChange={e=>setLoan(e.target.value)}  className='estimator' type="number" name="loan_term" id="loan_term" placeholder="72 Months"/>
                                    <p>Credit Score</p>
                                    <select value={sCredit} onChange={e=>setCredit(e.target.value)} className='estimator' type="number" name="credit_score" id="credit_score">
                                        <option>None</option>
                                        {credits.map(credit => {
                                            return <option key={credit.interest} value={credit.interest}>{credit.credit_score}</option>
                                        })}
                                    </select>
                                </td>
                                <td>
                                    <h1>Calculated Price</h1>
                                    <p>$ {calculate(sPrice, sDP, sLoan, sCredit)}</p>
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
    )
}

export default CarPage