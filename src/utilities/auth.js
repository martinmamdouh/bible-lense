const TOKEN_NAME = "business_online_token";
function getToken() {
  return window.sessionStorage.getItem(TOKEN_NAME)

}

function setToken(token) {
  if (!token) return;
  window.sessionStorage.setItem(
    TOKEN_NAME,
    token
  );
  let splitted = token.split('.');
  let obj2 = JSON.parse(atob(splitted[1]));
  localStorage.setItem("user_id", obj2.sub);
  window.user_id = obj2.sub;
}

function removeToken() {
  window.sessionStorage.removeItem(TOKEN_NAME);
  window.user_id = '';
}

function isAuthenticated() {
  if ([null, undefined, "", " "].includes(getToken())) {
    return false;
  }
  return true;
}

export {
  getToken,
  setToken,
  removeToken,
  isAuthenticated,
};