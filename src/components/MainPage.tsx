import React from "react";
import "./MainPage.css";

function MainPage() {
  const calculateCalories = () => {
    console.warn("Hi");
  };

  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Neucha&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
  </style>;
  return (
    <>
      <form onSubmit={() => calculateCalories}>
        <div className="content">
          <div>
            <h1>Calorie Calculator</h1>
            <p>
              This calorie calculator can be used to calculate how much calories
              you should eat in a day to either <b>maintain</b>, <b>lose</b> or{" "}
              <b>gain</b> body weight.
            </p>
            <div className="main-content">
              <div className="inputs">
                <p className="info-text">Age</p>
                <input type="input" placeholder="Age" className="text-box" />
              </div>
              <div className="inputs">
                <p className="info-text">Weight</p>
                <input type="input" placeholder="kg" className="text-box" />
              </div>
              <div className="inputs">
                <p className="info-text">Height</p>
                <input type="input" placeholder="cm" className="text-box" />
              </div>

              <input
                type="radio"
                id="Male"
                name="What is your gender?"
                value="Male"
              />
              <label>Male</label>

              <input
                type="radio"
                id="Female"
                name="What is your gender?"
                value="Female"
              />
              <label>Female</label>

              <div>
                <button type="submit" className="calculate-button">
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default MainPage;
