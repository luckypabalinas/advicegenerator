// dom.js
import { getData } from "./app.js"; // import getData to call it on button click

const adviceResult = document.getElementById("adviceResult");

export function showAdvice(data) {
  adviceResult.innerHTML = `
    <div class="advice-container">
      <h5>ADVICE #${data.slip.id}</h5>
      <h2>"${data.slip.advice}"</h2>
      <div class="img-section"></div>
      <button class="btn">
        <img src="./images/icon-dice.svg" alt="dice button">
      </button>
    </div>
  `;

  // Re-fetch new advice when button is clicked
  document.querySelector(".btn").addEventListener("click", getData);
}

export function errorAdvice() {
  adviceResult.innerHTML = `
    <div class="advice-container">
      <h5>Error Loading...</h5>
      <h2>Error Loading...</h2>
      <div class="img-section"></div>
      <button class="btn">
        <img src="./images/icon-dice.svg" alt="dice button">
      </button>
    </div>
  `;

  // Re-fetch new advice when button is clicked
  document.querySelector(".btn").addEventListener("click", getData);
}
