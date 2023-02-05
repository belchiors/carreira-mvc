function isAuthenticated() {
  return localStorage.getItem("token") != null;
}

function getCurrentUser() {
  const data = localStorage.getItem("user");
  return JSON.parse(data);
}

function getToken() {
  return localStorage.getItem("token");
}

function login(data) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
}

function logout() {
  localStorage.clear();
}

export {
    isAuthenticated,
    getCurrentUser,
    getToken,
    login,
    logout
};
