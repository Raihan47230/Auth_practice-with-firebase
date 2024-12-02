import React, { useContext, useState } from "react";
import { ProviderData } from "./Provider/Providers";
// import auth from "./firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const SingUp = () => {
  const {creatUser}=useContext(ProviderData)

const[error,setError]=useState('')
  const handleSingUp = (e) => {
    
    e.preventDefault();


    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    // console.log(name,email,password);
    setError('')

    // createUserWithEmailAndPassword(auth,email,password)
    creatUser(email,password)
    .then(result=>{
      console.log(result.user)
      e.target.reset();

    })
    .catch(error=>{
      console.log(error.message)
      setError(error.message)
    })

  };

  return (
    <div className="max-w-96 mx-auto mt-10">
      <h1 className="text-3xl font-bold ">SingUp-Page</h1>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSingUp} className="card-body">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" name="name" placeholder="Username" />
          </label>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">SingUp</button>
          </div>
         <span className="bg-red-300"> {
            <p className="text-red-950">{error}</p>
          }</span>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
