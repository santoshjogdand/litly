import React, { useState } from 'react'
import { LogIn, CirclePlus } from 'lucide-react'
import BlurredBg1 from '../components/BlurredBg1'
import { useAuth, AuthProvider } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
function Login() {

  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setSPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const loginHandler = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      console.log(email, password);
      await login(email, password);
      navigate('/Dashboard');
    } catch (err) {
      console.log(err)
      console.log(err?.response?.data?.errorMessage)
      setError(err?.response?.data?.errorMessage)
    }
  }

  return (
    <div className='w-full min-h-screen flex justify-center relative items-center overflow-hidden'>
      <BlurredBg1 />
      <div className="flex min-h-screen flex-col z-10 backdrop-blur-md max-w-sm w-full py-10 rounded-3xl items-center justify-center px-8 gap-4">
        <div className="logo rounded-2xl shadow-lg shadow-purple-200 flex p-4 bg-white/80">
          <LogIn className='text-purple-700' />
        </div>

        <div className="innerHead flex flex-col items-center gap-1">
          <h1 className='font-medium text-2xl'>Login with email</h1>
          <p className='max-w-xs text-center text-sm font-normal text-gray-700'>
            Want to shorten your links? Log in and start sharing smarter.
          </p>
        </div>

        <div className="flex flex-col inputs gap-2 w-full">
          <input
            placeholder='Email'
            type="email"
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
            id='email'
            autoComplete="email"
            className='h-10 ring-2 ring-purple-500/50 rounded-lg w-full px-4 outline-none focus:ring-purple-500 transition-colors'
          />

          <input
            placeholder='Password'
            type="password"
            id='current-password'
            autoComplete="current-password"
            onChange={(e) => { setSPassword(e.target.value) }}
            value={password}
            className='h-10 ring-2 ring-purple-500/50 rounded-lg w-full px-4 outline-none focus:ring-purple-500 transition-colors'
          />

          <span className='text-xs font-normal text-end text-purple-600 cursor-pointer hover:text-purple-800'>
            Forgot Password?
          </span>

          <button
            onClick={loginHandler}
            className='cursor-pointer mt-1 border border-purple-600 shadow-sm h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-lg w-full px-4 outline-none transition-colors'>
            Login
          </button>
          <p className='text-red-500'>{error ? error : ''}</p>

        </div>

        <hr className='w-full border-gray-300' />

        <div className="w-full flex flex-col text-gray-600">
          <h2 className='text-sm'>Don't have an account? Create a new account here!</h2>
          <button className='cursor-pointer flex justify-center items-center gap-1 mt-1 ring-2 ring-purple-500/50 text-purple-600 bg-white hover:bg-purple-50 h-10 rounded-lg w-full px-4 outline-none transition-colors'>
            <CirclePlus className='h-5 w-5' />
            Create new account
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Login)