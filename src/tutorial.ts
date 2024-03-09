
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
