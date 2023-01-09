import React from 'react';
import Routering from './routes'
import UserAuth from '../Services/UserService';

const userService = new UserAuth();

const ProtectedRoutes = ({children}) => {
  const usuarioAutenticado = userService.verify();
  return usuarioAutenticado ? children : <Routering/>
}
 
export default ProtectedRoutes;