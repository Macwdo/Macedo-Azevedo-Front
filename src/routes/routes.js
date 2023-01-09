import React from 'react'
import ProtectedRoutes from '../Routes/ProtectedRoutes'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Routering = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="/semrota" element={<h1>Desprotegida</h1>}/>
        <Route path="/rota" element={
          <ProtectedRoutes>
            <h1>Rota Protegida</h1> 
          </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
   );
}
 
export default Routering;