function outer() {
    let myVar1 = "Hello";

    function inner() {
        console.log(`${myVar1}` + " World!");
    }

    inner();
}

outer();

// a function returning another function; the inner fcn has access to the outer fcns' vars