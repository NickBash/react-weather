import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getWeatherDays, getWeatherOneDay} from "./asyncActions/weatherApi";

import 'primeflex/primeflex.css'
import './App.scss';
import Index from "./pages";

function App() {
  const dispatch = useDispatch()
  const {weatherOneDay, city, weatherDays, coord} = useSelector(state => state.data)

  const clickHandler = () => {
    console.log(weatherOneDay)
  }

  const clickHandler1 = () => {
    dispatch(getWeatherDays(coord))
  }

  const clickHandler2 = () => {
    console.log(weatherDays)
  }

  const clickHandler3 = () => {

  }

  useEffect(() => {
    dispatch(getWeatherOneDay(city))
  }, [dispatch, city])

  return (
    <div className='App min-w-full min-h-screen'>
      <Index />
      <div className="absolute bottom-0 right-0">
        <button onClick={clickHandler}>ConsoleOneDay</button>
        <button onClick={clickHandler1}>GetDays</button>
        <button onClick={clickHandler2}>ConsoleDays</button>
        <button onClick={clickHandler3}>getGeocode</button>
      </div>
    </div>
  );
}

export default App;
