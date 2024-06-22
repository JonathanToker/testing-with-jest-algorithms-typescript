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

//Time complexity: O(n) and Space Complexity: O(n)
export const twoSum = (nums: number[], target: number) => {
  const complementsMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complementsMap.has(complement) && complement !== nums[i]) {
      return [complementsMap.get(complement), i];
    }
    complementsMap.set(nums[i] + 1, i + 1);
  }
};

//assuming twoSum gets a sorted array in an ascending order
//T: O(n) S: O(1)
export const efficientTwoSum = (numbers: number[], target: number) => {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;
  while (leftIndex < rightIndex) {
    const leftValue = numbers[leftIndex];
    const rightValue = numbers[rightIndex];
    if (leftValue + rightValue === target) {
      return [leftIndex + 1, rightIndex + 1];
    } else if (leftValue + rightValue > target) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
};

//Time complexity: O(n^2) + O(n*lgn) = O(n^2)
//S: O(n) due to the triplets
export const threeSum = (nums: number[]): number[][] => {
  const triplets: number[][] = [];
  nums.sort((a, b) => a - b); //Ascending O(n*lgn)
  //[-1,0,1,2,-1,-4] --> [-4, -1, -1, 0, 1, 2]
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    //skip duplicate
    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;
    //two pointer approach
    while (leftIndex < rightIndex) {
      const sum = nums[i] + nums[leftIndex] + nums[rightIndex];
      if (sum > 0) {
        rightIndex--;
      } else if (sum < 0) {
        leftIndex++;
      } else {
        triplets.push([nums[i], nums[leftIndex], nums[rightIndex]]);
        leftIndex++;
        //the next value can be the same as the one before
        while (
          leftIndex < rightIndex &&
          nums[leftIndex] === nums[leftIndex - 1]
        ) {
          leftIndex++;
        }
      }
    }
  }
  return triplets;
};

export const findingLowerNumberInSet = (num: number) => {
  const nums = new Set();
  for (let i = 0; i < 10; i++) {
    nums.add(i + 1);
  }
  return nums;
};
//leetcode 643
export const findMaxAverage = (nums: number[], k: number) => {
  if (k < 1 || k > nums.length) {
    return 0;
  }
  let maxAvg = 0;
  for (let i = 0; i < k; i++) {
    maxAvg += nums[i];
  }
  maxAvg = maxAvg;
  let i = 0;
  let currentMaxAvg = maxAvg;
  while (i < nums.length - k + 1) {
    currentMaxAvg = currentMaxAvg + nums[i + k] - nums[i];
    if (currentMaxAvg > maxAvg) maxAvg = currentMaxAvg;
    i++;
  }
  return maxAvg / k;
};

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Input: prices = [7,6,4,3,1]
// Output: 0
export const maxProfit = (prices: number[]): number => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const currentVal = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const iterativeValue = prices[j];
      const currentProfit = Math.abs(currentVal - iterativeValue);
      if (currentProfit > maxProfit && iterativeValue > currentVal) {
        maxProfit = currentProfit;
      }
    }
  }
  return maxProfit;
};

export const betterMaxProfit = (prices: number[]): number => {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    const currentProfit = prices[i] - minPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
  }
  return maxProfit;
};
// [1, 2, 3, 4, 5, 6, 7] arr.length = 7, 7 - k + 1 = 3
// k = 3
// [1, 2, 3]

//check for repeats in the row / column - via an insertion inside a set and check each value
// check for the current sub-box if there is a repeat too - also in the
export const isValidSudoku = (board: string[][]): boolean => {
  const rows = board;
  for (let row of rows) {
    const filteredRow = row.filter((num: string) => num !== ".");
    if (new Set(filteredRow).size !== filteredRow.length) return false;
  }
  const subBoxes: { [boxIndex: number]: string[] } = {};
  for (let i = 0; i < 9; i++) {
    let col: string[] = [];
    for (let j = 0; j < 9; j++) {
      const cell = board[j][i];
      if (cell === ".") continue;
      col.push(cell);

      const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      if (!subBoxes[boxIndex]) {
        subBoxes[boxIndex] = [cell];
      } else {
        if (subBoxes[boxIndex].find((num: string) => num === cell))
          return false;
        subBoxes[boxIndex].push(cell);
      }
    }
    if (new Set(col).size !== col.length) return false;
  }
  return true;
};

export const isAnagram = (s: string, t: string) => {
  let remainingLetters = s.split("");
  for (let letter of t) {
    const sIndex = remainingLetters.findIndex((l) => l === letter);
    if (sIndex < 0) {
      return false;
    }
    remainingLetters.splice(sIndex, 1);
  }
  return remainingLetters.length === 0;
};

//time complexity: O(nlgn) space complexity: O(n)
export const isEfficientAnagram = (s: string, t: string): boolean => {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
//Time complexity: O(n)
//Space complexity: O(n)
export const mostEfficientIsAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;
  if (s.length === 0 || t.length === 0) return false;

  const sCharCountMap = new Map<string, number>(); //char: count of the char
  for (let char of s) {
    const charCount = sCharCountMap.get(char);
    const newCharCount = charCount ? charCount + 1 : 1;
    sCharCountMap.set(char, newCharCount);
  }
  for (let char of t) {
    const frequencyOfChar = sCharCountMap.get(char);
    if (!frequencyOfChar) return false;
    else if (frequencyOfChar === 1) {
      sCharCountMap.delete(char);
    } else {
      const newCharCount = frequencyOfChar - 1;
      sCharCountMap.set(char, newCharCount);
    }
  }
  return sCharCountMap.size === 0;
};
