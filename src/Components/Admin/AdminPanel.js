import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import AddService from './AddService';

export default function AdminPanel() {
  return (
    <Routes>
      <Route path="admin-login" element={<Login />} />

      <Route path="admin" element={
        <div className='bg-[var(--bg)]'>
          <AddService />

        </div>
        } />

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}
