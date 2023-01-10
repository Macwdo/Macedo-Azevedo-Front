import React from 'react';
import Routering from './routes'
import UserAuth from '../Services/UserService';

const userService = new UserAuth();

const ProtectedRoutes = ({children}) => {
  const authenticated = userService.verify()
  return authenticated ? children : <Routering/>
}
 
export default ProtectedRoutes;