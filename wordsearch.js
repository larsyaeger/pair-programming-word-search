const transpose = function (matrix) {
  let columnLength = matrix[0].length;
  let rowLength = matrix.length;
  let result = [];

  for (let i = 0; i < columnLength; i++) {
    result.push([]);
  }
  // second loop
  for (let row = 0; row < columnLength; row++) {
    for (let column = 0; column < rowLength; column++) {
      result[row][column] = matrix[column][row];
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const lettersFlipped = transpose(letters);
  const verticalJoin = lettersFlipped.map((ls) => ls.join(""));
  for (let a of verticalJoin) {
    if (a.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;
