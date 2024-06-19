import { useState } from "react";
import Header from "./component/Header";
import UserInput from "./component/UserInput";
import Result from "./component/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 300,
    expectedReturn: 6,
    duration: 10,
  });

  const inputisValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChanged={handleChange} />
      {inputisValid ? (
        <Result userInput={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
