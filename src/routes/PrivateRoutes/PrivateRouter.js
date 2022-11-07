import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRouter = ({children}) => {
  const {user,loading} = useContext(AuthContext)
  const location = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }

  if(!user) {
    return  <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;

}
export default PrivateRouter;