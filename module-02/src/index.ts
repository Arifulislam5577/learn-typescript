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

// ALL ABOUT INTERFACE

/*
interface User2 {
  isAdmin: boolean;
}

interface User extends User2 {
  firstName: string;
  lastName: string;
}

const user: User = {
  firstName: "John",
  isAdmin: false,
  lastName: "John",
};

interface ageArray {
  [index: number]: number;
}

const ages: ageArray = [10, 20, 30];

interface AddNumber {
  (n1: number, n2: number): number;
}

const addNumber: AddNumber = (n1, n2) => {
  return n1 + n2;
};
*/

// ALL ABOUT GENERICS

type GenericArray<T> = Array<T>;

interface User {
  firstName: string;
  lastName: string;
}

const strArr: GenericArray<string> = ["A", "B", "C", "D"];
const numArr: GenericArray<number> = [1, 2, 3, 4, 5];
const boolArr: GenericArray<boolean> = [true, true, false, false, false, false];

const objArr: GenericArray<User> = [
  { firstName: "A", lastName: "B" },
  { firstName: "C", lastName: "D" },
];

type GenericArrayTuple<X, Y, Z> = [X, Y, Z];

const newArr: GenericArrayTuple<number, string, boolean> = [10, "A", true];

interface Student<T> {
  firstName: string;
  lastName: string;
  roll: number;
  address: {
    roadNo: number;
    houseName: string;
  };
  relative: T;
}

interface Relative {
  father: boolean;
  mother: boolean;
  wife: boolean;
}

const student1: Student<Relative> = {
  firstName: "A",
  lastName: "B",
  roll: 1,
  address: {
    houseName: "C",
    roadNo: 2,
  },
  relative: {
    father: true,
    mother: true,
    wife: false,
  },
};

const student2: Student<GenericArray<number>> = {
  firstName: "A1",
  lastName: "B1",
  roll: 2,
  address: {
    houseName: "C1",
    roadNo: 3,
  },
  relative: [10, 20, 30],
};

const createArray = <T>(value: T): T[] => {
  return [value];
};

const res1 = createArray<number>(1);
const res2 = createArray<Relative>({ father: true, mother: true, wife: true });

const createTuple = <X, Y>(value1: X, value2: Y): [X, Y] => {
  return [value1, value2];
};

const res3 = createTuple<number, number>(10, 20);
const res4 = createTuple<{ name: string; lastName: string }, number>(
  {
    name: "A1",
    lastName: "B1",
  },
  10
);

interface Course {
  id: number;
  name: string;
}

const createCourse = <T extends Course>(course: T) => {
  const platForm = "ABC";
  return {
    ...course,
    platForm,
  };
};

const c1 = createCourse({ id: 1, name: "JS" });
