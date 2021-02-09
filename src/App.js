import './App.css';
import { Fragment } from 'react';

import {useSelector} from "react-redux"

import ErrorBoundary from "./components/error-boundary/error-boundary.jsx"

import Background from "./components/particles/particles.jsx"

import Header from "./components/header/header.jsx"
import SearchBar from "./components/search-bar/search-bar.jsx"
import Data from "./components/data/data.jsx"


const App = () => {
  const data = useSelector(state => state.data)

  return(
    <Fragment>
      <Background />
      <ErrorBoundary>
        <Header />
        {
          data
          ? (<Data />)
          : (<SearchBar />)
        }
      </ErrorBoundary>
      
    </Fragment>
  )
}

export default App;
