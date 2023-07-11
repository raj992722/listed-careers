import { auth } from "../firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

async function createUser(email, password) {
  let user;
  let errorcode;
  let errorMessage;

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      errorcode = error.code;
      errorMessage = error.message;
    });
  return {
    user,
    errorMessage,
    errorcode
  };
}

async function signIn(email, password) {
  let user;
  let errorcode;
  let errorMessage;

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      errorcode = error.code;
      errorMessage = error.message;
    });
  return {
    user,
    errorMessage,
    errorcode
  };
}

function authState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uuid = user.uuid;
    } else {
    }
  });
}

export { signIn, authState, createUser };
