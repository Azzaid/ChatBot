import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

import Login from "Scenes/Login";
import AdminPanel from "Scenes/AdminPanel";

const RootRouter = () => {
  const user = useSelector(state => state.user);

  const renderForLoggedInUser = (component) => {
    if (user.isLoggedIn) {
      return component
    } else {
      return <Navigate to={"/login"}/>
    }
  }

  const getUserStartPage = () => {
    if (user.isLoggedIn) {
      return <Navigate to={"/taskList"}/>
    } else {
      return <Navigate to={"/login"}/>
    }
  }

  return (
    <Routes>
      <Route path={"/admin"} element={renderForLoggedInUser(<AdminPanel/>)}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/"} element={getUserStartPage()}/>
    </Routes>
    )
};

export default RootRouter