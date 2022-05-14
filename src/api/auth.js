import defaultUser from '../utils/default-user';
import { allUsers } from '../default-data/default-user';

export async function signIn(email, password) {
  const user = allUsers.find((obj)=> obj.login === email)

  try {
    // Send request
    if (!(user.password === password)) {
      throw new Error('Неправильный логин/пароль');
    }

    return {
      isOk: true,
      data: user
    };
  }
  catch {
    return {
      isOk: false,
      message: "Authentication failed"
    };
  }
}

export async function getUser() {
  try {
    // Send request

    return {
      isOk: true,
      data: defaultUser
    };
  }
  catch {
    return {
      isOk: false
    };
  }
}

export async function createAccount(email, password) {
  try {
    // Send request
    const newUser = {
      id: allUsers.length + 1,
      login: email,
      password: password,
      firstName: '',
      lastName: '',
      picture: '/images/internet-warrior.png',
      notes: '',
    }

    allUsers.push(newUser);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to create account"
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to change password"
    }
  }
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to reset password"
    };
  }
}
