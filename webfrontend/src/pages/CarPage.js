import React from 'react'

const CarPage = () => {
    const location = useLocation();
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>
                {location.state.id}
            </p>
            <p>
                {location.state.make}
            </p>
            <p>
                {location.state.model}
            </p>
            <p>
                {location.state.year}
            </p>
            <img src={location.state.path} alt='image_test'/>
        </div>
    )
}

export default CarPage