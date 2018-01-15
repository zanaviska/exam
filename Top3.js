'use strict';

const top3 = (array) => {
  const arr = [];

  for (const i = 0; i < 3; i++)
    arr.push(array[i]);
  return arr;
};

module.exports = top3;
