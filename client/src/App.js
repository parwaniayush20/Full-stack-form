import React from 'react';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';
import SignOut from '../src/components/SignOut';
import Profile from '../src/components/Profile';
import Homepage from '../src/components/Homepage';
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route exact path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App;

