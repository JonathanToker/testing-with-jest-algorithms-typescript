//return an array excluding odd numbers
export const removeOddsFromArray = (numArr: number[]) => {
  const filteredArr = numArr.filter((element) => element % 2 === 0);
  return filteredArr;
};
//Return an array of its values plus the value's index
export const arrayPlusIndexValues = (numArray: number[]) => {
  const arrPlusIndexValues = numArray.map((item, index) => item + index);
  return arrPlusIndexValues;
};

// shuffle and array of integers
export const shuffleNumArr = (numArray: number[]) => {
  if (numArray.length <= 1) return numArray;

  //array is at list [x, x]:
  for (let i = 0; i < numArray.length; i++) {
    const randomIndex = Math.floor(Math.random() * numArray.length);
    //we got a random index of the array
    let secondIndex;
    if (randomIndex === 0) {
      //if first
      secondIndex = Math.floor(Math.random() * numArray.length - 1 + 1);
    } else if (randomIndex === numArray.length - 1) {
      //if last
      secondIndex = Math.floor(Math.random() * numArray.length - 1);
    } else {
      //if middle
      secondIndex =
        Math.random() > 0.5
          ? Math.floor(Math.random() * randomIndex)
          : Math.floor(
              Math.random() * (numArray.length - randomIndex) + randomIndex
            );
    }
    const randomIndexValue = numArray[randomIndex];
    numArray[randomIndex] = numArray[secondIndex];
    numArray[secondIndex] = randomIndexValue;
  }
  return numArray;
};

console.log(shuffleNumArr([1, 2, 3, 4, 5]));
