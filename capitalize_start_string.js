let sample_string_1 = "this is a string";
let sample_string_2 = "front end development";
let sample_string_3 = "javascript";

function capitalize(str) {

    // convert to array
    let string_to_array = str.split("");

    // capitalize the first letter
    string_to_array[0] = string_to_array[0].toUpperCase();

    // convert back to string
    let capitalized_string = string_to_array.join("");

    return capitalized_string;
}

console.log(capitalize(sample_string_1));   // This is a string
console.log(capitalize(sample_string_2));   // Front end development
console.log(capitalize(sample_string_3));   // Javascript