// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

export function getNumbersWithSquareRoots(max)
{

    const numbers_with_square_roots = [];
    let index = 0;

    // Square root
    for (let i = 0; i < max; i++)
    {
        if (Math.sqrt(i) % 1 == 0)
        {            
            numbers_with_square_roots[index] = i;
            index++
        }
    }

    return numbers_with_square_roots;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function