import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/Layout';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import JobForm from './components/JobForm';

import PermissionProvider from "./utils/PermissionProvider";
import { isAuthenticated, getCurrentUser } from "./services/auth";

import './custom.css';

function PrivateRoute({ children }) {
    if (!isAuthenticated()) {
        return <Navigate to="/account/signin" replace />;
    }
    return children;
}

function App() {
    const user = getCurrentUser();
    return (
        <PermissionProvider role={user?.role}>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route default path="" element={<Home />} />
                    <Route path="publish" element={
                        <PrivateRoute>
                            <JobForm />
                        </PrivateRoute>
                    } />
                </Route>
                <Route path="/account">
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Routes>
        </PermissionProvider>
  );
}

export default App;
