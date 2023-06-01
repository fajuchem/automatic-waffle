import { getFromDb } from './get-from-db';

export function getUsers() {
  const users = getFromDb('users');

  return users;
}

export function getActiveUsers() {
  Filter();
  Mapping();
  ForEach();

  return {
    active: getUsers().data.filter((user) => user.active),
  };
}

export function getInactiveUsers() {
  const users = getUsers();
  return {
    inactive: users.data.filter((user) => !user.active),
  };
}

export function getUsersByGender() {
  return {
    gender: getUsers().data.filter((user) => user.gender),
  };
}

function Filter() {
  console.log('filter');
}

function Mapping() {
  ForEach();
  console.log('filter');
}

function ForEach() {
  console.log('filter');
}
