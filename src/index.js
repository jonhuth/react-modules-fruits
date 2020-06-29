import { choice, remove } from "./helpers.js";
import fruit from "./foods.js";

let randFruit = choice(fruit);
console.log(`I'd like one ${randFruit}, please.`);
console.log(`Here you go: ${randFruit}`);
console.log("Delicious! May I have another?");
remove(fruit, randFruit);
if (fruit.length === 0) {
  console.log("Sorry, we have no fruit left");
} else {
  console.log(`We have ${fruit.length} fruits left`);
}

