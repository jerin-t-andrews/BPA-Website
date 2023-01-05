import React from 'react';
import data_ from '../json/CarList.json';

const CarList = () => {
    return (
        <div className="ListPage">
            <input placeholder='Search'></input>
            <br/>
            <div className='options'>
                <h1>Refine your Search</h1>
                <div className='options-items'>
                    <select>
                        {data_.map((car) => {
                            return <option key={car.make} value={car.make}>{car.make}</option>
                        })}
                    </select>
                    <br/>
                    <select>
                    {data_.map((car) => {
                            return <option key={car.year} value={car.year}> {car.year} </option>
                        })}
                    </select>
                </div>
            </div>
            <br/>
            <div className='carList'>
                <table>
                    {data_.map((item, i) => (
                        <tr key={i}>
                            <td><img src={item.path} alt='carpic'></img></td>
                            <td><p>{item.make}</p></td>
                        </tr>
    ))}
                </table>
            </div>
            {/*}
            <img src={data_[1].path} alt="im"/>
            <img src={data_[1].path} alt="im"/>
            <img src={data_[1].path} alt="im"/>
            <img src={data_[1].path} alt="im"/>
                */}
            {/* <img src={require(data_[1].path)} alt="imr"></img> */}
            <br/>
            <br/>
        </div>

    )
}

export default CarList