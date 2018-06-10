/**
 * How to iterate through an object containing only functions ?
 */

var obj = {
    say: param => {
        console.log(`Do something with ${param}`)
    },
    hi: param => {
        console.log(`Do something else with ${param}`)
    }
}

for (method in obj) {
    /* method('snek'); => 'method' is not a function */
    obj[method]('snek'); // This is the syntax
}