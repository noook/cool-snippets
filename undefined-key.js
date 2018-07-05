/**
 * Iterating in a collection of objects that may not contain
 * a key, and prevent the script from crashing
 */

const collection = [
  {
    id: 1,
    name: "John Doe",
    age: 42,
    options: {
      height: 180
    }
  },
  {
    id: 2,
    name: "Mary Jane",
    age: 26,
  },
  {
    id: 3,
    name: "Sam Tok",
    age: 42,
    options: {
      height: 176
    }
  },
];

for (let i in collection) {
  // Causes a crash with error : Can't read property 'height' of undefined
  // console.log(collection[i].options.height);
  console.log((collection[i].options || {}).height || "Not defined");
  /**
   * Ouputs: 
   * 180
   * Not defined
   * 176
   */
}