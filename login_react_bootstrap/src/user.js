const user = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
  state: "",
  city: "",
  address: "",
};

console.log(user);

const object = { ...user, firstName: "onkar" };
console.log(object);
