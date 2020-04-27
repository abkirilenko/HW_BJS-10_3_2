function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
  }
  
  function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }
  
  compareArrays = (arr1, arr2) => {return arr1.every((number, index) => number === arr2[index])};
  
  function memorize(fn, limit) {
    const memory = [];
    return function (...args) {
      let searchObj = memory.find(obj => compareArrays(obj.args, args));
      if (searchObj) return searchObj.result;
      if (memory.length === limit) memory.shift();
      let resultFn = fn(...args);
      memory.push({args: args, result: resultFn});
      return resultFn;
    }
  }
  
  const arr = [ [1,2,3,234,65,2], [1,2,454.4,3425], [1,2,3], [1,2,3], [9,5,2,4], [1,2,3], [1,2,3,234,65,2] ];
  
  function testCase(testFunction, str) {
    console.time(str)
    let k = 0;
    while (k < 10) {
      arr.forEach(function(item){testFunction(...item)});
      k++;
    }
    console.timeEnd(str)
  }