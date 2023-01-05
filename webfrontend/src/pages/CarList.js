import React from 'react';
import data_ from '../json/CarList.json';

const CarList = () => {
    return (
        <div className="ListPage">
            <img src={data_[1].path} alt="im"/>
            {/* <img src={require(data_[1].path)} alt="imr"></img> */}
            <br/>
            <br/>
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

    )
}

export default CarList