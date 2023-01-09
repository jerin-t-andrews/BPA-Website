import React, {useState} from 'react';
import data_ from '../json/CarList.json';

const CarList_backup = () => {
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

            <h2>Here: {selectMake} and {selectYear}</h2>
            <div className='carList'>
                <table>
                    {data_.filter(car => (car.make.match(selectMake), car.model.match(selectModel), car.year.toString().match(selectYear))).map((filteredCar, i)=> (
                        <tr key={i}>
                            <td><img src={filteredCar.path} alt='carpic'></img></td>
                            <td><p>{filteredCar.model}</p></td>
                        </tr>
                    ))}
                </table>
            </div>


            <br></br>

            {/* <div className='carList'>
                <table>
                    {data_.map((item, i) => (
                        <tr key={i}>
                            <td><img src={item.path} alt='carpic'></img></td>
                            <td><p>{item.make}</p></td>
                        </tr>
    ))}
                </table>
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

export default CarList_backup