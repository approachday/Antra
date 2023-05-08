//filter
function ownFilter(arr, callback) {
    var filteredArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback.call(undefined, arr[i], i, arr)) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
}

//find
function ownFind(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      if (callback.call(undefined, arr[i], i, arr)) {
        return arr[i];
      }
    }
    return undefined;
}

//concat
function ownConcat(arr1, arr2) {
    var concatenatedArray = [];
    for (var i = 0; i < arr1.length; i++) {
      concatenatedArray.push(arr1[i]);
    }
    for (var j = 0; j < arr2.length; j++) {
      concatenatedArray.push(arr2[j]);
    }
    return concatenatedArray;
}


//push
function myPush(arr, ...args) {
    for (var i = 0; i < args.length; i++) {
      arr[arr.length] = args[i];
    }
    return arr.length;
}

//pop
function ownPop(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    var poppedValue = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return poppedValue;
}

//reverse
function ownReverse(arr) {
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
      var temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

  