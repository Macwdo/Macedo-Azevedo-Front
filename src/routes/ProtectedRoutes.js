import React from 'react';
import Routering from './routes'
import UserAuth from '../Services/UserService';

const userService = new UserAuth();

const ProtectedRoutes = ({children}) => {
  const res = async () => {
    const response = await userService.verify();
    return response
  }
  const usuarioAutenticado = res();
  console.log(usuarioAutenticado)
  return usuarioAutenticado ? children : <Routering/>
}
 
export default ProtectedRoutes;