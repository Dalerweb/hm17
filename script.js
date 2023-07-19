function maxName(name1, name2, name3) {
    let names = [name1, name2, name3];
    let longestName = names.reduce((a, b) => a.length > b.length ? a : b);
    return longestName;
  }
  let result = maxName('Alex', 'George', 'Michael');
  console.log(result);




//   Task 2  не смог 
  function findMin(...args) {
    let min = ;
  
    for (let i = 0; i < args.length; i++) {
      const current = args[i];