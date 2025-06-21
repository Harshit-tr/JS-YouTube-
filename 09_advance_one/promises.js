const promiseOne = new Promise((resolve, reject) => {
  //Do an async task
  //DB calls , cryptography , network
  setTimeout(() => {
    console.log("Async task is complete");
  }, 1000);
  resolve();
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task2");
  }, 1000);
  resolve();
}).then(() => {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "harshit", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: Js went wrong");
    }
  }, 1000);
});

(async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
})();
