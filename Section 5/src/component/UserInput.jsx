import { useState } from "react";

export default function UserInput({ investment, onChanged }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITAL INVESTMENT</label>
          <input
            type="number"
            required
            value={investment.initialInvestment}
            onChange={(e) => onChanged("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={investment.annualInvestment}
            onChange={(e) => onChanged("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={investment.expectedReturn}
            onChange={(e) => onChanged("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={investment.duration}
            onChange={(e) => onChanged("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
