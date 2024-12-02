import React, { useContext, useState } from "react";
import { ProviderData } from "./Provider/Providers";

const Loggin = () => {
  const { loginUsers } = useContext(ProviderData);
  const [error, setError] = useState("");

  const handleSum = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError('')

    loginUsers(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message)
      });
  };
  return (
    <div>
      <div className="max-w-96 mx-auto mt-10">
        <h1 className="text-3xl font-bold ">Login-Page</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSum} className="card-body">
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
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            {
              <p>{error}</p>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loggin;
