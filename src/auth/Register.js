import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrent } from "../redux/features/modalSlice";

function Register(props) {
  const dispatch = useDispatch();

  const initialFormData = Object.freeze({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
        <h3>Create new account</h3>
      </div>
      <div className="group">
        <input
          type="text"
          onChange={changeHandler}
          name="name"
          className="group__control"
          placeholder="Enter name"
        />
      </div>
      <div className="group">
        <input
          type="email"
          onChange={changeHandler}
          name="email"
          className="group__control"
          placeholder="Enter email"
        />
      </div>
      <div className="group">
        <input
          type="password"
          onChange={changeHandler}
          name="password"
          className="group__control"
          placeholder="Enter password"
        />
      </div>
      <div className="group">
        <input
          type="password"
          onChange={changeHandler}
          name="confirmPassword"
          className="group__control"
          placeholder="Confirm password"
        />
      </div>
      <div className="group modal__row">
        <input type="submit" className="btn-dark" value="Register" />
        <span className="redirect" onClick={clickHandler}>
          Already have an account?
        </span>
      </div>
    </form>
  );
}

export default Register;
