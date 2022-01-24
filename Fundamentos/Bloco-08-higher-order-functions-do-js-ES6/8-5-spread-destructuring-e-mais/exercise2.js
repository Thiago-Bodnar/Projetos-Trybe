const sum = ( ...args ) => {
  return args.reduce((acc, currentValue) =>  acc + currentValue, 0);
};

console.log(sum(1,3,4,5));