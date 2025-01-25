// Task 1: Implement a conditional statement to check if a user is logged in
let loggedIn = true;

let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];

if (loggedIn) {

// Task 2: If they are logged in, loop over the 'cart' array below and log the list of available products to the user
    console.log("Avaliable Products:");
    for (let i = 0; i < cart.length; i++) {
        console.log(`- ${cart[i]}`)
    }
} else {
    console.log("You need to log in before viewing available products.");
}