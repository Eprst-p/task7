import { getRandomElement } from "../fixtures/utils";
import { usersInJson } from "../fixtures/users";
import { userDataType } from "../types/user-data";

export const allUsers = JSON.parse(usersInJson);

export const defaultUser:userDataType | {} = getRandomElement(allUsers);