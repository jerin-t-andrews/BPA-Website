import React, {useState} from 'react';
import data_ from '../json/CarList.json';
import 'bootstrap';
import { Link } from 'react-router-dom'

const CarList = () => {
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
            <div className='options'>
                <h1>Refine your Search</h1>
                <div className='options-items'>
                    <select value={selectMake} onChange={e=>setMake(e.target.value)}>
                        <option>None</option>
                        {Array.from(carMakes).map((make) => {
                            return <option key={make} value={make}>{make}</option>
                        })}
                    </select>
                    <br/>
                    <select value={selectModel} onChange={e=>setModel(e.target.value)}>
                        <option>None</option>
                        {Array.from(carModels).map((model) => {
                            return <option key={model} value={model}>{model}</option>
                        })}
                    </select>
                    <br/>
                    <select value={selectYear} onChange={e=>setYear(e.target.value)}>
                        <option>None</option>
                        {Array.from(carYears).map((year) => {
                            return <option key={year} value={year}> {year} </option>
                        })}
                    </select>
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
                            <h4>{filteredCar.model} {filteredCar.make}</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    
                        <div className="product-price">
                            <h1>$19.99</h1>
                            <br/>
                            <button type='button' className='btn'>View</button>
                        </div>
                    
                    </div>
                ))}
            </div>

            {/* <div className='carList'>

                {data_.map((item, i) => (
                    
                    <div className="product justify-content-center">
            
                        <div className='product-image'>
                            <img src={item.path} alt="carimg" height="150" />
                        </div>
                    
                        <div className="product-detail">
                            <h4>{item.model} {item.make}</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    
                        <div className="product-price">
                            <h1>$19.99</h1>
                            <br/>
                            <Link to="/CarPage" className='ConLink'>
                            <button type='button' className='btn'>View</button>
                            </Link>
                        </div>
                    
                    </div>
                        
                ))}
            </div> */}
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