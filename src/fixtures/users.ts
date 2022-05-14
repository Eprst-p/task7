import { userDataType } from "../types/user-data";

const allUsers: userDataType[] = [
  {
    id: 1,
    login: 'admin@example.com',
    password: 'admin',
    firstName: 'Васян',
    lastName: 'Петросян',
    picture: '/images/internet-warrior.png',
    notes: 'Интернет войен',
  },
  {
    id: 2,
    login: 'sanya@example.com',
    password: 'sanya',
    firstName: 'Саша Саня',
    lastName: 'Александр',
    picture: '/images/internet-warrior.png',
    notes: 'Невидимый боец',
  },
  {
    id: 3,
    login: 'user@example.com',
    password: 'user',
    firstName: 'Гендальф',
    lastName: 'Белый',
    picture: '/images/internet-warrior.png',
    notes: '999 lvl',
  },
  {
    id: 4,
    login: 'pen@example.com',
    password: 'pen',
    firstName: 'Пень',
    lastName: 'С Глазами',
    picture: '/images/internet-warrior.png',
    notes: 'Сядь на пенек, съешь пирожок',
  },
]

const usersInJson = JSON.stringify(allUsers);

export {usersInJson}
