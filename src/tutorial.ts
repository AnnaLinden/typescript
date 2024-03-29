
let awesomeName:string = 'shakeAndBake'
awesomeName = "something"
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// awesomeName = 10;

let amount: number = 10;
amount += 10;
console.log (amount);
// amount = 'hello';

let isEqual: boolean = true;
isEqual = false;
// isEqual = "cat";

console.log(isEqual);

// union type
let tax: number | string = 20;
tax = 100;
tax = '10%';

// literal value type
let user: 'admin' | 'teacher' | 'student';
user = 'admin';
// user = 'user';

// any type
let object: any = 10;
object = 'string';
object = true;
object = {};
object = [];

let prices: number[] = [100,11,2];

let vggies: string[] = ["cucumber", "potato", "carrot"];

let array:(string|number) []= [10, "ice cream"];

//exercise
const books = ['1984', 'Why we sleep', 'War and Peace'];
let foundBook: string | undefined;

for (let book of books){
    if (book === 'Why we sleep') {
        foundBook = book;
        foundBook = book.toUpperCase();
        
        break;
    }
}
console.log(foundBook, foundBook?.length);

let temperatures: number[] = [-5, 10,15];
//temperatures.push("zero");
let colors: string[] = ["yellow", "red"];
//colors.push(true);
let mixedArray: (number|string)[] = [5,6,"nine"];
//mixedArray.push(true);

//Object gundamentals
let car: {brand: string; year: number} = {brand: "toyota", year: 2014};
car.brand = "lexus";
// car.color = "red";

let book= {title: 'book', cost: 20};
let pen= {title: 'pen', cost: 3};
let eraser= {title: 'eraser'};
let items: {readonly title: string; cost?: number}[] = [book, pen, eraser]

//items[0].title = 'new book';
book.title = 'new book';

//  object challenge

let bike: { brand: string; year: number} = {brand: 'yamaha', year: 2020};
//bike.year = 'old';

let laptop: { brand: string; year: number} = {brand: 'dell', year: 2022};

let dress = {title: 'deress', price: 200};
let blouse = {title: 'blouse', price: 100};
let clothes: {title: string, price?: number}[]= [dress, blouse];

clothes.push({title: "shoes", price: 400});
// clothes.push({title: "shoes", price: 'expensive'});

// FUNCTIONS
function sayHi(name:string){
    console.log(`Hello ${name.toUpperCase()}`);
};

sayHi('Anna');

function calculateDiscount(price:number): number{ //return value is set after brackets
    
    return price * 0.95;
}

const finalPrice = calculateDiscount(500);
console.log(finalPrice);

//functions challenge

let names: string[] = ['Kille','Gutsy','Rudolf'];

function isName (name:string):boolean {
    return names.includes(name);
}

let nameToCheck: string = 'Fiona';
if (isName(nameToCheck)){
    console.log(`${nameToCheck} is in the FileList.`)
} else {
    console.log(`${nameToCheck} is not in the list.`)
}

// functions: optional and defauls parameters
function calculatePrice(price: number, discount?: number): number{
    return price - (discount||0);
}

let priceAfterDiscount = calculatePrice(100,20);
console.log(priceAfterDiscount);

let priceWithoutDiscount = calculatePrice(100);
console.log(priceWithoutDiscount);

function calculateScore(initialScore: number, penaltyPoints: number=0) {
    return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100,20);
console.log(scoreAfterPenalty);
let scoreWithoutPenalty = calculateScore(400);
console.log(scoreWithoutPenalty);

// function - rest parameter
function sum(message: string, ...numbers: number[]):string{

    let doubled = numbers.map((num)=>num*2);
    let half = numbers.map((number)=>number/2);
    let tripled = numbers.map((number)=>number*3);
    console.log(half, numbers, doubled, tripled );

    let total = numbers.reduce((previous,current)=>{
        return previous+current;
    },0);
    return`${message} ${total}`;
}

let result= sum('The total is: ',1,2,3,4,5);

// functions void return type

function logMessage(message: string): void{
    console.log(message);
}

logMessage('hello there');

//union type as function parameters
function processInput(input: number|string):void{
    if (typeof input === 'number'){
        console.log(input*2);
    }else {
        console.log(input.toUpperCase());
    }

}

processInput(10);
processInput('hello');

// objects as functions parameters

function createEmployee({id}: {id: number}):{id: number; isActive:boolean}{
    return{id, isActive: id% 2 ===0};
}

const first = createEmployee({id:1});
const second = createEmployee({id:2});
console.log(first, second);

function createStudent(student:{id:number; name:string}){
    console.log(`Welcome the the course ${student.name.toUpperCase()}!`);
}

const newStudent = {
    id:5,
    name: 'anna',
    email: 'anna@email.com'
};
createStudent(newStudent);
//createStudent({id:2, name:'aki', email: 'aki@email.com'});

//challenge
function processData(input: number|string, config:{reverse:boolean} = {reverse: false}){
    if (typeof input === 'number' ) {
        return input*input;
    } else{
        return config.reverse? input.toUpperCase().split('').reverse().join('')
        :input.toUpperCase();
    }

}

console.log(processData(10));
console.log(processData('Hello'));
console.log(processData('Hello', {reverse:true}));

//type alias

type User = { id: number; name: string; isActive: boolean};

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
  };
  const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
  };
  
  function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
    return user;
  }

  type StringOrNumber = string |number; 

  let value: StringOrNumber;
  value ='hello';
  value = 123;

  type Theme = 'light' | 'dark';

  let theme: Theme;
  theme = 'light';
  theme = 'dark';

  function setTheme(t:Theme){
    theme = t;
  }

  setTheme('dark');

  // challenge

  type Employee = {id: number; name: string; department: string};
  type Manager = {id: number; name: string; employees: Employee[]};
  type Staff = Employee | Manager;

  function printStaffDetails(staff: Staff):void{
    if ('employees' in staff){
        console.log(`${staff.name} is a Manager and has ${staff.employees.length} employees.`);
    } else {
        console.log(`${staff.name} is an employee of ${staff.department} department.`);
    }
  }

  const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
  const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
  const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

  printStaffDetails(alice); 
  printStaffDetails(bob);

  // Intersection Types
  type Book = { id: number; name: string; price: number};
  type DiscountedBook = Book & {discount: number};

  const book1: Book = {
    id: 1,
    name: 'unicorns',
    price: 10
  }

  const book2: Book = {
    id: 2,
    name: 'marshamellows',
    price: 15
  }

  const discountedBook: DiscountedBook = {
    id: 3,
    name: 'pink clouds',
    price: 20,
    discount: 0.1
  }

  // interface
  interface Kirja {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    printAuthor(): void;
    printTitle(message: string): string;
    printSomething: (someValue: number) => number;
  }

  const deepWork: Kirja = {
    isbn: 9781455586691,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
    printAuthor(){
        console.log(this.author);
    },
    printTitle(message) {
        return `${this.title} ${message}`;
    },
    //first option
    // printSomething: function (someValue){
    //     return someValue;
    // }
    // second option
    // printSomething: (someValue)=>{
    //     // in arrow function this is global, not local!
    //     console.log(deepWork.author);
    //     return someValue;
    // }
    //third option
    printSomething (someValue) {
        return someValue;
    }
    
  }

  deepWork.printAuthor();
  const resultKirja = deepWork.printTitle('is an awesome book');
  console.log(resultKirja);

  console.log(deepWork.printSomething(37));

  //challenge
  interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    storage?: number;
    upgradeRam(params:number):number;
  }

  const laptop1: Computer = {
    id: 1,
    brand: 'Dell',
    ram: 8,
    upgradeRam(params: number){
        this.ram += params;
        return this.ram;
    }
  };

  laptop1.storage = 256;

  console.log(laptop1.upgradeRam(4));
  console.log(laptop1);


  // interface - merge, extend
  interface Person {
    name: string;
    getDetails(): string;
  }

  interface DogOwner {
    dogName: string;
    getDogDetails(): string;
  }

  // merging the interface
  interface Person {
    age: number;
  }

  const person: Person = {
    name: "John",
    age: 30,
    getDetails() {
        return `Name: ${this.name}, age: ${this.age}`;
    },
  }
// extending the interface

interface Employee1 extends  Person {
    employeeId: number;
}

const employee: Employee1 = {
    name: 'Jane',
    age: 37,
    employeeId: 4,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Employee Id: ${this.employeeId}`
    },
};
console.log (person, employee);

interface Manager1 extends Person, DogOwner {
    managePeople(): void;

}

const manager: Manager1 = {
    name: 'Bob',
    age: 35,
    dogName: 'Rex',
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
    getDogDetails() {
        return `Dog Name: ${this.dogName}`;
    },
    managePeople() {
        console.log('Managing people...');
    },
};

console.log(manager);

//Challenge
interface Person2{
    name: string;
}

interface DogOwner1 extends Person2 {
    dogName: string;
}

interface Manager2 extends Person2 {
    managePeople(): void;
    delegateTasks(): void;
}

const employee2: Person2 |DogOwner1 |Manager2 = getEmployee();
console.log (employee2);

function getEmployee(): Person2 | DogOwner1 | Manager2 {
    const random = Math.random();
    if (random < 0.33) {
        return{
            name:'Jack',
        };
    } else if (random < 0.66) {
        return {
            name: 'sarah',
            dogName: 'Rex',
        };
    } else {
        return {
            name: 'Lana',
            managePeople: ()=> console.log('Managing people...'),
            delegateTasks: ()=> console.log ('Delegating tasks ...'),
        };
    }
}

// function isManager(obj: Person2 |DogOwner1 |Manager2): boolean {
//     return 'managePeople' in obj;
// }

function isManager(obj: Person2 |DogOwner1 |Manager2): obj is Manager2 {
    return 'managePeople' in obj;
}

if (isManager(employee2)){
    employee2.delegateTasks();
}

// tuples - it's an array with fixed length and ordered with fixed types.
let person3: [string, number] = ['john', 117];
console.log(person3[0]);
console.log(person3[1]);

function getPerson(): [string, number] {
    return ['john', 117];
} 

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let kai: readonly [string, number] = ['kai' , 25];
// kai[0] = 'bob';
console.log(kai);

// enums
enum ServerResponseStatus {
    Success = 'Success',
    Error = 'Error',
}

Object.values(ServerResponseStatus).forEach((value)=>{
    console.log(value);
    
}
)


// enum ServerResponseStatus {
//     Success = 200,
//     Error = 500,
// }

// Object.values(ServerResponseStatus).forEach((value)=>{
//     if (typeof value === 'number') {
//         console.log(value);
        
//     }
    
// })

interface ServerResponse {
    result: ServerResponseStatus;
    data: string[];
}

function getServerResponse(): ServerResponse {
    return{
        result: ServerResponseStatus.Success,
        data: ['furst item', 'second item'],
    };
}

const response: ServerResponse = getServerResponse();
console.log(response);

// enum challenge
enum UserRole {
    Admin,
    Manager,
    Employee,
}

// Define a type alias named User
type User3 = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string]
};

function createUser1 (user: User3){
    return user
}

const user3: User3 = createUser1({
    id: 5,
    name: 'Jane',
    role: UserRole.Admin,
    contact: ['mail', '123-45-67']
});
console.log(user3);

//type assertion
// Type assertion in TypeScript is a way to tell the compiler what the type 
// of an existing variable is. This is especially useful when you know more 
// about the type of a variable than TypeScript does.

let someValue: any = 'This is a string';

let strLength: number = (someValue as string).length;

type Bird =  {
    name: string;
};

let birdString =  '{"name": "Eagle"}';

let birdObject = JSON.parse(birdString);

let bird = birdObject as Bird;
console.log(bird.name);

enum Status {
    Pending = 'pending',
    Declined = 'declined',
}

type User2 = {
    name: string;
    status: Status;
}

const statusValue = 'pending';

const user2: User2 = { name: 'john', status: statusValue as Status };

//type unknown
let unknownValue: unknown;

//assign different values to unknownValue
unknownValue = 10.536;
unknownValue = 'Hello';
unknownValue = [1,2,3,4,5];
unknownValue = 10.536;

//unknownValue.toFixed();
if (typeof unknownValue === 'number'){
    console.log(unknownValue.toFixed(2));
}

function runSomeCode() {
    const random = Math.random();
    if (random < 0.5) {
        throw new Error ('Something went wrong');
    } else {
        throw 'some error';
    }
}

try {
    runSomeCode();
} catch (error){
    if (error instanceof Error){
        console.log(error.message);
    } else {
        console.log (error);
        console.log('there was an error ...')
    }
}

// type never
//let someValue1: never = 0


type Theme1 = 'light'|'dark'

function checkTheme(theme: Theme1){
    if (theme === 'light'){
        console.log('lighe theme');
        return;
    } 
    if (theme === 'dark'){
        console.log('dark theme');  
        return;
    }
    theme;
}

enum Color {
    Red,
    Blue,
    // Green,
}

function getColor (color: Color) {
    switch(color) {
        case Color.Red:
            return 'Red';
        case Color.Blue:
            return 'Blue';
        default:
            // at built time
            let unexpectedColor: never = color;
            throw new Error (`Unexpected color value: ${unexpectedColor}`);
    }
}

console.log(getColor(Color.Red));
console.log(getColor(Color.Blue));
//console.log(getColor(Color.Green));



