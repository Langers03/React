import React from 'react';

function VariableDisplay() {
  let stringVar = "Welcome to Midgar";
  let numberVar = 42;
  let booleanVar = true;
  let arrayVar = ["React", "JSX", "Variables"];
  let objectVar = { name: "John", age: 30, role: "Developer" };

  // Add your conditional statement here
  if (Math.random() > 0.5) {
    stringVar = "Welcome to Juno";
    numberVar = 300;
    booleanVar = false;
    arrayVar.push("Hooks");
    objectVar.role = "Senior Developer";
  }

  return (
    <div>
      <h1>{stringVar}</h1>
      <p>Number: {numberVar}</p>
      <p>Boolean: {booleanVar.toString()}</p>
      <p>Array: {arrayVar.join(", ")}</p>
      <p>Object: {objectVar.name}, {objectVar.age}, {objectVar.role}</p>
    </div>
  );
}

export default VariableDisplay;