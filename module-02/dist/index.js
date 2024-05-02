"use strict";
// ALL ABOUT TYPE
/*
type FirstName = string;

const userName: FirstName = "John";

type AgeArray = number[];

const usersAge: AgeArray = [12, 13, 4, 5, 6];

type Greeting = (name: string) => string;

const greet1: Greeting = (name) => {
  return `Hi Mr. ${name}`;
};

function greet2(name: string): string {
  return `Hi Mr. ${name}`;
}

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

const user: User = {
  firstName: "John",
  lastName: "John",
  age: 12,
};
type User1 = {
  firstName: string;
  lastName: string;
};

type User2 = {
  isAdmin: boolean;
};

type Admin = User1 & User2;

const user: Admin = {
  firstName: "John",
  lastName: "John",
  isAdmin: false,
};
*/
const strArr = ["A", "B", "C", "D"];
const numArr = [1, 2, 3, 4, 5];
const boolArr = [true, true, false, false, false, false];
const objArr = [
    { firstName: "A", lastName: "B" },
    { firstName: "C", lastName: "D" },
];
