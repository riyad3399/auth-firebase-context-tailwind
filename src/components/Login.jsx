import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/AuthProviders";

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { signIn, signInGoogle, signInGithub } = useContext(UserContext)
 

  const handelLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setSuccess('Login Successful!')
        setError('')
      })
      .catch(error => {
        setError(error.message)
        setSuccess('')
      })

  };

  const handelGoogleSignIn = () => { 
    signInGoogle()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.log(error);
        setError(error.message)
    })
  }


  const handelGithubSignIn = () => {
    signInGithub()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .then(error => {
        console.log(error);
        setError(error.message)
    })
  }
  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Login !!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <span>{ error}</span>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
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
              <Link to="/register" className=" hover:underline">
                 New to Auth Master? Please Register
              </Link>
              <div>
                <button onClick={handelGoogleSignIn} className="btn btn-secondary">Google sign in</button>
                <button onClick={handelGithubSignIn}  className="btn btn-secondary mx-4">Github sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
