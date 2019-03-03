const arr = ['mikl', 'potato', 'bagels', 'cheese'];

let diet = [];

const concat = (n, y = 0) => {
  // diet = [...arr.slice(0, n), ...arr.slice(n + 1)]
  diet = [...arr.slice(y, n)]
  return diet
}

concat(2, 1);

console.log(diet);
