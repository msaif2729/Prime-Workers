import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const username = process.env.REACT_APP_ADMIN_UNAME;
const password = process.env.REACT_APP_ADMIN_PASS;

export default function Login() {

    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      const isLoggedIn = localStorage.getItem('islogin') === 'true';
      if (isLoggedIn) {
        navigate('/prime-workers-admin/admin-panel/addservice');
      }
    }, [navigate]);
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      if (inputUsername === username && inputPassword === password) {
        localStorage.setItem('islogin', 'true');
        navigate('/prime-workers-admin/admin-panel/admin');
      } else {
        setError('Invalid username or password');
        localStorage.setItem('islogin', 'false');
      }
    };
      

  return (
    <div>
      <div className=' w-full bg-[var(--bg)] lg:h-[100vh] h-[90vh] flex justify-center items-center '>

        <div className='bg-[var(--card)] rounded-xl p-10  flex flex-col justify-center items-center'>
            <h1 className='text-[var(--color1)] font-kanit font-semibold text-3xl'>Admin Login</h1>
            <form onSubmit={handleLogin} className='flex flex-col space-y-4 mt-5'>
          <div>
            <label htmlFor='username' className='block text-sm font-medium'>
              Username
            </label>
            <input
              type='text'
              id='username'
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              className="w-full bg-transparent text-lg lg:text-lg mt-2 border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit"
              placeholder='Enter your username'
              required
            />
          </div>

          <div>
            <label htmlFor='password' className='block text-sm font-medium'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="w-full bg-transparent text-lg lg:text-lg mt-2 border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit"
              placeholder='Enter your password'
              required
            />
          </div>

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          <button
            type='submit'
            className='w-full hover:bg-[var(--color1)] font-kanit text-lg bg-sky-400 text-white py-2 rounded-md mt-4'
          >
            Login
          </button>
        </form>
        </div>

      </div>
    </div>
  )
}
