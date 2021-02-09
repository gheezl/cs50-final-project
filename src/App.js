import './App.css';
import { Fragment } from 'react';

import {useSelector} from "react-redux"

import Background from "./components/particles/particles.jsx"

import Header from "./components/header/header.jsx"
import SearchBar from "./components/search-bar/search-bar.jsx"
import Data from "./components/data/data.jsx"


const App = () => {
  const data = useSelector(state => state.data)

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
