import React, { useState } from "react";
import { loginReducer, nameReducer } from "../redux/adminRedux";
import { useDispatch, useSelector } from "react-redux";
import classes from "../styles/Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const enteredName = useSelector((state) => state.admin.enteredName);
  return (
    <div className={classes.login}>
      <form onSubmit={() => dispatch(loginReducer())}>
        <div className={classes.control}>
          <label htmlFor="text">Name</label>
          <input
            type="text"
            id="text"
            required
            value={enteredName}
            onChange={(e) => dispatch(nameReducer(e.target.value))}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button type="submit" className={classes.btn}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
