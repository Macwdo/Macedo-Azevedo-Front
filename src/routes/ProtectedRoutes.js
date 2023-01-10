import React from 'react';
import Routering from './routes'
import UserAuth from '../Services/UserService';

const userService = new UserAuth();

const ProtectedRoutes = ({children}) => {

  return userService.request().then(response => {return response.ok}).catch(
    e => {return false}
  ) && localStorage.getItem("Authorization") != null ? children : <Routering/>
}
 
export default ProtectedRoutes;