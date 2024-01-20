const arr = [1, 2, 3, 4, 5, 6];

function transform(arr) {
  if (arr % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const ans = arr.filter(transform);

console.log(ans);
