import React, { Fragment, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSignup } from "../../store/User/user-action";
import { userActions } from "../../store/User/user-slice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, errors } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordconfirm: "",
    phoneNumber: "",
  });
  const { name, email, password, passwordconfirm, phoneNumber } = user;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== passwordconfirm) {
      toast.error("Passwords do not match");
      return;
    }
    // Normalize payload keys to match backend expectations
    const payload = {
      name,
      email,
      phoneNumber,
      password,
      passwordConfirm: passwordconfirm,
    };
    // Debug: ensure payload is an object and has expected keys
    console.log("Signup payload:", payload);
    dispatch(getSignup(payload));
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (errors && errors.length > 0) {
      toast.error(errors);
      dispatch(userActions.clearErrors());
    } else if (isAuthenticated) {
      navigate("/");
      toast.success("User has Logged in successfully");
    }
  }, [isAuthenticated, errors, navigate]);
  return (
    <Fragment>
      <div className="row wrapper">
        <form
          onSubmit={submitHandler}
          encType="multipart/form-data"
          className="col-10 col-lg-5"
        >
          <h1 className="mb-3">Register</h1>
          <div className="form-group">
            <label htmlFor="name-field">Name</label>
            <input
              type="text"
              id="name-field"
              className="form-control"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-field">Email</label>
            <input
              type="email"
              id="email-field"
              className="form-control"
              name="email"
              value={email}
              onChange={onChange}
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
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordconfirm-field">Confirm Password</label>
            <input
              type="password"
              id="passwordconfirm-field"
              className="form-control"
              name="passwordconfirm"
              value={passwordconfirm}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber-field">Phone Number</label>
            <input
              type="text"
              id="phoneNumber-field"
              className="form-control"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onChange}
            />
          </div>
          <button
            id="register_button"
            type="submit"
            className="loginbutton btn-block py-3"
          >
            REGISTER
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Signup;
