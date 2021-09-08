test1 = 'abasssdfsssd';
test = ''
test3 = 'z'


function mostPopulr(str) {
  if (str.length == 0) return ''; // that it is not an empty string

  const letters = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in letters) {
      letters[`${str[i]}`] += 1
    } else {
      letters[`${str[i]}`] = 1;
    }
  }
  console.log(letters)

  let result = Object.keys(letters).reduce((a,b) => letters[a] > letters[b] ? a : b);
  console.log("result -> ", result);
  return result;
}

mostPopulr(test1);
// mostPopulr(test3);
