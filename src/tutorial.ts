
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
