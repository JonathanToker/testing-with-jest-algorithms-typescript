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
