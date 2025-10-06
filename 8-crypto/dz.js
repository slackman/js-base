const swap = (chars, i, j) => {
  [chars[i], chars[j]] = [chars[j], chars[i]];
};

function crypto(password) {
  const chars = [...password];
  if (chars.length < 2) return password;

  let left = 0;
  let right = chars.length - 1;
  const mid = Math.floor(chars.length / 2);

  swap(chars, left, mid);
  left++;                

  while (left < right) { 
    swap(chars, left, right);
    left++;
    right--;
  }

  return chars.join('');
}

function check(encrypted, original) {
  return crypto(original) === encrypted;
}

crypto('password');
