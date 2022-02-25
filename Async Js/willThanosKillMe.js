/*
Write a function willThanosKillMe() . 
This function will take three parameters
    Your name
    Function to call if Thanos doesn't kill you.
    Function to call if Thanos does kill you.
*/

const aliveFunc = () => console.log("Yay! I am alive!");

const dieFunc = () =>
  console.log("Give my bose speakers and apple headphones to my brother");

const willThanosKillMe = (name, successCbk, failureCbk) =>
  name.length % 2 !== 0 ? successCbk() : failureCbk();

willThanosKillMe("Devananth", aliveFunc, dieFunc);

willThanosKillMe("Deva", aliveFunc, dieFunc);
