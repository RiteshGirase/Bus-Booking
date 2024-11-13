import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="card bg-danger col-md-6 mx-auto mt-5 p-0">
        <div className="card-header bg-white text-danger">
          <h1 className="login-head text-center">Customer Login</h1>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label className="text-white" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="pwd">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-light btn-block">
              Login
            </button>
          </form>
          <div className="text-white text-center mt-3">
            Don't have an account?{" "}
            <Link to="/registration" className="forma">
              Create Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
