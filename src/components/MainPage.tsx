import React from "react";
import "./MainPage.css";
import { useState } from "react";

function MainPage() {
  type FormDataType = {
    age: number;
    height: number;
    weight: number;
    gender: string;
    activity: number;
    wantedOutcome: number;
    calories: number;
  };
  const [formData, setformData] = useState<FormDataType>({
    age: 0,
    height: 0,
    weight: 0,
    gender: "",
    activity: 0,
    wantedOutcome: 0,
    calories: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateCalories = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let bmrMale: number;
    let bmrFemale: number;
    if (formData.gender === "Female") {
      bmrFemale =
        10 * formData.weight +
        6.25 * formData.height -
        5 * formData.age +
        5 -
        161;

      bmrFemale = bmrFemale * formData.activity;
      console.warn(bmrFemale * formData.wantedOutcome);
    } else {
      bmrMale =
        10 * formData.weight + 6.25 * formData.height - 5 * formData.age + 5;
      bmrMale = bmrMale * formData.activity;

      console.warn(bmrMale * formData.wantedOutcome);

      setformData((prev) => ({
        ...prev,
        calories: bmrMale * formData.wantedOutcome,
      }));
    }
  };

  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Neucha&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
  </style>;
  return (
    <>
      <form onSubmit={(e) => calculateCalories(e)}>
        <div className="content">
          <div>
            <h1>Calorie Calculator</h1>
            <p>
              This calorie calculator can be used to calculate how much calories
              you should eat in a day to either <b>maintain</b>, <b>lose</b> or{" "}
              <b>gain</b> body weight
            </p>
            <p>
              This calorie counter uses the <b>Mifflin-St Jeor Equation</b>
            </p>
            <div className="main-content">
              <div className="inputs">
                <p className="info-text">Age</p>
                <input
                  type="input"
                  placeholder="Age"
                  name="age"
                  className="text-box"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="inputs">
                <p className="info-text">Weight</p>
                <input
                  type="input"
                  placeholder="kg"
                  className="text-box"
                  name="weight"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="inputs">
                <p className="info-text">Height</p>
                <input
                  type="input"
                  placeholder="cm"
                  className="text-box"
                  name="height"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <h4>Gender</h4>
                <input
                  type="radio"
                  id="Male"
                  name="gender"
                  value="Male"
                  onChange={(e) => handleChange(e)}
                />
                <label>Male</label>

                <input
                  type="radio"
                  id="Female"
                  name="gender"
                  value="Female"
                  onChange={(e) => handleChange(e)}
                />
                <label>Female</label>
              </div>
              <div>
                <h4> Activity Level</h4>
                <input
                  type="radio"
                  id="Male"
                  name="activity"
                  value={1.2}
                  onChange={(e) => handleChange(e)}
                />
                <label>Sedetary </label>

                <input
                  type="radio"
                  id="Female"
                  name="activity"
                  value={1.55}
                  onChange={(e) => handleChange(e)}
                />
                <label>Moderately Active </label>

                <input
                  type="radio"
                  id="Female"
                  name="activity"
                  value={1.9}
                  onChange={(e) => handleChange(e)}
                />
                <label>Super Active</label>
              </div>

              <div>
                <h4> Wanted Outcome</h4>
                <input
                  type="radio"
                  id="Gain Weight"
                  name="wantedOutcome"
                  value={1.15}
                  onChange={(e) => handleChange(e)}
                />
                <label>Gain Weight </label>

                <input
                  type="radio"
                  id="Maintain Weight"
                  name="wantedOutcome"
                  value={1}
                  onChange={(e) => handleChange(e)}
                />
                <label>Maintain Weight </label>

                <input
                  type="radio"
                  id="Lose Weight"
                  name="wantedOutcome"
                  value={0.8}
                  onChange={(e) => handleChange(e)}
                />
                <label>Lose Weight</label>
              </div>
              <div>
                <button type="submit" className="calculate-button">
                  Calculate
                </button>
              </div>
              <div>
                {formData.calories > 0 && (
                  <p>
                    You should be eating <b>{Math.round(formData.calories)} </b>
                    calories{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default MainPage;
