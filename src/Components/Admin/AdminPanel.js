import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import AddService from './AddService';
import DelService from './DelService';
import AddImages from './AddImages';
import DelImages from './DelImages';

export default function AdminPanel() {

  const navigate =useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('islogin') !== 'true')
    {
      navigate("/prime-workers-admin/admin-panel/admin-login")
      console.log(navigate)
    }
  },[navigate])

  return (
    <Routes>
      <Route path="admin-login" element={<Login />} />

      {localStorage.getItem('islogin') === 'true' && (
        <Route
          path="admin"
          element={
            <div className="bg-[var(--card)] pb-32  ">
              <AddService />
              <DelService/>
              <AddImages/>
              <DelImages/>
            </div>
          }
        />
      )}
         
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}
