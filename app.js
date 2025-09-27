const adviceResult = document.getElementById("adviceResult");

async function getAdvice() {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`);

    if (!response.ok) throw new Error("Advice not found");

    const data = await response.json();
    showAdvice(data);
  } catch (error) {
    adviceResult.textContent = error.message;
  }
}

function showAdvice(data) {
  adviceResult.innerHTML = `
    <div class="advice-container">
        <h5>ADVICE # ${data.slip.id}</h5>
        <h2>
          ${data.slip.advice}
        </h2>
        <div class="img-section"></div>
        <button class="btn"><img src="./images/icon-dice.svg" alt="dice button"></button>
      </div>
  `;

  const btn = document.querySelector(".btn");
  btn.addEventListener("click", getAdvice);
}

// Load advice on page refresh
window.addEventListener("DOMContentLoaded", getAdvice);

// btn.addEventListener("click", function () {
//   alert("hello");
// });
