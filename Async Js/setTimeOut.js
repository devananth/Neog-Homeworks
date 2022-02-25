/*
SetTimeOut : 
    It is used to execute a function or few lines of code after the 
    given time expires.

    It accepts 3 args : 
        setTimeout( cbk , delayTimeInMilliseconds , arg1 , arg2 , ... , argn)

    It returns a timerId. 

    TimerId can be used cancel the setTimeout execution using clearTimeout.
*/

/*
write a function which takes a message and time. 
The function should print that message every X interval.
*/

const printMsgAfterDelay = (msg, delay) =>
  setTimeout(() => console.log(msg), delay);

printMsgAfterDelay("This is printed after 2 seconds !!", 2000);
