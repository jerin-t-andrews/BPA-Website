import React from 'react';
import data_ from '../json/CarList.json';

const CarList = () => {
    return (
        <div className="ListPage">
            <div className='options'>
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
            <br></br>
            <img src={data_[1].path} alt="im"/>
            {/* <img src={require(data_[1].path)} alt="imr"></img> */}
            <br/>
            <br/>
        </div>

    )
}

export default CarList