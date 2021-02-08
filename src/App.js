import './App.css';
import { Fragment, useEffect } from 'react';

import {useSelector, useDispatch} from "react-redux"

import { getUserSuccess, getPostSuccess } from './redux/actions';

import Background from "./components/particles/particles.jsx"

import Header from "./components/header/header.jsx"
import SearchBar from "./components/search-bar/search-bar.jsx"
import User from "./components/user/user.jsx"
import Posts from "./components/posts/posts.jsx"


const App = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const cachedData = localStorage.getItem("current-user")

  if (cachedData != "null") {
    dispatch(getUserSuccess(cachedData[0]))
    dispatch(getPostSuccess(cachedData[1]))
  }
  
  return(
    <Fragment>
      <Background />
      <Header />
      {
        user
        ? (<Fragment>
            <User />
            <Posts />
          </Fragment>)
        : (<SearchBar />)
      }
    </Fragment>
  )
}

export default App;
