let form = document.querySelector('form');

//this usecase will give empty value 
//const height = parseInt(document.querySelector('#height').value);


//this is the event listener for the form submission

form.addEventListener('submit',function(e){
e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if(isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0 || height === "" || weight === ""){
    results.innerHTML = "Please enter valid values";
} else {
    // Calculate BMI
    const bmi = (weight / (height/100) ** 2).toFixed(2);
    results.innerHTML = `Your BMI is: ${bmi}`;
    if(bmi < 18.5){
        results.innerHTML += "<br>You are underweight.";
    }else if(bmi >= 18.5 && bmi < 24.9){
        results.innerHTML += "<br>You have a normal weight.";
    }else {
        results.innerHTML += "<br>You are overweight.";
    }
}

})