export const removeOddsFromArray = (numArr: number[]) => {
  const filteredArr = numArr.filter((element) => {
    //return true or false whether we want to include that or not
    if (element % 2 === 1) return false;
    return true;
  });
  return filteredArr;
};

const numArrayNoOdds = removeOddsFromArray([]);
console.log(numArrayNoOdds);
console.log(numArrayNoOdds.length);
