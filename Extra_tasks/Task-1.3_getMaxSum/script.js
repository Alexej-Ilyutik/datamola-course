function getMaxSum(arr) {
  if (arr.length === 0) {
    return 'Array is empty';
  } else {
    let newArr = [];
    let min = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }

    for (let i = 0; i < arr.length; i++) {
      let max = min;
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (max < sum) {
          max = sum;
        }
      }
      newArr.push(max);
    }

    let result = min;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] > result) {
        result = newArr[i];
      }
    }

    return result;
  }
}

console.log(getMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));