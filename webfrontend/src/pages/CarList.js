import React, {useState} from 'react';
import data_ from '../json/CarList.json';
import {useNavigate} from 'react-router-dom';
import 'bootstrap';


const CarList = () => {
    const navigate = useNavigate();
    const [selectMake, setMake] = useState("");
    const [selectModel, setModel] = useState("");
    const [selectYear, setYear] = useState("");

    if(selectMake === "None") {
        setMake("");
    }

    if(selectModel === "None") {
        setModel("");
    }

    if(selectYear === "None") {
        setYear("");
    }

    const carMakes = new Set(data_.map((car) => {
        return car.make
    }))

    const carModels = new Set(data_.map((car) => {
        return car.model
    }))

    const carYears = new Set(data_.map((car) => {
        return car.year
    }))

    return (
        <div className="ListPage">
            <h1 className='search'>Refine your Search</h1>

            <div className='options'>
                <div className='options-items'>
                    <div className='select'>
                        <h2>Select Make</h2>
                        <select value={selectMake} onChange={e=>setMake(e.target.value)}>
                            <option>None</option>
                            {Array.from(carMakes).map((make) => {
                                return <option key={make} value={make}>{make}</option>
                            })}
                        </select>
                        <br/>
                        <h2>Select Model</h2>
                        <select value={selectModel} onChange={e=>setModel(e.target.value)}>
                            <option>None</option>
                            {Array.from(carModels).map((model) => {
                                return <option key={model} value={model}>{model}</option>
                            })}
                        </select>
                        <br/>
                        <h2>Select Year</h2>
                        <select value={selectYear} onChange={e=>setYear(e.target.value)}>
                            <option>None</option>
                            {Array.from(carYears).map((year) => {
                                return <option key={year} value={year}> {year} </option>
                            })}
                        </select>
                        <h2>Select Build</h2>
                        <h2>Select Type</h2>
                        <h2>Select Price</h2>
                    </div>
                </div>
            </div>

            <br/>

            {/* car => (car.make.match(selectMake)) */}
            <div className='carList'>
                {data_.filter(car => (car.make.match(selectMake) && car.model.match(selectModel) && car.year.toString().match(selectYear))).map(filteredCar=> (
                    <div className="product justify-content-center">
                
                        <div className='product-image'>
                            <img src={filteredCar.path} alt="carimg" height="150" />
                        </div>

                        <div className="product-detail">
                            <h4>{filteredCar.year} {filteredCar.make} {filteredCar.model}</h4>
                            <br/>
                            <p><strong>Make: </strong> {filteredCar.make}</p>
                            <p><strong>Model: </strong> {filteredCar.model}</p>
                            <p><strong>Year: </strong> {filteredCar.year}</p>
                            <p><strong>Build: </strong> Placeholder</p>
                            <p><strong>Quality: </strong> Placeholder</p>
                            <p><strong>Mileage: </strong> Placeholder</p>
                        </div>
                    
                        <div className="product-price">
                            <h1>$19.99</h1>
                            <br/>
                        <button onClick={() => {navigate('/CarPage', {state:{id: filteredCar.id, make: filteredCar.make, model: filteredCar.model, year: filteredCar.year, path: filteredCar.path}})}} type='button' className='btn'>View</button>
                        </div>
                    
                    </div>
                ))}
            </div>
            <br/>
            <br/>
        </div>

    )
}


export default CarList