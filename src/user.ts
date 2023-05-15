import { getFromDb } from './get-from-db';

export function getUsers() {
  const users = getFromDb('users');

  return users;
}

export function getActiveUsers() {
  return {
    active: getUsers().data.filter((user) => user.active),
  };
}

export function getInactiveUsers() {
  return {
    inactive: getUsers().data.filter((user) => !user.active),
  };
}

export function getUsersByGender() {
  return {
    gender: getUsers().data.filter((user) => user.gender),
  };
}
