import './App.css';
import { Fragment } from 'react';

import Header from "./components/header/header.jsx"
import SearchBar from "./components/search-bar/search-bar.jsx"

const App = () => {
  return(
    <Fragment>
      <Header />
      <SearchBar />
    </Fragment>
  )
}

export default App;
