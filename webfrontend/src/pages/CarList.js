import React, {useState} from 'react';
import data_ from '../json/CarList.json';
import {useNavigate} from 'react-router-dom';
import 'bootstrap';


const CarList = () => {
    const navigate = useNavigate();
    const [selectMake, setMake] = useState("");
    const [selectModel, setModel] = useState("");
    const [selectYear, setYear] = useState("");
    const [selectBuild, setBuild] = useState("");
    const [selectType, setType] = useState("");
    const [selectMile, setMile] = useState("");

    const mileages = [
        "0-5000",
        "5000-25000",
        "25000-50000",
        "50000-100000",
        "100000-200000",
        "200000+"
    ]

    if(selectMake === "None") {
        setMake("");
    }

    if(selectModel === "None") {
        setModel("");
    }

    if(selectYear === "None") {
        setYear("");
    }

    if(selectBuild === "None") {
        setBuild("");
    }

    if(selectType === "None") {
        setType("");
    }

    if(selectMile === "None") {
        setMile("");
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

    const carBuilds = new Set(data_.map((car) => {
        return car.build
    }))

    const carTypes = new Set(data_.map((car) => {
        return car.type
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
                        <select value={selectBuild} onChange={e=>setBuild(e.target.value)}>
                            <option>None</option>
                            {Array.from(carBuilds).map((build) => {
                                return <option key={build} value={build}> {build} </option>
                            })}
                        </select>
                        <h2>Select Type</h2>
                        <select value={selectType} onChange={e=>setType(e.target.value)}>
                            <option>None</option>
                            {Array.from(carTypes).map((type) => {
                                return <option key={type} value={type}> {type} </option>
                            })}
                        </select>        
                        <h2>Mileage</h2>
                        <select value={selectMile} onChange={e=>setMile(e.target.value)}>
                            <option>None</option>
                            {mileages.map((t) => {
                                return <option key={t} value={t}> {t} </option>
                            })}
                        </select>                        
                    </div>
                </div>
            </div>

            <br/>

            {/* car => (car.make.match(selectMake)) */}
            <div className='carList'>
                {data_.filter(car => (car.make.match(selectMake) && car.model.match(selectModel) && car.year.toString().match(selectYear) && car.build.match(selectBuild) && car.type.match(selectType)
                && car.mrange.match(selectMile))
                ).map(filteredCar=> (
                    <div className="product">
                
                        <div className='product-image'>
                            <img src={filteredCar.exterior} alt="carimg" height="150" />
                        </div>

                        <div className="product-detail">
                            <h4>{filteredCar.year} {filteredCar.make} {filteredCar.model}</h4>
                            <br/>
                            <p><strong>Make: </strong> {filteredCar.make}</p>
                            <p><strong>Model: </strong> {filteredCar.model}</p>
                            <p><strong>Year: </strong> {filteredCar.year}</p>
                            <p><strong>Build: </strong> {filteredCar.build}</p>
                            <p><strong>Quality: </strong> {filteredCar.type}</p>
                            <p><strong>Mileage: </strong> {filteredCar.mileage}</p>
                        </div>
                    
                        <div className="product-price">
                            <h1>${filteredCar.price}</h1>
                            <br/>
                        <button onClick={() => {navigate('/CarPage', {state:{id: filteredCar.id, make: filteredCar.make, model: filteredCar.model, year: filteredCar.year, exterior: filteredCar.exterior, price: filteredCar.price, build: filteredCar.build, type: filteredCar.type, mileage: filteredCar.mileage, interior: filteredCar.interior, side: filteredCar.side}})}} type='button' className='btn'>View</button>
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