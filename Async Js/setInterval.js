/*
SetTimeOut : 
    It is used to execute a function or few lines of code continuously 
    over the given intervals. 
    For eg : if delay is 2sec , it executes the cbkFunc for every 2sec. 

    It accepts 3 args : 
        setInterval( cbk , delayTimeInMilliseconds , arg1 , arg2 , ... , argn)

    It returns a intervalId. 

    TimerId can be used cancel the setInterval execution using clearInterval.
*/

/*
write a function which takes a message and time. 
The function should print that message every X interval.
*/

// const printMsgAfterDelay = (msg, delay) =>
//   setInterval(() => console.log(msg), delay);

// printMsgAfterDelay("This is printed after 1 seconds !!", 1000);

/*
Write a function that takes a number. 
Then print a countdown from that number to 0.At zero print "Bang Bang!"
*/

const printCountDown = (num) => {
  const intervalId = setInterval(
    () => {
      if (num === 0) {
        console.log("Bang ! Bang !!");
        clearInterval(intervalId);
      } else {
        console.log(num--);
      }
    },
    1000,
    num
  );
};

printCountDown(10);
