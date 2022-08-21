import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrent } from "../redux/features/modalSlice";

function Login(props) {
  const dispatch = useDispatch();

  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });
  const [state, setState] = useState(initialFormData);

  const changeHandler = (e) => {
    setState({
      ...state,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const clickHandler = () => {
    dispatch(setCurrent(props.currentModal));
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="modal__heading">
        <h3>Login</h3>
      </div>
      <div className="group">
        <input
          type="email"
          name="email"
          onChange={changeHandler}
          className="group__control"
          placeholder="Enter email"
        />
      </div>
      <div className="group">
        <input
          type="password"
          name="password"
          onChange={changeHandler}
          className="group__control"
          placeholder="Enter password"
        />
      </div>
      <div className="group modal__row">
        <input type="submit" name="" id="" className="btn-dark" value="Login" />
        <span className='redirect' onClick={clickHandler}>Create new account?</span>
      </div>
    </form>
  );
}

export default Login;
