function mainFunction() {
	// Call the hoistedFunction here
    myVar();
	// Now, declare the hoistedFunction below
    function myVar() {
        console.log('I am here.');
    }
}

mainFunction();

// myVar is not able to console log because myVar is not defined