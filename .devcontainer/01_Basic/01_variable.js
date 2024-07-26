// Define a complex object for logging
const user = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Wonderland"
    },
    interests: ["reading", "coding", "hiking"]
};

// Define some functions to demonstrate different console methods
function performCalculations() {
    console.time("Calculation Time"); // Start timing

    // Simulate a complex calculation
    for (let i = 0; i < 1000000; i++) {
        // Simulated work
    }

    console.timeEnd("Calculation Time"); // End timing
}

function logUserDetails() {
    console.group("User Details");

    console.log("%cUser Information", "color: blue; font-weight: bold; font-size: 16px;");
    console.log("%cName: %c%s", "color: green;", "color: black;", user.name);
    console.log("%cAge: %c%d", "color: green;", "color: black;", user.age);
    console.log("%cAddress: %c%s, %s", "color: green;", "color: black;", user.address.street, user.address.city);
    console.log("%cInterests: %c%s", "color: green;", "color: black;", user.interests.join(', '));
    
    console.groupEnd();
    console.table(user.interests); // Display interests in a table
}

function checkEnvironment() {
    const environment = 'development'; // Set to 'production' to suppress debug logs

    if (environment === 'development') {
        console.log("Debug Mode Enabled");
        console.debug("Debugging information:", { someData: 'example' });
    }
}

// Execute the functions and log various types of information
console.log("Starting the script...");

console.assert(user.age > 18, "Error: User is not an adult.");

console.trace("Trace for debugging");

performCalculations();
logUserDetails();
checkEnvironment();

console.log("%cCustom Message: %cAll operations completed successfully.", "color: green; font-weight: bold;", "color: black;");
