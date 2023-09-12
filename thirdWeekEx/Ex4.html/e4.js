// Declare a global variable here
let num1 = 10;

function modifyGlobal() {
    // Try to modify the global variable here
    let num1 = 8;
    console.log(num1);
}

//modifyGlobal();

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
    let num1 = 6;
    console.log(num1);
}

// Call both functions here
modifyGlobal();
localScopeTest();