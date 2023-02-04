import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/Layout';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import JobForm from './components/JobForm';

import './custom.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route default path="" element={<Home />} />
        <Route path="publish" element={<JobForm />} />
      </Route>
      <Route path="/account">
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
