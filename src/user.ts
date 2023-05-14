import { getFromDb } from './get-from-db';

export function getUsers() {
  const users = getFromDb();

  return {
    users,
    active: getActiveUsers(),
    inactive: getInactiveUsers(),
    gender: getUsersByGender(),
  };
}

export function getActiveUsers() {
  return 100;
}

export function getInactiveUsers() {
  return 300;
}

export function getUsersByGender() {
  return 200;
}
