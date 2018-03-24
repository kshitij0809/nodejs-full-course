var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Vikram'
  };

  setTimeout(() => {
    callback(user);
  }, 0.5000);
};

getUser(31, (userObject) => {
  console.log(userObject);
});
