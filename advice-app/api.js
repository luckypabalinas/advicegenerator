// api.js
export async function fetchData() {
  const url = "https://api.adviceslip.com/advice";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return await response.json();
}
