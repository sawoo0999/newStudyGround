import { useState } from "react";
import Header from "./component/Header";
import UserInput from "./component/UserInput";
import Result from "./component/Result";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = investment.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setInvestment((prevInput) => {
      console.log(investment);
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput investment={investment} onChanged={handleChange} />
      {inputIsValid ? (
        <Result userInput={investment} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
