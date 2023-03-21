const register = (req, resp) => {
  resp.send("register user");
};
const login = (req, resp) => {
  resp.send("Login user");
};
const updateUser = (req, resp) => {
  resp.send("updateUser ");
};

export { register, login, updateUser };
