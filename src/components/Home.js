import { useState, useEffect } from "react";
import classes from "./Home.module.css";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState({});
    const [city, setCity] = useState("")
    const key = "c178a151e62048ca78f372b7385a0c7b"

    const cityNameHandler = (event) => {
        setCity(event.target.value)
    }

    const weatherDataHandler = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
            .then((response) => {
                setData(response.data)
                console.log(response.data);
            })
            .catch((error) => {
            })

    }

    useEffect(() => {
        weatherDataHandler()
    }, [])

    return (
        <div className={classes.weather}>
            <header>
                <h1>Weather App</h1>
                <section>
                    <input type="text" onChange={cityNameHandler} />
                    <button type="button" onClick={weatherDataHandler}>Search</button>
                </section>
            </header>
            {Object.keys(data).length > 0 && <main>
                <img src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
                <p>{data?.name}</p>
                <h4>{Math.floor((data?.main.temp - 273.15))}°C</h4>
            </main>}

        </div>
    );
};
export default Home;
