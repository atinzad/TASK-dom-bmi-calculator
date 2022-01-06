function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });
  let BMI = weight/(height*0.01*height*0.01);

  window.alert(`BMI is ${BMI}`);

  //challage 2
  if (BMI < 18.5){
    window.alert(`Underweight`);

  }
  else if( BMI < 24.9){
    window.alert(`Healthy weight`);
  }
else if( BMI < 29.9){
  window.alert(`Overweight`);
}
else{
  window.alert(`Obesity`);
}

let finalBMI = BMI;
if (age >= 19 && age <=24)
{
  finalBMI -=0.5;
}
else if(age >=25 && age <= 34){
  finalBMI -=1.5
}
else if(age >=35 && age <= 44){
  finalBMI -= 2.5;
}
else if(age >=45 && age <= 54){
  finalBMI -= 3.5;
}
else if(age >=55 && age <= 64){
  finalBMI -= 4.5;
}
else if(age>= 65){
  finalBMI -= 5.5;
}

if (finalBMI >=18.5 && finalBMI <=23.5){
  window.alert(`Healthy weight`);
}


}
  // You are going to write the code here before the curly braces 👇🏻





