
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