const conversionData = [
  { unit: "meters", convertedUnit: "feet", multiplier: 3.2808399 },
  { unit: "liters", convertedUnit: "gallons", multiplier: 0.264172052 },
  { unit: "kilograms", convertedUnit: "pounds", multiplier: 2.20462262 },
];

const convertBtn = document.getElementById("convert-btn");
const userInput = document.getElementById("num-input");
const conversionParagraphs = document.querySelectorAll(
  ".converted-subsection p"
);

function convertUnits(inputValue, conversion) {
  const convertedValue = (inputValue * conversion.multiplier).toFixed(3);
  const reverseConvertedValue = (inputValue / conversion.multiplier).toFixed(3);
  return `${inputValue} ${conversion.unit} = ${convertedValue} ${conversion.convertedUnit} | ${inputValue} ${conversion.convertedUnit} = ${reverseConvertedValue} ${conversion.unit}`;
}

convertBtn.addEventListener("click", function () {
  let inputValue = userInput.value;
  conversionParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = convertUnits(inputValue, conversionData[index]);
  });
});
