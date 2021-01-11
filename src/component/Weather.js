import React from 'react';

const Weather = ({country,city,temp,
                     img,
                     condition,
                     time,
                     currenTime,
                     isDay,
                 isLoading})=> {

    return (
        <div className="weather">
            <h2>Country : {country}</h2>
            <h2>City : {city}</h2>
            <h2>
                {temp}
            </h2>
            <h2>
                <img src={img} alt={condition} />
            </h2>
            <h2>Condition: {condition} </h2>
            <h2 className="date"> CurrentTime : <span className="skyblue">{time}</span> </h2>
            <h2 className="date">LastUpdate : <span className="lime">{currenTime}</span> </h2>
            <h2>Day: {isDay === 1 ? 'Day' : 'Night'}</h2>

        </div>

    );
}

export default Weather;
