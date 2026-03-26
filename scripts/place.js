
const yearSpan = document.getElementById("currentyear");   
const lastModifiedSpan = document.getElementById("lastModified"); 

const now = new Date();


if (yearSpan) {
  yearSpan.textContent = now.getFullYear();
}

if (lastModifiedSpan) {
  lastModifiedSpan.textContent = `Last modified: ${document.lastModified}`;
}


const tempElement = document.getElementById("temp");
const windSpeedElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");

if (tempElement && windSpeedElement && windChillElement) {
  const temperature = parseFloat(tempElement.textContent);
  const windSpeed = parseFloat(windSpeedElement.textContent);

  function calculateWindChill(t, v) {
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(v, 0.16) +
      0.3965 * t * Math.pow(v, 0.16)
    );
  }

  if (temperature <= 10 && windSpeed >= 4.8) {
    const wc = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = wc.toFixed(1);
  } else {
    windChillElement.textContent = "N/A";
  }
}