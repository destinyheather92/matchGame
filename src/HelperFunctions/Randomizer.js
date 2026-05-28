import cardData from "../data/cards";
import lodash from "../../node_modules/lodash/cloneDeep";
//Im importing the clone deep function from the lodash dependency in the node modules, which is making a deep copy of the cardData. Therefore, whatever is generated out of the randomizer function, will not directly affect the original object. Each time the randomizer function is called, it generates a deep copy of the card data and then Im working off that deep copy.

//The significance of a deep copy is that it creates a completely independent version of an object — including all nested objects and arrays inside it.
//Even though it looks like copy is separate, both variables point to the same object in memory. Changing one changes the other.

const randomizer = (num) => {
  let deepCopy = lodash(cardData);
  let selectedNums = [];
  const randomPickedCards = [];

  while (randomPickedCards.length < num) {
    let randomNum = Math.floor(Math.random() * 52);
    if (!selectedNums.includes(randomNum)) {
      selectedNums.push(randomNum);
      randomPickedCards.push(deepCopy[randomNum]);
    }
  }
  // console.log(randomPickedCards)
  return randomPickedCards;
};

export default randomizer;


//randomizer functionality: First im making a deep copy of the card data, then I'm creating an array of selectedNums, which just holds unique random numbers and then Im creating an array of random Picked cards which is using the unique random number as an index value for the deep Copy array. 
//I intialized a while loop that will run until the length of the random picked cards is set to a specific number. I also intialized a variable called random number which will generate a random number at each iteration of the while loop
//If the erandomNum is not included in the selectedNums array, then I want to push that number into the selected nums array and then I want to use that same randomNum as an index value for the deepCopy of my card data and push that object of data into the randomPickedCards array.
//finally, return the RandomPickedCards. 
