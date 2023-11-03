let x = 15;
let sqrt_found = false;
let approx_guess = 0;

if (x < 0) {
    console.log('Negative numbers don\'t have a square root in the real numbers.');
}
else {
    for (let i = 0; i <= x; i++) {
        if (i * i === x) {
            console.log(`The square root of ${x} is ${i}`);
            sqrt_found = true;
            break;
        }
        else if (i * i > x){
            // Take the average of `x / i` and `i - 1`
            approx_guess = ((x / i) + (i - 1)) / 2;
            console.log(`The square root of ${x} is approximately ${approx_guess}`);
            sqrt_found = true;
            break;
        }  
    }

    if (!sqrt_found) {
        // In case x is 1 or 0, handle output here
        console.log(`The square root of ${x} is approximately ${Math.sqrt(x)}`);
    }
}
