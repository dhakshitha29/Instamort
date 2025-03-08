import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import FormInputGroup from "./FormInputGroup";
import './Mtcal.css'

function Mtcal() {
    const [homeValue, setHomeValue] = useState("");
    const [downPayment, setDownPayment] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanDuration, setLoanDuration] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    function calculateLoanAmount() {
        setLoanAmount(homeValue - downPayment);
        return loanAmount;
      }
    
      function calculateMonthlyPayment() {
        // Percentage conversion
        function percentageToDecimal(percent) {
          return percent / 12 / 100;
        }
    
        // years to month conversion
        function yearsToMonths(year) {
          return year * 12;
        }
    
        setMonthlyPayment(
          (percentageToDecimal(interestRate) * loanAmount) /
            (1 -
              Math.pow(
                1 + percentageToDecimal(interestRate),
                -yearsToMonths(loanDuration)
              ))
        );
    
        return monthlyPayment;
      }
  return (
    <div className="mort">
        <h2 className=" thed">Mortgage Calculator</h2>
        <p className=" ">Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment</p>
    <form onSubmit={(e) => e.preventDefault()} className="cal">
    <FormInputGroup
      text="Home Value "
      icon={<FaDollarSign />}
      placeholder={"Enter the value of the home"}
      value={homeValue}
      onInput={(e) => setHomeValue(e.target.value)}
      onkeyup={calculateLoanAmount}
      className='input-group-text input-group'
    />
    <FormInputGroup
      text="Down payment"
      icon={<FaDollarSign />}
      placeholder={"Enter your funds"}
      value={downPayment}
      onInput={(e) => setDownPayment(e.target.value)}
      onkeyup={calculateLoanAmount}
      className='input-group-text input-group'
    />
    <FormInputGroup
      text="Loan amount"
      icon={<FaDollarSign />}
      placeholder={"Enter your funds"}
      readOnly={true}
      value={loanAmount}
      className='input-group-text input-group'
    />
    <FormInputGroup
      text="Interest Rate %"
      placeholder={"Enter your interest rate"}
      value={interestRate}
      onInput={(e) => setInterestRate(e.target.value)}
      className='input-group-text input-group'
    />
    <FormInputGroup
      text="Loan Duration (years)"
      placeholder={"Enter the duration of your loan in years"}
      value={loanDuration}
      onInput={(e) => setLoanDuration(e.target.value)}
      className='input-group-text input-group'
    />
    <h5 className="alert pay fw-bold">
      Monthly payment: <FaDollarSign />
      {parseFloat(monthlyPayment.toFixed(2))}
    </h5>

    <button
      type="submit"
      onClick={calculateMonthlyPayment}
      className="btn btn-lg w-100 center calculate"
    >
      Calculate
    </button>
  </form>
  </div>
  );
}

export default Mtcal;