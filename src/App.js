import './App.css';
import { Fragment } from 'react';

import Background from "./components/particles/particles.jsx"

import Header from "./components/header/header.jsx"
import SearchBar from "./components/search-bar/search-bar.jsx"
import User from "./components/user/user.jsx"
import Posts from "./components/posts/posts.jsx"

const App = () => {
  return(
    <Fragment>
      <Background />
      <Header />
      <SearchBar />
      <User />
      <Posts />
    </Fragment>
  )
}

export default App;
