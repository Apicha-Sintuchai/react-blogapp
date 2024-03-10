/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
type SignUpType = {
    username: string;
    password: string;
    };
export const SignIn = () => {
  
    const { register, handleSubmit} = useForm<SignUpType>();
    // const navigator = useNavigate()
    const onSubmit = (data: SignUpType) => {
        
    
        axios.post('http://localhost:3000/auth/SignIn', data)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('username', res.data.username)
            localStorage.setItem('password', res.data.password)
            localStorage.setItem('_id', res.data._id)
            localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
            console.log(err)
        })

    };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          SignIn
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label">
              <span className="text-base label-text text-cyan-500">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered"
              {...register("username")}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-cyan-500">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered"
              {...register("password")}
            />
          </div>
          <div>
            <button className="btn btn-block mt-8">
            SignIn
            </button>
          </div>
          <span>
            Already have an account ?
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Login
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}
