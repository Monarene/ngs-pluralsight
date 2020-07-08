// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
var i = 0;
const five = () => {
  i++;
  if (i === 5) {
    clearInterval(interval);
  }
  console.log("Hello World");
};

var interval = setInterval(five, 1000);
