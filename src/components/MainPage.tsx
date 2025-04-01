import React from "react";
import "./MainPage.css";

function MainPage() {
  return (
    <>
      <div className="content">
        <div>
          <h1>Calorie Calculator</h1>
          <div>
            <input type="input" placeholder="Weight" />
            <input type="input" placeholder="Height" />
          </div>
          <input type="button" />
        </div>
      </div>
    </>
  );
}

export default MainPage;
