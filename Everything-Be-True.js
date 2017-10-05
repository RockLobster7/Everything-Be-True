/*
Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

*/

function truthCheck(collection, pre) {
  var result = "";  
  // Is everyone being true?

// hasOwnProperty === true
// if int > 0
// if its boolean 
// if its not empty or null or NaN or undefined

    // result = collection[0].hasOwnProperty(pre);
var x = false;

//implement filter or reduce or  map 
    collection.forEach(function(e){

      if (e.hasOwnProperty(pre)) {

        // x = (typeof e[pre] === "boolean");
        
      // x = (typeof e[pre] === "number") && e[pre] > 0;

      x = e[pre] === "" || e[pre] === null || isNaN(e[pre]) || e[pre] === undefined;
        
      };

    });

    return x;
  }


  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": undefined}], "sex")); // should return true.

  // console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")); // should return false.

  // console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")); // should return false.

  // console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")); // should return false

  // console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")); // should return true

  // console.log(truthCheck([{"single": "yes"}], "single")); // should return true

  // console.log(truthCheck([{"single": ""}, {"single": "double"}], "single")); // should return false

  // console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single")); // should return false

  // console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single")); // should return false