// main.js
import { fetchData } from "./api.js";
import { showAdvice, errorAdvice } from "./dom.js";

export async function getData() {
  try {
    const data = await fetchData();
    showAdvice(data);
  } catch (error) {
    errorAdvice();
    console.error("Error fetching advice:", error.message);
  }
}

// Initial load
getData();
