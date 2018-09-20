const sleep = timeout => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, timeout);
});

// ES7 Async/Await notation
const flow = async () => {
  await timeout(500);
  console.log('Hello world'); // Will be displayed after 500ms
};

const anotherFlow = () => {
  timeout(500)
    .then(() => {
      console.log('Hello world'); // Will also be displayed after 500ms
    });
};