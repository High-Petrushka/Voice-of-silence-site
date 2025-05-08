import { ref, watch } from "vue";

// Contains the list of all signed in users
const userList = ref([]);

// Will contain the ID of currently chosen user
const activeUser = ref(null);

/*
const userEntiy = {
  id: Int,
  email: Str,
  pass: Str,
  firstName: Str,
  lastName: Str,
  cart: Obj,
  order: Obj,
}
*/

const emailPattern = /[\w\-\.]+@([\w-]+\.)+[\w-]{2,5}/;
const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
const namePattern = /^[A-Za-z]+$/;

// Trying to get an existing list of users, else creating a new DB instance
try {
  if (localStorage.getItem("users") === null) {
    userList.value = [];
  } else {
    userList.value = JSON.parse(localStorage.getItem("users"));
  }
} catch (error) {
  userList.value = [];
}

// Traking changes in userList and syncronise them with localStorage
watch(userList, (newValue) => {
  localStorage.setItem("users", JSON.stringify(newValue));
},
  { deep: true });

watch(activeUser, (userToSet) => {
  localStorage.setItem("curUser", JSON.stringify(userToSet));
},
  { deep: true });

// Compares the data entered by the user with the info from userList
function compareUser(email, pass) {

  for (let i = 0; i < userList.value.length; i++) {
    if (userList.value[i].email == email) {
      if (userList.value[i].pass == pass) {
        return { state: "OK", userId: userList.value[i].id };
      } else {
        return { state: "LoginError", userId: null };
      }
    }
  }

  return { state: "LoginError", userId: null };
}

function checkEmail(email) {
  if (email == "") {
    return "EmptyError";
  } else {
    if (!emailPattern.test(email)) {
      return "PatternError";
    } else {
      return "OK";
    }
  }
}

function checkPass(password) {
  if (password == "") {
    return "EmptyError";
  } else {
    if (password.length < 4) {
      return "LengthError";
    } else {
      if (!passPattern.test(password)) {
        return "PatternError";
      } else {
        return "OK";
      }
    }
  }
}

function checkName(text) {
  if (text == "") {
    return "EmptyError";
  } else {
    if (!namePattern.test(text)) {
      return "PatternError";
    } else {
      return "OK";
    }
  }
}

function addUser(usrEmail, usrPass, firstName, lastName) {
  let userId;

  if (userList.value.length == 0) {
    userId = 0;
  } else {
    userId = userList.value[userList.value.length - 1].id + 1;
  }

  userList.value.push({
    id: userId,
    email: usrEmail,
    pass: usrPass,
    firstName: firstName,
    lastName: lastName,

  });
}

function findUserIndex(userId) {
  for (let i = 0; i < userList.value; i++) {
    if (userList.value[i].id == userId) {
      return i;
    }
  }

  return null;
}

function setUser(userId) {
  activeUser.value = userId;
}

function getActUser() {
  return activeUser.value;
}

function getUser(userId) {
  const index = findUserIndex(userId);

  if (index !== null) {
    return JSON.parse(localStorage.users)
  } else {
    return "No such user!"
  }
}

export default function useUsers() {
  return { userList, compareUser, addUser, checkEmail, checkPass, checkName, setUser, getUser, getActUser };
}
