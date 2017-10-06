/*
Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

*/

function truthCheck(collection, pre) {
  var result = collection.map((value) => {
    if (value.hasOwnProperty(pre)) {
      if (typeof value[pre] === "boolean") return true;
      if ((typeof value[pre] === "string") && value[pre] !== "") return true;
    }
    return false;
  });

  return result.find((anyValue) => anyValue === false) !== false;
}

console.log("true: " + truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")); // should return true.

  console.log("false: " + truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")); // should return false.

  console.log("false: " + truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")); // should return false.

  console.log("false: " + truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")); // should return false

  console.log("true: " + truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")); // should return true

  console.log("true: " + truthCheck([{"single": "yes"}], "single")); // should return true

  console.log("false: " + truthCheck([{"single": ""}, {"single": "double"}], "single")); // should return false

  console.log("false: " + truthCheck([{"single": "double"}, {"single": undefined}], "single")); // should return false

  console.log("false: " + truthCheck([{"single": "double"}, {"single": NaN}], "single")); // should return false