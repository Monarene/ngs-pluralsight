const theOneFunc = (n) => {
  console.log(`Hello afer ${n} seconds`);
};

// Hello after 4 seconds
setTimeout(theOneFunc, 4 * 1000, 4);

// Hello after 8 seconds
setTimeout(theOneFunc, 8 * 1000, 8);

// You can define only ONE function
