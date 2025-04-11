const sum = (...args) => {
    return args.reduce((acc, val) => acc + val, 0);
  };
  
  //average, counst it (division by leght.)
  const average = (...args) => {
    if (args.length === 0) { //null check
      return null; 
    }
    const total = sum(...args);
    return total / args.length;
  };
  console.log(average(0)); // 0
  console.log(average(0, 10)); // 5
  console.log(average(-3, 4, 2, 10)); // 3.25
  console.log(average()); // null

const difference = (a, b) => {
  return a - b;
}


//========================================================

const aaaa = (1,2,3,5,143);


const multiplyS = (math.multiply(aaaa));

console.log(multiplyS);




