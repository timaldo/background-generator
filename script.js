/* import { jump } from './jump.js'; console.log(jump(2));
import fight from './fight.js';
console.log(fight('ron', 'Tim'));
console.log(fight('Rodger', 'rabbit'));

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('my');
newArray.push('name');
newArray.push('is');
console.log(newArray);
// newArray.pop();
newArray.delete(1);
console.log(newArray); */

/*
====================
        currying
====================
*/
const curriedMultiply = (a) => (b) => a * b;

const multiplyBy4 = curriedMultiply(4);

multiplyBy4(5);


/*
====================
        compose
====================
*/

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 2;

console.log(compose(sum, sum)(7));

const array = [2, 4, 8, 16];

const mapArray = array.map((num) => {
    return num * 2;
})

console.log(`map ${mapArray[3]} x ${mapArray[1]} =  ${(mapArray[3] * mapArray[1])}`);

