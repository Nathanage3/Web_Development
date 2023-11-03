let x = 17;
let sqrt_found = false;
let approx_guess = 0;

if (x < 0) {
    console.log('Negative numbers don\'t have a square root in the real numbers.');
} else {
    let i = 1; // Start from 1 to avoid dividing by 0
    while (i * i <= x) {
        i++;
    }
    // At this point, i is the smallest integer greater than the square root of x
    let lowerBound = i - 1; // This is the largest integer less than the square root of x
    approx_guess = (lowerBound + x / lowerBound) / 2; // Averaging

    // Now refine the guess using a simple iteration
    let previous_guess;
    do {
        previous_guess = approx_guess;
        approx_guess = (approx_guess + x / approx_guess) / 2;
    } while (Math.abs(previous_guess - approx_guess) > 1e-10); // Until the result is stable within the tolerance

    console.log(`The square root of ${x} is approximately ${approx_guess}`);
    sqrt_found = true;
}

if (!sqrt_found) {
    console.log(`The square root of ${x} cannot be determined.`);
}
