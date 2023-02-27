
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let resArr = [[], []];
  for (let name of array) {
    let hasA = false;
    for (let char of name) {
      if (char.toLowerCase() === 'a') {
        hasA = true;
        break;
      }
    }
    const index = hasA ? 0 : 1;
    resArr[index].push(name);
  }
  return resArr;
}

// old code VVV ==========
// export function separateNamesWithAFromRest(array) {
//   let namesWithA = [];
//   let namesWithoutA = [];
//   for (let i = 0; i < array.length; i++) {
//     let currentName = array[i].toLowerCase();
//     let hasA = false;
//     for (let j = 0; j < currentName.length; j++) {
//       if (currentName[j] === 'a') {
//         hasA = true;
//         break;
//       }
//     }
//     if (hasA) {
//       namesWithA.push(array[i]);
//     } else {
//       namesWithoutA.push(array[i]);
//     }
//   }
//   return [namesWithA, namesWithoutA];
// }

//Rejected code VVV ========
// export function separateNamesWithAFromRest(array) {
//   let namesWithA = [];
//   let namesWithoutA = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].toLowerCase().includes("a")) {
//       namesWithA.push(array[i]);
//     } else {
//       namesWithoutA.push(array[i]);
//     }
//   }
//   return [namesWithA, namesWithoutA];
// }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
