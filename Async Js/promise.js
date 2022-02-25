function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
}

// success
fakeFetch("I am web developer !")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Error
fakeFetch("I am web developer !", true)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//chaining promises
const getServerResponseLength = (msg) => fakeFetch(msg);

getServerResponseLength("Devananth").then((response) =>
  console.log(`${response}\n Length of response ${response.length}.`)
);

//Two async calls one after another
const syncCallsToServer = (msg1, msg2) => {
  fakeFetch(msg1)
    .then((dataOfMsg1) => fakeFetch(dataOfMsg1 + msg2))
    .then((msgs) => console.log(msgs))
    .catch((error) => console.log(error));
};

syncCallsToServer("MSG1", "MSG2");

/* Async / Await */

// const response = await fakeFetch("data");
// console.log(response);

//Parallel Async Calls
const syncCallsToServer = async (msg1, msg2) => {
  const start = new Date().getTime();

  const promise1 = fakeFetch(msg1);

  const promise2 = fakeFetch(msg2);

  const dataOfMsg1 = await promise1;

  const dataOfMsg2 = await promise2;

  const end = new Date().getTime();

  console.log("Execution Time : ", end - start, dataOfMsg1, dataOfMsg2);
};

syncCallsToServer("msg1", "msg2");
