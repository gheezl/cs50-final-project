import './App.css';
import { Fragment } from 'react';

import Header from "./components/header/header.jsx"
import SearchBar from "./components/search-bar/search-bar.jsx"
import User from "./components/user/user.jsx"

const App = () => {
  return(
    <Fragment>
      <Header />
      {/* <SearchBar /> */}
      <User />
    </Fragment>
  )
}

export default App;
