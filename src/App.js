import './App.css';
import { Fragment, useEffect } from 'react';

import {useSelector, useDispatch} from "react-redux"

import { getDataSuccess } from './redux/actions';

import Background from "./components/particles/particles.jsx"

import Header from "./components/header/header.jsx"
import SearchBar from "./components/search-bar/search-bar.jsx"
import Data from "./components/data/data.jsx"


const App = () => {
  const data = useSelector(state => state.data)
  const dispatch = useDispatch()
  const cachedData = localStorage.getItem("current-nation")

  // if (cachedData != "null") {
  //   dispatch(getDataSuccess(cachedData))
  // }
  
  return(
    <Fragment>
      <Background />
      <Header />
      {
        data
        ? (<Data />)
        : (<SearchBar />)
      }
    </Fragment>
  )
}

export default App;
