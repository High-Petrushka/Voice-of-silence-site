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

const emailPattern = /[\w\-\.]+@([\w-]+\.)+[\w-]{2,5}/

// Trying to get an existing list of users, else creating a new DB instance
try {
  if (localStorage.getItem("user") === null) {
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

// Compares the data entered by the user with the info from userList
function compareUser(email, pass) {

  for (let i = 0; i < userList.value.length; i++) {
    if (userList.value[i].email == email) {
      if (userList.value[i].pass == pass) {
        return "OK";
      } else {
        return "LoginError";
      }
    }
  }

  return "LoginError";
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
    pass;
  }
}

function checkName(text) {
  if (text == "") {
    return "EmptyError";
  } else {
    pass;
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

export default function useUsers() {
  return { userList, compareUser, addUser, checkEmail, checkPass, checkName };
}
