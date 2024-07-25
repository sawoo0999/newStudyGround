import { useRef, useState } from "react";
import { isEmail } from "../util/validation.js";

export default function Login() {
  const [formIsInvalid, setFormIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const userEmail = email.current.value;
    const userPassword = password.current.value;

    const emailIsValid = userEmail.includes("@");
    if (!emailIsValid) {
      setFormIsInvalid(true);

      return;
    }
    setFormIsInvalid(false);
    console.log("통과");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
          <div className="control-error">
            {formIsInvalid && <p>Please enter a valid email address. </p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
