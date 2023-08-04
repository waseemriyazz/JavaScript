function add7 (number) {
    return number + 7;
}
console.log(add7(7));
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
  }
 
  console.log(favoriteAnimal('Goat'));
  function multiply (num1 , num2) {
    return num1*num2;
  }
  console.log(multiply(2,5));


  function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return str; // Return input if not a string or an empty string
    }
  
    const lowerCaseStr = str.toLowerCase(); // Convert the string to lowercase
    const capitalizedStr = lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
  
    return capitalizedStr;
  }
  console.log(capitalize("hello"));     // Output: "Hello"
console.log(capitalize("WORLD"));     // Output: "World"
console.log(capitalize("MiXeD"));     // Output: "Mixed"
console.log(capitalize(""));          // Output: ""
function lastLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return null; // Return null for invalid inputs
    }
  
    return str.charAt(str.length - 1); // Return the last character of the string
  }
  
  // Test cases
  console.log(lastLetter("abcd"));     // Output: "d"
  console.log(lastLetter("hello"));    // Output: "o"
  console.log(lastLetter("WORLD"));    // Output: "D"
  console.log(lastLetter(""));         // Output: null

  
  
 
  