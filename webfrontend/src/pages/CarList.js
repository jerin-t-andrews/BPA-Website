import React, {useState} from 'react';
import data_ from '../json/CarList.json';
import 'bootstrap';


const CarList = () => {
    const [selectMake, setMake] = useState();
    const [selectModel, setModel] = useState();
    const [selectYear, setYear] = useState();
    return (
        <div className="ListPage">

            <input placeholder='Search'></input>

            <div className='options'>
                <h1>Refine your Search</h1>
                <div className='options-items'>
                    <select value={selectMake} onChange={e=>setMake(e.target.value)}>
                        {data_.map((car) => {
                            return <option key={car.make} value={car.make}>{car.make}</option>
                        })}
                    </select>
                    <br/>
                    <select value={selectModel} onChange={e=>setModel(e.target.value)}>
                        {data_.map((car) => {
                            return <option key={car.model} value={car.model}>{car.model}</option>
                        })}
                    </select>
                    <br/>
                    <select value={selectYear} onChange={e=>setYear(e.target.value)}>
                    {data_.map((car) => {
                            return <option key={car.year} value={car.year}> {car.year} </option>
                        })}
                    </select>
                </div>
            </div>
            <br/>
            <div className='carList'>

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
                            <button type='button' className='btn'>View</button>
                        </div>
                    
                    </div>
                        
                ))}
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