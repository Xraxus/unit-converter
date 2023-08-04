const meterToFeet = 3.2808399;
const literToGallon = 0.264172052;
const kilogramToPound = 2.20462262;

const convertBtn = document.getElementById("convert-btn");
const userInput = document.getElementById("num-input");
const lengthParagraph = document.getElementById("length");
const volumeParagraph = document.getElementById("volume");
const massParagraph = document.getElementById("mass");

convertBtn.addEventListener("click", function () {
  let inputValue = userInput.value;

  lengthParagraph.textContent = `${inputValue} meters = ${(
    inputValue * meterToFeet
  ).toFixed(3)} feet | ${inputValue} feet = ${(
    inputValue / meterToFeet
  ).toFixed(3)} meters`;

  volumeParagraph.textContent = `${inputValue} liters = ${(
    inputValue * literToGallon
  ).toFixed(3)} gallons | ${inputValue} gallons = ${(
    inputValue / literToGallon
  ).toFixed(3)} liters`;

  massParagraph.textContent = `${inputValue} kilograms = ${(
    inputValue * kilogramToPound
  ).toFixed(3)} pounds | ${inputValue} pounds = ${(
    inputValue / kilogramToPound
  ).toFixed(3)} kilograms`;
});
