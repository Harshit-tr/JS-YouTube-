const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results")
  if (height < 0 || isNaN(height)) {
    result.innerHTMl = "Please give a valid height";
  } else if (weight < 0 || isNaN(weight)) {
    result.innerHTMl = "Please give a valid weight";
  } else {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2); 
    result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  }
});
