import Input from "./Input";
import { hasMinLength, isEmail } from "../util/validation";
import { useInput } from "../hooks/useInput.js";
export default function StateLogin() {
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });
  const {
    value: emailValue,
    handleChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput("", isEmail);

  const {
    value: passwordValue,
    handleChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(e) {
    e.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  // function handleChange(id, value) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [id]: value,
  //   }));
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [id]: false,
  //   }));
  // }

  // function handleInputBlur(id) {
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [id]: true,
  //   }));
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          error={emailError && "Please enter a valid email"}
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        <Input
          label="Password"
          error={passwordError && "Please enter a valid password"}
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
