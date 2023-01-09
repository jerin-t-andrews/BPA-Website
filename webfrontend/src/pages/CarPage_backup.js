import React from 'react'
import used from '../car-images/new-new-used2.jpg';
import { Parallax } from 'react-parallax';


const CarPage = () => {
    return (
        <div className='carPage'>
            <div className='carPicture'>
                <Parallax strength={200} bgImage={used}>
                    <div className='content'>
                        <div className='text-content'>
                            <h1>Make Model</h1>
                            <p>2017</p>
                        </div>
                    </div>
                </Parallax>
            </div>

            <table>
                <tr>
                    <td>
                        <img src={used} alt='interiorpic'/>
                    </td>
                    <td>
                        <h1>Car Specs</h1>
                        <p><strong>Make: </strong> Placeholder</p>
                        <p><strong>Model: </strong> Placeholder</p>
                        <p><strong>Year: </strong> Placeholder</p>
                        <p><strong>Build: </strong> Placeholder</p>
                        <p><strong>Quality: </strong> Placeholder</p>
                        <p><strong>Mileage: </strong> Placeholder</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1>Car Interior</h1>
                    </td>
                    <td>
                        <p>Image Placeholder</p>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default CarPage