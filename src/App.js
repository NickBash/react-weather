import {useDispatch, useSelector} from "react-redux";
import Index from "./pages";
import {useCallback, useEffect, useRef} from "react";
import {getWeatherDays} from "./asyncActions/weatherApi";

import './App.scss';
import 'primeflex/primeflex.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const dispatch = useDispatch()
  const {weatherOneDay, weatherDays, coord} = useSelector(state => state.data)

  const isFirstRun = useRef(true)

  useEffect (() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      dispatch(getWeatherDays(coord))
    }
  }, [dispatch, coord]);

  const clickHandler = () => {
    console.log(coord)
  }

  const clickHandler1 = () => {
    console.log(weatherDays)
  }

  const clickHandler2 = () => {
    console.log(weatherOneDay)
  }

  const clickHandler3 = () => {
    console.log(coord)
  }

  return (
    <div className='App min-w-full min-h-screen'>
      <Index />
      <div className="absolute bottom-0 right-0">
        <button onClick={clickHandler}>Показать координаты</button>
        <button onClick={clickHandler1}>Погазать данные погоды</button>
        <button onClick={clickHandler2}>Показать один день</button>
        <button onClick={clickHandler3}>Coord</button>
      </div>
    </div>
  );
}

export default App;
