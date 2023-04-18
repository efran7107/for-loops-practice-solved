// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
    let check = 'a';
    let namesWithA = [];
    let others = [];
    let names = [];
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        let tempArr = temp.split('');
        for (let j = 0; j < tempArr.length; j++) {
            let tempLetter = tempArr[j];
            if (tempLetter == check) {
                namesWithA.push(array[i]);
                break;
            } else if (j + 1 == tempArr.length) {
                others.push(array[i]);
            }
        }
    }
    names.push(namesWithA);
    names.push(others);
    return names;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function