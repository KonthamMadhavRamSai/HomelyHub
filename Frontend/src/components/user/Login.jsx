import React, { Fragment, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getLogin } from "../../store/User/user-action";
import { userActions } from "../../store/User/user-slice";
import LoadingSpinner from "../LoadingSpinner";
import "../../css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, errors, loading } = useSelector(
    (state) => state.user
  );

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(getLogin(userData));
  };
  useEffect(() => {
    if (errors && errors.length > 0) {
      toast.error(errors);
      dispatch(userActions.clearErrors());
    } else if (isAuthenticated) {
      navigate("/");
      toast.success("User has Logged in successfully");
    }
  }, [isAuthenticated, errors, navigate, dispatch]);
  return (
    <Fragment>
      <div className="row wrapper">
        {loading && <LoadingSpinner />}
        {!loading && (
          <div className="col-10 col-lg-5">
            <form className="shadow-lg" onSubmit={submitHandler}>
              <h1 className="mb-3">Login</h1>
              <div className="form-group">
                <label htmlFor="email-field">Email</label>
                <input
                  type="email"
                  id="email-field"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password-field">Password</label>
                <input
                  type="password"
                  id="password-field"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <Link to="/forgotpassword" className="float-right mb-4">
                  Forgot Password?
                </Link>

                <button type="submit" className="btn btn-block py-3 mt-3">
                  LOGIN
                </button>

                <Link to="/signup" className="float-right mt-3 d-block">
                  New User? Register here
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Login;
